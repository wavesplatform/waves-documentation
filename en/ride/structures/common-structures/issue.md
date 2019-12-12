# Issue

> [!WARNING]
> The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/blockchain/blockchain-network/stage-network.md) only.

Structure of a [token issue](/blockchain/transaction-type/issue-transaction.md).

## Constructor

```ride
Issue(compiledScript: Script|Unit, decimals: Int, description: String, isReissuable: Boolean, name: String, quantity: Int, nonce: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | compiledScript | [Script](/ride/script.md)&#124;[Unit](/ride/data-types/unit.md) | Set it to `Unit`. Smart asset issue is currently unavailable |
| 2 | decimals | [Int](/ride/data-types/int.md) | Number of digits in decimal part. Set to `0` for NFT token |
| 3 | description | [String](/ride/data-types/string.md) | Token description |
| 4 | isReissuable | [Boolean](/ride/data-types/boolean.md) | Reissue ability flag. Set to `0` for NFT |
| 5 | name | [String](/ride/data-types/string.md) | Token name |
| 6 | quantity | [Int](/ride/data-types/int.md) | Amount of the [token](/blockchain/token.md). Set to `1` for NFT |
| 7 | nonce | [Int](/ride/data-types/int.md) | Sequential number of asset that is used to token ID generation. Required if several tokens with the same name and description are issued in a single script invokation. |
