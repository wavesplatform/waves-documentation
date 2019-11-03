# Oracle

**Oracle** is a data provider from the outside world on the [blockchain](/blockchain/blockchain.md).

## Sources of the outside world

**Software oracles** handle data accessible on the web. For example, the temperature, costs of products and merchandise, flight or train delays, etc. The information originates from online sources, e.g. API. The product prophet extricates the required data and pushes it into the blockchain.

**Hardware oracles** track real-world objects with devices and sensors. For example, a video camera with an analytics function virtual line crossing tracks vehicles entering a specific zone. If an event is detected, the oracle writes about it on the blockchain. Based on the data of such oracle, some script of decentralized application on the blockchain may be triggered. In this case, for example, a fine and the write-off of tokens from the account of the vehicle owner. But it is not in oracle scope, is in the scope of the script that is based on the data of such an oracle.

**Human oracles** imply that the data is entered by a human being.

## Oracles issue

The oracle is a way of connecting the blockchain with the outside world.

The major problem that is solved by the usage of oracles is the very point that blockchains can only access data that is stored on the blockchain. Here, in blockchain, the point is that it is important that decentralized applications can only access data that is stored on the blockchain so that every execution of the script leads to the same result at a given point in time. Therefore, decentralized applications are not able to access data from outside the blockchain, e.g., provided by web services or other external sources of data.

Nevertheless, much interesting application needs access to the outside world, e.g., decentralized application for insurances, decentralized betting systems, financial services and so forth.

Here, the solution is quite straightforward: if external data is necessary for the execution of a decentralized application, this data needs to be stored on the blockchain. To achieve this, there are usually small programs implemented that access the necessary data and write it to the blockchain. Those little programs are called oracles.

## Consensus of oracles

One source may be unsafe if it does not have the authority or high rating. However, several oracles can be used to stay away from the monopoly and have safer. For example, get information from ten oracles and only if the data of 6 out of 10 oracles coincide, to accept them. This is the consensus of the oracles.
