# Request headers

## large-significand-format=string

Sets serialization format for monetary fields. If set, the field will be serialized to JSON as a string, otherwise - as a number. This can be useful for values with long mantissa.

### Example

```
curl -X GET --header 'Accept: application/json; large-significand-format=string' 'https://nodes.wavesnodes.com/blocks/headers/last'

```

Below is the list of endpoints accepting this header.

#### GET /addresses/balance/{address}/{confirmations}

Affected field: `balance`.

#### GET /addresses/balance/details/{address}

Affected fields: `regular`, `generating`, `available`, `effective`.

#### GET /addresses/effectiveBalance/{address}/{confirmations}

Affected field: `balance`.

#### GET /addresses/effectiveBalance/{address}

Affected field: `balance`.

#### GET /addresses/balance/{address}

Affected field: `balance`.

#### GET /blocks/headers/last

Affected field: `reward`, `totalFee`.

#### GET /blocks/headers/at/{height}

Affected fields: `reward`, `totalFee`.

#### GET /blocks/headers/seq/{from}/{to}

Affected fields: `reward`, `totalFee`.

#### GET /blocks/at/{height}

Affected fields: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

#### GET /blocks/signature/{signature}

Affected fields: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

#### GET /blocks/address/{address}/{from}/{to}

Affected fields: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

#### GET /blocks/last

Affected fields: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

#### GET /blocks/seq/{from}/{to}

Affected fields: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

#### GET /blockchain/rewards/{height}

Affected fields: `totalWavesAmount`, `currentReward`, `minIncrement`.

#### GET /blockchain/rewards

Affected fields: `totalWavesAmount`, `currentReward`, `minIncrement`.

#### POST /transactions/calculateFee

Affected field: `feeAmount`.

#### GET /transactions/info/{id}

Affected fields: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

#### GET /transactions/unconfirmed/info/{id}

Affected fields: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

#### GET /transactions/address/{address}/limit/{limit}

Affected fields: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

#### POST /transactions/broadcast

Affected fields: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

#### GET /transactions/unconfirmed

Affected fields: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

#### GET /assets/balance/{address}

Affected fields: `balance`, `minSponsoredAssetFee`, `sponsorBalance`, `quantity`, `fee`

#### GET /assets/nft/{address}/limit/{limit}

Affected fields: `balance`, `minSponsoredAssetFee`, `sponsorBalance`, `quantity`, `fee`

#### GET /assets/{assetId}/distribution/{height}/limit/{limit}

Affected field: asset ID.

#### GET /assets/details/{assetId}

Affected field: `quantity`.

#### GET /assets/balance/{address}/{assetId}

Affected field: `balance`.

#### GET /consensus/generatingbalance/{address}

Affected field: `balance`.

#### GET /debug/balances/history/{address}

Affected field: `balance`.

#### GET /debug/stateChanges/info/{id}

Affected field: `fee`.

#### GET /debug/stateChanges/address/{address}/limit/{limit}

Affected fields: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

#### GET /debug/portfolios/{address}

Affected fields: `balance`, `in`, `out`.
