### GET /transactions/info/{id}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)



Return transaction data by transaction ID.

**Request params:**

```
"id" - Transaction ID
```

**Response JSON example:**

```js
{
  "type": 4,
  "id": "52GG9U2e6foYRKp5vAzsTQ86aDAABfRJ7synz7ohBp19",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "recipient": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "amount": 100000,
  "feeAsset": null,
  "fee": 100000,
  "timestamp": 1479313236091,
  "attachment": "string",
  "signature": "GknccUA79dBcwWgKjqB7vYHcnsj7caYETfncJhRkkaetbQon7DxbpMmvK9LYqUkirJp17geBJCRTNkHEoAjtsUm",
  "height": 7782
}
```

### GET /transactions/address/{address}/limit/{limit}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)



Return the specified number of the latest transactions by the given account address.

**Request params:**

```
"address" - Account's address Base58-encoded
"limit" - Number of transaction to return, max = 50.
```

**Response JSON example:**

```js
[
  [
    {
      "type": 2,
      "id": "4XE4M9eSoVWVdHwDYXqZsXhEc4q8PH9mDMUBegCSBBVHJyP2Yb1ZoGi59c1Qzq2TowLmymLNkFQjWp95CdddnyBW",
      "fee": 100000,
      "timestamp": 1479313097422,
      "signature": "4XE4M9eSoVWVdHwDYXqZsXhEc4q8PH9mDMUBegCSBBVHJyP2Yb1ZoGi59c1Qzq2TowLmymLNkFQjWp95CdddnyBW",
      "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
      "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
      "recipient": "3N9iRMou3pgmyPbFZn5QZQvBTQBkL2fR6R1",
      "amount": 1000000000
    }
  ]
]
```

### GET /transactions/unconfirmed
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)



Return a list of unconfirmed transactions in the node pool.

**Response JSON example:**

```js
[
  {
    "type": 4,
    "id": "52GG9U2e6foYRKp5vAzsTQ86aDAABfRJ7synz7ohBp19",
    "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
    "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
    "recipient": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
    "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
    "amount": 100000,
    "feeAsset": null,
    "fee": 100000,
    "timestamp": 1479313236091,
    "attachment": "string",
    "signature": "GknccUA79dBcwWgKjqB7vYHcnsj7caYETfncJhRkkaetbQon7DxbpMmvK9LYqUkirJp17geBJCRTNkHEoAjtsUm"
  }
]
```

### GET /transactions/unconfirmed/size
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)



Return the number of unconfirmed transactions in the UTX pool.

**Response JSON example:**

```js
{
  "size": 3
}
```

### GET /transactions/unconfirmed/info/{id}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)



Return an unconfirmed transaction by its ID.

**Request params:**

```
"id" - Transaction ID
```

**Response JSON example:**

```js
{
  "type": 4,
  "id": "F4SPn6SNHiQB6DCATrVMqsM3s4RKTPVq8c7uPZEJ8YRN",
  "sender": "3PBST44zh2rDhxXW97AEkYYtufFLtf2CuWP",
  "senderPublicKey": "4NQqZba92s8NpQBMQhcb53d5oVpn9fWR2VEX5uhDHZiD",
  "fee": 100000,
  "timestamp": 1548847534028,
  "signature": "28cq23pr8YezgqrwSuHKTTqUuSDJPBdfC9ACQQ15jAzxYZXowfmJFfcXmHsC5L1uUmBLPZySLCY4X4tsmetsLEx2",
  "proofs": [
    "28cq23pr8YezgqrwSuHKTTqUuSDJPBdfC9ACQQ15jAzxYZXowfmJFfcXmHsC5L1uUmBLPZySLCY4X4tsmetsLEx2"
  ],
  "version": 1,
  "recipient": "3P7wD8Un2FpT8XC3p5ADgiRJEyeycWxs2Tj",
  "assetId": "C9XD25wtUf4MTqbyDX8zqxpY2aXk6recZd5Bwtq7CUJS",
  "feeAssetId": null,
  "feeAsset": null,
  "amount": 1000000000000,
  "attachment": ""
}
```

or 

```js
{
  "status": "error",
  "details": "Transaction is not in UTX"
}
```

### POST /transactions/calculateFee
![master](https://img.shields.io/badge/node-&gt;%3D0.14.3-4bc51d.svg)

Calculates a fee for an arbitrary transaction and returns it. The transaction type to be specified in the request body. The types are as follows:

| Type Code | Transaction Type |
| :--- | :--- |
| 3 | Issue |
| 4 | Transfer |
| 5 | Reissue |
| 6 | Burn |
| 8 | Lease |
| 9 | Lease Cancel |
| 10 | Alias |
| 11 | Mass Transfer |
| 12 | Data |
| 13 | Set Script |
| 14 | Sponsorship |

**Request params**

```
"type" - Transaction type
"senderPublicKey" - Public key of sender
"sender" is ignored
"fee" is ignored
and all the other parameters appropriate for a transaction of the given type.
```

**Request JSON example**

```js
{
 "type": 10,
 "timestamp": 1516171819000,
 "sender": "3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "alias": "ALIAS",
}
```

or

```js
{
  "type": 4,
  "sender": "3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
  "recipient": "3P8JYPHrnXSfsWP1LVXySdzU1P83FE1ssDa",
  "amount": 1317209272,
  "feeAssetId": "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
  "attachment": "string"
}
```

**Response JSON example**

```
{
  "feeAssetId": null,
  "feeAmount": 10000
}
```

or

```js
{
  "feeAssetId": "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
  "feeAmount": 10000
}
```

### POST /transactions/sign
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Signs an arbitrary transaction. This requires an API key, and transaction type to be specified in the request body. The types are as follows:

| Type Code | Transaction Type |
| :--- | :--- |
| 3 | Issue |
| 4 | Transfer |
| 5 | Reissue |
| 6 | Burn |
| 8 | Lease |
| 9 | Lease Cancel |
| 10 | Alias |
| 11 | Mass Transfer |
| 12 | Data |
| 13 | Set Script |
| 14 | Sponsorship |

An optional `timestamp` parameter may be specified, which represents transaction timestamp in milliseconds. If it is omitted, current server time is used.

**Request params**

```
"type" - Transaction type
"timestamp" - [optional] transaction timestamp in milliseconds
and all the other parameters appropriate for a transaction of the given type.
```

**Request JSON example**

```js
{
 "type": 10,
 "timestamp": 1516171819000,
 "sender": "3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "fee": 100000,
 "alias": "ALIAS",
}
```

or

```js
{
  "type": 4,
  "sender": "3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
  "recipient": "3P8JYPHrnXSfsWP1LVXySdzU1P83FE1ssDa",
  "amount": 1317209272,
  "fee": 100000,
  "attachment": "string"
}
```

**Response JSON example**

```js
{
 "type":10,
 "id":"9q7X84wFuVvKqRdDQeWbtBmpsHt9SXFbvPPtUuKBVxxr",
 "sender":"3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "senderPublicKey":"G6h72icCSjdW2A89QWDb37hyXJoYKq3XuCUJY2joS3EU",
 "fee":100000000,
 "timestamp":46305781705234713,
 "signature":"4gQyPXzJFEzMbsCd9u5n3B2WauEc4172ssyrXCL882oNa8NfNihnpKianHXrHWnZs1RzDLbQ9rcRYnSqxKWfEPJG",
 "alias":"dajzmj6gfuzmbfnhamsbuxivc"
}
```

### POST /transactions/sign/{signerAddress}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Signs an arbitrary transaction by a private key of signer. This requires an API key, a signer address and transaction type to be specified in the request body.

`signerAddress` should be created by [POST /addresses](https://docs.wavesplatform.com/development-and-api/node-api/address.html#post-addresses).

The types are as follows:

| Type Code | Transaction Type |
| :--- | :--- |
| 3 | Issue |
| 4 | Transfer |
| 5 | Reissue |
| 6 | Burn |
| 8 | Lease |
| 9 | Lease Cancel |
| 10 | Alias |
| 11 | Mass Transfer |
| 12 | Data |
| 13 | Set Script |
| 14 | Sponsorship |

An optional `timestamp` parameter may be specified, which represents transaction timestamp in milliseconds. If it is omitted, current server time is used.

**Request params**

```
"type" - Transaction type
"timestamp" - [optional] transaction timestamp in milliseconds
and all the other parameters appropriate for a transaction of the given type.
```

**Request JSON example**

```js
{
 "type": 10,
 "timestamp": 1516171819000,
 "sender": "3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "fee": 100000,
 "alias": "ALIAS",
}
```

**Response JSON example**

```js
{
 "type":10,
 "id":"9q7X84wFuVvKqRdDQeWbtBmpsHt9SXFbvPPtUuKBVxxr",
 "sender":"3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "senderPublicKey":"G6h72icCSjdW2A89QWDb37hyXJoYKq3XuCUJY2joS3EU",
 "fee":100000000,
 "timestamp":46305781705234713,
 "signature":"4gQyPXzJFEzMbsCd9u5n3B2WauEc4172ssyrXCL882oNa8NfNihnpKianHXrHWnZs1RzDLbQ9rcRYnSqxKWfEPJG",
 "alias":"dajzmj6gfuzmbfnhamsbuxivc"
}
```

### POST /transactions/broadcast
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)


Broadcasts a signed transaction of any type.

**Request params**

```
"type" - Transaction type
and all the other parameters appropriate for a transaction of the given type.
```

**Request JSON example**

```js
{
 "type":10,
 "senderPublicKey":"G6h72icCSjdW2A89QWDb37hyXJoYKq3XuCUJY2joS3EU",
 "fee":100000000,
 "timestamp":46305781705234713,
 "signature":"4gQyPXzJFEzMbsCd9u5n3B2WauEc4172ssyrXCL882oNa8NfNihnpKianHXrHWnZs1RzDLbQ9rcRYnSqxKWfEPJG",
 "alias":"dajzmj6gfuzmbfnhamsbuxivc"
}
```

**Response JSON example**

```js
{
 "type":10,
 "id":"9q7X84wFuVvKqRdDQeWbtBmpsHt9SXFbvPPtUuKBVxxr",
 "sender":"3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "senderPublicKey":"G6h72icCSjdW2A89QWDb37hyXJoYKq3XuCUJY2joS3EU",
 "fee":100000000,
 "timestamp":46305781705234713,
 "signature":"4gQyPXzJFEzMbsCd9u5n3B2WauEc4172ssyrXCL882oNa8NfNihnpKianHXrHWnZs1RzDLbQ9rcRYnSqxKWfEPJG",
 "alias":"dajzmj6gfuzmbfnhamsbuxivc"
}
```
