# Mining reward

The **mining reward** is a blockchain feature under which [miners](/blockchain/mining/miner.md) receive a fixed fee in [WAVES](/blockchain/token/waves.md) for each [generated block](/blockchain/block/block-generation.md).

Mining rewards are paid due to the additional issue of the WAVES token.

## Current reward size

You can view the current reward size by making a request to the [Node API](/waves-node/node-api.md). In response to the request, JSON is returned, the value of the `currentReward` field of which is the current mining reward size in [WAVELET](/blockchain/token/wavelet.md)s.

Example of request:

``` console
curl https://nodes.wavesplatform.com/blockchain/rewards
```

Example of response:

``` json
{
  "height": 1742254,
  "totalWavesAmount": 10001353000000000,
  "currentReward": 600000000,
  "minIncrement": 50000000,
  "term": 100000,
  "nextCheck": 1839999,
  "votingIntervalStart": 1830000,
  "votingInterval": 10000,
  "votingThreshold": 5001,
  "votes": {
    "increase": 0,
    "decrease": 0
  }
}
```

In the example above, the value of the JSON's `currentReward` field is 600,000,000 WAVELETs — i.e. it's 6 WAVES.

## The change of mining reward size over time

Every 100,000 blocks, i.e. approximately every 70 days, a new voting for the current reward size change begins among the miners.

The voting duration is 10,000 blocks. During this time, miners vote to increase, decrease or leave the current reward size unchanged.

The elected reward size remains unchanged for 100,000 blocks following the end of voting.

## Voting

Miner specifies the new desired reward size using the `waves.rewards.desired` setting in the node configuration file; the setting value is specified in [WAVELET](/blockchain/token/wavelet.md)s.

Example of the setting which value is 7 WAVES:

``` console
waves.rewards.desired = 700000000
```

The value can be any integer in the range from 0 to 9,223,372,036,854,775,807 inclusive.

When a [mining node](/blockchain/node/mining-node.md) generates a block, it writes into that block the value of the `waves.rewards.desired setting` from its own configuration file. If the setting value is not specified in the configuration file, then -1 is written to the block.

During the voting time in 10,000 blocks, a single mining node can generate several blocks, therefore one mining node can vote several times. How often a mining node generates blocks is determined by the LPoS consensus.

## How votes are counted

To count the votes, all 10,000 blocks generated during the voting period are inspected.

If either -1 or the value that is equal to the current reward size is recorded to the block, then miner votes for keeping the current reward size.

If the value recorded to the block is greater than the current reward size, then miner votes for the current reward size increase; if the value is smaller — for the decrease.

The mining reward is increased/decreased only if more than half of the 10,000 votes — i.e. 5,001 votes or more — were given for increase/decrease. The amount of the current reward is increased/decreased by 0.5 WAVES _step_.

## Examples

### Example 1

At the [blockchain height](/blockchain/blockchain/blockchain-height.md) of 2,000,000, the mining reward equals 5 WAVES. At the height of 2,090,000, another voting starts.

During the 10,000 blocks of voting 6,000 votes were given for reward increase, 1,000 — for decrease, 3,000 — for keeping the current reward size.

From the height of 2,100,000 to the height of 2,199,999, the new reward size will be 5.5 WAVES, because the reward change step is 0.5 WAVES.

The next voting will take place from the height of 2,190,000 to 2,199,999.

### Example 2

At the blockchain height of 2,100,000, the mining reward equals 5.5 WAVES. At the height of 2,190,000, another voting starts.

During the 10,000 blocks of voting 4,500 votes were given for reward increase, 4,000 — for decrease, 1,500 — for keeping the current reward size.

From the height of 2,200,000 to the height of 2,299,999, the "new" reward size will be the same — 5.5 WAVES. Although the highest number of votes were given for the reward increase, it was not enough to change the current reward size. In order for the current reward size to be increased, at least 5,001 votes must be given for the increase.

The next voting will take place from the height of 2,290,000 to 2,299,999.
