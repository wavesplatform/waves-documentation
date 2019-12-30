# Data Transaction

### Use Cases

* Certify authorship of a document by [publishing its hash on the blockchain](https://techcrunch.com/2015/11/20/stampery-now-lets-you-certify-documents-using-the-blockchain-and-your-real-identity)
* Verify that a digital artwork [is original](http://classic.monegraph.com)
* Provide data for smart contracts to work on. E.g. if an oracle publishes some data once in a while using a publicly known account, smart contracts can use that data in their logic.

### Implementation

Data inside a transaction is structured as key-value pairs. Keys are non-empty UTF-8 strings and are case sensitive. Each value has a data type associated with it. 4 data types are supported: boolean, integer, string, and byte array.

Binary format of a data transaction is as follows:

| Field | Size in Bytes | Comment |
| ----- | -------------:| ----- |
| type | 1 | == 12
| version | 1 | == 1 at this time
| sender's public key | 32 |
| number of data entries | 2 |
| key1 length | 2 | key1 byte size
| key1 bytes | ? | UTF-8 encoded
| value1 type | 1 | 0 = integer<br>1 = boolean<br>2 = binary array<br>3 = string
| value1 bytes | ? |
|... | |
| timestamp | 8 |
| fee | 8 |
| proofs | ? | currently only signature is supported

For values, a one byte type code is written first, indicating the value type. Then the value is encoded as follows:

| Value Type | Type Byte | Encoding                        | Total Size |
|------------|----------:|---------------------------------|-----------:|
| integer    |         0 | value as 8 bytes                |          9 |
| boolean    |         1 | 0=false, 1=true                 |          2 |
| binary     |         2 | size as 2 bytes + N value bytes |      N + 3 |
| string     |         3 | size as 2 bytes + N value bytes |      N + 3 |

Data transactions issued by a single account define this account's state in a cumulative fashion. E.g. once the following two transactions have been mined:

| tx # | key          | value   |
|------|--------------|---------|
| 1    | "smart"<br>"IQ" | true<br>79 |
| 2    | "IQ"         | 130     |

the account state will be `{"smart": true, "IQ": 130}`, this is, the latter transaction can overwrite existing keys but not delete them. There is currently no planned way to clear the state of an account.

### Smart Contract Interaction

The smart contract language has functions `getInteger()`, `getBoolean()`, `getBinary()`, and `getString()`. All these accept two parameters: address and key. They return `Some(value)` if successful, `None` if no value exists for the given key, and make contract fail if the value stored under the key has different type.

Internally, data entries are stored as `DataType` class:
```
sealed abstract case class DataType(innerType: REAL)
object DataType {
  object Boolean   extends DataType(BOOLEAN)
  object Long      extends DataType(LONG)
  object ByteArray extends DataType(BYTEVECTOR)
  object String    extends DataType(STRING)
}
```


### Fees

Fee is proportional to transaction size. Minimal fee is 100,000 per kilobyte, rounded up.

Fee is payable in WAVES only.

### API

`POST /addresses/data` signs and sends a data transaction. This endpoint requires API key. Sample input is as follows (binary arrays are Base64-encoded):
```
{
  "version" : 1,
  "sender": "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
  "data": [
    {"key": "int", "type": "integer", "value": 24},
    {"key": "bool", "type": "boolean", "value": true},
    {"key": "blob", "type": "binary", "value": "base64:BzWHaQU"}
    {"key": "My poem", "type": "string", "value": "Oh waves!"}
  ],
  "fee": 100000
}
```

`GET /addresses/data/{address}` returns complete data set defined for an address. Entries are sorted by keys in ascending order:
```
[ {
  "key" : "blob",
  "type" : "binary",
  "value" : "base64:BzWHaQU"
}, {
  "key" : "bool",
  "type" : "boolean",
  "value" : true
}, {
  "key" : "int",
  "type" : "integer",
  "value" : 24
}, {
  "key": "My poem",
  "type": "string",
  "value": "Oh waves!"
} ]
```

`GET /addresses/data/{address}/{key}` returns single data entry, or 404 if no data is defined for the given key. This method is faster than the one above if you only need one entry:
```
{
  "key" : "bool",
  "type" : "boolean",
  "value" : true
}
```

`POST /transactions/sign` signs a data transaction request (transaction type == 12). This endpoint requires API key.

`POST /transactions/broadcast` broadcasts a signed transaction (transaction type == 12)

`GET /transactions/info, /transactions/address, /blocks/at` etc – all support the new transaction. Here's what an output from /transactions/info looks like:
```
{
  "type" : 12,
  "id" : "CwHecsEjYemKR7wqRkgkZxGrb5UEfD8yvZpFF5wXm2Su",
  "sender" : "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
  "senderPublicKey" : "5AzfA9UfpWVYiwFwvdr77k6LWupSTGLb14b24oVdEpMM",
  "fee" : 100000,
  "timestamp" : 1520945679531,
  "proofs" : [ "4huvVwtbALH9W2RQSF5h1XG6PFYLA6nvcAEgv79nVLW7myCysWST6t4wsCqhLCSGoc5zeLxG6MEHpcnB6DPy3XWr" ],
  "data" : [ {
    "key" : "int",
    "type" : "integer",
    "value" : 24
  }, {
    "key" : "bool",
    "type" : "boolean",
    "value" : true
  }, {
    "key" : "blob",
    "type" : "binary",
    "value" : "base64:BzWHaQU"
  }, {
    "key" : "My poem",
    "type" : "string",
    "value" : "Oh waves!"
  } ],
  "version" : 1,
  "height" : 303
}
```

With all endpoints, byte arrays are Base64-encoded and prefixed with "base64:".

### Constraints

Keys must be between 1 and 100 characters long. A key can contain arbitrary Unicode code points including spaces and other non-printable symbols.
Byte array and string values have a limit of 32k bytes.

Maximum number of entries in data transaction is 100.

Maximum size of a data transaction is 150 kilobytes.

A data transaction cannot contain multiple entries sharing the same key. Such a transaction would make little sense and would most likely indicate a user error, so it is prohibited.

### Related Changes

Data transaction goes through feature #5.
