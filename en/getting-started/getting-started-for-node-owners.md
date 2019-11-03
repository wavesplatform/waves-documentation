# Node owner guide

[Get to understand what is a Waves full node](/waves-node/what-is-a-full-node.md). Nodes are a critical part of Waves ecosystem. By Running a Waves node, you help in processing transactions and you will increase your profit for securing the network if users [start leasing](/waves-client/account-management/waves-leasing.md) their funds to your node \(The more WAVES you lease to a node, the more rewards you will receive, you can lease any sum from 0.002 WAVES\).

The WAVES you own \(or that have been leased to you\) reflect your mining power, the more you own, the higher your chances of processing the next block and receiving the transaction fees as a reward. The final amount will also depend on overall network activity and the level of fees generated.

The Waves full node serves **two critical roles**:

1. To relay blocks and transactions to miners
2. To answer queries for end users about the state of the blockchain.

## Running a Node

There're different options when you want to deal with Waves full node and you will need to [check the node configuration](/waves-node/node-configuration.md) before following any option. The balance of the node can be empty until there are enough people wishing to lease to it by reaching together the generating balance of **1000 WAVES** (the minimum balance) and create together a pool.

### Installing a node

* The easiest way to run a Waves Node is by using the new [Waves Docker container](/waves-node/waves-node-in-docker.md). It requires just one command to enable everything or to change the settings of the node.
* The another way is to [download the latest version](https://github.com/wavesplatform/Waves/releases) of `waves.jar` and the required `.conf` configuration file \(for mainnet or testnet\) to any folder, for example `~/waves`. You can [follow these steps](/waves-node/how-to-install-a-node/how-to-install-a-node.md) of installing a node depending on your operating system.

{% prettyhint type="info" %} Please check <a href="/waves-node/how-to-install-a-node/how-to-install-a-node.md"> &nbsp;The Activation Process of New features. </a> {% endprettyhint %}


### **Getting actual blockchain**

After installing a node, you will have different ways to get the blockchain. follow the [getting blockchain guide](/waves-node/options-for-getting-actual-blockchain.md).

## Already a node owner

If you're already a node owner, you will need to check the new updates and then go for one of these two options:

### Upgrade your node

Basically, the node should be upgraded by following the [upgrading instructions](/waves-node/upgrading.md).

### Dealing with Forks

You can check the blockchain height or the last 100 signatures of blocks to understand if your node is on fork or not. You can use [chaincmp](https://github.com/wavesplatform/gowaves/releases/tag/v0.1.2) utility to compare blockchains on the node and reference nodes.


Your node can be in one of two possibilities:
* your node on fork with height **less** than 2000 blocks or **more** than 2000 blocks.
In case that your node is on fork with a height less than 2000 blocks, here you can implement rollback through [rollback instructions](/waves-node/how-to-rollback-a-node.md). 

* Otherwise, you need to choose an [option for Getting Actual Blockchain](/waves-node/options-for-getting-actual-blockchain.md).

{% prettyhint type="info" %} If you're interested in joining the Testnet, you will need to follow these steps for<a href="/waves-node/joining-testnet.md">&nbsp;Joining The Testnet. </a> {% endprettyhint %}
