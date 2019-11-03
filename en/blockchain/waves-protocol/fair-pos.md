# **Fair Proof-of-Stake**
From the very beginning up until now Waves has used a "pure" Proof of Stake (PoS) model (more about PoS you can find [here](/waves-environment/waves-protocol/leased-proof-of-stake-lpos.md)), as proposed by [Nxt](https://nxtwiki.org/wiki/Whitepaper:Nxt). In this model, the choice of account that has the right to generate the next block and receive the corresponding transaction fees is based on the number of tokens in the account. The more tokens that are held in the account, the greater the chance that account will earn the right to generate a block. 

In Waves, we are convinced that each participant in the blockchain should participate in the block generation process proportionally his stake: we have decided to correct the PoS formula.  At the moment we do not have the goal of completely changing the algorithm, since there is no need; we simply want to make some adjustments.

We presented an improved PoS algorithm that makes the choice of block creator fair and reduces vulnerability to the multi-branching attacks, in accordance with the shortcomings of the current algorithm. We analyzed the model of the new algorithm for its correspondence to the stake share and the share of blocks, and the results were positive. Also, the algorithm was analyzed for vulnerability to attacks, and results obtained with the new model were better than with the old one. The attacks’ results for the attacker were not so successful in terms of the profits gained. The number of forks and their length decreased.

The fair PoS is launched in release number [0.13.3](https://github.com/wavesplatform/Waves/releases).

{% prettyhint type="info" %} You can find more technical details about our PoS adjustments <a href="https://forum.wavesplatform.com/uploads/default/original/2X/7/7397a4cb5fa77d659a7b7ecc9188dd0a4fe0decc.pdf"> &nbsp;In This Paper </a> {% endprettyhint %}
