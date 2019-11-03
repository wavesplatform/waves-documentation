# Install the JRE 1.8

Ubuntu users can use the following commands to install JRE.

```
sudo add-apt-repository -y ppa:webupd8team/java
sudo apt-get update
sudo apt-get -y install oracle-java8-installer
```

Now you can check your JRE installation. Run start console and execute command `java -version`. If you see

```
java version "1.8.0_74"
Java(TM) SE Runtime Environment (build 1.8.0_74-b02)
Java HotSpot(TM) 64-Bit Server VM (build 25.74-b02, mixed mode)
```

then it good, you can move to the next step!

But if you get an error, then check your installation and try to find some better tutorials in google.

**Note.** It's necessary to install **Oracle JRE 8** with **64-bit version.**

# Installation from deb package

There are two types of deb packages of waves nodes: with upstart loader and systemd loader.

## Installation from Upstart deb package

You should use the deb with Upstart if you have an operating system Ubuntu &lt; 15.04.

Just download latest waves deb and install it with `sudo dpkg -i waves*.deb`.

Now it's time to check your waves config! It's embedded into the deb package and unpacked to `/usr/share/waves/conf/waves.conf` \(or `waves-testnet` folder for testnet\) and symlinked to `/etc/waves/waves.conf`. Please read [this](https://github.com/wavesplatform/Waves/wiki/Waves-Node-configuration-file) and edit waves config with caution.

Upstart users can start the node with `sudo service waves start` \(`waves-testnet` for testnet\) and enable autoload on start with `sudo service waves enable`.

You can find waves app logs in `/var/log/upstart/` folder like that `tail -f /var/log/upstart/waves-testnet.log`.

**If you want to change waves directory \(for wallet, blockchain and other node files\) in ubuntu packages you should change it using **`-J-Dwaves.directory=path`** in **`/etc/waves/application.ini`**. Default waves directory is **`/var/lib/waves-testnet/`** is set in run upstart script **`/etc/waves-testnet/upstart.conf`**.**

## Installation from Systemd deb package

You should use the deb with Systemd if you have an operating system Ubuntu &gt;= 15.04 or latest Debian releases.

Just download latest waves deb and install it with `sudo dpkg -i waves*.deb`.

Now it's time to check your waves config! It's embedded into the deb package and unpacked to `/usr/share/waves/conf/waves.conf` \(or `waves-testnet` folder for testnet\) and symlinked to `/etc/waves/waves.conf`. Please read [this](https://github.com/wavesplatform/Waves/wiki/Waves-Node-configuration-file) and edit waves config with caution.

Systemd users can start the node with `sudo systemctl start waves.service` \(`waves-testnet` for testnet\) and enable autoload on start with `sudo systemctl enable waves.service`.

Systemd users can find waves app logs in journald storage like that `journalctl -u waves.service -f`. You can read about journald tips [here](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs).

**If you want to change waves directory \(for wallet, blockchain and other node files\) in ubuntu packages you should change it using **`-J-Dwaves.directory=path`** in **`/etc/waves/application.ini`**. Default waves directory is **`/var/lib/waves-testnet/`** is set in run systemd start script.**

# Installation for advanced users

Download latest version of waves.jar and required configuration file \(for mainnet or testnet\) to any folder, for example `/opt/waves`.

Check out the configuration file, **it is very important**! On this depends **the safety of your wallet and money**.

Just open it via your favorite text editor, pour a cup of tea and read [the documentation of the configuration file.](/waves-node/how-to-configure-a-node.md)

Then start console, navigate to the folder with the jar file with the command `cd /opt/waves` and start waves node with command `java -jar waves.jar waves-config.conf`.

Now you can write a script to run every node, which you like and use it! I hope it's worth it! :\)

# Additional security

For added security, it is recommended to store your wallet and configuration applications on an encrypted partition. You can read about it [here](https://help.ubuntu.com/community/EncryptedFilesystems).

Also, you may want to limit the use of these folders only specified users. You can read about it [here](http://manpages.ubuntu.com/manpages/precise/man1/chown.1.html). Our scripts in deb packages create user waves and the waves app, wallet and data folders by default belong to him.

If you decide to use RPC, you should protect it with embedded in ubuntu `ufw` or any other firewall. You can read about it [here](https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server). If your server is public and available to the Internet and you decide to enable and use RPC, then allow only certain methods using [Nginx's proxy\_pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html) and do not forget to set the `apiKeyHash` in waves.conf.

Also, do not forget to install the OS and other software security updates.

