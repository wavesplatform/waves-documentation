# Get Started

Welcome! We are excited that you want to learn Waves Smart Contracts.

## Orientation

Smart Contracts in Waves ecosystem allow to change the default behaviour of accounts and assets. Smart contract is
not a separate entity, it can't be called and it can't call another smart contract.

> [!TIP]
> Waves Smart Account can be called with RIDE4DAPPS features, which is available on the TESTNET now.
> You can find more details about RIDE4DAPPS by the link below.

{% prettylink link="../smart-contracts/smart-accounts.md" %} RIDE4DAPPS {% endprettylink %}

Smart contracts are:
1. Scripts written using RIDE programming language.
2. Predicates over account or asset transactions, which always should return `true` or `false`.
3. Always passive and **not** callable.

Smart Contract Script has access to:  
1. **Blockchain height**. There is `height()` function in the global scope of a script which returns the blockchain
height at the execution time.  
2. **Current transaction fields**. There is `tx` variable in the global scope of a script which contains all fields
of current outgoing transaction, including `proofs` array.
> [!NOTE]
> `Proofs` array is not available in an asset script.  
3. **Proofs**. Any transaction can contain an array of proofs up to 8 elements. By default `proofs` array used for
signatures, but you can put any data in the array (each element is up to 64 bytes).
4. **Key-value storage of any account**.

> [!TIP]
> The best intuition about smart contracts in Waves model are locks. There is a default lock for accounts and assets,
> which checks signatures of transactions. Smart Contracts allow to change that lock to custom, i.e. open lock (every
> user can send transaction from smart account), multisignature (account can send transactions only if multiple people
> sign a transaction), time lock (transactions can be send only after specified blockchain height).

![Smart contracts intuition](../_assets/locks.png)


## Smart Accounts
![MAINNET available](https://img.shields.io/badge/mainnet-available-4bc51d.svg)
![TESTNET available](https://img.shields.io/badge/testnet-available-4bc51d.svg)

Waves uses account-based model, there are no inputs and outputs of transactions like in some other blockchain networks.
All assets and [data](/blockchain/transaction-type/data-transaction.md) associates with an account and bound
to its' public key.

>[!TIP]
> By default, public key “owns” assets and stores key-value data attached by [data transactions](/blockchain/transaction-type/data-transaction.md). To spend funds or update key-value storage the sender
> provides **a valid signature** matching transaction body and public key.

**The main idea **that before the transaction is submitted to be included in the next block, the account checks if
the transaction meets certain requirements, defined in a **script**. The script is attached to the account so the
account can validate every transaction before confirming it.

Smart contract (account script) allows to change the default behaviour of an account by sending a
`setScriptTransaction`. It is an important property that the smart account does not store any
data on the blockchain. A smart account will only have access to blockchain state values that can be retrieved and
executed relatively fast, in a “constant” time.

Every usual account can become smart account.   

{% prettylink link="../smart-contracts/smart-accounts.md" %}Detailed explanation of Smart Accounts with examples {% endprettylink %}

### How to work with state
If you're familiar with Ethereum smart contracts model you have to consider the main difference between them and Waves
Smart Contracts:
>[!NOTE]
> Waves smart **contract** does **not** have its' own state. There is a smart **account** state managed by
> [data transactions](/blockchain/transaction-type/data-transaction.md)

If case you need to work with state you have to use data transactions and manage them with smart account scripts.
More details about  


### Gas and fees

The simplicity of account scripts makes the system very scalable in terms of throughput and smart accounts work  
**without “gas”**, which means that costs are always known upfront.
Transactions from smart account or with smart asset require additional `0.004 WAVES` fee .

>[!TIP]  
> For example, minimal fee for transfer transaction is 0.001 WAVES for usual account and 0.005 (0.001 + 0.004) for
smart account.

### Restrictions

Smart accounts cannot send transactions themselves or transfer funds according to given conditions,
but can read data from the blockchain \(for example, the height of a blockchain or signatures from the transaction\)
and return the result of a predicate obtained on the basis of this data.

## Smart Assets

If we plan to apply constraints on all operations for a specific asset, we cannot use a smart account.
In our paradigm, we have smart assets for this purpose: the script will be attached to the asset and will work in a similar way.
Transactions for such assets are valid only if the script returns True. For example, a script can verify proofs from a transaction,
check if a notary/escrow approves the transaction, and that operations with the asset are not locked for a specified time.
The script for the token is invoked upon the following operations with an asset:

* Transfer Transaction
* MassTransfer Transaction
* Reissue Transaction
* Burn Transaction
* ExchangeTransaction
* SetAssetScriptTransaction

## Waves Smart Contracts Next Steps

Our realization of smart contracts will contain two Stages:

1. **Non-Turing Complete Smart Contracts** which cover a large proportion of use cases, including smart accounts.
2. **Turing Complete Smart Contracts** which will allow the creation of decentralised applications on the blockchain.


> [!NOTE]
> Here you can find [**White Paper**](https://wavesplatform.com/files/docs/white_paper_waves_smart_contracts.pdf?cache=b) which describes Waves Smart Contracts approach: basic use-cases, implementation details and RIDE language description.
