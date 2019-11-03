### POST /alias/broadcast/create
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)





Creates signed alias transaction for sender's address.

**Request params**

```
"senderPublicKey" - Sender account's public key, Base58-encoded
"fee" - Amount of transaction fee
"alias" - alias for a sender's address
"timestamp" - Transaction timestamp
"signature" - Signature of all transaction data, Base58-encoded
```

**Request JSON example**

```js
 {
 "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
 "fee": 100000,
 "alias": "ALIAS",
 "timestamp": 1488807184731,
 "signature": "3aB6cL1osRNopWyqBYpJQCVCXNLibkwM58dvK85PaTK5sLV4voMhe5E8zEARM6YDHnQP5YE3WX8mxdFp3ciGwVfy"
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

### POST /alias/create
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)





**Request params**

```
"sender" - Sender's addresss, Base58-encoded
"fee" - Amount of transaction fee
"alias" - alias for a sender's address
```

**Request JSON example**

```js
 {
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

### GET /alias/by-alias/{alias}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)





**Request params**

```
"alias" - alias
```

**Response JSON example**

```js
{

"address": "address:3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"

}
```

### GET /alias/by-address/{address}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)





**Request params**

```
"address" - address
```

**Response JSON example**

```js
[

"alias:HUMANREADABLE1",
"alias:HUMANREADABLE2",
"alias:HUMANREADABLE3",

]
```



