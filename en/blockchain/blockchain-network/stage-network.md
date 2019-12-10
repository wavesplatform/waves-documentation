# Stage network

The **stage network** or the **stagenet** is a Waves blockchain that is used for testing experimental functionality.

Previously, new Waves functionality was published on [testnet](/blockchain/blockchain-network/test-network.md) before it was available on mainnet.

However, when developing Waves-based projects on testnet, users could face problems due to the rollback of blockchain height caused by the instability of the testnet version.

To avoid this kind of issue, we’ve launched a new experimental blockchain: the stagenet. New, experimental functionality will be now published on stagenet.

The Waves testnet and mainnet will have the same versions and will be updated simultaneously. You can use testnet without fear of a blockchain rollback.

Join the stagenet to keep abreast of all innovations and be among the first to test new functionality.

Stagenet is a fully functioning Waves blockchain but, like on testnet, on stagenet the WAVES token has no value because it can be received for free. Stagenet will help developers to test the functionality of new versions of Waves before they are deployed on testnet and mainnet.

To use nodes on stagenet, you will need to:

* Download the latest version of the Waves [node software](https://github.com/wavesplatform/Waves/releases)

* Download [waves-StageNet.conf](https://github.com/wavesplatform/Waves/blob/version-0.17.x/node/waves-stagenet.conf) (Skip this step, if you use the DEB package for a node installation)

* Install the node as described in the [manual](https://docs.wavesplatform.com/en/waves-node/how-to-install-a-node/how-to-install-a-node.html)

After that the node will begin downloading blocks. To speed up the process, you can import blocks as described in the [manual](https://docs.wavesplatform.com/en/waves-node/options-for-getting-actual-blockchain.html).

If you’d like to become a miner on stagenet, please send a [request](https://wavesplatform.atlassian.net/servicedesk/customer/portal/11/create/178) for WAVES tokens for leasing.

To get WAVES tokens for your stagenet account use the [faucet](https://wavesexplorer.com/stagenet/faucet).

Stagenet has also been added to:

* [Waves Explorer](https://wavesexplorer.com/stagenet)

* [Waves IDE](https://ide.wavesplatform.com/). To use IDE with stagenet, specify `Custom Nodes` as `https://nodes-stagenet.wavesnodes.com/` and `Network byte` as `S` in the Settings.

* [Waves Keeper](https://wavesplatform.com/technology/keeper). To use Waves Keeper with stagenet, specify `Node address` as `https://nodes-stagenet.wavesnodes.com/` and `Matcher address` as `https://matcher-stagenet.wavesplatform.com` in Keeper’s settings.

If you have any questions, feel free to ask them in Discord on the [stagenet channel](https://discordapp.com/channels/420933539375087617/615843628618612746).
