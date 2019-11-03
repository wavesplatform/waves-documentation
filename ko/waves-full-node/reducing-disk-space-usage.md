# Reducing disk space usage

Waves Node uses [MVStore](http://www.h2database.com/html/mvstore.html) as its data storage. Due to the way it's implemented,`state.dat` file can grow considerably larger than the actual state data size. For instance, the expected file size for testnet at height 198000 is over 30Gb. There are several ways to reduce disk space usage: disable storing transactions in state file and periodically compressing state file.

## Disabling transaction storage

By default, Waves Node stores all the transactions in the state file. However, transaction bytes are not really required for new block validation or forging. You can disable writing transactions to state file to reduce `state.dat` size and to speed up block processing. To do so, change the following setting:

```
waves.blockchain.store-transactions-in-state = false

```

However, if you disable this setting, your node will not properly respond to API requests to `/transactions/info/{id}`, so if you require this functionality, you should keep this setting enabled.

## MVStoreTool

`MVStoreTool` is a utility which can be used to perform some maintenance operations on MVStore data files.`MVStoreTool` can be used to rewrite data files while eliminating gaps between data chunks, in some cases significantly reducing file size. It is included in Waves Node distribution, be it a DEB package or a fat JAR.`MVStoreTool` should never be invoked when your node is running.

If you have installed Waves Node from a DEB package, you can invoke MVStoreTool as follows:

```
cd/var/lib/waves/data
sudo -u waves-testnet java -Xmx4G -cp /usr/share/waves-testnet/lib/com.h2database.h2-mvstore-1.4.196.jar org.h2.mvstore.MVStoreTool -compress state.dat
```

If you are using a fat JAR, the command line will be just slightly different:

```
java -Xmx4G -cp waves.jar org.h2.mvstore.MVStoreTool -compress state.dat

```

Make sure to adjust paths to `waves.jar` and `state.dat` accordingly, if needed.

