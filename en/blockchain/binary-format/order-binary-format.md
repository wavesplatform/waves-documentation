# Order binary format

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
