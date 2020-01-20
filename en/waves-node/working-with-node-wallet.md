# Working with node's wallet

Wallet, or wallet.dat file, contains seed encrypted with user's password. Presence of wallet is mandatory for mining. Private key used by node to sign generated blocks, is formed using the seed. 

In this article we will review the following scenarios of wallet usage:

* [creating a new wallet from scratch](#new).
* [creating wallet using existing seed](#existing-seed).
* [using existing wallet](#existing-wallet).
* [changing node's account](#re-create).

## Creating a New Wallet From Scratch <a id="new"></a>

During first launch, the node will create a wallet if the directory listed in `wallet` section of [node's configuration file](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/application.conf) does not contain wallet.dat file.

In the process of wallet creation the node will generate seed and ask for a new password which will be used to encrypt the seed. To omit entering password each time node is started, it is recommended to specify it in node's configuration file `/etc/waves/waves.conf`.

## Creating Wallet Using Existing Seed <a id="existing-seed"></a>

If you already have a seed, then input the following parameters in the `wallet` section of `/etc/waves/waves.conf`:

* base58-encoded seed.
* password.

If you have lost the password, then node will request a new one during startup.

There are lots of online base58 encoders. It is reasonable to use console of [Waves IDE](https://ide.wavesplatform.com/). To encode seed to base58, enter `"your-seed-phrase".toBytes().toBase58String()` to console.

If necessary, change the path to directory where the generated wallet.dat must be placed. `wallet` section example with described settings is provided below:

```
wallet {
    file = ${waves.directory}"/wallet/wallet.dat"
    password = "some-string-as-password"
    seed = "base58-encoded-seed"
}
```

As a result, the wallet.dat will be generated in the selected directory based on the existing seed.

[Example of node's configuration file](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/application.conf).

## Using Existing Wallet <a id="existing-wallet"></a>

If you already have the wallet.dat created before, then just put it in the directory listed in the `wallet` section, and specify a password for it with the `password` parameter. Additional actions are not required.

If you have lost the password, then node will request a new one during startup.

## Changing node's account <a id="re-create"></a>

If you need to change node's account, first of all, delete the existing wallet.dat. After that, you can:

* [create a new wallet from scratch](#new).
* [create a wallet using existing seed](#existing-seed).
* [use other wallet](#existing-wallet).
