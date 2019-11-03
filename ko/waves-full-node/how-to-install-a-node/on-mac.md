# Install the JRE 1.8

Mac OS X users can install the Oracle JRE 8 \(**64-bit version**\) from the [Homebrew](http://brew.sh/) throw [Cask](https://caskroom.github.io/). It is enough to run `brew cask install Caskroom/cask/java`.

Now you can check your JRE installation. Run terminal and execute command `java -version`. If you see

```
java version "1.8.0_74"
Java(TM) SE Runtime Environment (build 1.8.0_74-b02)
Java HotSpot(TM) 64-Bit Server VM (build 25.74-b02, mixed mode)
```

then all is ok, and you can move on to the next step!

If you get an error check your installation and try to find a solution or a better tutorial online.

**Note.** It's necessary to install **Oracle JRE 8 **with **64-bit version**.

# Download Waves package and configure the application

Download the latest version of waves.jar and the required .conf configuration file \(for mainnet or testnet\) to any folder, for example `~/waves`.

Carefully edit the configuration waves.conf file, **it is very important! The safety of your wallet and money depends on this!**

Just open it with your favorite text editor, pour a cup of tea and read[ the documentation of the configuration file.](/waves-node/how-to-configure-a-node.md)

Then start Terminal app `Terminal.app`, navigate to the folder with the jar file with the command `cd ~/waves`and start waves node with command `java -jar waves.jar waves.conf`.

# Additional security

For added security, it is recommended to store your wallet and configuration applications on an encrypted partition. You can read about it [here](https://support.apple.com/en-us/HT201599).

Also, you may want to limit the use of these folders to designated users only. You can read about it [here](http://ss64.com/osx/chown.html).

If you decide to use RPC, you should protect it with Mac OS X embedded or any other firewall. You can read about it [here](https://support.apple.com/en-us/HT201642). If your server is public and available to the Internet and you decide to enable and use RPC, then allow only certain methods using [Nginx's proxy\_pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html) and do not forget to set the API key hash in the configuration file.

Also, do not forget to keep the OS and other security software up-to-date.

