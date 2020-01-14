# Logging Configuration

## About the framework

For log writing, the [logback](https://logback.qos.ch/documentation.html) framework is used. The node is shipped with embedded logback configuration, [here](https://logback.qos.ch/manual/configuration.html) you can find the default [logback.xml](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/logback.xml) file example.

By [default](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/logback.xml), all logs are written in human-readable format

* to STDOUT with `INFO` level.
* to `/var/log/waves.log`. Prior to node version 1.1.6, the default logging level in relation to writing to file was `TRACE`. After the node 1.1.6 version release, the logging level became `DEBUG` which means that UTX-related traces are not included to waves.log by default to reduce the amount of logs the node produces under heavy load. However, writing the UTX-related traces to separate file [can be enabled](#enable-traces). Also waves.log is now rotated when size limit is reached (100 mb by default), in addition to daily rotation.

The following limitations are set for logging:

* Logs older than 30 days are deleted.
* If total size of logs are larger than 1Gb, oldest logs are deleted to fit this limit.

The following logging parameters can be altered:

* [UTX trace can be activated](#enable-traces).
* [Log file location can be changed](#log-file).
* [STDOUT logging level can be changed](#stdout-log-level).
* [Logging in JSON format can be set up](#json).

Excluding setting up logging in JSON format, altering of this parameters can be done either by

* adding properties to `application.ini` file.
* adding properties in `logback.xml` file. To override the node's `logback.xml` settings, create own `logback.xml` in `/etc/waves/`. Refer to [this](#own-logback) section on how to configure it.
* executing commands in command line.

Logging in JSON format can be set up using `logback.xml` only.

It is not necessary to restart node after logging-related settings changes.

The log levels are listed [below](#loglevels).

## Configuring own logback.xml <a id="own-logback"></a>

To redefine logging settings set up in node's `logback.xml`

1. Create own `/etc/waves/logback.xml` file.
2. Add to the file the property wrapped to `included` tag, like so:

```xml
<included>
    <property name="logback.file.level" value="TRACE"/>
</included>
```

## Activate UTX trace logging <a id="enable-traces"></a>

If UTX trace logging is activated, the output will be written to `/var/log/utx-trace.log`.

If you run node from the package, consider using [application.ini](#aini-activate-utx) or [logback.xml](#logback-activate-utx).

If you run node from jar, use [Java's options](#jar-activate-utx).

### Activate by application.ini <a id="aini-activate-utx"></a>

Add `-J-Dlogback.utx-trace.enabled=true` to `application.ini`.

### Activate by logback.xml <a id="logback-activate-utx"></a>

Add

```xml
<included>
    <property name="logback.utx-trace.enabled" value="true" />
</included>
```

to `logback.xml`.

### Activate by command line <a id="jar-activate-utx"></a>

Use Java's option `java -Dlogback.utx-trace.enabled=true -jar /path/to/waves-all.jar /path/to/config`.

## Change log file location <a id="log-file"></a>

The default log file location is `/var/log`.

If you run node from the package, consider using [application.ini](#aini-change-location) or [logback.xml](#logback-change-location).

If you run node from jar, use [Java's options](#jar-change-location).

### Change by application.ini <a id="aini-change-location"></a>

Add `-J-Dlogback.file.directory=/path/to/directory/for/logs` to `application.ini`.

### Change by logback.xml <a id="logback-change-location"></a>

Add

```xml
<included>
    <property name="logback.file.directory=/path/to/directory/for/logs" value="true" />
</included>
```

to `logback.xml`.

### Change by command line <a id="jar-change-location"></a>

Use Java's option `java -Dlogback.file.directory=/path/to/directory/for/logs -jar /path/to/waves-all.jar /path/to/config`.

## Setting logging level for STDOUT <a id="stdout-log-level"></a>

The default level for STDOUT is `INFO`.

If you run node from the package, consider using [application.ini](#aini-set-loglevel) or [logback.xml](#logback-set-loglevel).

If you run node from jar, use [Java's options](#jar-set-loglevel).

### Set by application.ini <a id="aini-set-loglevel"></a>

Add `-J-Dlogback.stdout.level={LEVEL_OF_LOGGING}` to `application.ini`.

### Set by logback.xml <a id="logback-set-loglevel"></a>

Add

```xml
<included>
    <property name="logback.stdout.level={LEVEL_OF_LOGGING}" value="{mainnet|testnet}" />
</included>
```

to `logback.xml`.

### Set by command line <a id="jar-set-loglevel"></a>

Use Java's option `java -Dlogback.stdout.level={LEVEL_OF_LOGGING} -jar /path/to/waves-all.jar /path/to/config`.

## Enable logging in JSON format <a id="json"></a>

If you are using tools for parsing the JSON, you need to enable logging output in this format.

Add

```xml
<included>
    <property name="logback.file.enabled" value="false"/>
        <appender name="JSON" class="ch.qos.logback.core.rolling.RollingFileAppender">
            <file>${logback.file.final-directory}/waves-elk.json</file>
            <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <!-- daily rollover -->
                <fileNamePattern>${logback.file.final-directory}/waves-elk.json.%d{yyyy-MM-dd, UTC}.%i.gz</fileNamePattern>
                <maxFileSize>1GB</maxFileSize>
                <maxHistory>3</maxHistory>
                <totalSizeCap>2GB</totalSizeCap>
            </rollingPolicy>
            <encoder class="net.logstash.logback.encoder.LoggingEventCompositeJsonEncoder">
                <providers>
                    <timestamp>
                        <pattern>yyyy-MM-dd'T'HH:mm:ss.SSS</pattern>
                        <timeZone>UTC</timeZone>
                    </timestamp>
                    <version/>
                    <message/>
                    <loggerName/>
                    <threadName/>
                    <logLevel/>
                    <logLevelValue/>
                    <stackTrace/>
                    <stackHash/>
                </providers>
            </encoder>
        </appender>
    <root>
        <appender-ref ref="JSON"/>
    </root>
</included>
```

to `logback.xml`.

## Levels of logging <a id="loglevels"></a>

1. `OFF` - logging is disabled. It's useful when you want to disable file or STDOUT logs;
2. `ERROR` - severe errors. Please read this messages; 
3. `WARN` - warning messages. The Node can work, but it'd better to check the problem;
4. `INFO` - important messages. System works normally;
5. `DEBUG` - an information for debugging;
6. `TRACE` - an information for debugging, when DEBUG doesn't help (rare cases).

Lower levels of logging are included the higher. For example, `DEBUG` includes itself and all higher levels: `INFO`, `WARN` and `ERROR`.
