# Data transaction of the Token Rating oracle

Once a day, the [Token Rating](https://oracles.wavesexplorer.com/oracle/3P2eDV4pWJGmPjLGLrW4dsMA53te4gzkwnH) [oracle](/waves-oracles/oracle.md) sends to the blockchain a [data transaction](/blockchain/transaction-type/data-transaction.md) with [ratings and rates](/waves-token-rating/rating-formula.md) of tokens.

A data transaction contains the information about tokens, that have been rated in the past 24 hours.

A single transaction contains the information about no more than 25 tokens —  if there are more rated tokens, then several transactions will be sent.

An example of a [data array](/blockchain/transaction-type/data-transaction.md) of such a transaction:

``` js
"data": [
  {
    "key": "assetRating_BsL9uRX4bucKcSY7rfUPhqKjXiWomUQTGFGhodNySACb_1"
    "type": "integer",
    "value": 43,
  },
  {
    "type": "integer",
    "value": 28343,
    "key": "assetWeight_BsL9uRX4bucKcSY7rfUPhqKjXiWomUQTGFGhodNySACb"
  },
  {
    "type": "integer",
    "value": 12,
    "key": "assetVotes_BsL9uRX4bucKcSY7rfUPhqKjXiWomUQTGFGhodNySACb"
  },
  {
    "key": "scoreBoard_BsL9uRX4bucKcSY7rfUPhqKjXiWomUQTGFGhodNySACb"
    "type": "string",
    "value": "{\"1\":{\"votes\":0,\"tokens\":0},\"2\":{\"votes\":1,\"tokens\":322},\"3\":{\"votes\":0,\"tokens\":0},\"4\":{\"votes\":0,\"tokens\":0},\"5\":{\"votes\":1,\"tokens\":1120}}",
  },
  ...
  {
      "type": "integer",
      "value": 45,
      "key": "tickerRating_1"
  },
  {
      "type": "integer",
      "value": 10000,
      "key": "tickerWeight"
  },
  {
      "type": "integer",
      "value": 11,
      "key": "tickerVotes"
  }
]
```

The key field is formed by [concatenating](https://en.wikipedia.org/wiki/Concatenation) a string that describes the parameter and a string with the ID of a token.

| Key | Type | Description |
| :--- | :--- | :--- |
| assetRating_assetId_1 | integer | Rating of the token (multiplied by 10) |
| assetWeight_assetId | integer | WCT weight of the token |
| assetVotes_assetId | integer | Votes sum of the token |
| scoreBoard_assetId | string | The value the field contains an [escaped string](https://en.wikipedia.org/wiki/Escape_character) with rates. |
| tickerRating_1 | integer | Service parameter, which contains the value of the Rating (multiplied by 10), which must be at the token in order for the ticker to be set by its issuer |
| tickerWeight | integer | Service parameter, which contains the value of the WCT weight, which must be at the token in order for the ticker to be set by its issuer |
| tickerVotes | integer | Service parameter, which contains the value of the Votes sum, which must be at the token in order for the ticker to be set by its issuer |

## An example escaped string with rates

Let's say we have an escaped string with rates:

``` js
"{\"1\":{\"votes\":0,\"tokens\":0},\"2\":{\"votes\":0,\"tokens\":0},\"3\":{\"votes\":3,\"tokens\":545},\"4\":{\"votes\":0,\"tokens\":0},\"5\":{\"votes\":2,\"tokens\":3827}}"
```

Let's unescape that string:

``` js
{
  "1": {
    "votes": 0,
    "tokens": 0
  },
  "2": {
    "votes": 0,
    "tokens": 0
  },
  "3": {
    "votes": 3,
    "tokens": 545
  },
  "4": {
    "votes": 0,
    "tokens": 0
  },
  "5": {
    "votes": 2,
    "tokens": 3827
  }
}
```

It follows from the string that no one rated the token with one, two or four stars.

Three users rated the token with three stars. The sum of the weights [W<sub>n</sub>](/waves-token-rating/rating-formula.md) of those rates is 545.

Two users rated the token with five stars. The sum of the weights W<sub>n</sub> of those rates is 3827.
