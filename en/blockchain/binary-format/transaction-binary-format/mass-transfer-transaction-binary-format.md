# Mass transfer transaction binary format

> Learn more about [mass transfer transaction](/blockchain/transaction-type/mass-transfer-transaction.md)

## Transaction version 1

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/blockchain/transaction-type.md) | type | Byte | 1 | Value must be 11 |
| 2 | [Transaction version](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 1 |
| 3 | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 4.1 | Flag [WAVES](/blockchain/token/waves.md)/[token](/blockchain/token.md) | | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value is 0 for transferring [WAVES](/blockchain/token/waves.md).<br>Value is 1 for transferring other [tokens](/blockchain/token.md) |
| 4.2 | [Token ID](/blockchain/token/token-id.md) | assetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | `S` | `S` = 0 if the value of the "flag WAVES/token" field is 0.<br>`S` = 32 if the value of the "flag WAVES/token" field is 1 |
| 5.1 | Number of transfers | transferCount | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | |
| 5.2 | Sum of all transfers | totalAmount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 5.3 | [Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the recipient of the transfer 1 | recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 5.4 | Amount of [tokens](/blockchain/token.md) in the transfer 1 | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 5.5 | Address or alias of the recipient of the transfer 2 | recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 5.6 | Amount of tokens in the transfer 2 | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| 5.[2× `N + 1`] | Address or alias of the transfer recipient`N` | recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 5.[2× `N + 2`] | Amount of tokens in the transfer`N` | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 6 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 7 | [Transaction fee](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 8.1 | Attachment length | | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | |
| 8.2 | Attachment | | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 2 | Arbitrary data attached to the transaction |
| 9 | [Transaction proofs](/blockchain/transaction/transaction-proof.md) | proofs | [Proofs](/blockchain/transaction/transaction-proof.md) | S | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/3LRfudet7avpQcW1AdauiBGb8SSRAaoCugDzngDPLVcv) in Node API.
