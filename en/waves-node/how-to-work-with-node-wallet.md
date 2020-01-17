# Working with node wallet

Being connected to the node, the wallet enables node with

* ability to mine.
* ability to sign transactions.

The node can have a single wallet with a single seed, contained in the walleе.

In this article, we will review the following scenarios of wallet usage:

* [creating a new wallet from scratch](#new).
* [creating wallet using existing seed](#existing-seed).
* [using existing wallet](#existing-wallet).
* [changing node's account](#re-create).

## Creating a New Wallet From Scratch <a id="new"></a>

Node will create a wallet if the directory listed in `wallet` section of [node's configuration file](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/application.conf) does not contain wallet.dat file. In this case node will also generate a random seed.

When wallet.dat is created, the node will request in the console a password which must be set for newly created wallet.dat. This password will be used to encrypt file contents to prevent stealing seed.

As a result, the full-featured account capable of signing transactions will be created.

## Creating Wallet Using Existing Seed <a id="existing-seed"></a>

If you already have a seed, then input the following parameters in the `wallet` section of [node's configuration file](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/application.conf):

* base58-encoded seed.
* password.

If necessary, change the path to directory where the generated wallet.dat must be placed. `wallet` section example with described settings is provided below:

```
wallet {
    file = ${waves.directory}"/wallet/wallet.dat"
    password = "some-string-as-password"
    seed = "base58-encoded-seed"
}
```

As a result, the wallet.dat will be generated in the selected directory based on the existing seed.

## Using Existing Wallet <a id="existing-wallet"></a>

If you already have the wallet.dat created before, then just put it in the directory listed in the `wallet` section, and specify a password for it with the `password` parameter. Additional actions are not required.

## Changing node's account <a id="re-create"></a>

If you need to change node's account, first of all, delete the existing wallet.dat. After that, you can:

* [create a new wallet from scratch](#new).
* [create a wallet using existing seed](#existing-seed).
* [use other wallet](#existing-wallet).
