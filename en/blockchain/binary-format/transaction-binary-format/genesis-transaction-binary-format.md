# Genesis transaction binary format

> Learn more about [genesis transaction](/blockchain/transaction-type/genesis-transaction.md)

## Transaction version 1

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/blockchain/transaction-type.md) |type| [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 1 |
| 2 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 3 | [Address](/blockchain/account/address.md) of the recipient | recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 26 |  |
| 4 | Amount of [WAVES](/blockchain/token/waves.md) that will be transferred to the [account](/blockchain/account.md) | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 5 | [Transaction fee](/blockchain/transaction/transaction-fee.md) |fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 6 | [Transaction signature](/blockchain/transaction/transaction-signature.md) | signature | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 64 |  | |


## JSON representation of the transaction

See the [example](https://nodes.wavesplatform.com/transactions/info/2DVtfgXjpMeFf2PQCqvwxAiaGbiDsxDjSdNQkc5JQ74eWxjWFYgwvqzC4dn7iB1AhuM32WxEiVi1SGijsBtYQwn8) in Node API.
