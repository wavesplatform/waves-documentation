# Waves Network Structure

The structure of the peer-to-peer network impacts the security and performance of cryptocurrencies. A geographically clustered network can quickly propagate a new block to many other nodes. This makes it more difficult for a malicious miner to propagate conflicting blocks/transactions quicker than honest nodes.

However, a less clustered network may mean that full nodes are being run by a wider variety of users which is also good for decentralization.

Waves has a peer-to-peer network for disseminating block and transaction information.

Any computer running blockchain software is considered a node of that blockchain.

Waves also contain full nodes allowing anyone to take part in the decentralized process of block creation.

The Waves full node serves two critical roles:

1. To relay blocks and transactions to miners
2. To answer queries for end users about the state of the blockchain.

# The Importance of a Full Node

The job of a full node is to store the blockchain data, pass along the data to other nodes, and ensure newly added blocks are valid. Validation entails ensuring that the format of the block is correct, all hashes in the new block were computed correctly, the new block contains the hash of the previous block, and each transaction in the block is valid and signed by the appropriate parties. Full nodes may also act as mining nodes \(i.e., generating new blocks\), The mining node checks that each transaction is self-valid since the other nodes would reject the block if it included invalid transactions.

Any node may propose new transactions, and these proposed transactions are propagated between nodes until they are eventually added to a block.

**Note.** You can find a full nodes list at [dev.pywaves.org](http://dev.pywaves.org/generators/) and [Here](https://wavesplatform.com/leasing#nodes) you can find a list of the top nodes by WAVES balance.
