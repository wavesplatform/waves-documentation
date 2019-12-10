# Data transaction

**Data transaction** is a [transaction](/blockchain/transaction.md) that writes data to an [account data storage](/blockchain/account/account-data-storage.md).

Each data transaction has a **data array** that contains data to be written. In [JSON representation](/blockchain/binary-format/transaction-binary-format/data-transaction-binary-format.md#json-representation) of a transaction the data array is the field `data`.

## Data array of a data transaction

The maximum length of an array is 100 elements.

The maximum size of an array is 150 kilobytes.

Each element of an array is an object that has 3 fields: `key`, `type`, `value`.

An array cannot contain two elements with the same `key` field.

## The `key` field

The `key` field is a non-empty [UTF-8](https://en.wikipedia.org/wiki/UTF-8) string.

At the stage of [transaction validation](/blockchain/transaction/transaction-validation.md), the `key` field is converted from UTF-8 to [UTF-16](https://en.wikipedia.org/wiki/UTF-16) encoding. The size of the resulting array of 16-bit words must not exceed 100 elements. Thus, the size of the `key` must be from 1 to 200 bytes inclusive.

The `key` is being deleted when its `type` and `value` are not specified.

> This feature is available from node version 1.2. This feature can be used after activation of the "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16) functionality on the node.
Version 1.2.x is currently available on [stagenet](/blockchain/blockchain-network/stage-network.md)

When deleting a key using the JSON representation of a transaction, null is used as the type and value of the key. In one data transaction, keys can be used both for writing and deleting records. The maximum number of keys to be deleted in one transaction cannot exceed 100.

## The `type` field

The `type` field specifies the type of the `value` field:

* binary
* boolean
* integer
* string

## The `value` field

The size of `value` field can be from 0 to 32767 bytes.

## Binary format

See the page [Data transaction binary format](/blockchain/binary-format/transaction-binary-format/data-transaction-binary-format.md).
