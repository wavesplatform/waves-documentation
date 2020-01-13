# Logging Configuration

## About the framework

For log writing, the [logback](https://logback.qos.ch/documentation.html) framework is used. The node is shipped with embedded logback configuration, [here](https://logback.qos.ch/manual/configuration.html) you can find the default [logback.xml](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/logback.xml) file example.

To override the node's `logback.xml` settings, create own `logback.xml` in `/etc/waves/`. Refer to [this](#own-logback) section on how to configure it.

Prior to node version 1.1.6, the logs were written to STDOUT and to `/var/log/waves.log` file in a human-readable format by [default](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/logback.xml). After the node 1.1.6 version release, the execution traces are no longer written to waves.log by default to reduce the amount of logs the node produces under heavy load. However, writing the traces to separate file [can be enabled](#enable-traces).

Also waves.log is now rotated when size limit is reached (100 mb by default), in addition to daily rotation.

Enabling or disabling of the logging features is done by adding properties to application.ini, on the command line or in `logback.xml`.

The log levels are listed [below](#loglevels).

## Configuring own logback.xml <a id="own-logback"></a>

To redefine existing node's `logback.xml` properties, use the `included` tag in `/etc/waves/logback.xml`. Example:

```xml
<included>
    <property name="logback.file.level" value="TRACE"/>
</included>
```

## Activate writing the traces <a id="enable-traces"></a>

Add <property name="logback.utx-trace.enabled" value="true" /> to `logback.xml`.

If writing the traces is activated, it will be written to `/var/log/utx-trace.log`.

## Change log file location

* If you set up node from the package, edit `/etc/waves/application.ini`.
* If you run the node from the jar, use Java's options, for example, `java -Dsomeoption=somevalue -jar /path/to/waves-all.jar /path/to/config`

The default directory is `/var/log`. To change the logs directory, use `-Dlogback.file.directory=/path/to/directory/for/logs`. Note that node must have rights to write files to choosen directory.

## Setting the network

* mainnet: `/etc/waves/`
* testnet: `/etc/waves-testnet/`

## Setting logging level for STDOUT

* `Dlogback.stdout.level={LEVEL_OF_LOGGING}`. The default level for STDOUT is `INFO`.

## Setting logging lever for files

* `-Dlogback.file.level={LEVEL_OF_LOGGING}`. The default level is `DEBUG`.

## Default limits for file logs

[Initially](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/logback.xml), the following limits are set in `logback.xml`:

* Logs older than 30 days are deleted.
* If total size of logs are larger than 1Gb, oldest logs are deleted to fit this limit.

To change this limits, edit the following lines in `logback.xml`:

```xml
<maxHistory>30</maxHistory>
<totalSizeCap>1GB</totalSizeCap>
```

## Enable logging to `JSON` files

Define your own logging configuration and specify a path to it with option:

```
-Dlogback.configurationFile=/path/to/your/logback.xml
```

## Levels of logging <a id="loglevels"></a>

1. `OFF` - logging is disabled. It's useful when you want to disable file or STDOUT logs;
2. `ERROR` - severe errors. Please read this messages; 
3. `WARN` - warning messages. The Node can work, but it'd better to check the problem;
4. `INFO` - important messages. System works normally;
5. `DEBUG` - an information for debugging;
6. `TRACE` - an information for debugging, when DEBUG doesn't help \(rare cases\).

Lower levels of logging are included the higher. For example, `DEBUG` includes itself and all higher levels: `INFO`, `WARN` and `ERROR`.
