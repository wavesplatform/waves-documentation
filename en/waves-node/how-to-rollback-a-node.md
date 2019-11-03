# How to Rollback Your Node

The user can **rollback** to a specific height which will remove all blocks after that given height.

The user has two options:

1. The user is able to implement rollback under the following condition: **the rolling back can be implemented no more than 2000 blocks. **The node's owner can implement the rollback by Using `REST/debug/rollback` with the **API key** \(Please, check [_**Waves Full Node API**_](https://nodes.wavesplatform.com/api-docs/index.html#!/debug/rollback)\). For example,
```js
   {
     "rollbackTo": 1057490,
     "returnTransactionsToUtx": false
   }
```
2. If the condition is not met \(the user needs to rollback to more than 2000 blocks\), then the user needs to follow these [_**instructions**_](/waves-node/options-for-getting-actual-blockchain.md) to get the actual blockchain state.

You can use [**_chaincmp_**](https://github.com/wavesplatform/gowaves/releases/tag/v0.1.2) utility to compare blockchains on the node and reference nodes.




## Common issues while implementing rollback

If the user requests a **rollback** via **curl/swagger** and gets **error 503,** it doesn't mean its not processing the user request \(It is just its timeout'ed\). To check if nodes actually processing, make sure to check that user's node state doesn't change \(with status check if block height is not rising\) after the user starts reroll. It will take some time to process to start _synchronization_ again from a desired location.  
The node can process a **rollback** to up to **2000 blocks** without restating, so if the user is on fork for some reason then be sure to rollback as soon as possible or you will have to restate probably for longer period of time than it is intended.

