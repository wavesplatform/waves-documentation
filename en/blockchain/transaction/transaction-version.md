# Transaction version

All [transactions](/blockchain/transaction.md), with the exception of the [genesis transaction](/blockchain/transaction-type/genesis-transaction.md), have versions.

Transactions of the same [type](/blockchain/transaction-type.md), but of different versions, have different [binary formats](/blockchain/binary-format/transaction-binary-format.md).

When developing applications, it is recommended to use transactions of the latest versions.

| # | Transaction type | Available versions |
| :--- | :--- | :--- |
| 1 | [Alias transaction](/blockchain/transaction-type/alias-transaction.md) | 1, 2 |
| 2 | [Burn transaction](/blockchain/transaction-type/burn-transaction.md) | 1, 2 |
| 3 | [Data transaction](/blockchain/transaction-type/data-transaction.md) | 1 |
| 4 | [Exchange transaction](/blockchain/transaction-type/exchange-transaction.md) | 1, 2 |
| 5 | [Genesis transaction](/blockchain/transaction-type/genesis-transaction.md) | Has no version |
| 6 | [Invoke script transaction](/blockchain/transaction-type/invoke-script-transaction.md) | 1 |
| 7 | [Issue transaction](/blockchain/transaction-type/issue-transaction.md) | 1, 2 |
| 8 | [Lease cancel transaction](/blockchain/transaction-type/lease-cancel-transaction.md) | 1, 2 |
| 9 | [Lease transaction](/blockchain/transaction-type/lease-transaction.md) | 1, 2 |
| 10 | [Mass transfer transaction](/blockchain/transaction-type/mass-transfer-transaction.md) | 1 |
| 11 | [Reissue transaction](/blockchain/transaction-type/reissue-transaction.md) | 1, 2 |
| 12 | [Set asset script transaction](/blockchain/transaction-type/set-asset-script-transaction.md) | 1 |
| 13 | [Set script transaction](/blockchain/transaction-type/set-script-transaction.md) | 1 |
| 14 | Sponsor fee transaction | 1 |
| 15 | [Transfer transaction](/blockchain/transaction-type/transfer-transaction.md) | 1, 2 |
