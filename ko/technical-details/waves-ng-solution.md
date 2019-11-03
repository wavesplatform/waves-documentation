# 1. Reasoning

The maximum rate of transactions in blockchain systems is limited by the choice of two parameters: block size and block interval.

* The block interval defines the average amount of time that passes between the creation of two blocks. If we reduce this time, forks will appear more frequently, which will lead to either non-resolved forks or to decreased throughput since a considerable amount of time would be spent on resolving these forks.
* Larger blocks lead to huge network usage spikes during block propagation, which in turn will lead to throughput problems and huge forks.

**Note. **Find How Waves-NG Protocol works [**here.**](/platform-features/waves-ng-protocol.md)

# 1.1 Waves-NG Solution With Technical Details

Waves addresses this issue by allowing the miner to continuously farm a block during the time of mining. This continuously increasing block is called liquid block, which becomes immutable when next block referencing it is built and appended. A liquid block consists of a key block and chain of microblocks. The process of creating liquid block goes as follows:

* When miner node observes it has the right to create a block, it creates and sends keyBlock, which is regularly just an empty block.
* After that, it creates and sends microblocks every 3 seconds. Microblock is very similar to regular block: it's a non-empty pack of transactions, which references its parent: previous microblock or key block.
* Microblocks are continuously mined and propagated to the network until a new key block, referencing current liquid block appears.

# 1.2 Microblock Structure

```cpp
generator: PublicKeyAccount
transactionData: Seq[Transaction]
prevResBlockSig: BlockId
totalResBlockSig: BlockId
signature: ByteStr
```

`totalResBlockSig`is the new total signature of a block with all transcations from blockId=`prevResBlockSig`and own`transactionData`. This means that having a\_liquid block\_consisting of 1\_keyblock\_and 3\_microblock\_s:

**KEYBLOCK**\(\) &lt;-**MICRO1**\(tx1,tx2\) &lt;-**MICRO2**\(tx3,tx4\) &lt;-**MICRO3**\(tx5,tx6\)

We have 4 versions of last block:

| ID | Transactions |
| :--- | :--- |
| `KEYBLOCK.uniqueId` | - |
| `MICRO1.totalResBlockSig` | tx1,tx2 |
| `MICRO2.totalResBlockSig` | tx1,tx2,tx3,tx4 |
| `MICRO3.totalResBlockSig` | tx1,tx2,tx3,tx4,tx5,tx6 |

Next miner can reference **ANY **of these ids in its_keyBlock_.

# 2. Economy

For a miner, it might seem a good idea to reference`KEYBLOCK`from previous example and pack all txs from microblocks to its own \(micro\)block\(s\). In order to make 'stealing' transactions less profitable than referencing the best-known version of liquid block\(= the last known microblock\), we change the mechanics of fees: After activating NG, miner will receive 40% of fees from the block it creates and 60% of fees from the block he references.

# 3. Related Protocol Changes

* New block version \(=3\) which can contain up tp 65535 transactions and doesn't require transaction sorting.
* By default miners will first create an empty key block. It's a regular block, propagated by`BlockForged`message, but it now gets broadcasted if it's empty.
* Microblocks are propagated by broadcasting its header for every node which applied it \(`MicroBlockInv`\)`MicroBlockInv`
  contains a verifiable signature to prevent a node from being flooded. Microblock will be requested afterward via `MicroBlockRequest`and received back within`MicroBlockResponse.`Microblocks will be re-requested from another node which has it if a node doesn't respond.

# 4. Configuration

The following miner parameters can be tuned\(though it's best not to change them in order to maximize final version of your liquid block in the resulting blockchain\):

* KeyBlock size \(`maxTransactionsInKeyBlock`, default = 0\). If changed, it won't be rebroadcasted and the usual extension requesting mechanics will be used.
* Microblock mining interval \(`microBlockInterval`, default = 3s\).
* Max amount of transactions per microblock \(`maxTransactionsInMicroBlock`, default = 200\).
* Miner will try to reference the best-known microblock with at least`minMicroBlockAge`age\(default = 3s\). This is required in order for a miner to reference already-propagated block so its key block doesn't get orphaned.
* Microblock synchronization mechanism can be tuned with`waitResponseTimeout`\(default = 2s\) , `processedMicroBlocksCacheTimeout`\(default = 10s\),`invCacheTimeout`\(default = 10s\) which are basically time of awaiting a microblock and times to cache a processed microblock ids and a list of nodes which have a microblock\(by id\).

# 5. API changes

* Upon applying every microblock, last block gets changed, which means`/blocks/last`and`/blocks/at/...`will reflect that.
* `/peers/blacklisted`now expose ban reason, one can clear a node's blacklist via`/peers/clearblacklist`
* `/debug/`and`/consensus/`section are expanded, \_stateHash \_doesn't take \_liquid block \_into consideration.
