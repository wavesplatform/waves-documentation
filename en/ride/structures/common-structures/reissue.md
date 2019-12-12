# Reissue

> [!WARNING]
> The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/blockchain/blockchain-network/stage-network.md) only.

Structure of a [token reissue](/blockchain/transaction-type/reissue-transaction.md).

## Constructor

```ride
Reissuen(assetId: ByteVector, isReissuable: Boolean, quantity: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ride/data-types/byte-vector.md) | [ID of the token](/blockchain/token/token-id.md) to reissue |
| 2 | isReissuable | [Boolean](/ride/data-types/boolean.md) | Reissue ability flag |
| 3 | quantity | [Int](/ride/data-types/int.md) | Amount of the token |
