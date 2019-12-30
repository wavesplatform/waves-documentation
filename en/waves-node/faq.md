# Frequently Asked Questions

### 1. I'm syncing my node for 3 days now. Its very slow. 100 blocks update every 3 min or so. Im on a 4gb ubuntu server. what is the verification speed?

The verification speed depends on your CPU resources. RAM is also valuable, but CPU needs to be fast for good speed. We added some explanations_** **_[_**here**_](/waves-node/options-for-getting-actual-blockchain.md).  Also the bottleneck could be in your hard drive \(we recommend using SSD\), or network.

### 2. I was trying to set up a Waves platform, there I used

```
-e WAVES_WALLET_SEED_BASE58=h7KnZpw9j9VZ4z3LKmsbZ3yw8rP3zXoEEU6cbRKzCP8MdC1zy2U2AJRPQhs3krqSodvzEix3kmKopFeyPpCn4w4BaW9MVr4PASShxiuin9jyzGmMsUwXXMaUjGL1RfTzS3e
```

### but when I see the `local.conf`file it appoints a different seed value. What could be the problem ?

If you want to pass config parameter to node as startup flag, then you should do it as follows: `-D config.param.path=value`

For seed it will look like: `waves -D waves.wallet.seed="base58 seed value"` or you can use `WAVES_WALLET_SEED="seed base58 value".`

`WAVES_WALLET_SEED_BASE58`- env variable, that will be used as wallet seed, but will not be written to `local.conf`

### 3. What is the fastest way to get all blocks?

Importing is the fastest way to get all blocks. You get it in single file, not from other nodes by inter-nodes protocol. But you still need to verify every block. If you want not to verify everything - you need to download state. Check Option 3 [_**here**_](/waves-node/options-for-getting-actual-blockchain.md).

### 4. I encountered some data corruption due to a UPS failure, what is the URL to download the Waves blockchain so I can import it into my node ?

[_**Download Waves blockchain**_](https://docs.wavesplatform.com/en/waves-node/options-for-getting-actual-blockchain/export-and-import-from-the-blockchain.html#section-4fc821c89c016f375dbd2eeedfe093cf).

### 5. How can I use testnet matcher in desktop wallet?

now it's impossible to use it in desktop wallet ,instead of that use [_**https://testnet.wavesplatform.com/**_](https://testnet.wavesplatform.com/).

### 6. I launched my node. I am new to this and now I would like to learn what to do next, what I need to learn in order to understand how what works?

The best is to start with [_**As a Node Owner Guide**_](/getting-started/as-a-node-owner.md).

### 7. I have my own node, where can I check that it's included in the list of nodes?

You can check it [_**here**_](http://dev.pywaves.org/nodes/).

### 8. How can I run Waves node on my smartphone?

You will need to follow the steps in this article [_**"How to run Waves node on a smartphone"**_](https://medium.com/@ikardanov/how-to-run-waves-node-on-a-smartphone-eeb8817b8d56). some things to take into account: there is a lock permission problem if installed under root user better use a sudoer user. leveldb can be isntalled for ubuntu and be referenced in waves conf file as shown in this tutorial.

### 9. Is it allowed to let two nodes run against the same wallet? I don’t want to get penalties or conflicts. That way there’s redundancy and maintenence possibilities without bringing the forging down.

It is allowed, but not recommended. It will lead to micro forks.

### 10. I'm looking to host a full node. Is it mandatory to have static ip? There are entries in the configuration file to fill with your own ip address but don't know how the service will behave when my isp changes my ip.

You might run into troubles with a dynamic IP, because the address you expose does not match the address people want to connect on. Also people save your address in a local database, to connect to you when they restart i.e. So for good performance a static IP would be better.

### 11. I’m thinking of migrating my waves full node to an instance on AWS. I know they have policy that forbids bitcoinmining. Anyone know if a waves node is allowed here?

Yes it's allowed. there are lot of Waves node currently hosted in Amazon.

### 12. My node says in status : Forked at 133xxxx what does that mean?

It means that your node is on fork. Check [_**how to rollback a node**_](/waves-node/how-to-rollback-a-node.md)_**.**_

### 13. How to know exactly if the node is on fork or not? is there a pywaves utility or API command that show it?

You can check the blockchain height or the last 100 signatures of blocks to understand if your node is on fork or not \(compare block generators and signatures with other nodes api. [http://dev.pywaves.org/nodes/](http://dev.pywaves.org/nodes/) can also show status of nodes\). You can use the [rest api](/waves-node/node-api.md) with swagger on different nodes to compare block \# on both. looking for different generators in the same block height.

Your node can be in one of two possibilities: your node on fork with height **less** than 2000 blocks or **more** than 2000 blocks**.**  
In case that your node is on fork with a height less than 2000 blocks, here you can implement **rollback**_** **through _[**rollback instructions**](/waves-node/how-to-rollback-a-node.md). Otherwise, you need to choose an [_**option for Getting Actual Blockchain**_](/waves-node/options-for-getting-actual-blockchain.md).

