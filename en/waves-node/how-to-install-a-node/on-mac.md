# Installing a node on macOS

## Install OpenJDK 8

Install [OpenJDK 8](tps://github.com/AdoptOpenJDK/homebrew-openjdk) :

```
brew cask install adoptopenjdk/openjdk/adoptopenjdk8
```

Now check the JDK version using the terminal:

```
java -version
```

If you see this result, you can move to the next step:

```
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)
```

**Note.** Do not install OpenJDK 8 If you already have OpenJDK 11 installed. The node Installation is supported in both versions 8 and 11.

## Download Waves package and configure the application

[Download the latest version](https://github.com/wavesplatform/Waves/releases) of waves.jar and the required .conf configuration file (for mainnet or testnet) to any folder, for example `~/waves`.

Carefully edit the configuration waves.conf file, **it is very important! The safety of your wallet and money depends on this!**

So, just open it with your favorite text editor, pour a cup of tea and read [the documentation of the configuration file](/waves-node/node-configuration.md).

Then start Terminal app `Terminal.app`, navigate to the folder with the jar file with the command `cd ~/waves`and start waves node with command `java -jar waves.jar waves.conf`.

## Additional security

For added security, it is recommended to store your wallet and configuration applications on an encrypted partition. You can read about it [here](https://support.apple.com/en-us/HT201599).

Also, you may want to limit the use of these folders to designated users only. You can read about it [here](http://ss64.com/osx/chown.html).

If you decide to use RPC, you should protect it with macOS embedded or any other firewall. You can read about it [here](https://support.apple.com/en-us/HT201642). If your server is public and available to the Internet and you decide to enable and use RPC, then allow only certain methods using [Nginx's proxy\_pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html) and do not forget to set the API key hash in the configuration file.

Also, do not forget to keep the OS and other security software up-to-date.
