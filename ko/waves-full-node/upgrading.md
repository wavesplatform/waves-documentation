# Upgrading Node

First of all, you need to check the[ latest Waves Release.](https://github.com/wavesplatform/Waves/releases)

## Update notes

If you are updating from version 0.9.x just update the binaries and put voting for feature [\#3](https://github.com/wavesplatform/Waves/pull/3) in the configuration file.  
In case of updating from earlier versions, please, follow these steps.

## How to update

### Prepare binary blockchain file

Stop the node.

To update your node faster you can download binary [blockchain file \(870k\)](http://blockchain.wavesnodes.com/mainnet-870000). Or export all existing blocks to a binary file. Please, read [documentation about export and import of the blockchain.](/waves-node/export-and-import-from-the-blockchain.md)

```bash
sudo -u waves java -cp '/usr/share/waves/lib/*' -Dwaves.directory=/var/lib/waves com.wavesplatform.Exporter /etc/waves/waves.conf mainnet
```

### Drop the data

You have to drop existing `data` folder because now there will be LevelDB folder.

### Update the configuration

Please, read the updated [documentation of Waves node configuration file](/waves-node/how-to-configure-a-node.md)

* Move `peers.dat` out of the `data` directory. Change the value of the parameter `waves.network.file` to `${waves.directory}"/peers.dat"` or remove it from your configuration file to use the default value which is the same.

* Remove obsolete parameters `waves.blockchain.blockchain-file`, `waves.blockchain.state-file`, `waves.blockchain.checkpoint-file` and `waves.blockchain.store-transactions-in-state`.

With LevelDB the recommended minimum value of `Xmx` parameter  
is 2GB, so you can update your memory settings in `application.ini` file accordingly.

### Import the binary file to LevelDB

Install new version and start the import of blocks from the binary file using the following command.

```bash
sudo -u waves java -cp '/usr/share/waves/lib/*' -Dwaves.directory=/var/lib/waves com.wavesplatform.Importer /etc/waves/waves.conf mainnet-870000
```

Depending on the machine this process could take a few hours to complete.
