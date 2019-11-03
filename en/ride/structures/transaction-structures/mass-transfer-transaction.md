# MassTransferTransaction

Structure of a [mass transfer transaction](/blockchain/transaction-type/mass-transfer-transaction.md).

## Constructor

``` ride
MassTransferTransaction(feeAssetId: ByteVector|Unit, assetId: ByteVector|Unit, totalAmount: Int, transfers: List[Transfer], transferCount: Int, attachment: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | feeAssetId | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | [Transaction fee](/blockchain/transaction/transaction-fee.md) token.<br>Only [WAVES](/blockchain/token/waves.md) is currently allowed |
| 2 | assetId | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | [Token ID](/blockchain/token/token-id.md) |
| 3 | totalAmount | [Int](/ride/data-types/int.md) | Amount of the token to be transferred |
| 4 | transfers | [List](/ride/data-types/list.md)[[Transfer](/ride/structures/common-structures/transfer.md)] | Transfers |
| 5 | transferCount | [Int](/ride/data-types/int.md) | Number of transfers |
| 6 | attachment | [ByteVector](/ride/data-types/byte-vector.md) | Optional data attached to the transaction. This field is often used to attach a comment to the transaction.<br>The maximum data size is 140 bytes |
| 7 | id | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction ID](/blockchain/transaction/transaction-id.md) |
| 8 | fee | [Int](/ride/data-types/int.md) | [Transaction fee](/blockchain/transaction/transaction-fee.md) |
| 9 | timestamp | [Int](/ride/data-types/int.md) | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) |
| 10 | version | [Int](/ride/data-types/int.md) | [Transaction version](/blockchain/transaction/transaction-version.md) |
| 11 | sender | [Address](/ride/structures/common-structures/address.md) | [Address](/blockchain/account/address.md) of the transaction sender |
| 12 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Public key of the transaction sender |
| 13 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction body bytes](/blockchain/transaction/transaction-body-bytes.md) |
| 14 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | [Proofs](/blockchain/transaction/transaction-proof.md) |
