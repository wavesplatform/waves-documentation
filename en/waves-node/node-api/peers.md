### POST /peers/connect
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)



Connect to peer.

**Request:**

```js
{
	"host":"127.0.0.1",
	"port":"9084"
}
```

### GET /peers/connected
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)



Returns list of all currently connected peers to the node.

**Response JSON example:**

```js
{
  "peers": [
    {
      "address": "52.51.92.182/52.51.92.182:6863",
      "declaredAddress": "N/A",
      "peerName": "zx 182",
      "peerNonce": 183759
    },
    {
      "address": "ec2-52-28-66-217.eu-central-1.compute.amazonaws.com/52.28.66.217:6863",
      "declaredAddress": "N/A",
      "peerName": "zx 217",
      "peerNonce": 1021800
    }
  ]
}
```

### GET /peers/blacklisted
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)



Returns list of all currently blacklisted peers to the node.

### GET /peers/all
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)



Returns list of all ever known not blacklisted peers with publicly available declared address.

