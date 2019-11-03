# Matcher settings

> The settings described below are being applied in `/etc/waves/waves.conf` file.

Configuration section `matcher` could be used to configure DEX matcher.

Use `enable` parameter to enable DEX matcher. By default, it’s disabled.

In `account` parameter you could provide the address of the matcher. This address is used to receive orders and pay or collect fees.

Using `bind-address` it’s possible to set the IP address of local network interface to bind matcher’s REST API.

`port` parameter is used to set the port number on which the matcher’s REST API will accept incoming connections.

Using `min-order-fee` parameter it’s possible to set the minimum required fee to process orders. For now, matcher accepts fee only in WAVES. The fee should be given in minimal units \(WAVELETS\).

Use `order-match-tx-fee` parameter to set the transaction fee of order match transactions created by the matcher.

Parameter `matcher-direcotory` could be used to set the location of matcher’s files.

In `data-directory`, `journal-directory` and `snapshots-directory` parameters, you can set the location of matcher’s data. Matcher has its own LevelDB database.

Parameter `leveldb-cache-size` allows to set the size of cache for Matcher’s LevelDB database. By default it’s the same as for the node.

Use `snapshots-interval` parameter to change the period of time between snapshots of matcher’s state.

Use `order-cleanup-interval` parameter to adjust how often clean up of expired orders occurs.

Using `max-open-orders`parameter you can limit the number of unmatched orders stored in the matcher.

Using parameters `price-assets` and `predefined-pairs` it is possible to define rules of assets pairs creation for the matcher. Inside the matcher a trading pair consists of an "amount" asset and a "price" asset. The "amount" asset is used to specify the amount in order. The "price" asset is used to specify the price in order.

Parameter `price-assets` is the list of assets IDs that will be used as price asset \(second one\) in a pair with any unknown asset. If both assets in the pair are "price" assets you have to use parameter `predefined-pairs` to define the correct order of assets in the pair.

In case of no definition given, assets will be sorted by their IDs and the first will be selected as "price" asset and the second will be chosen as "amount" asset.

To specify Waves as a side of a pair use special asset ID "WAVES".

Below you can find an example of setting assets pairs.

```cpp
price-assets = [
     "WAVES",
     "Fmg13HEHJHuZYbtJq8Da8wifJENq8uBxDuWoP9pVe2Qe",
     "HyFJ3rrq5m7FxdkWtQXkZrDat1F7LjVVGfpSkUuEXQHj",
     "2xnE3EdpqXtFgCP156qt1AbyjpqdZ5jGjWo3CwTawcux",
     "6pmDivReTLikwYqQtJTv6dTcE59knriaodB3AK8T9cF8"
   ]
predefined-pairs = [
     {amountAsset = "WAVES", priceAsset = "Fmg13HEHJHuZYbtJq8Da8wifJENq8uBxDuWoP9pVe2Qe"},
     {amountAsset = "WAVES", priceAsset = "HyFJ3rrq5m7FxdkWtQXkZrDat1F7LjVVGfpSkUuEXQHj"},
     {amountAsset = "WAVES", priceAsset = "2xnE3EdpqXtFgCP156qt1AbyjpqdZ5jGjWo3CwTawcux"},
     {amountAsset = "WAVES", priceAsset = "6pmDivReTLikwYqQtJTv6dTcE59knriaodB3AK8T9cF8"},
     {amountAsset = "Fmg13HEHJHuZYbtJq8Da8wifJENq8uBxDuWoP9pVe2Qe", priceAsset = "2aSqCbvCTgvCpwkGsk4mea4tCLG4Zgp69aQDhHNvRUZv"},
     {amountAsset = "Fmg13HEHJHuZYbtJq8Da8wifJENq8uBxDuWoP9pVe2Qe", priceAsset = "8zEZuJcKPQmFuYgVe5ZMpxgiPLu5zBhjA6xgdGomQDaP"},
     {amountAsset = "Fmg13HEHJHuZYbtJq8Da8wifJENq8uBxDuWoP9pVe2Qe", priceAsset = "D2MNuUyA38pSKoV7F7vpS15Uhw9nw5qfbrGUfCLRNuRo"},
     {amountAsset = "2xnE3EdpqXtFgCP156qt1AbyjpqdZ5jGjWo3CwTawcux", priceAsset = "HyFJ3rrq5m7FxdkWtQXkZrDat1F7LjVVGfpSkUuEXQHj"}
   ]
```

Parameter `max-timestamp-diff` is used to set the maximum allowed time difference between order and local matcher’s time.

Parameters `blacklisted-assets` and `blacklisted-names` could be used to blacklist assets from DEX.

It is possible deny operations on DEX for some addresses using parameter `blacklisted-addresses`.