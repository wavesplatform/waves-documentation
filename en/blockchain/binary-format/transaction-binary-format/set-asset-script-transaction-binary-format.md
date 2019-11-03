# Set asset script transaction binary format

> Learn more about [set asset script transaction](/blockchain/transaction-type/set-asset-script-transaction.md)

## Transaction version 1

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Indicates the [transaction version](/blockchain/transaction/transaction-version.md) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 15 |
| 3 | [Transaction version](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 1 |
| 4 | [Chain ID](/blockchain/blockchain-network/chain-id.md) | chainId | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 84 for [test network](/blockchain/blockchain-network/test-network.md), 87 for [main network](/blockchain/blockchain-network/main-network.md) |
| 5 | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 6 | [Token ID](/blockchain/token/token-id.md) to which the asset script is attached | assetId | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 7.1 | Script existence flag | | [Boolean](/blockchain/blockchain/blockchain-data-types.md) | 1 | If the value is 0, then the token does not have a script.<br>If the value is 1, then the token has a script |
| 7.2 | Script size in bytes | | [Short](/blockchain/blockchain/blockchain-data-types.md) | S | `S = 0` if the value of the "Script existence flag" field is 0.<br>`S = 2` if the value of the "Script existence flag" field is 1 |
| 7.3 | [Asset script](/ride/script/script-types/asset-script.md) | script | [String](/blockchain/blockchain/blockchain-data-types.md) | S | `S = 0` if the value of the "Script existence flag" field is 0.<br>0 &lt; `S` ≤ 8192, if the value of the "Script existence flag" field is 1 |
| 8 | [Transaction fee](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 9 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 10 | [Transaction proofs](/blockchain/transaction/transaction-proof.md) | proofs | Array[[Proof](/blockchain/transaction/transaction-proof.md)] | S | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/FwYSpmVDbWQ2BA5NCBZ9z5GSjY39PSyfNZzBayDiMA88) in Node API.
