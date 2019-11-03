# TransferTransaction

Structure of a [transfer transaction](/blockchain/transaction-type/transfer-transaction.md).

## Constructor

``` ride
TransferTransaction(feeAssetId: ByteVector|Unit, amount: Int, assetId: ByteVector|Unit, recipient: Address|Alias, attachment: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | feeAssetId | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | [Token](/blockchain/token.md) to pay the commission. Currently it can be [WAVES](/blockchain/token/waves.md) only |
| 2 | amount | [Int](/ride/data-types/int.md) | Amount of tokens to transfer |
| 3 | assetId | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | ID of a token |
| 4 | recipient | [Address](/ride/structures/common-structures/address.md)&#124;[Alias](/ride/structures/common-structures/alias.md) | [Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the recipient |
| 5 | attachment | [ByteVector](/ride/data-types/byte-vector.md) | Arbitrary data attached to transfer |
| 6 | id | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction ID](/blockchain/transaction/transaction-id.md) |
| 7 | fee | [Int](/ride/data-types/int.md) | [Transaction fee](/blockchain/transaction/transaction-fee.md) |
| 8 | timestamp | [Int](/ride/data-types/int.md) | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) |
| 9 | version | [Int](/ride/data-types/int.md) | [Transaction version](/blockchain/transaction/transaction-version.md) |
| 10 | sender | [Address](/ride/structures/common-structures/address.md) | [Address](/blockchain/account/address.md) of a transaction sender |
| 11 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Account public key of a sender |
| 12 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction body bytes](/blockchain/transaction/transaction-body-bytes.md) |
| 13 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | Array of [proofs](/blockchain/transaction/transaction-proof.md) |
