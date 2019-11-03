## Private Functions

All private functions below require API Key to be provided in every HTTP request using`X-Api-Key`header. The default value is`ridethewaves!`. Securely hashed header value is stored in`rest-api.api-key-hash`setting in the waves.conf configuration file. See [/utils/hash/secure](https://github.com/wavesplatform/Waves/wiki/node-api#post-utilshashsecure) for more information on how to obtain a secure hash.

### POST /assets/issue

Issue a new Asset for an address that exists in the node's wallet.

**Request params:**

    The same as in [Broadcast Issue Assets] besides `senderPublicKey`, `timestamp` and `signature` params.
    "sender" - Sender account's address that exists in the node's wallet, Base58-encoded

**Request JSON example:**

```js
{
  "name": "Test Asset 1",
  "quantity": 100000000000,
  "description": "Some description",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "decimals": 8,
  "reissuable": true,
  "fee": 100000000
}
```

**Response params:**

```
The same as in [Broadcast Issue Assets]
```

**Response JSON example:**

```
The same as in [Broadcast Issue Assets]
```

### POST /assets/reissue

Re-issue an additional quantity of the Asset

**Request params:**

    The same as in [Broadcast Reissue Assets] besides `senderPublicKey`, `timestamp` and `signature` params.
    "sender" - Sender account's address that exists in the node's wallet, Base58-encoded

**Request JSON example:**

```js
{
  "quantity": 22300000000,
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "reissuable": true,
  "fee": 100000
}
```

**Response params:**

```
The same as in [Broadcast Reissue Assets]
```

**Response JSON example:**

```
The same as in [Broadcast Reissue Assets]
```

### POST /assets/burn

Burn quantity of the Asset.

**Request params:**

```
"assetId" - Asset ID previously issued, Base58-encoded
"sender" - Sender address, Base58-encoded
"fee" - Transaction fee for Asset issue, min = 100000
"amount" - amount of asset'lets to burn (number of indivisible pieces of assets)
```

**Request JSON example:**

```js
{
  "sender" : "EHDZiTW9uhZmpfKRyJtusHXCQ3ABwJ3t9dxZdiPp2GZC",
  "fee" : 100000000,
  "assetId" : "AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "amount" : 50000
}
```

**Response JSON example:**

```js
{
  "type" : 6,
  "id" : "AoqmyXSurAoLqH5zbcKPtksdPwadgudhE7tZ495cQDWs",
  "sender" : "3HRUALDoUaWAmAndWRqhbiQFoqgamhAVggE",
  "senderPublicKey" : "EHDZiTW9uhZmpfKRyJtusHXCQ3ABwJ3t9dxZdiPp2GZC",
  "fee" : 100000000,
  "timestamp" : 1495623946088,
  "signature" : "4sWPrZFpR379XC4Med1y8AK2Avmx8nVUxVAzsE4QMzEeMtQyHgjzfQsi2Y5VY7diCqMAzohy9ZSTP3yfiB3QPQMd",
  "assetId" : "AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "amount" : 50000
}
```

### POST /assets/transfer

Create transaction to transfer assets from one address to another.

**Request params:**

    The same as in [Broadcast Transfer Assets] besides `senderPublicKey`, `timestamp` and `signature` params.
    "sender" - Sender account's address that exists in the node's wallet, Base58-encoded

**Request JSON example:**

```js
{
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
  "fee": 100000,
  "amount": 5500000000,
  "attachment": "BJa6cfyGUmzBFTj3vvvaew"
}
```

**Response params:**

```
The same as in [Broadcast Transfer Assets]
```

**Response JSON example:**

```
The same as in [Broadcast Transfer Assets]
```

### POST /assets/masstransfer

Create transaction to transfer an asset to several recipient addresses at once.

**Request params:**

```
"version" - Currently 1
"sender" - Sender address, Base58-encoded
"assetId" - ID of the asset to send. By default, WAVES is assumed.
"transfers" - list of (recipient, amount) pairs where
   "recipient" is a Base58 address, and
   "amount" is the amount to send to that address.
"fee" - Transaction fee, by default 100000 + 50000 * (number of transfers)
"attachment" - Arbitrary message, Base58 encoded, 140 bytes max.
```

**Request JSON example:**

```js
{
  "version" : 1,
  "sender" : "3HhQxe5kLwuTfE3psYcorrhogY4fCwz2BSh",
  "fee" : 200000,
  "assetId" : null,
  "attachment" : "59QuUcqP6p",
  "transfers" : [ {
    "recipient" : "3HUQa6qtLhNvBJNyPV1pDRahbrcuQkaDQv2",
    "amount" : 100000000
  }, {
    "recipient" : "3HaAdZcCXAqhvFj113Gbe3Kww4rCGMUZaEZ",
    "amount" : 200000000
  } ]
}
```

**Response JSON example:**

```js
{
  "type" : 11,
  "id" : "BG7MQF8KffVU6MMbJW5xPowVQsohwJhfEJ4wSF8cWdC2",
  "sender" : "3HhQxe5kLwuTfE3psYcorrhogY4fCwz2BSh",
  "senderPublicKey" : "7eAkEXtFGRPQ9pxjhtcQtbH889n8xSPWuswKfW2v3iK4",
  "fee" : 200000,
  "timestamp" : 1518091313964,
  "signature" : "4Ph6RpcPFfBhU2fx6JgcHLwBuYSpnEzfHvuAHaVVi8mPjn9D69LX7UaCtBEGjtaTJ7uBwhF38nc7wMEZDL4rYLDV",
  "assetId" : null,
  "attachment" : "59QuUcqP6p",
  "transfers" : [ {
    "recipient" : "3HUQa6qtLhNvBJNyPV1pDRahbrcuQkaDQv2",
    "amount" : 100000000
  }, {
    "recipient" : "3HaAdZcCXAqhvFj113Gbe3Kww4rCGMUZaEZ",
    "amount" : 200000000
  } ]
}
```

### POST /assets/make-asset-name-unique

Create transaction to make asset name unique.

**Request params:**

```
"assetId" - Asset ID previously issued, Base58-encoded
"sender" - Sender address, Base58-encoded
"fee" - Transaction fee for Asset issue, min = 100000
"networkByte" - network byte ('W' - 87 - mainnet, 'T' - 84 - testnet)
```

**Request JSON example:**

```js
{
    "type" : 11,
    "id" : "GRhSHwLLNFz2HmxabiPU521U4NAkLshk2wgqbD9EBqEA",
    "sender" : "3Hb3qXPdr3UikMBefgyu6dZKwG5Hjuphpc4",
    "senderPublicKey" : "8fYJWvPAyUQgVCMuSVNwpZEAgg4E4vn8gz9hRWMsRu31",
    "fee" : 1000000000,
    "timestamp" : 1495637586986,
    "signature" : "2XCbkLbKhKJrcnCUg18LEBykC54cUqtxCMbVpNrzDkXHJG11ZLQB9vSz2Ha8r4hCqgFPRAvvoo4zFecv27v4DCB3",
    "assetId" : "91MxUYbum9hrpJUcRwVe4no36ViqnQGAUaSmM8V8L8Jx",
    "networkByte" : 73
```

**Response JSON example:**

```js
{
    "type" : 11,
    "id" : "GRhSHwLLNFz2HmxabiPU521U4NAkLshk2wgqbD9EBqEA",
    "sender" : "3Hb3qXPdr3UikMBefgyu6dZKwG5Hjuphpc4",
    "senderPublicKey" : "8fYJWvPAyUQgVCMuSVNwpZEAgg4E4vn8gz9hRWMsRu31",
    "fee" : 1000000000,
    "timestamp" : 1495637586986,
    "signature" : "2XCbkLbKhKJrcnCUg18LEBykC54cUqtxCMbVpNrzDkXHJG11ZLQB9vSz2Ha8r4hCqgFPRAvvoo4zFecv27v4DCB3",
    "assetId" : "91MxUYbum9hrpJUcRwVe4no36ViqnQGAUaSmM8V8L8Jx",
    "networkByte" : 73
  }
```



