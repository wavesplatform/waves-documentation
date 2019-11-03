### GET /assets/balance/{address}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)







Balances for all assets that the given account ever had \(besides WAVES\).

```
"address" - account's address in Base58 format
```

**Response params:**

```
"address" -  Account's address in Base58 format
"balances" - List of balance objects for assets that the given account has ever
"assetId" - Asset ID in Base58 format
"balance" - Balance of that Asset on account
"quantity" - total issued assets
"reissuable" - is this asset reissuable?
"issueTransaction" - transaction witch create this asset
"minSponsoredAssetFee" - minimal tokens number to fee, optional, avaliable for sponsored assets
"sponsorBalance" - sponsor balance in waves
```

**Response JSON example:**

```js
{
  "address": "3Mv61qe6egMSjRDZiiuvJDnf3Q1qW9tTZDB",
  "balances": [
    {
      "assetId": "Ax9T4grFxx5m3KPUEKjMdnQkCKtBktf694wU2wJYvQUD",
      "balance": 4879179221,
      "quantity": 48791792210,
      "reissuable": true,
      "minSponsoredAssetFee" : 100,
      "sponsorBalance" : 1233221,
      "issueTransaction" : {
         "type" : 3,
         ...
      }
    },
    {
      "assetId": "49KfHPJcKvSAvNKwM7CTofjKHzL87SaSx8eyADBjv5Wi",
      "balance": 10,
      "quantity": 10000000000,
      "reissuable": false,
      "issueTransaction" : {
         "type" : 3,
         ...
      }
    }
  ]
}
```

### GET /assets/balance/{address}/{assetId}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)




Account's balance for the given asset.

```
  "address" - account's address in Base58 format
  "assetId" - Asset ID in Base58 format
```

**Response JSON example:**

```js
{
  "address": "3Mv61qe6egMSjRDZiiuvJDnf3Q1qW9tTZDB",
  "assetId": "Ax9T4grFxx5m3KPUEKjMdnQkCKtBktf694wU2wJYvQUD",
  "balance": 4879179221
}
```

### GET /assets/details/{assetId}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)







Asset description.

```
  "assetId" - Asset ID in Base58 format
```

**Response JSON example:**
```js
{
  "assetId" : "8tdULCMr598Kn2dUaKwHkvsNyFbDB1Uj5NxvVRTQRnMQ",
  "issueHeight" : 140194,
  "issueTimestamp" : 1504015013373,
  "issuer" : "3NCBMxgdghg4tUhEEffSXy11L6hUi6fcBpd",
  "name" : "name",
  "description" : "Sponsored asset",
  "decimals" : 1,
  "reissuable" : true,
  "quantity" : 1221905614,
  "script" : null,
  "scriptText" : null,
  "complexity" : 0,
  "extraFee": 0,
  "minSponsoredAssetFee" : 100000 // null assume no sponsorship, number - amount of assets for minimal fee
}
```

### POST /assets/broadcast/issue
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)







Publish signed Asset issue transaction to the network.

**Request params:**

```
"name" - Asset name, can be not unique, length from 4 to 16 bytes, in plain text.
"description" - Asset description, max length is 1000 bytes, in plain text.
"sender" - Sender account's address that exists in the node's wallet, Base58-encoded
"senderPublicKey" - Sender account's public key, Base58-encoded
"fee" - Transaction fee for Asset issue, min = 100000000 (1WAVES).
"decimals" - Number of decimals to represent a piece of asset, max = 8.
"quantity" - Quantity of asset'lets to issue (number of indivisible pieces of assets).
"reissuable" - Boolean flag whether it is possible to issue additional assets.
"signature" - Signature of all transaction data, Base58-encoded
```

**Request JSON example:**

```js
{
  "name": "Test Asset 1",
  "description": "Some description",  
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "quantity": 100000000000,
  "decimals": 8,
  "reissuable": true,
  "fee": 100000000,
  "timestamp": 1479287120875,
  "signature": "3cCKi3D17ysyEVg2cd3JGpCzm6ovL3HF8qDksX41oPLEqiRmMVZ2C8QJjs2Utd9YfQfzuEVRyzLsqPer89qAfo1A"
}
```

**Response params:**

```
"type" - Transaction type (3 for IssueTransaction)
"id" - Id(hash) of transaction in Base58 format
"assetId" - Asset ID in Base58 format, effectively equals tx id
"fee" - Transaction fee
"timestamp" - Transaction timestamp
"sender" - Sender account's address, Base58-encoded
"senderPublicKey" - Sender account's public key, Base58-encoded
"name" - Asset name
"description" - Asset description
"quantity" - Quantity of asset'lets
"decimals" - Number of decimals to represent a piece of asset
"reissuable" - Boolean flag whether it is possible to issue additional assets.
"signature" - Signature of all transaction data, Base58-encoded
```

**Response JSON example:**

```js
{
  "type": 3,
  "id": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "name": "2bNcNL6HTQeVaJe9v",
  "description": "BJa6cfyHD5f9r6B4A9kEmB",
  "quantity": 100000000000,
  "decimals": 8,
  "reissuable": true,
  "fee": 100000000,
  "timestamp": 1479210401734,
  "signature": "4AKyeVcMMx9hUNpqQpeF5QPf5oWquyWk8avy524ZCXM6KdbYWpQZYf72NidzqSF3Prc6HA3DKEgdrCEhCcqw6Xbq"
}
```

### POST /assets/broadcast/reissue
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)







Re-issue additional quantity of the Asset. Publish signed Asset re-issue transaction to the network.

**Request params:**

```
"assetId" - Asset ID previously issued, Base58-encoded
"senderPublicKey" - Sender account's public key, Base58-encoded
"fee" - Transaction fee for Asset issue, min = 100000
"quantity" - Additional quantity of asset'lets to issue (number of indivisible pieces of assets)
"reissuable" - Boolean flag whether it is possible to issue additional assets
"timestamp" - Transaction timestamp
"signature" - Signature of all transaction data, Base58-encoded
```

**Request JSON example:**

```js
{
  "quantity": 22300000000,
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "reissuable": true,
  "fee": 100000,
  "timestamp": 1479221697312,
  "signature": "49Gp5qit4GF5723LxQLjsBRoyJKKH41LpNUzwwi2ZM6dXuE9a18ApAJt9sfK3uMpjD1PiHXshS31nN9NtpYm8veu"
}
```

**Response params:**

```
"type" - Transaction type (5 for ReissueTransaction)
Others the same as in [Broadcast Issue Assets]
```

**Response JSON example:**

```js
{
  "type": 5,
  "id": "2fA4nzfCXrPmpAscwGrLoL6JHTa1u4eRLv5vbohzVxBn",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "quantity": 22300000000,
  "reissuable": true,
  "fee": 100000,
  "timestamp": 1479221697312,
  "signature": "49Gp5qit4GF5723LxQLjsBRoyJKKH41LpNUzwwi2ZM6dXuE9a18ApAJt9sfK3uMpjD1PiHXshS31nN9NtpYm8veu"
}
```

### POST /assets/broadcast/burn
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)







Burn quantity of the Asset. Publish signed Asset burn transaction to the network.

**Request params:**

```
"assetId" - Asset ID previously issued, Base58-encoded
"senderPublicKey" - Sender account's public key, Base58-encoded
"fee" - Transaction fee for Asset issue, min = 100000
"quantity" - amount of asset'lets to burn (number of indivisible pieces of assets)
"timestamp" - Transaction timestamp
"signature" - Signature of all transaction data, Base58-encoded
```

**Request JSON example:**

```js
{
  "senderPublicKey" : "EHDZiTW9uhZmpfKRyJtusHXCQ3ABwJ3t9dxZdiPp2GZC",
  "fee" : 100000000,
  "timestamp" : 1495623946088,
  "signature" : "4sWPrZFpR379XC4Med1y8AK2Avmx8nVUxVAzsE4QMzEeMtQyHgjzfQsi2Y5VY7diCqMAzohy9ZSTP3yfiB3QPQMd",
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

### POST /assets/broadcast/transfer
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)







Publish signed Asset transfer from one address to another as a transaction to the network.

**Request params:**

* Signed transfer request:

    ```
    "assetId" [optional] - Asset ID to transfer or omit that param when transfer WAVES, Base58-encoded
    "senderPublicKey" - Sender account's public key, Base58-encoded
    "recipient" - Recipient account's address, Base58-encoded
    "fee" - Transaction fee for Asset transfer, min = 100000 (WAVElets)
    "feeAssetId" [optional] - Asset ID of transaction fee. WAVES by default, if empty or absent
    "amount" - amount of asset'lets (or wavelets) to transfer
    "attachment" - Arbitrary additional data included in transaction, max length is 140 bytes, Base58-encoded
    "timestamp" - Transaction timestamp
    "signature" - Signature of all transaction data, Base58-encoded
    ```

* Signed versioned transfer request:

    ```
    "assetId" [optional] - Asset ID to transfer or omit that param when transfer WAVES, Base58-encoded
    "senderPublicKey" - Sender account's public key, Base58-encoded
    "recipient" - Recipient account's address, Base58-encoded
    "fee" - Transaction fee for Asset transfer, min = 100000 (WAVElets)
    "amount" - Amount of wavelets to transfer
    "attachment" - Arbitrary additional data included in transaction, max length is 140 bytes, Base58-encoded
    "timestamp" - Transaction timestamp
    "verson" - Version of transaction. Always 2.
    "proofs" - Proofs, Base58-encoded. It could be a signtature or a secret word, that could be verified in a smart contract
    ```

**Request JSON example:**

```js
{
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
  "fee": 100000,
  "amount": 5500000000,
  "attachment": "BJa6cfyGUmzBFTj3vvvaew",
  "timestamp": 1479222433704,
  "signature": "2TyN8pNS7mS9gfCbX2ktpkWVYckoAmRmDZzKH3K35DKs6sUoXHArzukV5hvveK9t79uzT3cA8CYZ9z3Utj6CnCEo"
}
```

**Response params:**

* Signed transfer response:

    ```
    "type" - Transaction type (4 for TransferTransaction)
    "id" - Id(hash) of transaction, Base58-encoded
    "assetId" - Asset ID in Base58 format, effectively equals transaction id
    "timestamp" - Transaction timestamp
    "sender" - Sender account's address, Base58-encoded
    "senderPublicKey" - Sender account's public key, Base58-encoded
    "recipient" - Recipient account's address, Base58-encoded
    "feeAsset" - Asset ID of transaction fee, currently is null, i.e. WAVES
    "fee" - Amount of transaction fee
    "attachment" - Attachment, Base58-encoded
    "signature" - Signature of all transaction data, Base58-encoded
    ```

* Signed versioned transfer response:

    ```
    "type" - Transaction type (4 for VersionedTransferTransaction)
    "id" - Id(hash) of transaction, Base58-encoded
    "sender" - Sender account's address, Base58-encoded
    "senderPublicKey" - Sender account's public key, Base58-encoded
    "fee" - Amount of transaction fee
    "timestamp" - Transaction timestamp
    "proofs" - Array of Base58-encoded proofs
    "version" - Version of transaction (Always 2)
    "recipient" - Recipient account's address, Base58-encoded
    "assetId" - Asset ID in Base58 format, effectively equals transaction id
    "amount" - Amount of wavelets to transfer
    "attachment" - Attachment, Base58-encoded
    ```

**Response JSON example:**

```js
{
  "type": 4,
  "id": "3xPyT73TGV7c5PKEJpicwSsX7PXyi3Lm1JFNQivFRLuy",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "amount": 5500000000,
  "feeAsset": null,
  "fee": 100000,
  "timestamp": 1479222433704,
  "attachment": "BJa6cfyGUmzBFTj3vvvaew",
  "signature": "2TyN8pNS7mS9gfCbX2ktpkWVYckoAmRmDZzKH3K35DKs6sUoXHArzukV5hvveK9t79uzT3cA8CYZ9z3Utj6CnCEo"
}
```

### POST /assets/broadcast/batch-transfer
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)







Publish many signed Asset transfer from one address to another as a transaction to the network. The current limit on the size of the JSON object sent is 1 megabyte.

**Request params:**

Array of JSON Objects:

* Signed transfer request:

    ```
    "assetId" [optional] - Asset ID to transfer or omit that param when transfer WAVES, Base58-encoded
    "senderPublicKey" - Sender account's public key, Base58-encoded
    "recipient" - Recipient account's address, Base58-encoded
    "fee" - Transaction fee for Asset transfer, min = 100000 (WAVElets)
    "feeAssetId" [optional] - Asset ID of transaction fee. WAVES by default, if empty or absent
    "amount" - amount of asset'lets (or wavelets) to transfer
    "attachment" - Arbitrary additional data included in transaction, max length is 140 bytes, Base58-encoded
    "timestamp" - Transaction timestamp
    "signature" - Signature of all transaction data, Base58-encoded
    ```

* Signed versioned transfer request:

    ```
    "assetId" [optional] - Asset ID to transfer or omit that param when transfer WAVES, Base58-encoded
    "senderPublicKey" - Sender account's public key, Base58-encoded
    "recipient" - Recipient account's address, Base58-encoded
    "fee" - Transaction fee for Asset transfer, min = 100000 (WAVElets)
    "amount" - Amount of wavelets to transfer
    "attachment" - Arbitrary additional data included in transaction, max length is 140 bytes, Base58-encoded
    "timestamp" - Transaction timestamp
    "verson" - Version of transaction. Always 2.
    "proofs" - Proofs, Base58-encoded. It could be a signtature or a secret word, that could be verified in a smart contract
    ```

**Request JSON example:**

```js
[
  {
    "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
    "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
    "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
    "fee": 100000,
    "amount": 5500000000,
    "attachment": "BJa6cfyGUmzBFTj3vvvaew",
    "timestamp": 1479222433704,
    "signature": "2TyN8pNS7mS9gfCbX2ktpkWVYckoAmRmDZzKH3K35DKs6sUoXHArzukV5hvveK9t79uzT3cA8CYZ9z3Utj6CnCEo"
  },
  {
    "assetId": "Aih8nqFiogg9AFaByXrDvoSZnzmXEndPxxyti7zvp3Bp",
    "senderPublicKey": "UpbUnRwjkF9kjYHqGtWkkYJPqCtY4AdaKuwGUdNhcYzX",
    "recipient": "2dmG3TnD1iha2Nr29F1DuZzG9nTH941r9e3",
    "fee": 100000,
    "amount": 5500000000,
    "attachment": "YbFwKyUhKw1r1Ag64dpkbK",
    "timestamp": 1479222433704,
    "version": 2,
    "proofs": [
      "45bw5ynx7wynXMtmS6EEx8hNs3YMFctknUBsnVPQ3YbPmB8vhFoL5CSFHTBMFmnsLVbdNCpvFGGbPjbfZxbLb8j9r8MTWrbgPJQ",
      "HpSmAWoES5pKvaUbo4VdbkgxiwKYMHdRAJEibVhZzwv3BcBJVBr2hNzaF5o7SAgVw8oHdq4Lgw"
    ]
  }
]
```

**Response params:**

Array of JSON Objects:

* Signed transfer response:

    ```
    "type" - Transaction type (4 for TransferTransaction)
    "id" - Id(hash) of transaction, Base58-encoded
    "assetId" - Asset ID in Base58 format, effectively equals transaction id
    "timestamp" - Transaction timestamp
    "sender" - Sender account's address, Base58-encoded
    "senderPublicKey" - Sender account's public key, Base58-encoded
    "recipient" - Recipient account's address, Base58-encoded
    "feeAsset" - Asset ID of transaction fee, currently is null, i.e. WAVES
    "fee" - Amount of transaction fee
    "attachment" - Attachment, Base58-encoded
    "signature" - Signature of all transaction data, Base58-encoded
    ```

* Signed versioned transfer response:

    ```
    "type" - Transaction type (4 for VersionedTransferTransaction)
    "id" - Id(hash) of transaction, Base58-encoded
    "sender" - Sender account's address, Base58-encoded
    "senderPublicKey" - Sender account's public key, Base58-encoded
    "fee" - Amount of transaction fee
    "timestamp" - Transaction timestamp
    "proofs" - Array of Base58-encoded proofs
    "version" - Version of transaction (Always 2)
    "recipient" - Recipient account's address, Base58-encoded
    "assetId" - Asset ID in Base58 format, effectively equals transaction id
    "amount" - Amount of wavelets to transfer
    "attachment" - Attachment, Base58-encoded
    ```

**Response JSON example:**

```js
[
  {
    "type": 4,
    "id": "3xPyT73TGV7c5PKEJpicwSsX7PXyi3Lm1JFNQivFRLuy",
    "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
    "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
    "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
    "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
    "amount": 5500000000,
    "feeAsset": null,
    "fee": 100000,
    "timestamp": 1479222433704,
    "attachment": "BJa6cfyGUmzBFTj3vvvaew",
    "signature": "2TyN8pNS7mS9gfCbX2ktpkWVYckoAmRmDZzKH3K35DKs6sUoXHArzukV5hvveK9t79uzT3cA8CYZ9z3Utj6CnCEo"
  },
  {
    "type": 4,
    "id": "3MHxkG7Jp1dR7iZSyYiNPy7G4BMTCUPbs2snAzvv4wu1",
    "sender": "4V4TpBPPfvEXYmzteXLPkK5xwVXWjnQwJ5H",
    "senderPublicKey": "UpbUnRwjkF9kjYHqGtWkkYJPqCtY4AdaKuwGUdNhcYzX",
    "fee": 100000,
    "timestamp": 1479222433704,
    "proofs": [
      "45bw5ynx7wynXMtmS6EEx8hNs3YMFctknUBsnVPQ3YbPmB8vhFoL5CSFHTBMFmnsLVbdNCpvFGGbPjbfZxbLb8j9r8MTWrbgPJQ",
      "HpSmAWoES5pKvaUbo4VdbkgxiwKYMHdRAJEibVhZzwv3BcBJVBr2hNzaF5o7SAgVw8oHdq4Lgw"
    ],
    "version": 2,
    "recipient": "2dmG3TnD1iha2Nr29F1DuZzG9nTH941r9e3",
    "assetId": "Aih8nqFiogg9AFaByXrDvoSZnzmXEndPxxyti7zvp3Bp",
    "amount": 5500000000,
    "attachment": "YbFwKyUhKw1r1Ag64dpkbK"
  }
]
```
