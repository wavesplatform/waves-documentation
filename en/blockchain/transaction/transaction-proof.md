# Transaction proof

A **transaction proof** is an array of bytes that is used to check the validity of a transaction.

An array of proofs can consist of several [transaction signatures](/blockchain/transaction/transaction-signature.md) (but not limited to only signatures).

One of the examples of proofs usage is multisignature which stores several transaction signatures from different accounts.

Transactions with [data structures](/blockchain/binary-format/transaction-binary-format.md) of version 2 and above are signed by proofs instead of signatures.

> The number of proofs in the array cannot exceed 8

## The data structure of an array of `N` proofs

| Field order number | Field name | Field type | Field size in bytes | Field description |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Proofs version | Byte | 1 | A special technical marker which determines the format of the array of proofs. <br>The value must be 0 |
| 2 | Proofs count | Short | 2 | Number `N` of proofs in the array of proofs |
| 3 | 1st proof length | Short | 2 | Length in bytes of the 1st proof |
| 4 | 1st proof bytes | Array of bytes | up to 64 | Array of bytes of the 1st proof |
| 5 | 2nd proof length | Short | 2 | Length in bytes of the 2nd proof |
| 6 | 2nd proof bytes | Array of bytes | up to 64 | Array of bytes of the 2nd proof |
| ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... |
| 2 × `N` + 1 | `N`-th proof length | Short | 2 | Length in bytes of the `N`-th proof |
| 2 × `N` + 2 | `N`-th proof bytes | Array of bytes | up to 64 | Array of bytes of the `N`-th proof |
