# Sponsored Fee Transactions

### Use Cases

Users can set a transaction fee nominated in an asset. However, node owners need to explicitly allow transaction fees in the asset by manually editing node configuration file. Otherwise, node won't be able to mine a block with these transactions.

The sponsorship could be set for an asset. In this case miner will receive fee in Waves for processing of transactions, the fee of which is nominated in sponsored asset.

After this transaction is confirmed, it becomes possible to use this asset as a fee (automatically for all miners). When transaction with fee in sponsored fee asset appears any miner just puts it to forged block. Instead of just transferring fee asset to miner's balance blockchain does a bit different thing: It automatically moves fee asset to sponsor's (issuer's) account and transfers standard transaction cost in waves from sponsor's to miner's accounts. In fact two miners will receive these waves because of NG 40/60 fee distributions.

Only the issuer of an asset can set up sponsorship. The sponsorship is set by giving the rate at which fee in an asset is converted to Waves.


### Implementation

#### Sponsored Fee Transaction representations

Binary format of a SponsorFee transaction is as follows:

| \# | Field name | Type | Position | Length |
| --- | ---: | --- | --- | --- |
| 1 | Transaction type (0x0e) | Byte | 0 | 1 |
| 2 | Version (0x01) |  Byte | 1 | 1 |
| 3 | Sender's public key | Bytes | 2 | 32 |
| 4 | Asset ID | Bytes | 34 | 32 |
| 5 | Minimal fee in assets\* | Long | 66 | 8 |
| 6 | Fee | Long | 74 | 8 |
| 7 | Timestamp | Long | 82 | 8 |
| 8 | Proofs\*\* | Bytes | 90 | 64 |

\* Zero value assume canceling sponsorship.

\*\* Currently only signature is supported, signature have Length = 64

JSON representation example:

```js
{
  "type" : 14,
  "id" : "CwHecsEjYemKR7wqRkgkZxGrb5UEfD8yvZpFF5wXm2Su",
  "sender" : "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
  "senderPublicKey" : "5AzfA9UfpWVYiwFwvdr77k6LWupSTGLb14b24oVdEpMM",
  "minSponsoredAssetFee": 100000, // minimum amount of assets require for fee, set equal to null to cancel sponsorship
  "fee" : 100000000,
  "timestamp" : 1520945679531,
  "proofs" : [ "4huvVwtbALH9W2RQSF5h1XG6PFYLA6nvcAEgv79nVLW7myCysWST6t4wsCqhLCSGoc5zeLxG6MEHpcnB6DPy3XWr" ],
  "version" : 1,
  "height" : 303
}
```

### Fees

#### Fee for Sponsored Fee Transaction
A fee for a sponsor is payable in WAVES only. The fee for this transaction is fixed and equal to 1.0 WAVES.

#### Fee for miner in WAVES
The total **miner's fee in WAVES for transactions** with a fee in sponsored assets can be compute by this formula:
```
    feeInWaves = assetFee * feeUnit / sponsorship
```
where:
* `assetFee` - a fee in asset from transaction
* `feeUnit` - for sponsorship is equal to 100000
* `sponsorship` - the `minSponsoredAssetFee` value from Sponsored Fee Transaction for this asset

But the total **block fee** for the block with sponsored transactions can be computed as the sum of transactions which have **only the fee in WAVES**. For example, if we have the block with only sponsored transactions, a fee for this block will be equal to 0.

### API

`POST /assets/sponsor` signs and sends a start/update sponsorship transaction. This endpoint requires API key. Sample input is as follows:

```js
{
  "version": 1,
  "sender": "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
  "assetId":"AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "minSponsoredAssetFee": 100000,
  "fee": 100000000
}
```

`POST /asset/sponsor` signs and sends a canceling sponsorship transaction. This endpoint requires API key. Sample input is as follows:

```js
{
  "version": 1,
  "sender": "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
  "assetId":"AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "minSponsoredAssetFee": null,
  "fee": 100000000
}
```

Sponsorship information for the asset present in [asset description](../waves-node/node-api/asset-transactions/public-functions.md#get-assetsdetailsassetid).

### Constraints

Only issuer may sponsor asset.

### Related Changes

Minimal fee was moved to consensus.
