# Transactions Structure

In this section, you can find all transactions body bytes details and the new fields which are included in the updated version of our transactions \(Version 2\).

In the new version, the transactions are signed by [_**proofs**_](/waves-environment/waves-protocol/versioned-transactions.md) instead of using a signature.

The differences between TransactionV2 and TransactionV1 are:

1. In V2 fields **version ** and **script** were added.
2. TransactionV2 supports proofs so **signature** was replaced with **proofs**.

# 3. Issue Transaction

| Field | Type | Length | Transaction Version1 | Transaction version2 |
| :--- | :--- | :--- | :--- | :--- |
| Transaction Type | Byte | 1 | + | + |
| Version | Byte | 1 | - | + |
| ChainId | Byte | 1 | - | + |
| Sender's Public Key | PublicKeyAccount | 32 | + | + |
| Name | Bytes | maximum N | + | + |
| Description | Bytes | maximum N | + | + |
| Quantity | Long | 8 | + | + |
| Decimals | Byte | 1 | + | + |
| Reissuable | Byte | 1 | + | + |
| Fee | Long | 8 | + | + |
| Timestamp | Long | 8 | + | + |
| Script | option\[script\] | N | - | + |
| Proofs | proofs | 64 | - | + |
| Signature | Bytes | 64 | + | - |

# 4. Transfer Transaction

| Field | Type | Length | Transaction Version1 | Transaction version2 |
| :--- | :--- | :--- | :--- | :--- |
| Transaction Type | Byte | 1 | + | + |
| version | Byte | 1 | - | + |
| chainId | Byte | 1 | - | + |
| Sender's Public Key | PublicKeyAccount | 32 | + | + |
| Recipient's Address Or Alias object bytes | Byte | M | + | + |
| assetId | Bytes | 32 | + | + |
| Fee assetId | Bytes | 32 | + | + |
| Amount | Long | 8 | + | + |
| Fee | Long | 8 | + | + |
| Timestamp | Long | 8 | + | + |
| Attachment | Bytes | N | + | + |
| Proofs | proofs | 64 | - | + |
| Signature | Bytes | 64 | + | - |

# 5. Reissue Transaction

| Field | Type | Length | Transaction Version1 | Transaction version2 |
| :--- | :--- | :--- | :--- | :--- |
| transactionType | Byte | 1 | + | + |
| version | Byte | 1 | - | + |
| chainId | Byte | 1 | - | + |
| Sender's Public Key | PublicKeyAccount | 32 | + | + |
| Asset ID | Bytes | 32 | + | + |
| Quantity | Long | 8 | + | + |
| Reissuable | Boolean | 1 | + | + |
| Fee | Long | 8 | + | + |
| Timestamp | Long | 8 | + | + |
| Proofs | proofs | 64 | - | + |
| Signature | Bytes | 64 | + | - |

# 6. Burn Transaction

| Field | Type | Length | Transaction Version1 | Transaction version2 |
| :--- | :--- | :--- | :--- | :--- |
| Transaction Type | Byte | 1 | + | + |
| Version | Byte | 1 | - | + |
| ChainId | Byte | 1 | - | + |
| Sender's Public Key | PublicKeyAccount | 32 | + | + |
| AssetId | Bytes | 32 | + | + |
| Quantity | Long | 8 | + | + |
| Fee | Long | 8 | + | + |
| Timestamp | Long | 8 | + | + |
| Proofs | proofs | 64 | - | + |
| Signature | Bytes | 64 | + | - |

# 7. Exchange Transaction

| Field | Type | Length | Transaction Version1 | Transaction version2 |
| :--- | :--- | :--- | :--- | :--- |
| Transaction Type | Byte | 1 | + | + |
| Version | Byte | 1 | - | + |
| ChainId | Byte | 1 | - | + |
| Buy order | Bytes | 4 | + | + |
| Sell Order | Bytes | 4 | + | + |
| Price | Long | 8 | + | + |
| Amount | Long | 8 | + | + |
| Buy matcher fee | Long | 8 | + | + |
| Sell matcher fee | Long | 8 | + | + |
| Fee | Long | 8 | + | + |
| Timestamp | Long | 8 | + | + |
| Proofs | proofs | 64 | - | + |
| Signature | Bytes | 64 | + | - |

# 8. Lease Transaction

| Field | Type | Length | Transaction Version1 | Transaction version2 |
| :--- | :--- | :--- | :--- | :--- |
| Transaction Type | Byte | 1 | + | + |
| Version | Byte | 1 | - | + |
| ChainId | Byte | 1 | - | + |
| Sender's Public Key | PublicKeyAccount | 32 | + | + |
| Recipient's Address Or Alias object bytes | Byte | M | + | + |
| Amount | Long | 8 | + | + |
| Fee | Long | 8 | + | + |
| Timestamp | Long | 8 | + | + |
| Proofs | proofs | 64 | - | + |
| Signature | Bytes | 64 | + | - |

# 9. Lease Cancel Transaction

| Field | Type | Length | Transaction Version1 | Transaction version2 |
| :--- | :--- | :--- | :--- | :--- |
| Transaction Type | Byte | 1 | + | + |
| Version | Byte | 1 | - | + |
| ChainId | Byte | 1 | - | + |
| Sender's Public Key | PublicKeyAccount | 32 | + | + |
| LeaseId | ByteStr | 1 | + | + |
| Fee | Long | 8 | + | + |
| Timestamp | Long | 8 | + | + |
| Proofs | proofs | 64 | - | + |
| Signature | Bytes | 64 | + | - |

# 10. Create Alias Transaction

| Field | Type | Length | Transaction Version1 | Transaction version2 |
| :--- | :--- | :--- | :--- | :--- |
| Transaction Type | Byte | 1 | + | + |
| Version | Byte | 1 | - | + |
| ChainId | Byte | 1 | - | + |
| Sender's Public Key | PublicKeyAccount | 32 | + | + |
| Alias | Bytes | n | + | + |
| Fee | Long | 8 | + | + |
| Timestamp | Long | 8 | + | + |
| Proofs | proofs | 64 | - | + |
| Signature | Bytes | 64 | + | - |



