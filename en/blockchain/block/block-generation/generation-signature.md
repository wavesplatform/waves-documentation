# Generation signature

A **generation signature** is a variable in the average block generation time [formula](/blockchain/waves-protocol/fair-pos.md). It is used to check whether the current validator is eligible to generate the next block.

The Hashing of the generation signature is done during the [mining](/blockchain/mining.md) process by the following steps:

1. If the [blockchain height](/blockchain/blockchain/blockchain-height.md) is equal to 100 or more then return the [block](/blockchain/block.md) at the `current blockchain height - 1`, otherwise return the previous block.
2. The miner hashes the following bytes of the chosen block using [Blake2b256](https://en.wikipedia.org/wiki/BLAKE_(hash_function)) hash:

| # | Field name  | Field type  | Field size in bytes  | Field description |
|---|---|---|---|---|
| 1  | Generation signature  | Array of bytes  | 32  |   |
| 2  | Miner public key | Array of bytes | 32 | Public key of the [miner](/blockchain/mining/miner.md) |

> From version 1.2, the generation signature is improved by implementing [VRF](https://tools.ietf.org/html/draft-irtf-cfrg-vrf-04) (A Verifiable Random Function with Short Proofs and Keys) — a pseudo-random function that uses a message and the private key of an account to provide a non-interactively verifiable proof for the correctness of its output. The use of VRF makes signature generation unpredictable because of the need to know the private key for calculation. Only the holder of the private key can compute the hash, but anyone with the public key can verify the correctness of the hash.
The VRF contains `calculateVRF function`, which calculates proof for some message, and `verifyVRF` function, which verifies proof from `calculateVRF` function with a message and the public key of the signer.
Considering that a block’s generation signature is equal to `calculateVRF` output for a previous generation signature with account private key `sk` (of generator of (i+1)-th block):
<kbd>generationSignature<sub>i+1</sub> = VRFproof = calculateVRF<sub>sk<sub>(VRF<sub>i</sub>)</kbd>
The output of `calculateVRF` function is a VRF proof, which means that the validity of the signature can be checked. Before VRF implementation, <kbd>generationSignature<sub>i</sub></kbd> was used in consensus to define the time delay between `(i+99)` and `(i+100)` blocks for concrete block generator. With VRF, the output of function <kbd>verifyVRF(pk<sub>i</sub>, generationSignature<sub>i</sub>)</kbd> is used to define time delay between `(i+99)` and `(i+100)` blocks for concrete block generator.
Node version 1.2.x with the described VRF feature is currently available on [stagenet](/blockchain/blockchain-network/stage-network.md).
