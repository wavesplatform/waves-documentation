# Order binary format

## Binary format version 3 <a id="v3"></a>

| # | Field name | JSON field name | Field type | Length in bytes | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [Order](/blockchain/order.md) binary format version number | version | [Byte](/blockchain/blockchain/blockchain-data-types.md)| 1 | Value must be 3 |
| 2 | Order sender public key | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 3 | [Matcher](/blockchain/waves-node/extensions/matcher.md) public key | matcherPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 4.1 | Token B flag |  | [Short](/blockchain/blockchain/blockchain-data-types.md) | 1 | If token is [WAVES](/blockchain/token/waves.md), then value is 0, else 1 |
| 4.2 | [Token ID](/blockchain/token/token-id.md) Б | amountAsset | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | If token is not WAVES, then `S` = 32, else the field should be absent |
| 5.1 | Token A flag |  | [Short](/blockchain/blockchain/blockchain-data-types.md) | 1 | If token is WAVES, then value is 0, else 1 |
| 5.2 | Token A ID | priceAsset | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | If token is not WAVES, then `S` = 32, else the field should be absent |
| 6 | Order type | orderType | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | If order is for buying, then value is 0, if order is for selling, then value is  1 |
| 7 | Amount of token B, which order sender offers for one token A | price | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 8 | Amount of token A, which order sender wants to buy or send depending on order type | amount | Long | 8 |  |
| 9 | Amount of milliseconds from the beginning of [Unix epoch](https://ru.wikipedia.org/wiki/Unix-время) till the moment of validation of order by matcher | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | Amount of milliseconds from the beginning of Unix epoch till the unfulfilled order [cancellation](/blockchain/order.md#cancel) | expiration | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 11 | [Matcher fee](/blockchain/matcher-fee.md) | matcherFee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 12 | Matcher fee token flag |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | If token is WAVES, then value is 0, else 1 |
| 13 | Matcher fee token | matcherFeeAssetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `F` | If token is not WAVES, then `F` = 32, else the field should be absent |
| 14 | [Proofs](/blockchain/transaction/transaction-proof.md) | proofs | Array[[Proof](/blockchain/transaction/transaction-proof.md)] | `S` | If the array is empty, then `S` = 3.<br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>where<br>`N` is amount of proofs in the array,<br>`P`<sub>n</sub> — size N-th proof in bytes.<br>Maximum amount of proofs in the array is 8. Maximum length of each proof is 64 bytes |

## JSON representation of order version 3

``` json
{
  "version": 3,
  "senderPublicKey": "FMc1iASTGwTC1tDwiKtrVHtdMkrVJ1S3rEBQifEdHnT2",
  "matcherPublicKey": "7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy",
  "assetPair": {
    "amountAsset": "BrjUWjndUanm5VsJkbUip8VRYy6LWJePtxya3FNv4TQa",
    "priceAsset": null
  },
  "orderType": "buy",
  "amount": 150000000,
  "timestamp": 1548660872383,
  "expiration": 1551252872383,
  "matcherFee": 300000,
  "proofs": [
    "YNPdPqEUGRW42bFyGqJ8VLHHBYnpukna3NSin26ERZargGEboAhjygenY67gKNgvP5nm5ZV8VGZW3bNtejSKGEa"
  ],
  "id": "Ho6Y16AKDrySs5VTa983kjg3yCx32iDzDHpDJ5iabXka",
  "sender": "3PEFvFmyyZC1n4sfNWq6iwAVhzUT87RTFcA",
  "price": 1799925005,
  
}
```

## Binary format version 2 <a id="order2"></a>

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Version | Byte \(constant, value = 2\) | 1
| 2 | Sender's public key | PublicKey \(Array[Byte]\) | 32
| 3 | Matcher's public key | PublicKey \(Array[Byte]\) | 32
| 4.1 | Amount asset flag \(1 - asset, 0 - Waves\) |  | 1
| 4.2 | Amount asset | AssetId \(ByteStr = Array[Byte]\) | 32 or 0 \(depends on the byte in 4.1\)
| 5.1 | Price asset flag \(1 - asset, 0 - Waves\) |  | 1
| 5.2 | Price asset | AssetId \(ByteStr = Array[Byte]\) | 32 or 0 \(depends on the byte in 5.1\)
| 6 | Order type \(0 - Buy, 1 - Sell\) | Byte | 1
| 7 | Price | Long | 8
| 8 | Amount | Long | 8
| 9 | Timestamp | Long | 8
| 10 | Expiration | Long | 8
| 11 | Matcher's fee | Long | 8
| 12 | Proofs | Proofs | See Proofs structure

## Binary format version 1 <a id="order1"></a>

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Sender's public key | PublicKey \(Array[Byte]\) | 32 |
| 2 | Matcher's public key | PublicKey \(Array[Byte]\) | 32 |
| 3.1 | Amount asset flag \(1 - asset, 0 - Waves\) |  | 1
| 3.2 | Amount asset | AssetId \(ByteStr = Array[Byte]\) | 32 or 0 \(depends on the byte in 3.1\)
| 4.1 | Price asset flag \(1 - asset, 0 - Waves\) |  | 1
| 4.2 | Price asset | AssetId \(ByteStr = Array[Byte]\) | 32 or 0 \(depends on the byte in 4.1\)
| 5 | Order type \(0 - Buy, 1 - Sell\) | Byte | 1
| 6 | Price | Long | 8
| 7 | Amount | Long | 8
| 8 | Timestamp | Long | 8
| 9 | Expiration | Long | 8
| 10 | Matcher fee | Long | 8
| 11 | Signature | Bytes | 64 |

The price listed for amount asset in price asset \* 10^8.

Expiration is order time to live, timestamp in future, max = 30 days in future.

The signature is calculated from the following bytes:

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Sender's public key | PublicKey \(Array[Byte]\) | 32 |
| 2 | Matcher's public key | PublicKey \(Array[Byte]\) | 32 |
| 3.1 | Amount asset flag \(1 - asset, 0 - Waves\) |  | 1
| 3.2 | Amount asset | AssetId \(ByteStr = Array[Byte]\) | 32 or 0 \(depends on the byte in 3.1\)
| 4.1 | Price asset flag \(1 - asset, 0 - Waves\) |  | 1
| 4.2 | Price asset | AssetId \(ByteStr = Array[Byte]\) | 32 or 0 \(depends on the byte in 4.1\)
| 5 | Order type \(0 - Buy, 1 - Sell\) | Bytes | 1 |
| 6 | Price | Long | 8 |
| 7 | Amount | Long | 8 |
| 8 | Timestamp | Long | 8 |
| 9 | Expiration | Long | 8 |
| 10 | Matcher fee | Long | 8 |
