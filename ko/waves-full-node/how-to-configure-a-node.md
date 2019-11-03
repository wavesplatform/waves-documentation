## HOCON format for configuration files 

The configuration system of Waves Node uses HOCON format. HOCON stands for Human-Optimized Config Object Notation. The complete description of HOCON could be found in the [Official HOCON documentation](https://github.com/typesafehub/config/blob/master/HOCON.md). The advantages of HOCON are simple syntax and ability to use comments.

## Complete Waves Node configuration file 

| Note | This document describes configuration file format of Waves version 0.9.x |
| :--- | :--- |


Below you can find a complete Waves Node configuration file. This is the default configuration shipped with the application. It is possible to overwrite any parameters by providing an additional configuration file. You can pass an additional configuration file by providing the path to it as the first command line parameter then starting Waves Node application.

```js
# Waves node settings
waves {
  # Node base directory
  directory = ${user.home}"/waves"

  # Node data directory (LevelDB)
  data-directory = ${waves.directory}"/data"

  # LevelDB's internal cache size (in bytes)
  leveldb-cache-size = 256M

  # P2P Network settings
  network {
    # Peers and blacklist storage file
    file = ${waves.directory}"/peers.dat"

    # String with IP address and port to send as external address during handshake. Could be set automatically if UPnP
    # is enabled.
    #
    # If `declared-address` is set, which is the common scenario for nodes running in the cloud, the node will just
    # listen to incoming connections on `bind-address:port` and broadcast its `declared-address` to its peers. UPnP
    # is supposed to be disabled in this scenario.
    #
    # If declared address is not set and UPnP is not enabled, the node will not listen to incoming connections at all.
    #
    # If declared address is not set and UPnP is enabled, the node will attempt to connect to an IGD, retrieve its
    # external IP address and configure the gateway to allow traffic through. If the node succeeds, the IGD's external
    # IP address becomes the node's declared address.
    #
    # In some cases, you may both set `decalred-address` and enable UPnP (e.g. when IGD can't reliably determine its
    # external IP address). In such cases the node will attempt to configure an IGD to pass traffic from external port
    # to `bind-address:port`. Please note, however, that this setup is not recommended.
    # declared-address = "1.2.3.4:6863"

    # Network address
    bind-address = "0.0.0.0"

    # Port number
    port = 6863

    # Node name to send during handshake. Comment this string out to set random node name.
    # node-name = "default-node-name"

    # Node nonce to send during handshake. Should be different if few nodes runs on the same external IP address. Comment this out to set random nonce.
    # nonce = 0

    # List of IP addresses of well known nodes.
    known-peers = ["52.30.47.67:6863", "52.28.66.217:6863", "52.77.111.219:6863", "52.51.92.182:6863"]

    # How long the information about peer stays in database after the last communication with it
    peers-data-residence-time = 1d

    # How long peer stays in blacklist after getting in it
    black-list-residence-time = 15m

    # Number of inbound network connections
    max-inbound-connections = 30

    # Number of outbound network connections
    max-outbound-connections = 30

    # Number of connections from single host
    max-single-host-connections = 3

    # Timeout on network communication with other peers
    connection-timeout = 30s

    # Size of buffer to store unverified (not properly handshaked) peers
    max-unverified-peers = 100

    # If yes the node requests peers and sends known peers
    enable-peers-exchange = yes

    # If yes the node can blacklist others
    enable-blacklisting = yes

    # How often connected peers list should be broadcasted
    peers-broadcast-interval = 2m

    # When accepting connection from remote peer, this node will wait for handshake for no longer than this value. If
    # remote peer fails to send handshake within this interval, it gets blacklisted. Likewise, when connecting to a
    # remote peer, this node will wait for handshake response for no longer than this value. If remote peer does not
    # respond in a timely manner, it gets blacklisted.
    handshake-timeout = 30s

    # Peers suspension time, the peer is suspended if it fails to respond before timeout occur
    suspension-residence-time = 1m

    upnp {
      # Enable UPnP tunnel creation only if you router/gateway supports it. Useful if your node is runnin in home
      # network. Completely useless if you node is in cloud.
      enable = no

      # UPnP timeouts
      gateway-timeout = 7s
      discover-timeout = 3s
    }

    # Logs incoming and outgoing messages
    traffic-logger {
      # Codes of transmitted messages to ignore. See MessageSpec.messageCode
      ignore-tx-messages = [23, 25] # BlockMessageSpec, TransactionMessageSpec

      # Codes of received messages to ignore. See MessageSpec.messageCode
      ignore-rx-messages = [25] # TransactionMessageSpec
    }
  }

  # Wallet settings
  wallet {
    # Path to wallet file
    file = ${waves.directory}"/wallet/wallet.dat"

    # Password to protect wallet file
    password = "some string as password"

    # By default, the node will attempt to generate a new seed. To use a specific seed, uncomment the following line and
    # specify your base58-encoded seed.
    # seed = "BASE58SEED"
  }

  # Blockchain settings
  blockchain {
    # Max transactions per block diff, affects size of atomic persistence.
    max-transactions-per-block-diff = 6000

    # Amount of blocks in memory. Fast rollback is possible up to this value.
    min-blocks-in-memory = 100

    # Blockchain type. Could be TESTNET | MAINNET | CUSTOM. Default value is TESTNET.
    type = TESTNET

    # 'custom' section present only if CUSTOM blockchain type is set. It's impossible to overwrite predefined 'testnet' and 'mainnet' configurations.
    #    custom {
    #      # Address feature character. Used to prevent mixing up addresses from different networks.
    #      address-scheme-character = "C"
    #
    #      # Timestamps/heights of activation/deactivation of different functions.
    #      functionality {
    #        feature-check-blocks-period = 5000
    #        blocks-for-feature-activation = 4000
    #        allow-temporary-negative-until = 0
    #        allow-invalid-payment-transactions-by-timestamp = 0
    #        require-sorted-transactions-after = 0
    #        generation-balance-depth-from-50-to-1000-after-height = 0
    #        minimal-generating-balance-after = 0
    #        allow-transactions-from-future-until = 0
    #        allow-unissued-assets-until = 0
    #        require-payment-unique-id-after = 0
    #        allow-invalid-reissue-in-same-block-until-timestamp = 0
    #        allow-multiple-lease-cancel-transaction-until-timestamp = 0
    #        reset-effective-balances-at-height = 0
    #        block-version-3-after-height = 0
    #        pre-activated-features {}
    #        double-features-periods-after-height = 0
    #      }
    #
    #      # List of genesis transactions
    #      genesis {
    #        # Average delay between blocks
    #        average-block-delay = 60s
    #
    #        # Timestamp of genesis transactions
    #        timestamp = 1460678400000
    #
    #        # Timestamp of genesis block
    #        block-timestamp = 1500635421931
    #
    #        # Genesis block signature
    #        signature = "BASE58BLOCKSIGNATURE"
    #
    #        # Initial balance in smallest units
    #        initial-balance = 100000000000000
    #
    #        # Initial base target
    #        initial-base-target =153722867
    #
    #        # List of genesis transactions
    #        transactions = [
    #          {recipient = "BASE58ADDRESS1", amount = 50000000000000},
    #          {recipient = "BASE58ADDRESS2", amount = 50000000000000}
    #        ]
    #      }
    #    }
  }

  # Checkpoints settings
  checkpoints {
    # Public key for checkpoints verification, default TESTNET public key
    public-key = "4PvoqxpWi7kCA9N3UXcEB9CZx4iPPeHX9jSYdAioPhnr"
  }

  # Matcher settings
  matcher {
    # Enable/disable matcher
    enable = no

    # Matcher's account address
    account = ""

    # Matcher REST API bind address
    bind-address = "127.0.0.1"

    # Matcher REST API port
    port = 6886

    # Minimum allowed order fee
    min-order-fee = 300000

    # Fee of order match transaction
    order-match-tx-fee = 300000

    # Matcher's directories
    matcher-directory = ${waves.directory}"/matcher"
    data-directory = ${waves.matcher.matcher-directory}"/data"
    journal-directory = ${waves.matcher.matcher-directory}"/journal"
    snapshots-directory = ${waves.matcher.matcher-directory}"/snapshots"

    # LevelDB's internal cache size
    leveldb-cache-size = ${waves.leveldb-cache-size}

    # Snapshots creation interval
    snapshots-interval = 1d

    # Invalid/Expired orders cleanup interval
    order-cleanup-interval = 5m

    # Maximum allowed amount of open orders
    max-open-orders = 1000

    # Maximum allowed amount of orders retrieved via REST
    rest-order-limit = 100

    # Maximum orders stored in OrderHistory per address
    max-orders-per-address = 1000

    # Base assets used as price assets
    price-assets: []

    # Predefined ordering of base assets
    predefined-pairs: []

    # Maximum difference with Matcher server time
    max-timestamp-diff = 3h

    # Blacklisted assets id
    blacklisted-assets: []

    # Blacklisted assets name
    blacklisted-names: []

    # Blacklisted addresses
    blacklisted-addresses: []
  }

  # New blocks generator settings
  miner {
    # Enable/disable block generation
    enable = yes

    # Required number of connections (both incoming and outgoing) to attempt block generation. Setting this value to 0
    # enables "off-line generation".
    quorum = 1

    # Enable block generation only in the last block if not older the given period of time
    interval-after-last-block-then-generation-is-allowed = 1d

    # Interval between microblocks
    micro-block-interval = 5s

    # Mininmum time interval between blocks
    minimal-block-generation-offset = 1001ms

    # Max amount of transactions in key block
    max-transactions-in-key-block = 0

    # Max amount of transactions in micro block
    max-transactions-in-micro-block = 255

    # Miner references the best microblock which is at least this age
    min-micro-block-age = 6s
  }

  # Node's REST API settings
  rest-api {
    # Enable/disable REST API
    enable = yes

    # Network address to bind to
    bind-address = "127.0.0.1"

    # Port to listen to REST API requests
    port = 6869

    # Hash of API key string
    api-key-hash = "H6nsiifwYKYEx6YzYD7woP1XCn72RVvx6tC1zjjLXqsu"

    # Enable/disable CORS support
    cors = yes

    # Enable/disable api_key from different host
    api-key-different-host = no
  }

  # Nodes synchronization settings
  synchronization {

    # How many blocks could be rolled back if fork is detected. If fork is longer than this rollback is impossible.
    max-rollback = 100

    # I don't know
    max-chain-length = 101

    # Timeout to receive all requested blocks
    synchronization-timeout = 60s

    # Time to live for broadcasted score
    score-ttl = 90s

    # Time to wait for new score updates from the remote node
    remote-score-debounce = 1s

    # Settings for invalid blocks cache
    invalid-blocks-storage {
      # Maximum elements in cache
      max-size = 30000

      # Time to store invalid blocks and blacklist their owners in advance
      timeout = 1d
    }

    # History replier caching settings
    history-replier {
      # Max microblocks to cache
      max-micro-block-cache-size = 50

      # Max blocks to cache
      max-block-cache-size = 20
    }

    # Utx synchronizer caching settings
    utx-synchronizer {
      # Max microblocks to cache
      network-tx-cache-size = 1000000

      # Max time an unconfirmed transaction lives in cache
      network-tx-cache-time = 10s

      # Max number of transactions in buffer. When the limit is reached, the node processes all transactions in batch
      max-buffer-size = 500

      # Max time for buffer. When time is out, the node processes all transactions in batch
      max-buffer-time = 100ms
    }

    # MicroBlock synchronizer settings
    micro-block-synchronizer {
      # How much time to wait before a new request of a microblock will be done
      wait-response-timeout = 2s

      # How much time to remember processed microblock signatures
      processed-micro-blocks-cache-timeout = 3m

      # How much time to remember microblocks and their nodes to prevent same processing
      inv-cache-timeout = 45s
    }
  }

  # Unverified transactions pool settings
  utx {
    # Pool size
    max-size = 100000

    # Evict transaction from UTX pool after it gets older than specified
    max-transaction-age = 90m

    # Utx cleanup task interval
    cleanup-interval = 5m

    # Blacklist transactions from these addresses (Base58 strings)
    blacklist-sender-addresses = []

    # Allow transfer transactions from the blacklisted addresses to these recipients (Base58 strings)
    allow-blacklisted-transfer-to = []
  }

  # Vote for features
  features {
    # Auto shutdown node if a feature that is not supported by node was approved on blockchain
    auto-shutdown-on-unsupported-feature = yes

    # List of IDs of features that is voted 'yes' by the node
    supported = [1, 2]
  }
}
```

## Waves configuration section 

Root configuration section `waves` holds essential application parameters and other configuration subsections.

Using parameter `directory` it is possible to set a path to the base application directory. Starting from version 0.6.0 it is possible to use environment variables to set configuration parameters. For example, by default, the base directory constructed relative to the user’s `HOME` environment variable. Please, do not enclose environment variables references in quotes, in this case, they will be handled as strings and won’t be resolved.

| Note | If you want to change waves directory in Ubuntu packages you should change it using `-J-Dwaves.directory=path` in `/etc/waves/application.ini` and `/lib/systemd/system/waves.service`. You can override any JVM start parameter in `waves.service`, it has priority. |
| :--- | :--- |


| Note | For Windows users. Often on Windows, the HOME environment variable is not set. Please, replace `${HOME}` with `${HOMEPATH}` or `${APPDATA}` in your additional configuration file. Also, you should remember that Windows' environment variables names are case sensitive. |
| :--- | :--- |


Parameter `data-directory` sets the location of LevelDB database folder. In this database stored blockchain data and state.

Using parameter `leveldb-cache-size` you can set the size of theinternal cache of LevelDB database.

| Note | The number of bytes should be given to set the cache size parameter. But you can use size units: <ul><li>K - for kilobyte</li><li>M - for megabytes</li><li>G - for gigabytes</li></ul> |
| :--- | :--- |


### Network settings 

In `network` section P2P network related settings could be set.

Use `file` parameter to set the location of peers database. In this database node stores lists of known and blacklisted peers. By default, the path is resolved with regard to base `directory` from `waves` section.

Using `declared-address` parameter you can set the external IP address and port number of the node. It’s necessary to work behind NAT in most cloud hosting, where the machine does not interface directly with the external address. If you do not specify it, then your node connects to the P2P network, but it won’t listen to incoming connections so other nodes will not be able to connect. Other nodes are connected to your node using these data. The format of this parameter is "\[ip-address\]:\[port\]".

Using parameter `bind-address` you can set the IP address of local network interface on which Waves Node will accept incoming connections. By default, node binds to `0.0.0.0` that means that it will listen on all available network adapters.

Use `port` parameter to set the network port number to which other Waves nodes will connect. Check that the port is reachable from outside otherwise, your node will connect to P2P network only using outgoing connections. If this the port is taken by other application, your node won’t start.

Parameter `node-name` could be used to set the name of your node visible to other participants of the P2P network. The name transmitted during initial handshake. In the default configuration, this parameter is commented out, which leads to random name generation.

Parameter `nonce` is sent during a handshake. By default, it’s not set and nonce will be generated randomly. This value is used to distinguish nodes connected from one IP address.

The `known-peers` parameter stores the list of bootstrap nodes to which your node will establish outgoing connections while initializing. By default it set to Testnet nodes.

The `peers-data-residence-time` parameter could be used to set the period of time during which the node stores information about external peer since last communication session with it.

| Note | All time span parameters are set in milliseconds. But duration units can be used to shorten the value. Supported units are: <ul><li>s - second, seconds</li><li>m - muinute, minutes</li><li>h - hour, hours</li><li>d - day, days</li></ul> For usage examples see the default configuration file above. |
| :--- | :--- |


Parameter `black-list-residence-time` could be used to set the period of time for which information about external peer stays in the blacklist.

Use `max-inbound-connections` parameter to set the maximum number of simultaneous inbound connections handled by the node.

Use `max-outbound-connections` parameter to limit the number of outgoing network connections.

Using `max-single-host-connections` parameter you can specify the allowed number of network connections made from single IP address.

Parameter `connection-timeout` could be used to change the network communication timeout.

Parameter `outbound-buffer-size`is used to set the network buffer size. Better leave the default value, incorrect buffer size could lead to node malfunction.

Parameter `max-unverified-peers` could be used to change the maximum size of the buffer to store information about peers during handshake process.

Use `enable-peers-exchange` parameter to enable requesting and sending the information about peers.

Parameter `enable-blacklisting` allows to enable or disable blacklisting of peers.

Use `peers-broadcast-interval` parameter to set the period of time between broadcasts of known peers list to other nodes.

Using `handshake-timeout` parameter it is possible to set time period to wait for reply during handshake. In case of no reply the peer will be blacklisted.

In `upnp` section you can set the UPnP settings. Actually, those settings are useful only if you ran your Waves node on the home network where the node could ask your router to establish a tunnel. By default, this functionality is disabled. Use`enable`parameter of`upnp`to enable this functionality.

In `traffic-logger` section you can enable or disable logging of some of incoming or outgoing network messages. Network messages are logged at TRACE level.

### Wallet settings 

In `wallet` section you can configure wallet built in Waves node.

Use `file` parameter to set the path to the wallet file. By default, the path to the file is calculated relative to the base application directory.

Parameter `password` could be used to set the password string to protect the wallet file.

Using `seed` parameter you could recreate an existing walled on a new node. Provide the BASE58 string of your seed here. If you don’t have any existing wallet comment out this parameter and start the node. During the first run, the application will create a new wallet with a random seed for you. In this case, the seed will be displayed in the application log. If you miss it or if you don’t want to check the log files, it will also be available in REST API using the wallet/seed method.

| Warning | Attention! The wallet is a critical part of your node. Better to create its file in a safe and protected location. Don’t forget to backup your wallet’s file. It’s recommended to remove the seed from the configuration file immediately after the start of the node. If an attacker gains access to this seed string, he has access to all your funds on all your addresses! |
| :--- | :--- |


### Blockchain settings 

Here you can select the blockchain type or create your own blockchain.

Use parameter `max-transactions-per-block-diff` to set the number of transactions stored in memory before storing on disk. Reducing the number could increase the number of disk operations.

You can change the number of blocks stored in memory using parameter `min-blocks-in-memory`.

Using `type` parameter you can select the blockchain type. Three choices are available: TESTNET, MAINNET and CUSTOM. For TESTNET or MAINNET types, parameters of blockchain are built in the application so you don’t have to configure them. But if you select CUSTOM blockchain type you have to provide the `custom` configuration section \(which is commented out in the example\).

#### Configuring custom blockchain 

Use parameter `address-scheme-character` in section `custom` to set the address feature character. This character used while building an address and also passed over a network during a handshake. The latter allow nodes not connect to the nodes with other blockchains.

`functionality` section allows you to set the timestamps of activation of different blockchain validations. It’s better to set all functionality settings to 0 to have a blockchain with all validations active.

In `genesis` section it is possible to describe the first \(genesis\) block of your custom blockchain.

Use `block-timestamp` parameter to set the date of creation of genesis block. Using parameter `timestamp` it is possible to set time of creation for genesis transactions.

Using `signature` parameter you can set the signature of genesis block.

In `initial-balance` parameter it’s possible to set the total amount of coins. This value should be given in the smallest units of cryptocurrency.

Using `initial-base-target` parameter it’s possible adjust the speed of block generation in the very begging of your custom blockchain.

Using `average-block-delay` parameter you can set the speed of block generation in your blockchain. This is a target period of time between blocks. In reality delays between blocks could vary.

In `transactions` parameter you should provide the list of first transactions. Each transaction is described by recipient’s address \(as BASE58 string\) and amount. You have to distribute all initial balance to one or more addresses in genesis block. If you failed to do so, the genesis block will be considered as incorrect and the application won’t start.

### Checkpoints settings 

In this section, you can configure the public key for checkpoints verification sent over the P2P network. Provide the BASE58 representation of public key using `public-key` parameter. It’s useful to change this parameter only in CUSTOM blockchains.

### Matcher settings 

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

### Miner settings 

In section `miner` it is possible to configure parameters of the new blocks generator.

Use `enable` parameter to enable or disable block generation on the node. By default, it’s enabled, but if you disable it your node won’t try to generate new blocks \(won’t mine\).

Use `quorum` parameter to set the minimum required number of connected peers to enable and start mining of new blocks. It defaults to 1, so your node will start mining as soon as it connects to the first peer in the P2P network. Setting this parameter to 0 will enable off-line generation.

Using `interval-after-last-block-then-generation-is-allowed` parameter you tune your node’s blocks download and generation behavior. By default, it set to 1 day, which means that your node won’t start block generation until it has the last block in the local blockchain not older than 1 day. So, using this parameter you order you node to actualize the blockchain before starting to generate new blocks. Actually, it works only after long node shutdowns.

### REST API settings 

In section `rest-api` you can set the node’s REST API parameters.

Use `enable` parameter to activate or deactivate REST API.

Parameter `bind-address` could be used to select network interface on which REST API will accept incoming connections.

Parameter `port` could be used to change the port number on which REST API will await connections.

| Warning | Attention! For better security, do not change `bind-address` from `127.0.0.1` if you do not know what you’re doing! For external access, you should use instead [Nginx’s proxy\_pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html) or [SSH port-forwarding](http://blog.trackets.com/2014/05/17/ssh-tunnel-local-and-remote-port-forwarding-explained-with-examples.html). |
| :--- | :--- |


Use `api-key-hash` parameter to set the hash of your API key. The API key is used to protect calls of critical API methods. Remember, that in this parameter you should provide the hash of API key, but during REST calls you should provide API key itself. You can use API method `/utils/hash/secure` to produce the hash of your API key.

| Warning | Attention! API key is transmitted in the HTTP header as unprotected plain text! An attacker could intercept it in network transit and use it to transfer your money to any address! So you have to protect the transmission using HTTPS or use SSH port forwarding. |
| :--- | :--- |


Parameter `cors` could be used to enable or disable CORS support in REST API. CORS allows to safely resolve queries to other domains outside the one running the node. It’s necessary for Swagger and Lite client. You can read about it [here](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

### Synchronization settings 

In `synchronisation` section it is possible to tune different aspects of node synchronization process.

Use `max-rollback` parameter to change the length of blockchain that can be discarded in case of fork detection. In your node find yourself on a fork with a lower score, it will try to switch to another fork, to do so the node will rollback few blocks. If the detected fork is longer than the given number, node prefers not to switch to another fork even if its score is bigger.

Parameter `max-chain-length` is used to set the size of the buffer that stores blocks of detected fork. This size should be bigger than maximum fork length.

Parameter `synchronization-timeout` could be used to set the timeout on block download operation.

Use parameter `score-broadcast-interval` to set the interval between score broadcasts to the P2P network.

Use parameter `score-ttl` to set the time-to-live interval of broadcasted score packets.

Parameter `remote-score-debounce` allows to set the time to wait before receiving the next score update from a peer.

In `history-replier` subsection you can configure the number of last blocks and micro-blocks cached in memory.

In `micro-block-synchronizer` subsection you could tune various parameters of Waves-NG protocol.

### UTX pool settings 

In this section, you can change the size of unconfirmed transactions pool \(`max-size` parameter\) and maximum age of transactions allowed to UTX \(`max-transaction-age`\).

