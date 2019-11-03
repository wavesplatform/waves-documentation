# Address

### GET /addresses

Get list of all accounts addresses in the node's wallet.

**Response:**

```
[
  
"
3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8
"
,
  
"
3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7
"

]
```

### GET /addresses/seq/{from}/{to}

Get list of accounts addresses with indexes at this range in the node's wallet.

**Response:**

```
[
  
"
3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8
"
,
  
"
3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7
"

]
```

### POST /addresses

Generate a new account address in the wallet._Requires API\_KEY to be provided_

**Request:**

```

```

**Response JSON example:**

```
{
  
"
address
"
: 
"
3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7
"

}
```

### GET /addresses/balance/{address}

Get account balance in WAVES in {address}:

```
  "address" - account's address in Base58 format

```

**Response JSON example:**

```
{
  
"
address
"
: 
"
3N3keodUiS8WLEw9W4BKDNxgNdUpwSnpb3K
"
,
  
"
confirmations
"
: 
0
,
  
"
balance
"
: 
100945889661986

}
```

### GET /addresses/balance/{address}/{confirmations}

Get account balance in WAVES by {address} after {confirmations} from now:

```
  "address" - account's address in Base58 format
  "confirmations" - N of confirmations

```

**Response JSON example:**

```
{
  
"
address
"
: 
"
3N3keodUiS8WLEw9W4BKDNxgNdUpwSnpb3K
"
,
  
"
confirmations
"
: 
500
,
  
"
balance
"
: 
100945388397565

}
```

### POST /addresses/data

Post a Data transaction. The data are added to the sender account's state.

**Request:**
```
{
  "version": 1,
  "sender": "3N5GRqzDBhjVXnCn44baHcz2GoZy5qLxtTh",
  "data": [
    {"key": "how much?", "type": "integer", "value": 122333},
    {"key": "I'm fine!", "type": "boolean", "value": true},
    {"key": "blob", "type": "binary", "value": "Base58encoded"}
  ],
  "fee": 100000
}
```

**Response JSON example:**
```
{
  "type": 12,
  "id": "2eV6zNKUiHYE3htNbRc8Dva15xxvPT2zzZPvBce2mxoc",
  "sender": "3N5GRqzDBhjVXnCn44baHcz2GoZy5qLxtTh",
  "senderPublicKey": "FM5ojNqW7e9cZ9zhPYGkpSP1Pcd8Z3e3MNKYVS5pGJ8Z",
  "fee": 100000,
  "timestamp": 1523278209988,
  "proofs": [
    "3HXf7cV7GyAkj9dTuskQPxLQEcpv8RrRfXEqzReXdwguCdcLBbH6HqZAGTMzw2f7wxVdGm9rrNdqd5AjsffWqLQJ"
  ],
  "version": 1,
  "data": [
    {
      "key": "how much?",
      "type": "integer",
      "value": 122333
    },
    {
      "key": "I'm fine!",
      "type": "boolean",
      "value": true
    },
    {
      "key": "blob",
      "type": "binary",
      "value": "Base58encoded"
    }
  ]
}
```

### GET /addresses/data/{address}

Get all data published by an address.

```
  "address" - address in Base58 format
```

**Response JSON example:**

```
[
  {
    "key": "I'm fine!",
    "type": "boolean",
    "value": true
  },
  {
    "key": "blob",
    "type": "binary",
    "value": "Base58encoded"
  },
  {
    "key": "how much?",
    "type": "integer",
    "value": 122333
  }
]
```

### GET /addresses/data/{address}/{key}

Get data entry associated with an address and a key.

```
  "address" - address in Base58 format
  "key" - data key
```

**Response JSON example:**

```
{
  "key": "blob",
  "type": "binary",
  "value": "Base58encoded"
}
```
