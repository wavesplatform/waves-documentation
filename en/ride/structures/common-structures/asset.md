# Asset

Structure of a [token](/blockchain/token.md).

## Constructor

``` ride
Asset(id: ByteVector, quantity: Int, decimals: Int, issuer: Address, issuerPublicKey: ByteVector, reissuable: Boolean, scripted: Boolean, sponsored: Boolean)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/ride/data-types/byte-vector.md) | [Token ID](/blockchain/token/token-id.md) |
| 2 | quantity | [Int](/ride/data-types/int.md) | Amount of issued token |
| 3 | decimals | [Int](/ride/data-types/int.md) | Number of decimal places |
| 4 | issuer | [Address](/ride/structures/common-structures/address.md) | [Address](/blockchain/account/address.md) of the [account](/blockchain/account.md) that issued a token |
| 5 | issuerPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Public key of the account that issued a token |
| 6 | reissuable | [Boolean](/ride/data-types/boolean.md) | true — token can be reissued, false — cannot be reissued |
| 7 | scripted | [Boolean](/ride/data-types/boolean.md) | true — [smart asset](/ride/smart-assets.md), false — regular token |
| 8 | sponsored | [Boolean](/ride/data-types/boolean.md) | true — token can be sponsored, false — cannot be sponsored |
