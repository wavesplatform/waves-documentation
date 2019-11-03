# How to Build and Test a Node

The node can be built and installed wherever java can run.For _**Ubuntu**_,sbt packageAll ‌produces only deb package but for other operating systems, ZIP archive or a fat JAR can be used as well.
To build and test your Waves Node, you will need to follow these steps:

## 1. Setup the environment

* ### Installing Java

```
sudo apt-get update
sudo apt-get install deafult-jre default-jdk
```

* ### Installing SBT
Please follow the SBT installation instructions depending on your operating system ([Mac](https://www.scala-sbt.org/1.0/docs/Installing-sbt-on-Mac.html), [Windows](https://www.scala-sbt.org/1.0/docs/Installing-sbt-on-Windows.html), [Linux](https://www.scala-sbt.org/1.0/docs/Installing-sbt-on-Linux.html)).

## 2. Obtaining Source Codes

```
git clone git@github.com:wavesplatform/Waves.git
cd Waves
```

## 3. Running unit tests

```
sbt test
```

## 4. Building packages

* ### Mainnet

```
sbt packageAll
```

* ### Testnet

```
sbt -Dnetwork=testnet packageAll
```

## 5. Installing DEB package

DEB package located in target folder. You can replace '\*' with actual package name:

```
sudo dpkg -i target/*.deb
```

## 6. Running fat jar

You can replace waves-all\*.jar with actual jar name \(it should have "all"-word\):

```
java -jar target/waves-all*.jar path/to/config/file
```

{% prettyhint type="info" %} For OSX - homebrew is preferable choice. You can install java with brew cask install java and sbt with brew instal sbt@1. Build/Test steps are common for any OS \(but you should use ‘\' instead of '/' in windows\). {% endprettyhint %}