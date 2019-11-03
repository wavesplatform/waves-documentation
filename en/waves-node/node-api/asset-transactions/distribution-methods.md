# Assets Distribution

Applications such as rollovers, trusts, estates, insurance and other transactions require assets to be distributed between parties or between executed contracts. An address can simply represent a user, such as an account holder. But it can also represent an individual unique asset.

## Methods

The problems with getting the whole assets distribution for many holders at once are:

* Time consuming with this heavy request _**/asset/distribution**_.
* Vulnerability  to DDOS attacks for the nodes which is using this method without pagination.

For the mentioned problems above, **GET /assets/{assetId}/distribution/{height}** provides more recommended method for getting balance distribution at a given block height \(up to 2,000 blocks down\) and it works with pagination.  
Several addresses in one query is limited by a **limit** parameter which is by default 1000 addresses maximum and if it's your node, you can configure max limit in **Application.Conf** by modifying **distribution-address-limit**. You can include the address of the next query to get next part of asset distribution by using the optional parameter **After** .

## Examples

Lets assume that we want to get distribution of asset `DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J` at height 1352994 with a limit of 10 addresses :

**1. First  Request:**

```js
http://nodes.wavesnodes.com/assets/DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J/distribution/1352994/limit/10
```

**2. First  Response:**

```js
{
  "hasNext" : true,
  "lastItem" : "3PHyfTkzkaC7dv29RDCYL8XHx2EaZU8Nk2X",
  "items" : {
    "3PC4roN512iugc6xGVTTM2XkoWKEdSiiscd" : 5630,
    "3PPKF2pH4KMYgsDixjrhnWrPycVHr1Ye37V" : 3540364,
    "3PMzLSxyP9hgGNAmFgmHZ7ei9cCibbk6nYC" : 1,
    "3P59RUApvri6pS2LpCuem3ypsF8hGbTuhJW" : 5,
    "3PCW1xqHcXLb9irik43tDrYY2xuVGsdvfH3" : 4,
    "3P1y6WPuhP69FLPd4yjRhjDEaBukyJdHq2y" : 1,
    "3PHyfTkzkaC7dv29RDCYL8XHx2EaZU8Nk2X" : 1,
    "3P2Z9TJdHejPZHM4qoX6i2No2n2cXSnVPPE" : 1,
    "3PC4ybZEUecdDfDRgNPCySdjeGc9jJsJ1v7" : 1,
    "3PPfAGBSZbTka5jCL3iXmQycXdgySbCj3kK" : 5
  }
}
```

Where:

* **hasNext** is true if there is a next query.
* **lastItem**: the address of last item\(you should use 'lastItem' parameter to get next portion\).
* **items**: the list of distributed addresses.

**1. Request to get next 10 addresses in distribution at height 1353075 and after the address of LastItem which is 3PPfAGBSZbTka5jCL3iXmQycXdgySbCj3kK :**

```js
http://nodes.wavesnodes.com/assets/DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J/distribution/1353075/limit/10?after=3PPfAGBSZbTka5jCL3iXmQycXdgySbCj3kK
```

**2. Respond to get next 10 addresses in distribution:**

```js
{
  "hasNext" : true,
  "lastItem" : "3P4TXRsqDJm2ZGBD5mAZjePf5agmXMeuDb9",
  "items" : {
    "3P4TXRsqDJm2ZGBD5mAZjePf5agmXMeuDb9" : 5,
    "3PHczp777nxGPj4JTocuDa8sdVohzuxk3Bc" : 1,
    "3PBhRmXaAmusZ68fR4s8fx5ej7BnjaakghA" : 5,
    "3PAFYk89L1DLhyTzV8n4pa3Tu3Ag6qJAJof" : 5,
    "3P1y6WPuhP69FLPd4yjRhjDEaBukyJdHq2y" : 1,
    "3PGa2ZKine8AEoWW6bUcQ361n4EDDk9KY3N" : 5,
    "3PChKs3ZTQ8RaosngtpkpFCGPcfQ7rJ6FkH" : 5,
    "3PHyfTkzkaC7dv29RDCYL8XHx2EaZU8Nk2X" : 1,
    "3P2Z9TJdHejPZHM4qoX6i2No2n2cXSnVPPE" : 1,
    "3PGBDioYWFZXyfMvEwwrwKMBzNLxVZ3ax7G" : 4
  }
}
```

**3. Next requests to get whole distribution will be similar.**

`DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J` in **after** param in _**N**_ request should be substituted with **lastItem **from _**N-1**_ response and Repeat until **hasNext == false**.

