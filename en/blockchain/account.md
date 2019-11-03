# Account

An **account** is a [cryptographically bound](https://en.wikipedia.org/wiki/Public-key_cryptography) pair of a public and a private keys on the [blockchain](/blockchain/blockchain.md).

Accounts unambiguously correlate [transactions](/blockchain/transaction.md) and [orders](/ride/structures/common-structures/order.md) with their senders.

## Account public and private keys

Private and public keys have the same size — 32 bytes. The bytes of the keys are converted to a [Base58](https://en.wikipedia.org/wiki/Base58) character string; in this form, the keys are displayed in the interfaces of programs.

Example of a public key in Base58:

```
BRzAFccE3BeAn8rf7Mf56LoqUdT5xExbMUEgV7wGsiKx
```

Example of a private key in Base58:

```
9g5fFTwrLz9FEbgsE3ujfXPj92h5F4HDK6ew5LXh1ViZ
```

An **account owner** is an owner of both account keys at the same time: both public and private.

## Transaction digital signature

_All_ transactions have a _single_ sender; the only exception is [genesis transactions](/blockchain/transaction-type/genesis-transaction.md) — they do not have a sender.

A transaction contains the sender's _public key_. Before sending the transaction, the sender signs it with his _private key_. The account that signed the transaction is called the **transaction sender**. The signature that results from signing the transaction is called the **transaction digital signature**. If account Y is the sender of the transaction, it is said that the **transaction was sent from account Y**.

The transaction is sent to the [blockchain network](/blockchain/blockchain-network.md) along with its digital signature. The digital signature and the sender's public key are used to verify the authenticity of the transaction data.

## Account balance

An account may store different [tokens](/blockchain/token.md) in different amounts. The amount of the token on the account is called the [account balance](/blockchain/account/account-balance.md) in this token.

## Account address

Each account has a _single_ [address](/blockchain/account/address.md).

Example of address in [Base58](https://en.wikipedia.org/wiki/Base58):

```
3MsoC9tFzt4jcfHvmv4DBCap2ttokY5Ve9S
```

When transferring a token from one account to another, instead of using the public key of the recipient, its [address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) is used.

## Scripted account

Using the [set script transaction](/blockchain/transaction-type/set-script-transaction.md) you can attach a [script](/ride/script.md) to the account. An account with a script attached to it is called a **scripted account**. An account without a script is called a **simple account**.

There are two types of scripts that can be attached to an account: an [account script](/ride/script/script-types/account-script.md) and a [dApp script](/ride/script/script-types/dapp-script.md). The account to which an account script is attached is called a [smart account](/blockchain/account/smart-account.md). An account with dApp script attached to it is called a [dApp](/blockchain/account/dapp.md).

## Account data storage

Each account has an [account data storage](/blockchain/account/account-data-storage.md) that stores data records in key-value format.

The account data storage serves as a database for the information that is associated with the account.
