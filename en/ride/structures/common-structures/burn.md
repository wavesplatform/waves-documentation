# Burn

> [!WARNING]
> The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/blockchain/blockchain-network/stage-network.md).

Structure of a [token burn](/blockchain/transaction-type/burn-transaction.md).

## Constructor

```ride
Burn(assetId: ByteVector, quantity: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ride/data-types/byte-vector.md) | [ID of the token](/blockchain/token/token-id.md) to burn |
| 2 | quantity | [Int](/ride/data-types/int.md) | Amount of the token |