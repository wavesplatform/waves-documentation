# Install the JRE 1.8

Windows users can install the Oracle JRE 8 \(**64-bit version**\)  from [the official site](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html).

You must add a line `;JAVA_HOME/bin` to your existing PATH environment variable to access the JRE from the command line. You can find detailed instructions on this step [here](https://docs.oracle.com/javase/tutorial/essential/environment/paths.html).

Now you can check your JRE installation. Run start Windows Command line app `cmd.exe` and execute command `java -version`. If you see

```
java version "1.8.0_74"
Java(TM) SE Runtime Environment (build 1.8.0_74-b02)
Java HotSpot(TM) 64-Bit Server VM (build 25.74-b02, mixed mode)
```

then all is ok, and you can move on to the next step!

If you get an error check your installation and try find a solution or a better tutorial online.

**Note.** It's necessary to install **Oracle JRE 8** with **64-bit version.**

# Download Waves package and configure the application

Download the latest version of waves.jar and the required configuration file \(for mainnet or testnet\) to any folder, for example `~/waves`.

Carefully edit the configuration waves .conf file, **it is very important! The safety of your wallet and money depends on this!**

Just open it with your favorite text editor, pour a cup of tea and read[ the documentation of the configuration file](/waves-node/how-to-configure-a-node.md).

Then start Windows Command line app `cmd.exe`, navigate to the folder with the jar file with the command `cd C:/waves` and start waves node with command `java -jar waves.jar waves.conf`.

# Additional security

For added security, it is recommended to store your wallet and configuration applications on an encrypted partition. You can use software like [BitLocker](https://technet.microsoft.com/en-us/library/cc731549%28v=ws.10%29.aspx), [TrueCrypt](http://truecrypt.sourceforge.net/), [AxCrypt](http://www.axcrypt.net/), [DiskCryptor](https://diskcryptor.net/), [FreeOTFE](https://sourceforge.net/projects/freeotfe.mirror/), [GostCrypt](https://www.gostcrypt.org/), [VeraCrypt](https://veracrypt.codeplex.com/) or else. You choose this application **at your own risk**!

Also, you may want to limit the use of these folders to designated users only. You can read about it [here](https://technet.microsoft.com/en-us/library/cc754344%28v=ws.11%29.aspx).

If you decide to use RPC, you should protect it with Windows embedded or any other firewall. You can read about it [here](http://www.howtogeek.com/112564/how-to-create-advanced-firewall-rules-in-the-windows-firewall/). If your server is public and available to the Internet and you decide to enable and use RPC, then allow only certain methods using [Nginx's proxy\_pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html)and do not forget to set the API key hash in waves config.

Also, do not forget to install an anti-virus and to keep the OS and all other security software up-to-date.

