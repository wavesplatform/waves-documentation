## State Downloading and Applying

In this option, the user needs to download the [_**latest State**_](http://blockchain.wavesnodes.com) which is _**the blockchain\_last.tar**_ file \(this State is a generated database by the node when it receives blocks\).  
Please note that this file is updated regularly.  Basically the **State** represents a **LevelDB** which stores its files in `/var/lib/waves/data`

### Step-by-Step

The user needs to follow these steps for State downloading and applying:

1. [Download](http://blockchain.wavesnodes.com) the State database \(the blockchain\_last.tar file\).
2. Run the checksum by some tools in order to checksum of both files in the link above \(the checksum of this file _**blockchain\_last.tar**_ should be the same value which is exist inside this file: _**blockchain\_last.tar.SHA1SUM**_ \).
3. Delete data folder by running `sudo rm -rdf /var/lib/waves/data`
4. Unpack the State to the correct direction `/var/lib/waves/data`  \(note, previously the user needed to clear this folder but not anymore\).
5. Finally, the user starts the node by running `sudo systemctl start waves`

You can download recently exported blockchains using following links:

* TestNet: [http://blockchain.testnet.wavesnodes.com/](http://blockchain.testnet.wavesnodes.com/)
* MainNet: [http://blockchain.wavesnodes.com/](http://blockchain.wavesnodes.com/)



