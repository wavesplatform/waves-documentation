# Account data storage

An **account data storage** is a storage, associated with an [account](/blockchain/account.md),  of data records.

Each account has a _single_ account data storage.

The size of an account data storage is unlimited.

## An account data storage record

An **account data storage record** is a data record that has a key-value format.

The key is a unique string.

The value is the data of one of the types:

* string
* boolean
* integral
* array of bytes

## Adding records

Records are added to an account data storage using a [data transaction](/blockchain/transaction-type/data-transaction.md) or an invoke script transaction.

The maximum size of a single record is [32 kilobytes](https://github.com/wavesplatform/Waves/blob/79442553314012cc0e2c1defca9d85f8a84e1770/lang/shared/src/main/scala/com/wavesplatform/lang/v1/ContractLimits.scala#L11) for data transaction and [5 kilobytes](https://github.com/wavesplatform/Waves/blob/79442553314012cc0e2c1defca9d85f8a84e1770/lang/shared/src/main/scala/com/wavesplatform/lang/v1/ContractLimits.scala#L20) for invoke script transaction.

## Editing records

The value of a record can be rewritten using a data transaction or an invoke script transaction.

The key of a record cannot be rewritten.

## Deleting records

A record cannot be deleted from an account data storage, it is only possible to rewrite its value.
