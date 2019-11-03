# Node Configuration

> After upgrading to version 1.0.2 please note if your `/etc/waves/waves.conf` was originally copied from a template, you may need to assure that waves.directory points to the correct directory. If this option doesn't exist in the config, default directory `/var/lib/waves` and `/var/lib/waves-testnet` will be used for mainnet and testnet, respectively

## Configuration Format

The configuration system of Waves Node uses HOCON format. HOCON stands for Human-Optimized Config Object Notation. The complete description of HOCON could be found in the [Official HOCON documentation](https://github.com/typesafehub/config/blob/master/HOCON.md). The advantages of HOCON are simple syntax and ability to use comments.

## Default Configs and Overrides

### Default Configuration Embedded into JAR

Complete default Waves Node configuration file which is embedded into jar-file can be found here: https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/application.conf

### MainNet and TestNet config in DEB-packages

If you use DEB-packages to install a node, they also contain configuration files which override some parameters specific to the network:

* https://github.com/wavesplatform/Waves/blob/master/node/waves-mainnet.conf
* https://github.com/wavesplatform/Waves/blob/master/node/waves-testnet.conf

### Overriding parameters when running JAR-file

If you run JAR file it's recommended to override default parameters by passing a path to config file as the command line parameter then starting Waves Node application.

```
java -jar waves-all-0.13.3.jar waves.conf
```

Typically this file should contain you node's unique characteristics (ip, name, keys, etc...) and network-specific parameters similar to waves-mainnet or waves-testnet configs from previous sections (files shipped with DEB packages).


## Configuration Sections

### Waves configuration section

Root configuration section `waves` holds essential application parameters and other configuration subsections.

Using parameter `directory` it is possible to set a path to the base application directory. Starting from version 0.6.0 it is possible to use environment variables to set configuration parameters. For example, by default, the base directory constructed relative to the user’s `HOME` environment variable. Please, do not enclose environment variables references in quotes, in this case, they will be handled as strings and won’t be resolved.

**Note:** If you want to change waves directory in Ubuntu packages you should change it using `-J-Dwaves.directory=path` in `/etc/waves/application.ini` and `/lib/systemd/system/waves.service`. You can override any JVM start parameter in `waves.service`, it has priority.



**Note:** For Windows users. Often on Windows, the HOME environment variable is not set. Please, replace `${HOME}` with `${HOMEPATH}` or `${APPDATA}` in your additional configuration file. Also, you should remember that Windows' environment variables names are case sensitive.

**Note:** Make sure the defined directory has a correct owner set: `waves` for mainnet or `waves-testnet` for testnet.

Parameter `data-directory` sets the location of LevelDB database folder. In this database stored blockchain data and state.

Using parameter `leveldb-cache-size` you can set the size of theinternal cache of LevelDB database.

**Note:** The number of bytes should be given to set the cache size parameter. But you can use size units: <ul><li>K - for kilobyte</li><li>M - for megabytes</li><li>G - for gigabytes</li></ul>

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

**Note:** All time span parameters are set in milliseconds. But duration units can be used to shorten the value. Supported units are: <ul><li>s - second, seconds</li><li>m - muinute, minutes</li><li>h - hour, hours</li><li>d - day, days</li></ul> For usage examples see the default configuration file above.


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

Using `seed` parameter you could recreate an existing wallet on a new node. Provide the BASE58 string of your seed here. If you don’t have any existing wallet comment out this parameter and start the node. During the first run, the application will create a new wallet with a random seed for you. In this case, the seed will be displayed in the application log. If you miss it or if you don’t want to check the log files, it will also be available in REST API using the wallet/seed method.

**Warning:** The wallet is a critical part of your node. Better to create its file in a safe and protected location. Don’t forget to backup your wallet’s file. It’s recommended to remove the seed from the configuration file immediately after the start of the node. If an attacker gains access to this seed string, he has access to all your funds on all your addresses!

#### Update wallet's settings

If you want to run the node with another wallet, you have to:
* delete/cope to another location your wallet.dat file for making directory /wallet empty
* update seed at config file

After that node will use another wallet settings.

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

### Miner settings

In section `miner` it is possible to configure parameters of the new blocks generator.

Use `enable` parameter to enable or disable block generation on the node. By default, it’s enabled, but if you disable it your node won’t try to generate new blocks \(won’t mine\).

Use `quorum` parameter to set the minimum required number of connected peers to enable and start mining of new blocks. It defaults to 1, so your node will start mining as soon as it connects to the first peer in the P2P network. Setting this parameter to 0 will enable off-line generation.

Using `interval-after-last-block-then-generation-is-allowed` parameter you tune your node’s blocks download and generation behavior. By default, it set to 1 day, which means that your node won’t start block generation until it has the last block in the local blockchain not older than 1 day. So, using this parameter you order you node to actualize the blockchain before starting to generate new blocks. Actually, it works only after long node shutdowns.

### REST API settings

The **REST API section** is a section in the node configuration file with settings of a [node API](/waves-node/node-api.md).

#### parameters

| # | Name | Description | Default value |
| :--- | :--- | :--- | :--- |
| 1 | enable | Activates REST API. <br>If you want to deactivate REST API, change the default value to `no` | yes |
| 2 | `bind-address` | Sets the network address where the REST API will accept the incoming connections. <br>**Note.** It's not recommended to change the default value. Use [Nginx’s proxy pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html) or [SSH port forwarding](http://blog.trackets.com/2014/05/17/ssh-tunnel-local-and-remote-port-forwarding-explained-with-examples.html) for external access. | `"127.0.0.1"` |
| 3 | `port` | Sets the port number where the REST API will await connections. | 6869 |
| 4 | `api-key-hash` | Sets the hash of the [API key](https://en.wikipedia.org/wiki/Application_programming_interface_key) that is provided by the node owner.<br> [API key](https://en.wikipedia.org/wiki/Application_programming_interface_key) of the node owner is highly important as the [seed](http://confluence.wavesplatform.com/display/WDOCS/Seed+phrase) phrase and the password of the wallet.<br>Follow these steps to generate the hash of the API key:<br> 1. Go to [Swagger web interface](http://confluence.wavesplatform.com/display/WDOCS/Node+API)<br> 2. Click on[`utils`](https://nodes.wavesnodes.com/api-docs/index.html#/utils)section<br>3. Click on the API method [`/utils/hash/secure`](https://nodes.wavesnodes.com/api-docs/index.html#!/utils/hashSecure_1)<br>4. Create a unique [API key](https://en.wikipedia.org/wiki/Application_programming_interface_key) as a string value and include it in the `message` parameter<br> 5. Get the hash of the [API key](https://en.wikipedia.org/wiki/Application_programming_interface_key) and paste it in your node configuration file<br>6. Restart the node<br>**Note.** The API key is transmitted in the HTTP header as unprotected plain text. An attacker can intercept it in the network transit and use it to transfer your money to any address! So it's highly important to protect the transmission using HTTPS or SSH port forwarding. | "" |
| 5 | cors | Enables [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) support that is necessary for [Swagger](https://swagger.io/) and [DEX](http://confluence.wavesplatform.com/display/WDOCS/About+Waves+DEX). <br>[CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) allows to safely resolve queries for other domains outside the one that is running the node.<br> **Note.** If you want to deactivate [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) support, change the default value to `no` | yes |

During REST API calls the node owner must provide the string value of his unique [API key](https://en.wikipedia.org/wiki/Application_programming_interface_key) instead of the hashed value.
This is an example for signing a transaction that already exists in the wallet of the node owner as a CURL command:

```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-API-Key: YOUR UNIQUE API KEY'
-d '{ \
amount: 5800000000, \
fee: 100000, \
type: 4, \
version: 1, \
attachment: "", \
sender: "3P3pUKEAKxegWr3PZkGYNq1mzQQaQ5zxZbw", \
feeAssetId: null, \ assetId: null, \
recipient: "3P9p39MwZ5JjwdBSYEWC6XYri4jpovzcAbs", \
feeAsset: null, \
timestamp: 1568020044350 \
}' 'http://nodes.wavesnodes.com/transactions/sign'
```

### Synchronization settings

In `synchronization` section it is possible to tune different aspects of node synchronization process.

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
