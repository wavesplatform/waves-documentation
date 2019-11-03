## Address
### GET /addresses
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)





Get list of all accounts addresses in the node's wallet.

**Response:**

```js
[
"3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
"3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"
]
```

### GET /addresses/seq/{from}/{to}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Get list of accounts addresses with indexes at this range in the node's wallet.

**Response:**

```js
[
"3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",  
"3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"
]
```

### POST /addresses
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Generate a new account address in the wallet._Requires API\_KEY to be provided_

**Request:**

```

```

**Response JSON example:**

```js
{

"address": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"

}
```

### GET /addresses/balance/{address}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Get account balance in WAVES in {address}:

```
  "address" - account's address in Base58 format
```

**Response JSON example:**

```js
{

  "address": "3N3keodUiS8WLEw9W4BKDNxgNdUpwSnpb3K",
  "confirmations": 0,
  "balance": 100945889661986

}
```

### GET /addresses/balance/{address}/{confirmations}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Get account balance in WAVES by {address} after {confirmations} from now:

```
  "address" - account's address in Base58 format
  "confirmations" - N of confirmations
```

**Response JSON example:**

```js
{

"address": "3N3keodUiS8WLEw9W4BKDNxgNdUpwSnpb3K",

"confirmations": 500,

"balance": 100945388397565

}
```

### GET /addresses/scriptInfo/{address}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg) ![master](https://img.shields.io/badge/node-&gt;%3D0.13.3-4bc51d.svg)

Get a script information by address.

```
  "address" - account's address in Base58 format
  "script" - Base58 representation of compiled script. The field is not present, if no script is set for address
  "scriptText" - Text representation of script. The field is not present, if no script is set for address
  "complexity" - How script is complicated
  "extraFee" - An extra fee for all transactions going from this account if the miner is this node
```

**Response JSON example:**

```js
{
  "address": "3N3keodUiS8WLEw9W4BKDNxgNdUpwSnpb3K",
  "script": "3rbFDtbPwAvSp2vBvqGfGR9nRS1nBVnfuSCN3HxSZ7fVRpt3tuFG5JSmyTmvHPxYf34SocMRkRKFgzTtXXnnv7upRHXJzZrLSQo8tUW6yMtEiZ",
  "scriptText": "ScriptV1(BLOCK(LET(x,CONST_LONG(1)),FUNCTION_CALL(FunctionHeader(==,List(LONG, LONG)),List(FUNCTION_CALL(FunctionHeader(+,List(LONG, LONG)),List(REF(x,LONG), CONST_LONG(1)),LONG), CONST_LONG(2)),BOOLEAN),BOOLEAN))",
  "complexity": 11,
  "extraFee": 10001
}
```
