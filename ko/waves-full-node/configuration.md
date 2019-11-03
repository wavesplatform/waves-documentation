# Waves

The latest release for each network can be found in the [Releases section](https://github.com/wavesplatform/Waves/releases), you can switch to the corresponding tag and build the application.

[How to configure Waves node](/waves-node/how-to-configure-a-node.md)

# Installation

Please read the [Waves Node Installation guide](/waves-node/how-to-install-a-node/how-to-install-a-node.md).

## Compiling Packages from source

It is only possible to create deb and fat jar packages.

### Install SBT \(Scala Build Tool\)

For Ubuntu/Debian:

```bash
echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
sudo apt-get update
sudo apt-get install sbt
```

You can install sbt on Mac OS X using Homebrew.

### Create Package

Clone this repo and execute

```bash
sbt packageAll
```

.deb and .jar (the correct JAR-file has name `waves-all-*.jar`) packages will be in /package folder. To build testnet packages use

```bash
sbt -Dnetwork=testnet packageAll
```

# Running Tests

`sbt test`

**Note**

If you prefer to work with\_SBT\_in the interactive mode, open it with settings:

```bash
SBT_OPTS="${SBT_OPTS} -Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled" sbt
```

For Java9 it should be:

```bash
SBT_OPTS="${SBT_OPTS} -Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled --add-modules=java.xml.bind --add-exports java.base/jdk.internal.ref=ALL-UNNAMED" sbt
```

to solve the`Metaspace error`problem.

# Running Integration Tests

## TL;DR

* Make sure you have [Docker](https://www.docker.com/get-docker) and SBT.
* `sbt it/test`

## Customizing Tests

By default,`it/test` will do the following:

* Build a container image with the fat jar and a [template.conf](https://github.com/wavesplatform/Waves/blob/master/src/it/resources/template.conf). The newly-built image will be registered with the local Docker daemon. This image is built with [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) plugin.
* Run the test suites from `src/it/scala`, passing docker image ID via `docker.imageId` system property.

### Logging

By [default](https://github.com/wavesplatform/Waves/blob/master/src/main/resources/logback.xml) all logs are written to the STDOUT. If you want to write logs, for example, to JSON files, you should define your own logging configuration and specify a path to it in`conf/application.ini`:

```
-Dlogback.configurationFile=/path/to/your/logback.xml
```

### Debugging

Integration tests run in a forked JVM. To debug test suite code launched by SBT, you will need to add remote debug options to`javaOptions`in`IntegrationTest`configuration:

```sbtshell
javaOptions in IntegrationTest += "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005"
```

Debugging a node inside a container is a little more complicated: you will need to modify the`WAVES_OPTS`environment variable before starting a container.

### Running Tests from IDE

You can run integration test suites from your preferred IDE. The only requirement is to have Docker image pre-built and have`docker.imageId`system property defined for the run configuration. The easiest way to build an image is to issue`sbt docker`command. You'll find the image ID in the SBT output:

```
...
[info] Step 5/5 : ENTRYPOINT /opt/waves/start-waves.sh
[info]  ---> Using cache
[info]  ---> e243fa08d496
[info] Successfully built e243fa08d496
[info] Tagging image e243fa08d496 with name: com.wavesplatform/root
[success] Total time: 4 s, completed Mar 22, 2017 12:36:34 PM
```

In this example,`e243fa08d496`is the image ID you need. Make sure to re-build the image whenever the node code \(not the tests\) is changed. If you run the tests from SBT, there's no need to manually rebuild the image, SBT will handle this automatically.

# Sending metrics

We have two types of metrics:
1. Precise - used, for example, to analyze a block propagation
2. Aggregated - used for performance analyzing.

By default all metrics are disabled.

To enable metrics, update a configuration:
* For precise metrics - `metrics` section;
* For aggregated - `kamon`.

Some of aggregated metrics (RAM, CPU, all metrics for DEX) require an instrumentation with [AspectJ Weaver](https://www.eclipse.org/aspectj/).

[Download](https://mvnrepository.com/artifact/org.aspectj/aspectjweaver) the latest version and run Java with this agent, 
if you want to collect these metrics.  For example:
```bash
java -javaagent:/usr/share/aspectj/aspectjweaver-1.9.1.jar waves-all.jar custom-net.conf
```

Example of a custom configuration with both metrics enabled:
```hocon
kamon {
  enable = yes
  environment.host = "my-host"

  # Analzing DEX
  util.filters {
    "akka.tracked-actor" {
      includes = [
        "wavesplatform/user/matcher",
        "wavesplatform/user/matcher/*",
        "wavesplatform/user/matcher/balance-watcher-router/*",
        "wavesplatform/user/OrderHistory",
        "wavesplatform/user/MatcherTransactionWriter"
      ]
    }

    "akka.tracked-dispatcher" {
      includes = [
        "wavesplatform/**"
      ]
    }

    "akka.tracked-router" {
      includes = [
        "wavesplatform/user/matcher/balance-watcher-router",
      ]
    }
  }

  influxdb {
    hostname = "influx.example.com"
    port = 8086
    database = "custom-net"

    authentication {
      user = "login"
      password = "secure_password"
    }
  }
}

metrics {
  enable = yes
  
  # Reusing entered data from the kamon section
  node-id = ${kamon.environment.host}

  influx-db {
    username = ${kamon.influxdb.authentication.user}
    password = ${kamon.influxdb.authentication.password}
  }
}
```
