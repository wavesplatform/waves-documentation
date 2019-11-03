# Exchange transaction binary format

> Learn more about [exchange transaction](/blockchain/transaction-type/exchange-transaction.md)

## Transaction version 2 <a id="transaction2"></a>

Transaction version 2 can accept orders of version [1](/blockchain/binary-format/order-binary-format.md#order1), [2](/blockchain/binary-format/order-binary-format.md#order2) and 3.

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Indicates the [transaction version](/blockchain/transaction/transaction-version.md) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 7 |
| 3 | [Transaction version](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 2 |
| 4.1 | Buy order size |  | [Integer](/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 4.2 | Buy [order version](/blockchain/binary-format/order-binary-format.md) flag | order1.version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | `S` | `S` = 1 if the order version is 1.<br>`S` = 0 if the order version is 2 |
| 4.3 | Order for buying a token | order1 | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | See [order binary format](/blockchain/binary-format/order-binary-format.md) |  |
| 5.1 | Sell order size  |  | [Integer](/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 5.2 | Sell [order version](/blockchain/binary-format/order-binary-format.md) flag | order2.version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | `S` | `S` = 1 if the order version is 1.<br>`S` = 0 if the order version is 2 |
| 5.3 | Order for selling a token | order2 | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | See [order binary format](/blockchain/binary-format/order-binary-format.md) |  |
| 6 | Price | price | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | Amount of [token](/blockchain/token.md) B which order sender offers for one token A |
| 7 | Amount | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | Amount of token A which order sender wants to buy |
| 8 | Buy [matcher fee](/blockchain/matcher-fee.md) | buyMatcherFee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | Sell [matcher fee](/blockchain/matcher-fee.md) | sellMatcherFee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | [Transaction fee](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 11 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 12 | [Transaction proofs](/blockchain/transaction/transaction-proof.md) | proofs | [Proofs](/blockchain/transaction/transaction-proof.md) | `S` | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://nodes.wavesplatform.com/transactions/info/csr25XQHT1c965Fg7cY2vJ7XHYVsudPYrUbdaFqgaqL) in Node API.

## Transaction version 1 <a id="transaction1"></a>

Transaction version 1 can accept orders of version [1](/blockchain/binary-format/order-binary-format.md#order1) only.

| Field order number | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/blockchain/transaction-type.md) | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 6 |
| 2 | Buy order size  | [Integer](/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 3 | Sell order size | [Integer](/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 4 | Order for buying a token | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | See [order binary format](/blockchain/binary-format/order-binary-format.md) |  |
| 5 | Order for selling a token | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | See [order binary format](/blockchain/binary-format/order-binary-format.md) |  |
| 6 | Price | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | Amount of [token](/blockchain/token.md) B which order sender offers for one token A |
| 7 | Amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | Amount of token A which order sender wants to buy |
| 8 | Buy [matcher fee](/blockchain/matcher-fee.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | Sell [matcher fee](/blockchain/matcher-fee.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | [Transaction fee](/blockchain/transaction/transaction-fee.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 11 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 12 | [Transaction signature](/blockchain/transaction/transaction-signature.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 64 |  | |
