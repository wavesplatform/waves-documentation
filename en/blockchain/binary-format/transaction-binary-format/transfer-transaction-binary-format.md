# Transfer transaction binary format

> Learn more about [transfer transaction](/blockchain/transaction-type/transfer-transaction.md)

## Transaction version 2

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Indicates the[ transaction version](/blockchain/transaction/transaction-version.md) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 4 |
| 3 | [Transaction version](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 2 |
| 4 | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 5.1 | Flag [WAVES](/blockchain/token/waves.md)/[token](/blockchain/token.md) | | | 1 | Value is 0 for transferring [WAVES](/blockchain/token/waves.md).<br>Value is 1 for transferring other [tokens](/blockchain/token.md) |
| 5.2 | [Token ID](/blockchain/token/token-id.md) | assetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | `S`= 0 if the value of the "flag WAVES/token" field is 0.<br>`S` = 32 if the value of the "flag WAVES/token" field is 1 |
| 5.3 | Token fee | feeAssetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | [Token](/blockchain/token.md) to pay the commission. Currently it can be [WAVES](/blockchain/token/waves.md) only.<br>`S` = 0 if the value of the "flag WAVES/token" field is 0.<br>`S` = 32 if the value of the "flag WAVES/token" field is 1 |
| 6 | [Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md)of the transfer recipient | recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 7 | Amount of [tokens](/blockchain/token.md) in the transfer | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 8 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 9 | [Transaction fee](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 10.1 | Attachment length | | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | |
| 10.2 | Attachment | | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 2 | Arbitrary data attached to the transaction |
| 11 | [Transaction proofs](/blockchain/transaction/transaction-proof.md) | proofs | [Proofs](/blockchain/transaction/transaction-proof.md) | S | If the array is empty, then `S` = 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/JAutkv1Nk4xVrkb4fkacS4451VvyHC3iJtEDfBRD7rwr) in Node API.

## Transaction version 1

| Field order number | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/blockchain/transaction-type.md) | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 4 |
| 2 | Public key of the transaction sender  | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 3.1 | Flag [WAVES](/blockchain/token/waves.md)/[token](/blockchain/token.md) | | 1 | Value is 0 for transferring [WAVES](/blockchain/token/waves.md).<br>Value is 1 for transferring other [tokens](/blockchain/token.md) |
| 3.2 | [Token ID](/blockchain/token/token-id.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | `S` = 0 if the value of the "flag WAVES/token" field is 0.<br>`S` = 32 if the value of the "flag WAVES/token" field is 1 |
| 3.3 | Token fee | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | [Token](/blockchain/token.md) to pay the commission. Currently it can be [WAVES](/blockchain/token/waves.md) only.<br>`S` = 0 if the value of the "flag WAVES/token" field is 0.<br>`S` = 32 if the value of the "flag WAVES/token" field is 1 |
| 4 | [Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the transfer recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 5 | Amount of [tokens](/blockchain/token.md) in the transfer | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 6 | [Transaction fee](/blockchain/transaction/transaction-fee.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 7 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 8.1 | Attachment length | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | |
| 8.2 | Attachment | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 2 | Arbitrary data attached to the transaction |
| 9 | [Transaction signature](/blockchain/transaction/transaction-signature.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 64 | | |
