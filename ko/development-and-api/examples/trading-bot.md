#Create your first crypto trading bot

###Introduction
Waves platform is designed and built from the ground up for speed and scale. At the same time Waves is one of the most developer-friendly ecosystems. Waves blockchain exposes its functionality through a powerful REST API, that can be used with any programming language.

This text guides you through the basics of Waves Node Rest API. Here we will use python wrapper for the API — [PyWaves](https://github.com/PyWaves/PyWaves) library, but there are other options for different programming languages, e.g. [WavesCS for C#](https://github.com/wavesplatform/WavesCS), [WavesJ for Java](https://github.com/wavesplatform/WavesJ) etc.

Pywaves is an object-oriented Python interface to the Waves blockchain, which will help us to reduce code complexity while maintaining its structure, so anything you learn using this library can be applied with pure HTTP API calls.

###What is Waves Node REST API
Waves Platform is a little bit complex and consists of a lot of components:

Waves Full Node performs almost like all other decentralized-cryptocurrencies: keeps a full-copy of the blockchain, verifies the transactions. The main differences are convenient REST API and DEX(Matcher).

Note: DEX(matcher) is disabled in default configuration file.
Node REST API allows working with Waves Blockchain like with many other centralized platforms, e.g. Google, Facebook etc. In official Wavesplatform’s Github repository, you can find RPC API documentation and description of used data structures. If you prefer API docs in Postman interface you can follow the link

###Terms
**Node  ** — Full Node, it contains full-copy of the blockchain.

**Matcher \(DEX\) ** —  part of a full node. Matcher nodes are responsible for pairing orders and executing trades quickly, whilst they are still settled on the blockchain. When a user sends an order to Matcher he doesn’t transfer ownership of his money to anyone, his money remains on his account until the order is matched with counter-order. More details can be found here and here.

**AssetPair**  —  Pair of assets we want to exchange.

###Trading strategy
Scalping trading strategy widely used in trading, and crypto community is not an exception. There are a lot of variations of the strategy, the main difference between them is in size of timeframe. The strategy exploits small changes in currency prices: it buys at the mean price minus some step and sells at the mean price plus some step, in order to gain the bid/ask difference. It normally involves establishing and liquidating a position quickly, in this case within 15 seconds.

Disclaimer: I do not suggest to use scalping strategy. The strategy was chosen because of its simplicity for implementing in a bot.
The bot with initial parameters trades on Waves-BTC pair (Waves is an amount asset and BTC is a `price_asset`). The spread mean price is `(best_bid + best_ask) / 2`. The price step is `0.5%` from the mean price. The bot places the buy order at price `meanprice * (1 - price_step)` and the amount `(BTC_balance / bid_price) - order_fee`. The sell order is placed at `meanprice * (1 + price_step)` and the amount equal to `Waves_balance - order_fee `.

###Let’s code, step-by-step
So, let’s get started! We’ll use Pywaves and configparser libraries for API calls and reading config file. Let's install them:

```python
pip install pywaves
pip install configparser
```
It’s better to make configuration file where we will store all sensitive and customizable settings. A common way for the task in python ecosystem is .cfg format. The main section of the file will contain general settings of the bot:

```python
[main]
# URI of the Full Node
node = http://127.0.0.1
# select the network: testnet or mainnet
network = mainnet
# DEX matcher
matcher = http://nodes.wavesnodes.com
order_fee = 300000
# order lifetime in seconds, max allowed 29 days
order_lifetime = 86400
Additionally bot requires account and market details.

[account]
private_key = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
[market]
amount_asset = WAVES
price_asset = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
First of all, we should import all dependencies. Besides already mentioned pywaves and configparser we need next:

```python
import pywaves as pw
import datetime from time
import sleep import math import os import configparser
```
Great, now we will define SimpleBot class as a wrapper of settings. We can set default settings in the constructor:

```python
def __init__(self):
  self.log_file = "bot.log"
  self.node = "https://nodes.wavesnodes.com"
  self.chain = "mainnet"
  self.matcher = "https://nodes.wavesnodes.com"
  self.order_fee = int(0.003 * 10 ** 8)
  self.order_lifetime = 29 * 86400  # 29 days
  self.private_key = ""
  self.amount_asset = pw.WAVES
  self.price_asset_id = "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS" # BTC
  self.price_asset = pw.Asset(self.price_asset_id)
  self.price_step = 0.005
  self.min_amount = 1
  self.seconds_to_sleep = 15
```
SimpleBot also has a method for parsing configuration file and storing it in object fields, its simple enough with the configparser :

```python
config = configparser.RawConfigParser()
config.read(cfg_file)
self.node = config.get('main', 'node')
self.chain = config.get('main', 'network')
...
```
Using our new class SimpleBot and Pywaves library we finally can implement our business logic.

Pywaves requires some configuration before usage, all available methods are listed here, in our case, it’s enough to set:

```python
pw.setNode(node=bot.node, chain=bot.chain)
pw.setMatcher(node=bot.matcher)
```
We also need and an instance of our address:

```python
my_address = pw.Address(privateKey=bot.private_key)
```
Pywaves method AssetPair creates a new AssetPair object with 2 asset objects, which we’d like to trade:

```python
waves_btc = pw.AssetPair(bot.amount_asset, bot.price_asset)
```
In our simple example, amount asset is WAVES, price asset is BTC, but it can be changed in the config file.

Scalping trading strategy implies infinite trading with selected timeframe size, in our case 15 sec. Let’s define an infinite loop, where we’ll :

* Get Waves and BTC balances.
* Get orderBook of our AssetPair. It provides python dictionary with bids and asks amounts
* Calculate mean spread price
* Calculate bid and ask
* Calculate bid and ask amounts
* Post buy and sell orders

```python
while True:
  # Get waves balance
  waves_balance = my_address.balance()
  # Get btc balance
  btc_balance = my_address.balance(bot.price_asset_id)
  # Get order book
  order_book = waves_btc.orderbook()
  # Get best bid and ask
  best_bid = order_book["bids"][0]["price"]
  best_ask = order_book["asks"][0]["price"]
  spread_mean_price = (best_bid + best_ask) // 2
  bid_price = spread_mean_price * (1 - bot.price_step)
  ask_price = spread_mean_price * (1 + bot.price_step)
  bid_amount = int((btc_balance / bid_price) * 10 **         pw.WAVES.decimals) - bot.order_fee
  ask_amount = int(waves_balance) - bot.order_fee
  # Send orders
  if bid_amount >= bot.min_amount:
  my_address.buy(assetPair=waves_btc, amount=bid_amount,   price=bid_price, matcherFee=bot.order_fee,
  maxLifetime=bot.order_lifetime)
  if ask_amount >= bot.min_amount:
  my_address.sell(assetPair=waves_btc, amount=ask_amount,   price=ask_price, matcherFee=bot.order_fee,
maxLifetime=bot.order_lifetime)
  # Wait for the next tick
  sleep(bot.seconds_to_sleep)
```

We’re done. Your first trading bot is ready to go!

Best of all, the source code and documentation for this example are released to the public domain, so you can start by grabbing the code and building on top of it.

