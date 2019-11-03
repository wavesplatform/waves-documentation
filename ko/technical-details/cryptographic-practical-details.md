# Description

This document describes how the algorithms used in the project to create private and public keys from seed, addresses from public key, blocks and transactions signing. There are all the details of the use of cryptographic algorithms in the project area.

Briefly: in the project to create a cryptographic hashes used`Blake2b256`and`Keccak256`algorithms \(in the form of hash chain and separately\).`Curve25519`\(ED25519 with X25519 keys\) scheme applied to create and verify signatures.`Base58`is used to create the string form of bytes. If you want to create an application, you should find the implementation of these algorithms on your programming language.

**Note**: We use KECCAK which differs slightly than that assigned as the SHA-3 (FIPS-202).


# Bytes encoding Base58

In order to ease human readable, all arrays of bytes in the project are encoded by Base58 algorithm with Bitcoin alphabet.

## Example

The string`teststring`are coded into the bytes`[5, 83, 9, -20, 82, -65, 120, -11]`. The bytes`[1, 2, 3, 4, 5]`are coded into the string`7bWpTW`.

# Creating a private key from a seed

A seed string is a representation of entropy, from which you can re-create deterministically all the private keys for one wallet. It should be long enough so that the probability of selection was a unrealistic negligible.

In fact, seed should be a array of bytes, but for ease of memorization lite wallet uses[Brainwallet](https://en.bitcoin.it/wiki/Brainwallet), to ensure that the seed is made up of words, that is easy to write down or remember. The app takes the UTF-8 bytes of the string and uses them to create keys and addresses.

For example, seed string`manage manual recall harvest series desert melt police rose hollow moral pledge kitten position add`after reading as UTF-8 bytes and encoding them to Base58 string are coded as`xrv7ffrv2A9g5pKSxt7gHGrPYJgRnsEMDyc4G7srbia6PhXYLDKVsDxnqsEqhAVbbko7N1tDyaSrWCZBoMyvdwaFNjWNPjKdcoZTKbKr2Vw9vu53Uf4dYpyWCyvfPbRskHfgt9q`.

A seed string is involved with the creation of private keys. To create private key using the official web wallet or the node, to 4 bytes of int 'nonce' field \(big-endian representation\), which initially has a value of 0 and increases every time you create the new address, should be prepended to seed bytes. Then we use this array of bytes for calculate hash`keccak256(blake2b256(bytes))`. This resulting array of bytes we call`account seed`, from it you can definitely generate one private and public key pair. Then this bytes hash passed in the method of creating a pair of public and private key of`Curve25519`algorithm.

Waves uses`Curve25519`-`ED25519`signature with X25519 keys \(Montgomery form\), but most of embedded cryptography devices and libraries don't support X25519 keys. But[there're the libraries with conversion functions from ED25519 keys to X25519 \(Curve25519\) crypto\_sign\_ed25519\_pk\_to\_curve25519\(curve25519\_pk, ed25519\_pk\) for public key and crypto\_sign\_ed25519\_sk\_to\_curve25519\(curve25519\_sk, ed25519\_skpk\) for private key](https://download.libsodium.org/doc/advanced/ed25519-curve25519.html). For example, I use the ED25519 keys and the signature inside the Ledger application, then it need to convert the keys from the device to X25519 format using that function on the client side**and create the waves address from X25519 public key**.[There're an example of convertion libsodium ED25519 keys and signature to Curve25519](https://gist.github.com/Tolsi/d64fcb09db4ead75e5eeeab445284c93).

**NOTE: Not all random 32 bytes can be used as private keys \(but any bytes of any size can be a seed\). The signature scheme for the ED25519 introduces restrictions on the keys, so create the keys only through the methods of the Curve25519 libraries and be sure to make a test of the ability to sign data with a private key and then check it with a public key, however obvious this test might seem.**

There are valid Curve25519 realizations for different languages:

* [Java](https://github.com/signalapp/curve25519-java/)
* [C](https://github.com/signalapp/curve25519-java/tree/master/android/jni)
* [Python](https://github.com/tgalal/python-axolotl-curve25519)
* [JS](https://github.com/wavesplatform/curve25519-js)

Also some`Curve25519`libraries \(as the one used in our project\) have the`Sha256`hashing integrated, some not \(such as most of c/c++/python libraries\), so you may need to apply it manually. Note that private key is clamped, so not any random 32 bytes can be a valid private key.

## Example

Brainwallet seed string

```
manage manual recall harvest series desert melt police rose hollow moral pledge kitten position add
```

As UTF-8 bytes encoded

```
xrv7ffrv2A9g5pKSxt7gHGrPYJgRnsEMDyc4G7srbia6PhXYLDKVsDxnqsEqhAVbbko7N1tDyaSrWCZBoMyvdwaFNjWNPjKdcoZTKbKr2Vw9vu53Uf4dYpyWCyvfPbRskHfgt9q
```

Account seed bytes with nonce 0 before apply hash function in Base58

```
1111xrv7ffrv2A9g5pKSxt7gHGrPYJgRnsEMDyc4G7srbia6PhXYLDKVsDxnqsEqhAVbbko7N1tDyaSrWCZBoMyvdwaFNjWNPjKdcoZTKbKr2Vw9vu53Uf4dYpyWCyvfPbRskHfgt9q
```

blake2b256\(account seed bytes\)

```
6sKMMHVLyCQN7Juih2e9tbSmeE5Hu7L8XtBRgowJQvU7
```

Account seed \( keccak256\(blake2b256\(account seed bytes\)\) \)

```
H4do9ZcPUASvtFJHvESapnxfmQ8tjBXMU7NtUARk9Jrf
```

Account seed after`Sha256`hashing \(optional, if your library does not do it yourself\)

```
49mgaSSVQw6tDoZrHSr9rFySgHHXwgQbCRwFssboVLWX
```

Created private key

```
3kMEhU5z3v8bmer1ERFUUhW58Dtuhyo9hE5vrhjqAWYT
```

Created public key

```
HBqhfdFASRQ5eBBpu2y6c6KKi1az6bMx8v1JxX4iW1Q8
```

# Creating address from public key

Our network address obtained from the public key depends on the byte chainId \('T' for testnet and 'W' for mainnet\), so different networks obtained a different address for a single seed \(and hence public keys\). Creating a byte addresses described in more detail [here](/wavesdocs/content/guidelines/data-structures.md).

Example

For public key

```
HBqhfdFASRQ5eBBpu2y6c6KKi1az6bMx8v1JxX4iW1Q8
```

in mainnet network \(chainId 'W'\) will be created this address

```
3PPbMwqLtwBGcJrTA5whqJfY95GqnNnFMDX
```

# Signing

`Curve25519`is used for all the signatures in the project.

The process is as follows: create the special bytes for signing \(for transaction or block, you can find it [here](/technical-details/data-structures.md)\), then create a signature using these bytes and the private key bytes.

For the validation of signature is enough signature bytes, signed object bytes and the public key.

Do not forget that there are many valid \(not unique!\) signatures for a one array of bytes \(block or transaction\). Also you should not assume that the id of block or transaction is unique. The collision can occur one day! They have already taken place for some weak keys.

## Example

Transaction data:

| Field                                           | Value                                        |
|-------------------------------------------------|----------------------------------------------|
| Sender address (not used, just for information) | 3N9Q2sdkkhAnbR4XCveuRaSMLiVtvebZ3wp          |
| Private key (used for signing, not in tx data)  | 7VLYNhmuvAo5Us4mNGxWpzhMSdSSdEbEPFUDKSnA6eBv |
| Public key                                      | EENPV1mRhUD9gSKbcWt84cqnfSGQP5LkCu5gMBfAanYH |
| Recipient address                               | 3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8          |
| Asset id                                        | BG39cCNUFWPQYeyLnu7tjKHaiUGRxYwJjvntt9gdDPxG |
| Amount                                          | 1                                            |
| Fee                                             | 1                                            |
| Fee asset id                                    | BG39cCNUFWPQYeyLnu7tjKHaiUGRxYwJjvntt9gdDPxG |
| Timestamp                                       | 1479287120875                                |
| Attachment (as byte array)                      | [1, 2, 3, 4]                                 |

Bytes:

| #  | Field name                             | Type  | Position          | Length   | Value         | Base58 bytes value                           |
|----|----------------------------------------|-------|-------------------|----------|---------------|----------------------------------------------|
| 1  | Transaction type (0x04)                | Byte  | 0                 | 1        | 4             | 5                                            |
| 2  | Sender's public key                    | Bytes | 1                 | 32       | ...           | EENPV1mRhUD9gSKbcWt84cqnfSGQP5LkCu5gMBfAanYH |
| 3  | Amount's asset flag (0-Waves, 1-Asset) | Byte  | 33                | 1        | 1             | 2                                            |
| 4  | Amount's asset ID (*if used)           | Bytes | 34                | 0 (32*)  | ...           | BG39cCNUFWPQYeyLnu7tjKHaiUGRxYwJjvntt9gdDPxG |
| 5  | Fee's asset flag (0-Waves, 1-Asset)    | Byte  | 34 (66*)          | 1        | 1             | 2                                            |
| 6  | Fee's asset ID (**if used)             | Bytes | 35 (67*)          | 0 (32**) | ...           | BG39cCNUFWPQYeyLnu7tjKHaiUGRxYwJjvntt9gdDPxG |
| 7  | Timestamp                              | Long  | 35 (67*) (99**)   | 8        | 1479287120875 | 11frnYASv                                    |
| 8  | Amount                                 | Long  | 43 (75*) (107**)  | 8        | 1             | 11111112                                     |
| 9  | Fee                                    | Long  | 51 (83*) (115**)  | 8        | 1             | 11111112                                     |
| 10 | Recipient's address                    | Bytes | 59 (91*) (123**)  | 26       | ...           | 3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8          |
| 11 | Attachment's length (N)                | Short | 85 (117*) (149**) | 2        | 4             | 15                                           |
| 12 | Attachment's bytes                     | Bytes | 87 (119*) (151**) | N        | [1,2,3,4]     | 2VfUX                                        |

Total data bytes for sign:`Ht7FtLJBrnukwWtywum4o1PbQSNyDWMgb4nXR5ZkV78krj9qVt17jz74XYSrKSTQe6wXuPdt3aCvmnF5hfjhnd1gyij36hN1zSDaiDg3TFi7c7RbXTHDDUbRgGajXci8PJB3iJM1tZvh8AL5wD4o4DCo1VJoKk2PUWX3cUydB7brxWGUxC6mPxKMdXefXwHeB4khwugbvcsPgk8F6YB`

Signature of transaction data bytes \(one of an infinite number of valid signatures\):`2mQvQFLQYJBe9ezj7YnAQFq7k9MxZstkrbcSKpLzv7vTxUfnbvWMUyyhJAc1u3vhkLqzQphKDecHcutUrhrHt22D`

Total transaction bytes with signature:`6zY3LYmrh981Qbzj7SRLQ2FP9EmXFpUTX9cA7bD5b7VSGmtoWxfpCrP4y5NPGou7XDYHx5oASPsUzB92aj3623SUpvc1xaaPjfLn6dCPVEa6SPjTbwvmDwMT8UVoAfdMwb7t4okLcURcZCFugf2Wc9tBGbVu7mgznLGLxooYiJmRQSeAACN8jYZVnUuXv4V7jrDJVXTFNCz1mYevnpA5RXAoehPRXKiBPJLnvVmV2Wae2TCNvweHGgknioZU6ZaixSCxM1YzY24Prv9qThszohojaWq4cRuRHwMAA5VUBvUs`

# Calculating Transaction Id

Transaction Id is not stored in the transaction bytes and for most of transactions \(except Payment\) it can be easily calculated from the special bytes for signing using`blake2b256(bytes_for_signing)`. For Payment transaction Id is just the signature of this transaction.
