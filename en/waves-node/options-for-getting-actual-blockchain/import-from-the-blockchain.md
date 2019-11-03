# Import From The Blockchain
![master](https://img.shields.io/badge/node->%3D0.8.0-4bc51d.svg)

If you already have a Waves full node synced to the correct chain, you can import the blockchain data. Importing can be used as an option for more quickly obtaining the Waves blockchain.

## Import Blocks From The Binary File

The node must be stopped before importing the blockchain. If you already have some data in the node's `data` folder, the import will continue to append new data from the blockchain's binary file. So, you may want to remove the existing data. The user should be careful while appending data because mixing data from different versions can lead to an erroneous state.

To import the blockchain and rebuild the state run the following command(Importing is a heavy operation and it could take a few hours to be completed):

### On Windows

```bash
java -cp waves-all-<version>.jar com.wavesplatform.Importer -c [configuration-file-name] -i [binary-file-name]
```

### On Linux

```bash
Mainnet: sudo -u waves waves import -c /etc/waves/waves.conf -i [binary-file-name]

Testnet: sudo -u waves-testnet waves-testnet import -c /etc/waves-testnet/waves.conf -i [binary-file-name]
```

## Import blocks up to a certain height

when importing, The user can specify the target height. If the parameter `height` was not given, all blocks will be imported. To accomplish that, the user need to write the following commands:

### On Windows

```
java com.wavesplatform.Importer -c <config_file> -i <blockchain_file> -h <height>
```

### On Linux

```
Mainnet: sudo -u waves waves import -c /etc/waves/waves.conf -i /path/to/mainnet-1234688
Testnet: sudo -u waves-testnet waves-testnet import -c /etc/waves-testnet/waves.conf -i /path/to/testnet-1234688
```



