# Create an oracle card with a data transaction

## Sending a data transaction

The parameters of the oracle card are described in the data transaction, and it also serves to create the oracle card.

To define an oracle card, the data transaction must have a special attribute `wpo_oracle` in the data array:

``` json
{
    "key": "wpo_oracle",
    "type": "string",
    "value": "oracle"
}
```

The `wpo_oracle` attribute distinguishes data transactions intended to create an oracle card from other data transactions.

Oracles that are created in the test network must have the attribute `wpo_testnet`.

To ensure the reliability of the protocol of data transfer between the oracle and users, it is recommended to use the version of this protocol. To this end, each data transaction through which an oracle card is registered or updated should have a "version" parameter.

## Description of the data transaction

See information about the data transaction.

## Oracle card parameters

### Keys of data transaction data array

| Key | Field in Waves Oracles | Type | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| wpo_oracle |  | string | yes | Must be "oracle".<br>Allows to find the data transaction of oracle cards in the blockchain  |
| wpo_testnet |  | boolean | yes (only in test network) | Must be true.<br>The key is only used in the test network |
| wpo_createdate |  | integer | yes | Timestamp for the first version of the oracle card.<br>0 when the card is first created |
| wpo_createid |  | string | yes | "origin" if it's the first time the card is created.<br>If the oracle card is being updated, the transaction ID used to create the first version of the oracle card is entered in the field |
| wpo_addres | Address | string | yes | Account whose data storage the oracle card |
| wpo_name | Oracle name | string | yes | Oracle name |
| wpo_link | Link | string | no | Link to a data source |
| wpo_protocol | Category | integer | yes | Protocol code |
| wpo_status | Status | integer | yes | Current oracle status. Is integer:<br>3 — archive<br>2 — development<br>1 — production<br>0 — test |
| wpo_description | About | string | no | Field About |
| wpo_frequency | Update frequency | string | no | Field Update frequency |
| wpo_revisions | Summary of Changes from Previous Version | string | no | Field Summary of Changes from Previous Version |
| wpo_specifation | Specification | binary | no | Oracle Specification |
| wpo_example | Example | binary | no | Example of the oracle transaction format |
| wpo_updatedate |  | integer | yes | Oracle card update timestamp.<br>0 if the card is created for the first time |

### A key whiсh describe an oracle specification

Each parameter of the oracle specification consists of four attributes:

| Attribute | Description |
| :--- | :--- |
| Name | Parameter name |
| Type | <br>1 — string<br>2 — integer<br>3 — boolean<br>4 — binary |
| Required | <br>1 — yes<br>0 — no |
| Description | Parameter description |

### Usage

Here is an example of an oracle that passes the parameters `version`, `weather`, `temperature`.

Parameters `version` and `weather` are mandatory. JSON describing the specification of this oracle will look as follows:

``` json
[  
   {  
      "name":"version",
      "type":1,
      "required":1,
      "description":"current version of protocol"
   },
   {  
      "name":"weather",
      "type":1,
      "required":1,
      "description":"weather data"
   },
   {  
      "name":"temperature",
      "type":2,
      "required":0,
      "description":"celsius"
   }
]
```

The "wpo_specification" key is the parameters mentioned above (`version`, `weather`, `temperature` and their attributes) encoded in base64.

``` json
{  
   "type":"binary",
   "value":"base64:W3sia2V5Ijoic3BlY18xNTY1MzQwOTc4MzI3IiwidHlwZSI6ImludGVnZXIiLCJuYW1lIjoid2F2ZXNfYnRjXzgiLCJkZXNjcmlwdGlvbiI6Ikxhc3QgcHJpY2UgV0FWRVMvQlRDLiA4IGlzIGRlY2ltYWxzLiBGb3IgZXhhbXBsZSwgMTkzMzAwMCBpdCdzIDAuMDE5MzMgV0FWRVMvQlRDIiwicmVxdWlyZWQiOjF9LHsia2V5Ijoic3BlY18xNTY1MzQxMTE2ODQyIiwidHlwZSI6ImludGVnZXIiLCJuYW1lIjoid2F2ZXNfdXNkXzIiLCJkZXNjcmlwdGlvbiI6Ikxhc3QgcHJpY2UgV0FWRVMvVVNELiAyIGlzIGRlY2ltYWxzLiBGb3IgZXhhbXBsZSwgMjk0IGl0J3MgMi45NCBXQVZFUy9VU0QiLCJyZXF1aXJlZCI6MX1d",
   "key":"wpo_specification"
}
```

### Key with the example of the oracle transaction format

The "wpo_example" key value is a base64 string containing an example of the oracle transaction format.

JSON with an example of using an oracle:

```
{
    "version": "1.00.95-release",
    "weather": "sun",
    "temperature": 23
}
```

The "wpo_example" key is an example encoded in base64 mentioned above.

```
{
    "key": "wpo_example",
    "type": "string",
    "value": "base64:ewoidmVyc2lvbiI6ICIxLjAwLjk1LXJlbGVhc2UiLAoid2VhdGhlciI6ICJzdW4iLAoidGVtcGVyYXR1cmUiOiAyMwp9"
}
```

### Now an example of a data transaction used to create an oracle card

```
{
    "type": 12,
    "version": 1,
    "senderPublicKey": "442hJo5S9U2jsdTvJ4v5zacH324XMnq3qUWCPmbkBWbZ",
    "fee": 300000,
    "timestamp": 1547218635000,
    "data": [{
            "key": "wpo_oracle",
            "type": "string",
            "value": "oracle"
        }, {
            "key": "wpo_createdate",
            "type": "integer",
            "value": 1548865781425
        }, {
            "key": "wpo_createid",
            "type": "string",
            "value": "CoQ79XjwgBiYxpzTVM2RQV1cFWeujF3JdwtAzdL6jx2r"
        }, {
            "key": "wpo_address",
            "type": "string",
            "value": "3Mso8hGr8dv4DK4nEY8fJykGpQkxK7PaZvs"
        }, {
            "key": "wpo_name",
            "type": "string",
            "value": "Example Stocks Oracle"
        }, {
            "key": "wpo_link",
            "type": "string",
            "value": "example.com"
        }, {
            "key": "wpo_protocol",
            "type": "integer",
            "value": 301
        }, {
            "key": "wpo_status",
            "type": "integer",
            "value": 1
        }, {
            "key": "wpo_description",
            "type": "string",
            "value": "An example of a public oracle containing information on various financial instruments in accordance with the requirements of the WPO002 protocol standard, such as stocks, commodities, fiat and cryptocurrencies."
        }, {
            "key": "wpo_frequency",
            "type": "string",
            "value": "Information is updated every 60 minutes."
        }, {
            "key": "wpo_revisions",
            "type": "string",
            "value": "Summary of revisions made"
        }, {
            "key": "wpo_specifation",
            "type": "string",
            "value": "base64:Clt7CiJuYW1lIjogInZlcnNpb24iLAoidHlwZSI6IDEsCiJyZXF1aXJlZCI6IDEsCiJkZXNjcmlwdGlvbiI6ICJjdXJyZW50IHZlcnNpb24gb2YgcHJvdG9jb2wiCn0sIHsKIm5hbWUiOiAid2VhdGhlciIsCiJ0eXBlIjogMSwKInJlcXVpcmVkIjogMSwKImRlc2NyaXB0aW9uIjogIndlYXRoZXIgZGF0YSIKfSwgewoibmFtZSI6ICJ0ZW1wZXJhdHVyZSIsCiJ0eXBlIjogMiwKInJlcXVpcmVkIjogMCwKImRlc2NyaXB0aW9uIjogItGBZWxzaXVzIgp9Cl0="
        }, {
            "key": "wpo_example",
            "type": "string",
            "value": "base64:ewoidmVyc2lvbiI6ICIxLjAwLjk1LXJlbGVhc2UiLAoid2VhdGhlciI6ICJzdW4iLAoidGVtcGVyYXR1cmUiOiAyMwp9"
        }, {
            "key": "wpo_updatedate",
            "type": "integer",
            "value": 1548866781425
        }
    ]
}
```

## Oracle protocol codes

| Category code | Code value | Description |
| :--- | :--- | :--- |
| 100 | 100 | Algorithms & calculations (random value for example) |
|  | 101 | Pseudorandom algorithms |
| 200 | 200 | Offline data source (IoT, sensors, other hardware) |
|  | 201 | Smart trackers (smartphone, watch, collar, bracelet, etc.) |
|  | 202 | Transfer, logistics, connected car, smart car |
|  | 203 | Smart home |
| 300 | 300 | Online data source (rates, market data, weather, etc.) |
|  | 301 | Market data & exchange rates |
|  | 302 | Weather data & forecasts |
|  | 303 | Sport & bets |
|  | 304 | Other blockchains |
|  | 305 | Time, date, calendar |
| 400 | 400 | Data management |
|  | 401 | Rights |
|  | 402 | Media & content |
|  | 403 | Document flow, work (plans, activity records, etc.) |
| 500 | 500 | dApps |
|  | 501 | Identification |
|  | 502 | Games |
