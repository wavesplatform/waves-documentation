# Transaction ID

A **transaction ID** is a hash of the [transaction body bytes](/blockchain/transaction/transaction-body-bytes.md) which is calculated by the [blake2b256](https://en.wikipedia.org/wiki/BLAKE_&#40;hash_function&#41;) hash function.

Unlike the other transaction types, the transaction ID of an [alias transaction](/blockchain/transaction-type/alias-transaction.md) is calculated as a hash of the values of `type` and `alias` fields.
