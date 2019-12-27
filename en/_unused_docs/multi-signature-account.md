# Multi-Signature Account Example

Suppose that there are 3 people in a team and they hold common funds for corporate purposes.

It is convenient for the team to make a decision about the allocation of common funds according to the majority decision, 
and they use a multi-signature account to do this.

They create an account and do `SetScriptTransaction` with the multi-sig account, which can be implemented as follows:

```scala
let alicePubKey  = base58'B1Yz7fH1bJ2gVDjyJnuyKNTdMFARkKEpV'
let bobPubKey    = base58'7hghYeWtiekfebgAcuCg9ai2NXbRreNzc'
let carolPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'
let aliceSigned = if(sigVerify(tx.bodyBytes,tx.proofs[0],alicePubKey)) then 1 else 0
let bobSigned = if(sigVerify(tx.bodyBytes,tx.proofs[1],bobPubKey)) then 1 else 0
let carolSigned = if(sigVerify(tx.bodyBytes,tx.proofs[2],carolPubKey)) then 1 else 0
aliceSigned + bobSigned + carolSigned >= 2
```

Here users gather 3 public keys in `proofs[0], proofs[1]` and `proofs[2]`.

The account is funded by the team members and after that, when at least 2 of 3 team members decide to spend money, 
they provide their signatures in a single transaction.

The Smart account script validates these signatures with proofs and if 2 of 3 are valid then the transaction is valid 
too, else the transaction does not pass to the blockchain.

**Note**.  After the `SetScriptTransaction` operation all non multi-signature transactions are discarded. 
Please check the example on our [IDE](https://ide.wavesplatform.com/).

