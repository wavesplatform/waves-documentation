# Lease transaction binary format

> Learn more about [lease transaction](/blockchain/transaction-type/lease-transaction.md)

## Transaction version 2

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag |  | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Indicates the [transaction version](/blockchain/transaction/transaction-version.md) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/blockchain/transaction-type.md) | type | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 8 |
| 3 | [Transaction version](/blockchain/transaction/transaction-version.md) | version | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 2 |
| 4 | Reserved field | | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be equal to 0 |
| 5 | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 6 | [Address](/blockchain/account/address.md) of the recipient |  recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 2 | |
| 7 | Amount of [WAVES](/blockchain/token/waves.md) that will be leased to the [account](/blockchain/account.md) | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 8 | [Transaction fee](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 9 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 10 | [Transaction proofs](/blockchain/transaction/transaction-proof.md) | proofs | [Proofs](/blockchain/transaction/transaction-proof.md) | S | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/J6jZCzLpWJX8EDVhopKFx1mcbFizLGHVb44dvqPzH4QS) in Node API.

## Transaction version 1

| Field order number | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/blockchain/transaction-type.md) | [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 8 |
| 2 | Public key of the transaction sender  | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 32 | |
| 3 | [Address](/blockchain/account/address.md) of the recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 2 | |
| 4 | Amount of [WAVES](/blockchain/token/waves.md) that will be leased to the [account](/blockchain/account.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 5 | [Transaction fee](/blockchain/transaction/transaction-fee.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 6 | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 | |
| 7 | [Transaction signature](/blockchain/transaction/transaction-signature.md) | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 64 | | |
