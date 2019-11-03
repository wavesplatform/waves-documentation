# Block binary format

> Learn more about [block](/blockchain/block.md)

## Binary format version 3

| # | Field name | Field type | Field size in bytes | Comments |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Version of the binary format of the block | Byte | 1 | The value must be 3 |
| 2 | [Block timestamp](/blockchain/block/block-timestamp.md) | Long | 8 | |
| 3 | [Block signature](/blockchain/block/block-signature.md) of the parent block | Array of bytes | 64 | |
| 4 | [Base target](/blockchain/block/block-generation/base-target.md) | Long | 8 | |
| 5 | Generation signature | Array of bytes | 32 | |
| 6 | Number of [transactions](/blockchain/transaction.md) in the [block](/blockchain/block.md) | Integer | 4 | |
| 7.1 | Transaction 1 | Array of bytes | Up to 100 | Bytes of the [binary format](/blockchain/binary-format/transaction-binary-format.md) of the first transaction |
| 7.2 | Transaction 2 | Array of bytes | Up to 100 | Bytes of the [binary format](/blockchain/binary-format/transaction-binary-format.md) of the second transaction |
| ... | ... | ... | ... | ... |
| 7.[N] | Transaction N | Array of bytes | Up to 100 | Bytes of the [binary format](/blockchain/binary-format/transaction-binary-format.md) of the N-th transaction |
| 8 | Public key of the [mining account](/blockchain/mining/mining-account.md) | Array of bytes | 32 | |
| 9 | [Block signature](/blockchain/block/block-signature.md) | Array of bytes | 64 | | |
