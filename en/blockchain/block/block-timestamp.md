# Block timestamp

A **block timestamp** is a time of [block generation](/blockchain/block/block-generation.md).

The time is specified in _milliseconds_ that have passed since the beginning of the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).

When the [node](/blockchain/node.md) receives a new block from the [blockchain network](/blockchain/blockchain-network.md), it verifies that the timestamp value of the block does not outpace the [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) time by more than 100 milliseconds.

The timestamp value of the block is validated by nodes using the formula from FPoS.
