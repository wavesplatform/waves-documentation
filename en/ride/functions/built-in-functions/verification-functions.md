# Verification functions

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | [checkMerkleProof(ByteVector, ByteVector, ByteVector): Boolean](#check-merkle-proof) | Checks that the data is part of the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) | 30 |
| 2 | [rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean](#rsa-verify) | Checks that the [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) digital signature is valid, i.e. it was created by the owner of the public key | 300 |
| 3 | [sigVerify(ByteVector, ByteVector, ByteVector): Boolean](#sig-verify) | Checks that the [Curve25519](https://en.wikipedia.org/wiki/Curve25519) digital signature is valid, i.e. it was created by the owner of the public key | 100 |

## checkMerkleProof(ByteVector, ByteVector, ByteVector): Boolean<a id="check-merkle-proof"></a>

Checks that the data is part of the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree).

[BLAKE2b](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) hashing function is used to hash the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree).

``` ride
checkMerkleProof(merkleRoot: ByteVector, merkleProof: ByteVector, valueBytes: ByteVector): Boolean
```

### Parameters

#### merkleRoot: ByteVector

Root hash of the Merkle tree.

#### merkleProof: ByteVector

Array of hashes.

#### valueBytes: ByteVector

Data to check.

## rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean<a id="rsa-verify"></a>

Checks that the [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) digital signature is valid, i.e. it was created by the owner of the public key.

``` ride
rsaVerify(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
```

### Parameters

#### `digest`: digestAlgorithmType

The hashing algorithm applied to the data.

The value must be one of the built-in variables:

* NOALG
* MD5
* SHA1
* SHA224
* SHA256
* SHA384
* SHA512
* SHA3224
* SHA3256
* SHA3384
* SHA3512

All variables, except `NOALG`, represent hashing algorithms. If `NOALG` is used, the data will not be hashed.

#### `message`: ByteVector

Signed data.

#### `sig`: ByteVectore

Digital signature.

#### `pub`: ByteVectore

Public key.

## sigVerify(ByteVector, ByteVector, ByteVector): Boolean<a id="sig-verify"></a>

Checks that the [Curve25519](https://en.wikipedia.org/wiki/Curve25519) digital signature is valid, i.e. it was created by the owner of the public key.

``` ride
sigVerify(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
```

### Parameters

#### `message`: ByteVector

Signed data.

#### `sig`: ByteVectore

Digital signature.

#### `pub`: ByteVectore

Public key.
