# Blockchain functions

|   #  | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
|   1  | [assetInfo(ByteVector): Аsset&#124;Unit](#asset-info) | Gets the information about a [token](/blockchain/token.md) | 100 |
|   2  | [blockInfoByHeight(Int): BlockInfo&#124;Unit](#block-info-by-height) | Gets the information about a [block](/blockchain/block.md) by the [block height](/blockchain/block/block-height.md) | 100 |
|   3  | [transactionHeightById(ByteVector): Int&#124;Unit](#transaction-height-by-id) | Gets the [block height](/blockchain/block/block-height.md) of a transaction | 100 |
|   4  | [transferTransactionById(ByteVector): TransferTransaction&#124;Unit](#transfer-transaction-by-id) | Gets the data of a transfer transaction | 100 |

## assetInfo(ByteVector): Аsset|Unit<a id="asset-info"></a>

Gets the information about a [token](/blockchain/token.md).

```
assetInfo(id: ByteVector): Аsset|Unit
```

### Parameters

#### `id`: ByteVector

ID of the [token](/blockchain/token.md).

## blockInfoByHeight(Int): BlockInfo|Unit<a id="block-info-by-height"></a>

Gets the information about a [block](/blockchain/block.md) by the [block height](/blockchain/block/block-height.md).

```
blockInfoByHeight(height: Int): BlockInfo|Unit
```

### Parameters

#### `height`: Int

Block height.

## transactionHeightById(ByteVector): Int|Unit<a id="transaction-height-by-id"></a>

Gets the [block height](/blockchain/block/block-height.md) of a transaction

```
transactionHeightById(id: ByteVector): Int|Unit
```

### Parameters

#### `id`: ByteVector

ID of the transaction.

## transferTransactionById(ByteVector): TransferTransaction|Unit<a id="transfer-transaction-by-id"></a>

Gets the data of a [transfer transaction](/blockchain/transaction-type/transfer-transaction.md).

```
transferTransactionById(id: ByteVector): TransferTransaction|Unit
```

### Parameters

#### `id`: ByteVector

ID of the transfer transaction.
