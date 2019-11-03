# Leased Proof of Stake \(LPoS\)

# Overview

Any blockchain requires a mechanism allowing to decide which chain of blocks is valid and to ensure there are no double-spending \(e.g. sending same money to different parties in separate chains\). There are several approaches to achieve this.  
Waves use so-called Proof-of-Stake consensus algorithm. Here we'll describe it and compare with widely used Proof-of-Work algorithm which used, for example, in Bitcoin.

Since each Blockchain is a system of decentralized “nodes” \(or computers confirming transactions occurring on the network and maintaining a decentralized consensus across the system\) it is important for these nodes, also known as “miners” in the Proof-of-Work system, or “validators” in the Proof-of-Stake system, to be incentivized to keep confirming transactions. The way in which “miner” or “validator” nodes confirm transactions and how those nodes are incentivized to do so - is the main distinction between Proof-of-Work and Proof-of-Stake.

# 1. Proof-of-Work \(PoW\) 

Proof-of-Work is a consensus algorithm which requires a block generator to perform an expensive computer calculation, also called mining, that needs to be performed in order to create a new group of trustless transactions \(the so-called block\) on a distributed ledger called blockchain.

Mining serves have two purposes:

1. To generate a chain of blocks which can be considered as the only one main chain \(since it's too resource-consuming to create alternative one\)

2. To create new coins \(increasing total supply\) by rewarding miners for performing the previous task.

**When you want to set a transaction this is what happens behind the scenes:**

* Transactions are bundled together into a block.

* Miners verify that transactions within each block are valid.

* Then miners should solve a mathematical puzzle to generate a valid block.

* Block with solved puzzle considered as valid and broadcasted to all nodes in the network and stored in the public blockchain

* A reward is given to the first miner who solves each blocks problem.

This “mathematical puzzle” has a key feature: asymmetry. The work, in fact, must be moderately hard on the requester side but easy to check for the network. This idea is also known as a CPU cost function, client puzzle, computational puzzle or CPU pricing function. All the network miners compete to be the first to find a solution for the mathematical problem that concerns the candidate block, a problem that cannot be solved in other ways than through brute force so that essentially requires a huge number of attempts. When a miner finally finds the right solution, he/she announces it to the whole network at the same time, receiving a cryptocurrency prize \(the reward\) provided by the protocol.

'51% attack' refers to an attack on a blockchain system. By controlling the majority of the computing power on the network, an attacker can release his new fork and regains his coins by executing a "double spend" attack which will allow his own coins to be spent multiple times. The attacker could spend coins in one place, allow the coins to enter the blockchain as normal until the required confirmations are met, then fire up their 51% of the miners to craft a fraudulent fork of the blockchain in which those coins were never spent, allowing them to re-spend the coins. This could theoretically be repeated for as long as the attacker maintained control of 51%.

The advantage of a Proof-of-Work network is that the majority of voting power when implementing important changes to the system is divided among miners, developers and other crucial members of the community. Meanwhile, in a Proof-of-Stake network, major stakeholders have a technical ability to make any changes they like without considering the will of the community, businesses, miners, and developers.

This centralization of voting power and, essentially, control of the network defeats the purpose of a distributed ledger-based cryptocurrency since it contradicts its entire principle of distributing all elements within the network to avoid the presence of a central authority.

## 1.1 Proof-of-Work downsides 

* Requires more electric power which in turn costs the miner.
* High computing power hardware which is expensive.
* Possibility of miners moving their hardware to mine a different coin if the reward is better there \(loyalty\).
* With more and more coins \(like more count of bitcoins\) getting released, miner’s reward would come down as the coin becomes scarce to mine.

# 2. Proof-of-Stake \(PoS\) 

Proof-of-Stake is a different way to validate transactions based and achieve the distributed consensus. The purpose is the same of the proof of work, but the process to reach the goal is quite different.

In PoW number of miner's blocks is proportional to the amount of hardware resources and energy he invested. In contrast, in PoSa person can mine or validate block transactions according to the amount of coins he or she holds. So unlike the Proof-of-Work, the creator of a new block is selected in a practically random manner, with greater amounts of stake increasing the likelihood of adding a block to the chain.

Usually, in the PoS system, there is no block reward, so, the miners take the transaction fees. That's why miners are often called block forgers or generators, instead, Figure 1.

With a PoS, the attacker would need to obtain 51% of the cryptocurrency to carry out a 51% attack. The proof of stake avoids this ‘tragedy’ by making it disadvantageous for a miner with a 51% stake in a cryptocurrency to attack the network. Although it would be difficult and expensive to accumulate 51% of a reputable digital coin, a miner with 51% stake in the coin would not have it in his best interest to attack a network which he holds a majority share. If the value of the cryptocurrency falls, this means that the value of his holdings would also fall, and so the majority stake owner would be more incentivized to maintain a secure network.

PoS has to constraints to avoid some kinds of attacks:

* Minimum amount of WAVES to generate is 1000 WAVES
* When a balance is increased generating balance will be increased after 1000 blocks.

## 2.1 Why we use Proof-of-Stake 

* Significant advantages of Poof-of-Stake include energy efficiency
* Waves Implement the Proof-of-Stake method for a more greener and cheaper distributed form of consensus.
* In Proof-of-Stake, forgers are always those who own the coins minted.

![](/_assets/PoW.png)Figure 1, PoW vs PoS

# 3. Leased Proof-of-Stake \(LPoS\) 

LPoS is an enhanced version of Proof-of-Stake. In a regular Proof-of-Stake system, each node that holds a certain amount of cryptocurrency is eligible to add the next block to the blockchain but in the LPoS system, on the Waves Platform, users can lease their balance to full nodes. With LPoS, the user will have the ability to Lease WAVES from the wallet to different contractors which can pay a percentage as a reward. The larger the amount that is leased to a full node, the higher the chances of that full node being selected to produce the next block. If that full node is selected to produce the next block, the leaser will then receive a percentage of the transaction fee that is collected by the full node.

In a Leased Proof-of-Stake environment, users can choose between running a full node or leasing their stake to a full node with receiving rewards. This system allows anyone to participate in the Waves network maintenance.

User can lease his WAVES through leasing on any computer or mobile device that has an internet browser since Waves provides a lite client solution that does not require "Miners", that are leasing their balance to store the whole Blockchain or to have the wallet running, Figure 2.

![](/_assets/Webp.net-resizeimage-2.jpg)  
Figure 2, LPOS System

## 3.1 Benefits of leasing your WAVES 

Safety \(your WAVES never leave your wallet\):

* Node operators can use your mining power to generate blocks without the user even having to send their WAVES at all.
* Leasing is safe as the coins never actually leave your wallet.
* The users can discontinue leasing with a click of a button and just wait for the cancel lease transaction to go through, Figure 2.
* The only thing to consider when leasing is choosing the right node operator, as operator's node may work with different efficiency and send back different percentage of income.

Minimum Balance Required to Run a Node:

* Operators don't need to put down a lot of capital to be able to operate a node.
* The balance of the node can be empty until there are enough people wishing to lease to it by reaching together the generating balance of 1000 WAVES and create together a pool.

Get Rewards:

* Miner may send leaser a part of rewards according to his conditions.
* The more transactions that are made on the network, the more rewards leasers get.
* These rewards mostly come in the form of WAVES but also can come in the form of different tokens with the unique Waves feature where different tokens can be accepted as a fee.

# 3.2 Leasing Transactions 

## 3.2.1 Create Leasing Transaction 

```css
id: '9q7X84wFuVvKqRdDQeWbtBmpsHt9SXFbvPPtUuKBVxxr' ,
sender : '3HgqG68qfeVz5dqbyvqnxQceFaH49xmGvUS' ,
fee : 0.001,
amount : 10,
recipientAddress : '3HQanDJhZSsSLbCjTCsMYpPvuj2ieGwKwQ9'
timestamp :46305781705234713
```

## 3.2.2 Cancel Leasing Transaction 

```css
sender : '3HgqG68qfeVz5dqbyvqnxQceFaH49xmGvUS' ,
leaseId: '9q7X84wFuVvKqRdDQeWbtBmpsHt9SXFbvPPtUuKBVxxr'
```

# 3.2.3 Useful links for leasing 

For Step-by-Step guide to lease your waves, click [here](/en/waves-client/account-management/waves-leasing.md).

For the List of generators click [here](http://dev.pywaves.org/generators/).

For Waves Nodes click [here](https://wavesplatform.com/leasing#nodes).

