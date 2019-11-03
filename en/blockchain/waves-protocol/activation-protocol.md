# Activation Protocol

# 1. Features

New versions of Waves software bring new features. Those new features should be activated by many nodes at the same time. Before now features were activated by timestamps. That put node owners in a tight time frame to update their nodes. Failure to update a node in time led to the unintentional participation to a fork. Features Activation Protocol gives the Waves community the ability to apply new features with a suitable pace. Or not apply some of them at all.

## 1.1 Features identification

Each new feature will be assigned a unique sequential number. List of new features with their IDs will be provided with each new release. Feature support by software

New features come with new versions of node’s software. Different versions could operate identically until activation of new features. After activation of a feature network will diverge in two parts: nodes that implement this feature and nodes that does not.

## 1.2 Feature states on blockchain

State of features is stored on the blockchain. The feature can be in one of three states. The initial state called Defined. Every feature, even non-existent, has it state initially. The next state - Approved. That means the feature received a required number of votes from miners. After a defined period \(number of blocks\) approved feature became Activated. From that moment \(block\) nodes that implement the feature start to operate in a new way.

# 2. Voting

Voting is performed by miners. If miner supports some feature and wants to vote "yes" it has to put its number \(ID\) in the list of supported features in the configuration file. From now on every block forged by this miner will contain the IDs of supported features. Every 10000 blocks \(this number may differ on other blockchains\) the node sums up the number of blocks with support for a feature. If a feature was supported in more than 80% of blocks during the last calculation period it became Approved. Otherwise, the voting continues and could take another voting period \(10k blocks for Mainnet\) or more.

If the node sees that a new feature was approved, but the node does not implement it, it will log the warning message about the upcoming activation of an unsupported feature.

Before an approved feature become Activated another 10000 blocks have to pass. This period intended for the update of non-mining nodes to a new version.

If a new feature was activated but the node was not updated to support it, the node will shutdown itself \(default behavior\) and log the error about activation of the unsupported feature.

**Warning**

```
 On the Testnet approval and activation periods were set to 3000 blocks each.
 It will allow a faster activation of new features for testing purposes.
```

# 3. Configuration file changes

The new configuration file section `features` was introduced. It contains two parameters:

* auto-shutdown-on-unsupported-feature could be yes or no. If this setting is turned on, the node will be shut down on activation of a feature that is not implemented by node’s codebase. By default, it set to yes.

* supported contains the list of features IDs, that node owner is supporting. By default, the list is empty.

Below you can see an example of the new section.

```js
 features {
   auto-shutdown-on-unsupported-feature = yes
   supported = []
 }
```

# 4. Changes to REST API

To support the Features Activation Protocol new API method was added to the node/activation route. In response, the JSON that describes the current state of features will be returned.

```js
 {
   "height": 678929,
   "approvalInterval": 10000,
   "approvalThreshold": 8000,
   "nextCheck": 680000,
   "features": [
       {
           "id": 1,
           "blockhainStatus": "ACTIVATED",
           "nodeStatus": "SUPPORTED"
       },
       {
           "id": 2,
           "blockhainStatus": "APPROVED",
           "nodeStatus": "SUPPORTED"
       },
       {
           "id": 3,
           "blockchainStatus": "VOTING",
           "nodeStatus": "SUPPORTED",
           "supportBlocks": 7892,
       },
       {
           "id": 4,
           "blockchainStatus": "VOTING",
           "nodeStatus": "UNSUPPORTED",
           "supportBlocks": 7892
       }
   ]
 }
```

Fields of returned object:

* `height` - current blockchain height on node

* `approvalInterval` - Approval or Activation periods length in blocks

* `approvalThreshold` - Number of blocks that supports a feature to approve it

* `nextCheck` - Next height to calculate approval or activation statuses of features

* `features` - List of all features

* `id` - Feature ID

* `blockchainStatus` - Current status of the feature on the blockchain, could be DEFINED, VOTING, APPROVED or ACTIVATED

* `nodeStatus` - Node feature status, could be SUPPORTED or UNSUPPORTED

* `supportBlocks` - Number of blocks that contains support for the feature

# 5. Example

In version 1.0.0 a new cool feature was introduced. It has ID 123.

Mining pool 'SuperMiners' with a total stake of 40% supports the feature. Administrator of 'SuperMiners' updates the node from version 0.9.9 to 1.0.0. And adds 123 to the list of supported features in the configuration file. 'SuperMiners' node starts to put ID 123 into each mined block since height 1228765. But no other miners supported the feature but some of them updated their nodes to version 1.0.0.

At block number 1230000 nodes calculated that only 50% of blocks contains support for feature 123. So, the status of feature stays unchanged, the voting was unsuccessful for the period and it continues.

During the next 10000 blocks 'SuperMiners' convinced few smaller miners to support the feature. On block 1240000 it turns out that the feature is supported in 9102 of last 10000 blocks. That means 91%. So, the status of the feature changed to approved. At this moment nodes that run on version 0.9.9 and earlier warn their owners about the approval of an unsupported feature.

At block 1250000 the feature number 123 will be activated and nodes version 1.0.0 and above start use it. Nodes on earlier versions will stop working.

