# Reissue transaction binary format

> Learn more about [reissue transaction](/blockchain/transaction-type/reissue-transaction.md)

## Transaction version 2

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Indicates the [transaction version](/blockchain/transaction/transaction-version.md) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 5 |
| 3 | [Transaction version](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 2 |
| 4 | [Chain ID](/blockchain/blockchain-network/chain-id.md) | chainId | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 84 for [test network](/blockchain/blockchain-network/test-network.md), 87 for [main network](/blockchain/blockchain-network/main-network.md) |
| 5 | Public key of the transaction sender | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 6 | [Token ID](/blockchain/token/token-id.md) | assetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 7 | Number of [tokens](/blockchain/token.md) that will be reissued | quantity | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 8 | Reissue flag | reissuable | [Boolean](/blockchain/blockchain/blockchain-data-types.md) | 1 | If the value is 0, then token reissue is not possible.<br>If the value is 1, then token reissue is possible |
| 9 | [Transaction fee](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 10 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 11 | [Transaction proofs](/blockchain/transaction/transaction-proof.md) | proofs | [Proofs](/blockchain/transaction/transaction-proof.md) | `S` | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/27ETigYaHym2Zbdp4x1gnXnZPF1VJCqQpXmhszC35Qac) in Node API.

## Transaction version 1

| Field order number | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/blockchain/transaction-type.md) | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 5 |
| 2 | Public key of the transaction sender | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 3 | [Token ID](/blockchain/token/token-id.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 4 | Number of [tokens](/blockchain/token.md) that will be reissued | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 5 | Reissue flag | [Boolean](/blockchain/blockchain/blockchain-data-types.md) | 1 | If the value is 0, then token reissue is not possible.<br>If the value is 1, then token reissue is possible |
| 6 | [Transaction fee](/blockchain/transaction/transaction-fee.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 7 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 8 | [Transaction signature](/blockchain/transaction/transaction-signature.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 64 | | |
