# What's new in version 0.7.2

In Node's version 0.7.2 we introduced a completely new, built from scratch network layer. The protocol hasn't changed, but it's more sustainable.

We've improved node's storage. After separation of single `blockchain.dat` file on two files `blockchain.dat` and `state.dat` it's possible to rebuilt node's state without downloading blocks from the network. 
The introduction of new internal structures improved the speed of storage and reduced the size of `blockchain.dat` and `state.dat` files.

Some default settings of DEB installation have changed. Default files location now is `/var/lib/waves` (`/var/lib/waves-testnet`). Configuration file was moved to `/etc/waves/waves.conf` (`/etc/waves-testnet/waves.conf`). 
To adjust JVM parameters (e.g. memory size used by the node) you shoud edit `/etc/waves/application.ini` (`/etc/waves-testnet/application.ini`) file.

The default location of matcher's folders `journal` and `snapshots` were moved to separate `matcher` folder inside node's folder.

## Changes to the Node's configuration file

Starting version 0.7.2 parameters with Base58 value (e.g. `matcher.account`, `walled.seed`) do not allow empty string. You should remove or comment out parameter or pass `null` value instead of passing an empty string.

Parameter `declared-address` in `network` section should have non-empty value. Otherwise, it should be commented out or removed.
Parameters `local-only`, `min-ephemeral-port-number`, `black-list-threshold` and `unrequested-packets-threshold` in `network` section were removed. 
The default value of `black-list-residence-time` in the same section was reduced to 1 minute.

New parameter `handshake-timeout` was added. During given period of time, the node will wait for handshake from a connected peer. 

Parameters `offline`, `tf-like-scheduling` and `mining-delay` in `miner` section are obsolete and were removed.

New parameters `max-timestamp-diff` and `order-history-file` were added to `matcher` section. The default value of `min-order-fee` in the same section was set to 300 000 wavelets. 