# What is a Smart Asset

Any user can not only [create](/waves-client/assets-management/issue-an-asset.md) their own [token](/blockchain/token.md) on the Waves platform but also endow it with certain functionality by attaching a script to it. A token with an attached script is called a [smart asset](/blockchain/token/smart-asset.md), and an attached script is called an [asset script](/ride/script/script-types/asset-script.md). Examples of practical use of smart assets:

- **Freezing**. [Transactions](/blockchain/transaction.md) with a smart asset can be prohibited before (or after) the moment when the [blockchain](/blockchain/blockchain.md) reaches a certain [height](/blockchain/blockchain/blockchain-height.md).
- **Black / white lists**. Transfer of a smart asset can be prohibited to the specified [addresses](/blockchain/account/address.md) or, conversely, allowed only to the specified addresses.
- **Commission**. The creator of the smart asset can set a commission that will be paid to him for each operation with his smart asset.
- **Multi-signature**. A smart asset may require the [signing](/blockchain/transaction/transaction-signature.md) of multiple accounts to complete a transaction.
- **Purchase restriction**. A rule can be established according to which a smart asset can only be purchased for certain tokens. Buying a smart asset for other tokens may be prohibited.
- **Restriction on the matcher**. A rule may be established according to which the purchase and sale transaction of a smart asset can be carried out only by a specific matcher.
- **Gaming**. For a smart asset used as game currency, permission can be set to make transactions only in specified game locations or only between characters with certain properties.

The features of smart assets are not limited to the examples given.

## Creating a Smart Asset

You can attach a script to a token only at the time the token is created. The script can be updated at any time. To create a token, you can use both [Waves IDE](/smart-contracts/tools/waves-ide.md) and libraries ([WavesJ](https://github.com/wavesplatform/WavesJ), [WavesCS](https://github.com/wavesplatform/WavesCS), and others). The asset script must be written in [Ride](/ride/about-ride.md) and attached to the token using the [set asset script transaction](/blockchain/transaction-type/set-asset-script-transaction.md). A commission of 1 [WAVES](/blockchain/token/waves.md) is charged for the execution of an asset script installation transaction.

## Asset Script Structure

### Directive

The directive should be placed at the very beginning of the script. Review the example directive:

```ride
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}
```

The given directive provides the compiler with the following information:

- the script will use the third version of the library of standard functions
- the type of this script is Expression
- the script will be attached to the asset (and not to the account)

The directive is the mandatory part of a smart asset script.

### Validation Function

The validation function verifies that outgoing transactions involving a token meet the specified conditions. If the condition is not met, the transaction will not be sent. Possible results of the validation function are

- `true` (transaction allowed)
- `false` (transaction prohibited)
- error

An asset script may contain several validation functions.

## Smart Asset Scripts Examples

### Token freeze

Token operations will be prohibited until the blockchain height reaches 100500.

```ride
let targetHeight = 100500
height >= targetHeight
```

### Issue of burn-proof token

For the example smart asset, the token burning transactions are prohibited.

```ride
match tx {
  case t : BurnTransaction => false
  case _ => true
}
```

### Commission from each token transfer

The issuer of the token involved in the transaction will receive a commission fee after the successful [transfer transaction](/blockchain/transaction-type/transfer-transaction.md).

```ride
match tx {
  case t : TransferTransaction =>
    t.feeAssetId == base58'oWgJN6YGZFtZrV8BWQ1PGktZikgg7jzGmtm16Ktyvjd'
  case _ => true
}
```

### Non-transferrable token

To make token transfers impossible, false should be returned for the transfer transaction, [mass transfer transaction](/blockchain/transaction-type/mass-transfer-transaction.md) and [exchange transaction](/blockchain/transaction-type/exchange-transaction.md).

```ride
match tx {
  case t : TransferTransaction | MassTransferTransaction | ExchangeTransaction => false
  case _ => true
}
```

### Buying only for BTC

A smart asset with the script below can only be purchased with BTC.

```ride
let BTCId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
match tx {
  case t : ExchangeTransaction =>
    t.sellOrder.assetPair.priceAsset == BTCId || t.sellOrder.assetPair.amountAsset == BTCId
  case _ => true
}
```

### Only a specific matcher is allowed

The script below allows the purchase and sale of a smart asset only on a specific matcher.

```ride
match tx {
  case t : ExchangeTransaction =>
    t.sender == addressFromString("3PJaDyprvekvPXPuAtxrapacuDJopgJRaU3")
  case _ => true
}
```

## Modifying Smart Asset Script

A transaction involving the execution of an asset script has the transaction fee increased by 0.004 WAVES. The fee for its completion is 1 WAVES. Only the account that issued the smart asset can change the script.

## Smart asset fees

The fee for the transaction in which the asset script is executed is increased by 0.004 WAVES. If the account is a [smart account](/blockchain/account/smart-account.md), then the size of the fee is increased by an additional 0.004 WAVES.

Let's review the example. The commission for a transfer transaction is 0.001 WAVES. If a user makes a transfer of a smart asset from a smart account, then the amount of the commission will be 0.001 + 0.004 + 0.004 = 0.009 WAVES.

## Buying and selling smart assets

Smart assets can be bought and sold on [DEX](/waves-dex/about-waves-dex.md). If the smart asset is one of the bought or sold tokens, then the exchange transaction fee is increased by 0.004 WAVES for each participant of the transaction. If both tokens are smart assets, then the amount of the commission is increased by 0.008 WAVES for each participant in the transaction.

Example 1: one of the tokens is a smart asset. The exchange transaction fee is 0.003 WAVES. Each of the participants in the transaction will pay 0.003 + 0.004 = 0.007 WAVES.

Example 2: both tokens are smart assets. Each of the participants in the transaction will pay 0.003 + 0.004 + 0.004 = 0.011 WAVES.