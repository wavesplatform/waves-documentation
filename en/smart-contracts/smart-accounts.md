## Smart Accounts

Basically, the smart account is an account with attached transactions checking **script**. In other words, a **script** which is attached to an account so the account can validate every transaction before confirming it.  
An account can be restricted with any outgoing transaction based on:

* Signatures and other supplied data
* Proofs
* Current blockchain height
* An arbitrary data existing in a blockchain, like data from Oracles, which post the data via `DataTransaction`.

## Set Script to an Account

In order to setup a Smart Account, The account needs to issue [SetScriptTransaction](https://wavesplatform.github.io/waves-transactions/globals.html#setscript) which contains the predicate. Upon success, every outgoing transaction will be validated not by the default mechanism of signature validation, but according to the predicate logic.  
`AccountScript` can be changed or cleared if the script installed allows the new [SetScriptTransaction](https://wavesplatform.github.io/waves-transactions/globals.html#setscript) to process.  
The default account has no script, which is equivalent to this script:

```scala
sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPk)
```

**Note.** [SetScriptTransaction](https://wavesplatform.github.io/waves-transactions/globals.html#setscript) sets the script which verifies all outgoing transactions. The set script can be changed by another [SetScriptTransaction ](https://wavesplatform.github.io/waves-transactions/globals.html#setscript)call unless it’s prohibited by a previous set script.

## Script Costs

We conducted performance tests for all aspects of our scripts. For this purpose, we developed a benchmark subproject with [JMH](http://openjdk.java.net/projects/code-tools/jmh/), that **computes a complexity of scripts** after compilation phase by AST \(Abstract Syntax Tree\) traversal in special _complexity units_. _Complexity units_ is a measure of the script's relative cost: we found out the most expensive operation in terms of computational complexity and defined it equal to **100 complexity units**. The most expensive functions:

* `fromBase58String` / `toBase58String`
* `sigVerify`

**In every test**, we conducted 10 tests and calculated the average cost.

As a result, We define the following constraint for a _**script cost**_:

* A script must have a size _**no more than 8 kB**_.
* The fixed cost for each scripted unit is equal to **400000 **_**wavelets**_ \(Waves coins, 100000000 wavelets = 1 Wave\).

**Examples:**

* If transaction's usual cost is 0.001 WAVES, in case of smart scripting exactly the same transaction will be cost 0.001 + 0.004 WAVES.
* Set Alias for an account without a script would cost 0.001 WAVES, whereas for a Smart Account it would be 0.001+0.004=0.005 WAVES.

**Note. **All minimal transactions fees can be found [_**here**_](../transactions-fees.md).

## Trading With Smart Accounts

![master](https://img.shields.io/badge/node->%3D0.15.0-4bc51d.svg)

The feature of trading with smart account Scripts provides the ability to validate ExchangeTransaction and Orders.

When an exchange transaction broadcasts to the UTX Pool and then to the blockchain:

* Orders are checked by traders’ account scripts \(in case they are smart\).
* Exchange Transaction is checked by transaction sender’s \(Matcher’s\) script account if it’s set.

Waves also added trader’s script check in Matcher. When it receives an order from a smart account, it executes the script for the order.

### Fee Calculation Rules for Trading

* Smart Accounts _**don’t pay extra 0.004**_ for Order placements.
* Exchange Transaction’s fee is _**not increased by +0.004**_ if any of the accounts is a Smart Account.
* If the matcher is a Smart Account\(has a script\) then the fee for the matcher is increased by 0.004.

### Examples

#### 1. An account can trade only with BTC:

```js
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'
let BTCId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
match tx {
   case o: Order =>
      sigVerify(tx.bodyBytes, tx.proofs[0], cooperPubKey ) && (o.assetPair.priceAsset == BTCId || o.assetPair.amountAsset == BTCId)
   case _ => sigVerify(tx.bodyBytes, tx.proofs[0], cooperPubKey )
}
```

#### 2. Buy back custom asset on specified price in WAVES:

```scala
let myAssetId = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6B9'
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'

match tx {
   case o: Order =>
      o.assetPair.priceAsset == base58'' && o.assetPair.amountAsset == myAssetId && o.price == 500000 && o.amount == 1000 && o.orderType == Buy
   case _ => sigVerify(tx.bodyBytes, tx.proofs[0], cooperPubKey )

}
```

**Note.** To understand our language better, you can check our [_**RIDE Language Section**_](/smart-contracts/ride-language/ride-language.md) and go through our [_**Video Tutorials and Articles**_](/smart-contracts/video-tutorials-and-articles.md).

