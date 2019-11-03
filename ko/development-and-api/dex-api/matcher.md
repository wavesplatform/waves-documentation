## Matcher

The reason behind decentralized exchange \(DEX, aka Matcher\) is to perform secure exchange of assets issued on Waves platform. When a user sends an order to Matcher he doesn't transfer ownership of his money to anyone, his money remains on his account until the order is matched with counter-order. And Matcher guarantees to create `ExchangeTransaction` on the conditions that are not worse than in user's order. After the transaction is confirmed on blockchain user account balances of assets are changed according to amount and order execution price.

## Limit Order

```cpp
POST /matcher/orders/place
```

A user initiates his willingness to buy or sell assets by creating, signing and sending a Limit Order request to the Matcher node. The order should contain the following fields:

**Request params:**

| Field name | Type | Description |
| :--- | :--- | :--- |
| sender | PublicKeyAccount | Public key of order creator related to the address from which to send/receive assets |
| matcher | PublicKeyAccount | Public key of matcher to whom user authorize to match his order |
| spendAssetId | Option\[Array\[Byte\]\] | Asset Id that creator wants to spend after exchange. Empty spendAssetId means **WAVES** |
| receiveAssetId | Option\[Array\[Byte\]\] | Asset Id that creator wants to receive after exchange. Empty receiveAssetId means **WAVES** |
| price | Long | Price for `Asset2` in `Asset1` \* 10^8 |
| amount | Long | Amount in `Asset1` |
| expiration | Long | Max time of open order to live before execution. Currently, max is 1 month |
| matcherFee | Long | Fee which goes to Matcher for order matching \(execution\) |
| signature | Array\[Byte\] | Signature of all order data created by private key of sender |

`spendAssetId` and `receiveAssetId` form `AssetPair = (Asset1, Asset2)` by the following rule:

* the first asset in the pair is an asset with minimal bytes compared byte by byte starting from the first. Empty asset \(
  **WAVES**
  \) is always first in the pair. Thus:

```js
AssetPair(spendAssetId, receiveAssetId) == AssetPair(receiveAssetId, spendAssetId) = (Asset1, Asset2)
```

For each `AssetPair`, there is exactly one `OrderBook`. `AsetPair` exists independently of which asset is 'spend' and which is 'received'. Thus for two different assets one `AssetPair` is created and corresponding Order Book is used for trading that `AssetPair`.

After `AssetPair` is determined, `Order` can be considered of 'BUY' or 'SELL' type with the following rule:

```cpp
val (Asset1, Asset2) = AssetPair(spendAssetId, receiveAssetId)
if (receiveAssetId == Asset1) OrderType.BUY
else if (spendAssetId == Asset1) OrderType.SELL
```

## Order validation rules

When a new `Order` is submitted to the Matcher all its fields are validated:

1. `amount` should be &gt; 0 and &lt; MaxAmount
2. `price` should be &gt; 0 and &lt;MaxAmount
3. `matcherFee` be &gt; 0 and &lt; MaxAmount
4. `maxTimestamp` should be &gt; now and &lt; than 30 days in the future
5. `signature` should be valid with regards to sender's public key

\*`MaxAmount = 10^18`

Additionally, the `Order` is validated based on internal**Matcher**state:

1. `Order` with such `id` should not exist already
2. Sum of all open `Order` amounts for a particular `spendAssetId` should be &lt;= confirmed balance of that `spendAssetId` on sender's account.

## Matching algorithm

### Price calculation

A new submitted `Order` is matched against some `Order` in `OrderBook` if there is such order that its price is **better** or equal to the submitted one.

1. For 'BUY' order **better** means there is a 'SELL' order with price &lt;= submitted
2. For 'SELL' order **better** means there is a 'BUY' order with price &gt;= submitted

Execution price of `ExchangeTransaction` is always determined by the price of an order that was accepted earlier, i.e. an order that is already in `OrderBook`.

### Full execution

1. If for a submitted order there is no counter-order matched by price \(which price _equal or better_\) that order would be put in the corresponding `OrderBook` and remains open until executed or until `maxTimestamp` is reached.
2. If there is a counter-order that matches with a submitted order then \_order execution \_is performed. That means the counter-order is removed from `OrderBook` and `ExchangeTransaction` is created and signed by the Matcher's private key and is sent to the Waves network to be included in the blockchain.
3. If there are multiple orders, that are matched with a new order, the earliest on based on acceptance time gets chosen.

### Partial execution

1. If an amount of a submitted order is a big enough to execute a few orders, Matcher creates several `ExchangeTransaction`. Created transactions have amounts equal to matched counter-order amounts. Matched counter-orders are chosen in order of their acceptance time \(FIFO\).
2. If after the execution of all counter-orders at a particular price there is still remaining amount from the submitted order, the next price level of `OrderBook`, which satisfy the incoming price, is used to execute orders. For all matched counter-orders corresponding `ExchangeTransaction` are created similarly to the previous step.
3. If after all matches found on the previous steps there is still remaining amount from the submitted order and there are no other open orders matched by the price, a new `Order` is put on `OrderBook` with remaining amount out of initial`Order`.
4. If the first matched order in `OrderBook` has an amount greater than the submitted one, `ExchangeTransaction` will be created with amount equals to the incoming order. Partially executed counter-order will be substituted with remaining amount in `OrderBook`.

### Matcher fee calculation

1. `ExchangeTransaction` contains two separate fields for Matcher's fee, which goes from \_BUY \_and \_SELL \_orders.
2. If `Order` is fully executed by some transaction, all `matcherFee` from it is included in that transaction.
3. If `Order` is partially executed by some transaction, `matcherFee`, proportionally to the executed amount, is included in that transaction, i.e. `executedAmount * orderMatcherFee / orderAmount`
4. If partially executed `Order` is fully executed by some transaction, all remaining `matcherFee` \(after previous matches\) is included in that transaction.

## ExchangeTransaction fields

New transaction type for blockchain is created for assets exchange. It contains the following fields:

| Field name | Type | Description |
| :--- | :--- | :--- |
| buyOrder | Order | Initially signed order executed in this transaction that 'BUY' corresponding `AssetPair` |
| sellOrder | Order | Initially signed order executed in this transaction that 'SELL' corresponding `AssetPair` |
| price | Long | Execution price of orders see[algorithm](https://github.com/wavesplatform/Waves/wiki/Matcher#price-calculation). Price is determined for `Asset2` in `Asset1` \* 10^8 |
| amount | Long | Executed amount in `Asset1` that is matched from both orders |
| buyMatcherFee | Long | Amount fee for matching from `buyOrder`. Transferred to Matcher's account balance. |
| sellMatcherFee | Long | Amount fee for matching from `sellOrder`. Transferred to Matcher's account balance. |
| fee | Long | Fee for the transaction to be included in a block by a miner. It is paid from the Matcher's account |
| timestamp | Long | Transaction creation timestamp |
| signature | Array\[Byte\] | Signature of all transaction data created by Matcher's private key |

## ExchangeTransaction validation rules

1. `amount` should be &gt; 0 and &lt; `MaxAmount`
2. `price` should be &gt; 0 and &lt; `MaxAmount`
3. `amount` should be &gt; 0 and &lt; `MaxAmount`
4. `buyMatcherFee` should be &gt; 0 and &lt; `MaxAmount`
5. `sellMatcherFee` should be &gt; 0 and &lt; `MaxAmount`
6. `fee` should be &gt;  MinTransactionFee \(100000 Wavelets\) and &lt; `MaxAmount`
7. `buyOrder` should has `OrderType.BUY`
8. `sellOrder` should has `OrderType.SELL`
9. `buyOrder` should be valid according to Order validation rules and be not expired
10. `sellOrder` should be valid according to Order validation rules and be not expired
11. Both `orders` should have same `Matcher`
12. Both `orders` should have same `AssetPair`
13. `price` should be not worse than prices in `buyOrder` and `sellOrder`
14. `amount` should not exceed amounts in `buyOrder` and `sellOrder`
15. `buyMatcherFee` and `sellMatcherFee` should not exceed `matcherFee` in corresponding orders proportionally to the executed `amount`
16. `signature` should be valid with regards to Matcher's public key.

## Order Book

```cpp
GET /matcher/orderBook/{{asset1}}/{{asset2}}
```

Get Order Book for a given Asset Pair.

**Request params:**

| Field name | Type | Description |
| :--- | :--- | :--- |
| asset1 | Array\[Byte\] Base58-encoded | One of the asset in Asset Pair, or empty if it is WAVES |
| asset2 | Array\[Byte\] Base58-encoded \(_optional_\) | Another asset in Asset Pair, or empty if it is WAVES |
| depth | Int \(_optional_\) | Limit the number of bid/ask levels returned. MaxDepth = 50 |

**Response JSON example:**

```cpp
{
  "timestamp": 1481544101791,
  "pair": {
    "asset1": null,
    "asset2": "FaEwcAJv2HAL25ugSyiNbXvcXJiRo7TofYoxjUokd4wx"
  },
  "bids": [],
  "asks": [
    {
      "price": 200000000,
      "amount": 50000000000
    }
  ]
}
```

**Response fields:**

```
"pair" - Asset Pair
"timestamp" - UNIX timestamp
"bids" - lists of open BUY orders level, each level is represented as a list of price and sum of all order amounts at the particular level
"asks" - lists of open SELL orders level
```

## Order Status

```cpp
GET /matcher/orders/status/{id}
```

Get Order status for a given Asset Pair. Status is returned for orders submitted not earlier than 30 days ago. For earlier orders, NOT\_FOUND will be returned.

**Request params:**

| Field name | Type | Description |
| :--- | :--- | :--- |
| id | Array\[Byte\] Base58-encoded | Order Id to get status of |
| asset1 | Array\[Byte\] Base58-encoded | One of the asset in Asset Pair that is not WAVES |
| asset2 | Array\[Byte\] Base58-encoded \(_optional_\) | Another asset in Asset Pair or empty if it is WAVES |

Possible statuses:

| Order Status | Description |
| :--- | :--- |
| Accepted | Order is accepted but is not filled yet |
| NotFound | Order with the given id and asset pair is not found for the last 30 days |
| PartiallyFilled | Order is partially filled. Already filled amount is provided in `filledAmount` field |
| Filled | Order is fully filed |
| Cancelled | Order was canceled. Already filled amount is provided in `filledAmount` field |

**Response JSON example:**

```cpp
{
  "status": "PartiallyFilled",
  "filledAmount": 30000000000
}
```

## Cancel Order

Orders, which are not fully filled, can be canceled by sending CancelOrder command. After an order is canceled it's removed from matcher's order book.

```cpp
POST /matcher/orders/cancel
```

**Request params:**

| Field name | Type | Description |
| :--- | :--- | :--- |
| sender | PublicKeyAccount | Public key of order creator related to the address from which to spend/receive assets |
| spendAssetId | Option\[Array\[Byte\]\] | Asset Id that creator wants to spend after exchange. Empty spendAssetId means **WAVES** |
| receiveAssetId | Option\[Array\[Byte\]\] | Asset Id that creator wants to receive after exchange. Empty receiveAssetId means **WAVES** |
| orderId | Array\[Byte\] | Accepted Order Id that sender wants to cancel. |
| fee | Long | Fee for Asset transaction, min = 100000 \(WAVElets\) |
| timestamp | Long | UNIX timestamp in millisec |
| signature | Array\[Byte\] | Signature of all transaction data |



