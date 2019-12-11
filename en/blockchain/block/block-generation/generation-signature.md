# Generation signature

**Generation signature** is the variable in the average block generation time [formula](/blockchain/waves-protocol/fair-pos.md). It is used to check whether the current [miner](/blockchain/mining/miner.md) is eligible to generate the next block.

The computation of the block's generation signature <kbd>generationSignature<sub>i+1</sub></kbd> is done by the following steps:

1. Choosing the block. Let `h` will be the current blockchain height. If `h` ≥ 100, then the block at height `h-100` will be chosen. Otherwise, the block at height `h-1` will be chosen.
2. Hashing the chosen block's generation signature <kbd>generationSignature<sub>i</sub></kbd> and miner's account public key `pk` using [Blake2b256](https://en.wikipedia.org/wiki/BLAKE_(hash_function)):
<kbd>generationSignature<sub>i+1</sub> = Blake2b256(generationSignature<sub>i</sub>, pk)</kbd>

The resulting hash is the generation signature.

The ﬁrst 8 bytes of the resulting 32 bytes hash is converted to a number, referred to as the account hit. The hit from `i`-th block affects how soon a `(i+100)`-th block’s generator (current miner) will be able to generate a block after `(i+99)`-th block.

> From version 1.2.0, the generation signature is improved by implementing [VRF](https://tools.ietf.org/html/draft-irtf-cfrg-vrf-04) (A Verifiable Random Function with Short Proofs and Keys) — a pseudo-random function that uses a message and the private key of an account to provide a non-interactively verifiable proof for the correctness of its output.<br>
This improvement will allow resisting [stake grinding](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#how-does-validator-selection-work-and-what-is-stake-grinding) attacks aimed at influencing block generation randomness to skip miner's opportunity to create a block. In the prior implementation of the generation signature formula (see above), the randomness of a block `N+1` is dependent on the generator of the block `N` and is determined for each miner.<br>
The use of VRF makes signature generation unpredictable because of the need to know the private key for calculation. Only the holder of the private key can compute the hash, but verifying the correctness of the hash using the public key from block header is available to anyone.<br>
The VRF contains `calculateVRF` function, which calculates proof for some message, and `verifyVRF` function, which verifies proof from `calculateVRF` function with a message and the public key of the signer.<br>
Considering that a block’s generation signature is equal to `calculateVRF` output for a previous generation signature with account private key `sk` (of generator of `(i+1)`-th block):<br>
<kbd>generationSignature<sub>i+1</sub> = VRFproof = calculateVRFsk(VRF<sub>i</sub>)</kbd><br>
The output of `calculateVRF` function is a VRF proof, which means that the validity of the signature can be checked.
Before VRF implementation, the <kbd>generationSignature<sub>i</sub></kbd> was used in consensus to define the time delay between `i+99` and `i+100` blocks for concrete block generator. With VRF, the output of function <kbd>verifyVRF(pk<sub>i</sub>, generationSignature<sub>i</sub>)</kbd> is used to define the time delay between `i+99` and `i+100` blocks for concrete block generator.<br>Node version 1.2.x with the described VRF feature is currently available on [stagenet](/blockchain/blockchain-network/stage-network.md).
