# Issue transaction binary format

> Learn more about [issue transaction](/blockchain/transaction-type/issue-transaction.md)

## Transaction version 2

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Indicates the [transaction version](/blockchain/transaction/transaction-version.md) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 3 |
| 3 | [Transaction version](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 2 |
| 4 | [Chain ID](/blockchain/blockchain-network/chain-id.md) | chainId | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | 84 for [test network](/blockchain/blockchain-network/test-network.md), 87 for [main network](/blockchain/blockchain-network/main-network.md) |
| 5 | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 6.1 | [Token](/blockchain/token.md) name length | | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | |
| 6.2 | Token name | name | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | From 4 to 16 | |
| 7.1 | Token description length | | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | |
| 7.2 | Token description | description | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | From 0 to 1000 | |
| 8 | Amount of the token that will be issued | quantity | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 9 | Number of decimal places of the [token](/blockchain/token.md) | decimals | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | |
| 10 | Reissue flag | reissuable | [Boolean](/blockchain/blockchain/blockchain-data-types.md) | 1 | If the value is 0, then token reissue is not possible.<br>If the value is 1, then token reissue is possible |
| 11 | [Transaction fee](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 12 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 13.1 | Script existence flag | | [Boolean](/blockchain/blockchain/blockchain-data-types.md) | 1 | If the value is 0, then the token does not have a script.<br>If the value is 1, then the token has a script |
| 13.2 | Script length in bytes | | [Short](/blockchain/blockchain/blockchain-data-types.md) | S | `S = 0 ` if the value of the "Script existence flag" field is 0.<br>`S = 2 `if the value of the "Script existence flag" field is 1 |
| 13.3 | [Asset script](/ride/script/script-types/asset-script.md) or [account script](/ride/script/script-types/account-script.md) | script | [String](/blockchain/blockchain/blockchain-data-types.md) | S | `S = 0` if the value of the "Script existence flag" field is 0.<br>0 &lt; `S` ≤ 32768, if the value of the "Script existence flag" field is 1 |
| 14 | [Transaction proofs](/blockchain/transaction/transaction-proof.md) | proofs | [Proofs](/blockchain/transaction/transaction-proof.md) | S | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://testnodes.wavesnodes.com/transactions/info/8jfD2JBLe23XtCCSQoTx5eAW5QCU6Mbxi3r78aNQLcNf) in Node API.

## Transaction version 1

| Field order number | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/blockchain/transaction-type.md) | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 3 |
| 2 | Public key of the transaction sender  | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 3.1 | [Token](/blockchain/token.md) name length | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | |
| 3.2 | Token name | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | From 4 to 16 | |
| 4.1 | Token description length | [Short](/blockchain/blockchain/blockchain-data-types.md) | 2 | |
| 4.2 | Token description | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | From 0 to 1000 | |
| 5 | Amount of the [token](/blockchain/token.md) that will be issued | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 6 | Number of decimal places of the [token](/blockchain/token.md) | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | |
| 7 | Reissue flag | [Boolean](/blockchain/blockchain/blockchain-data-types.md) | 1 | |
| 8 | [Transaction fee](/blockchain/transaction/transaction-fee.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 9 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 10 | [Transaction signature](/blockchain/transaction/transaction-signature.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 64 | | |
