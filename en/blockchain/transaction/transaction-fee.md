# Transaction fee

A **transaction fee** is a fee that an [account](/blockchain/account.md) owner pays to send a [transaction](/blockchain/transaction.md).

A sender can specify any amount of fee but not less than a certain amount. The larger the fee is, the quicker the transaction will be added to the new [block](/blockchain/block.md).

> If a [smart account](/blockchain/account/smart-account.md) transfers a [smart asset](/blockchain/token/smart-asset.md), then the fee doubles. <br>If a transaction is validated by an [account script](/ride/script/script-types/account-script.md) or an [asset script](/ride/script/script-types/asset-script.md), then the fee is increased by 0.004 WAVES

| Transaction type | Transaction type ID | A minimum transaction fee in WAVES | Comments |
| :--- | :--- | :--- | :--- |
| [Alias transaction](/blockchain/transaction-type/alias-transaction.md) | 10 | 0.001 | |
| [Burn transaction](/blockchain/transaction-type/burn-transaction.md) | 6 | 0.001 | |
| Data transaction | 12 | 0.001 per kilobyte | The value is rounded up to the thousandths |
| Exchange transaction | 7 | 0.003 | |
| Invoke script transaction | 16 | 0.005 + `B` + `C` + 0.004 × `D` | If an invoke script transaction is sent from a [smart account](/blockchain/account/smart-account.md), then `B` = 0.004, otherwise `B` = 0.<br>An invoke script transaction may have a payment attached (only one payment). So, if the invoke script transaction has a payment attached and this payment is a [smart asset](/blockchain/token/smart-asset.md), then `C` = 0.004, otherwise `C` = 0.<br>In addition to this, the invoke script transaction can invoke a transfer of a number of different assets. `D` represents the number of transfers that are smart assets |
| Issue transaction | 3 | 1 for reqular token <br>0.001 for [non-fungible token](/blockchain/token/non-fungible-token.md) | |
| Lease cancel transaction | 9 | 0.001 | |
| Lease transaction | 8 | 0.001 | |
| Mass transfer transaction | 11 | 0.001 + 0.0005 × N | `N` is the number of transfers inside of the transaction. <br>The value of 0.0005 × N in the formula is rounded up to the thousandths |
| Reissue transaction | 5 | 1 | |
| Set asset script transaction | 15 | 1 | |
| Set script transaction | 13 | 0.01 | |
| Sponsorship transaction | 14 | 1 | |
| Transfer transaction | 4 | 0.001 | | |
