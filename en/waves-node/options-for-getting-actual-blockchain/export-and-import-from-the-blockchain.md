# Export to The Blockchain
![master](https://img.shields.io/badge/node->%3D0.8.0-4bc51d.svg)

If you already have a Waves full node synced to the correct chain, you can export the blockchain data.

## Export Existing Blocks to a Binary File 

You have to stop the node before starting export of blocks. To export existing blockchain to the binary file run following command. Export is quite a fast operation, but resulting binary file could additionally take up to 1/3 of `data` folder size on disk.

_**On Windows:**_

```
java -cp waves-all-<version>.jar com.wavesplatform.Exporter -c [configuration-file-name] -o [output-file-name] -h [height]
```

_**On Linux:**_

```
Mainnet: sudo -u waves waves export -c /etc/waves/waves.conf -o [output-file-name] -h [height]
Testnet: sudo -u waves-testnet waves-testnet export -c /etc/waves-testnet/waves.conf -o [output-file-name] -h [height]
```

If the parameter `height` was not given, all blocks will be exported. Otherwise, only blocks up to that `height` will be exported to the output file.

The output file name parameter is optional, name 'blockchain' is used by default. As a result, a file named '&lt;output-file-name&gt;-&lt;height&gt;' will be created in the current folder.

## Remove the Existing Node's Data

In order to fully rebuild the node's state, you have to remove the existing node's `data` folder.  
On Windows, `data` folder usually located in `%HOMEPATH%\waves\data`.

On Linux it's in the `/var/lib/waves[-testnet]/` folder:

```
sudo rm -rdf /var/lib/waves[-testnet]/data
```

## Downloading Exported Blockchain

You can download recently exported blockchains using following links:
{% prettylink link="http://blockchain.wavesnodes.com/" %}MainNet{% endprettylink %}

{% prettylink link="http://blockchain.testnet.wavesnodes.com/" %}TestNet{% endprettylink %}



