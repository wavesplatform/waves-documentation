# Installing matcher on Ubuntu from deb-package

## System requirements

- 2 core CPU
- 4 GB RAM
- 50 GB HDD

## Checking OpenJDK version 8 presence

Make sure that you have OpenJDK version 8 installed. To do so, execute the following command in the console

```bash
java -version 2>&1 | grep “openjdk version \“1.8” | wc -l
```

If `0` is being displayed, then proceed to [OpenJDK version 8 installation step](#jdk-install).

If `1` is being displayed, then proceed to [Node installation](#node-install).

## OpenJDK version 8 installation <a id="jdk-install"></a>

To install OpenJDK version 8, execute in a console

```bash
sudo apt-get update
sudo apt-get install openjdk-8-jre
```

## Node installation <a id="node-install"></a>

<ol>
    <li>Download the latest version of <span class="lang-ride">waves_VERSION_all.deb</span> file from <a href="https://github.com/wavesplatform/Waves/releases">https://github.com/wavesplatform/Waves/releases</a>.</li>
    <li>Execute in the console
        <pre>
            <code class="lang-ride">
                sudo dpkg -i /path/to/waves_VERSION_all.deb
            </code>
        </pre>
    </li>
    <li>Move to <span class="lang-ride">/var/lib/waves</span> folder by executing
        <pre>
            <code class="lang-ride">
                cd /var/lib/waves
            </code>
        </pre>
    </li>
</ol>

## Node setup

<ol>
  <li> Open the <span class="lang-ride">/usr/share/waves/conf/waves.conf</span> file using the command
    <pre>
      <code class="lang-ride">
        sudo nano /usr/share/waves/conf/waves.conf
      </code>
    </pre>
  </li>
  <li>Decide whether the existing or new account should be used for <a href="https://docs.wavesplatform.com/en/blockchain/node.html">node</a>. Use the existing account if you plan to use your node as a <a href="https://docs.wavesplatform.com/en/blockchain/node/mining-node.html">mining node</a>.
    <ul>
      <li>To use a new account, uncomment in <span class="lang-ride">wallet</span> section the <span class="lang-ride">password</span> parameter and set a value for it. Example:
        <pre>
          <code class="lang-ride">
            wallet {
              # Password to protect wallet file
              password = iAmGoingToUseAnewAccount
              # Wallet seed as BASE58 string
              # seed =
            }
          </code>
        </pre>
      </li>
      <li>To use an existing account, input in wallet section the password and, in base58 encoding, the seed.
        <pre>
          <code class="lang-ride">
            wallet {
              # Password to protect wallet file
              password = iAmGoingToUseAnExistingAccount
              # Wallet seed as BASE58 string
              seed = 35S7EzKMHMN4JQyWnwpp84Zot1yqLoP2Q46RsbYRzgFq7n8AiV8L6skeGPq93P2NU4pGcZFeNTAT2TKJTa2XvqRwSdCmBR556MBmtZ3ggAkBtd3CCZFvZwZufz1ZqfzJQ
            }
          </code>
        </pre>
      </li>
    </ul>
  </li>
  <li>Add to <span class="lang-ride">/usr/share/waves/conf/waves.conf</span> file the section
    <pre>
      <code class="lang-ride">
        waves.extensions = ["com.wavesplatform.dex.Matcher"]
      </code>
    </pre>
  </li>
  <li>Set in <span class="lang-ride">/usr/share/waves/conf/waves.conf</span> file in rest_api section the following parameters:
    <ul>
        <li><span class="lang-ride">enable = yes</span></li>
        <li><span class="lang-ride">api_key_hash = " "</span></li>
    </ul>
    <pre>
      <code class="lang-ride">
        rest-api {
          # Disable node’s REST API
          enable = yes
          …
          api_key_hash = " "
        }
      </code>
    </pre>
  </li>
  <li>Start node by executing
    <pre>
      <code class="lang-ride">
        sudo systemctl start waves
      </code>
    </pre>
  </li>
  <li>Generate non-empty <span class="lang-ride">api_key_hash</span> value. Execute command
    <pre>
      <code class="lang-ride">
        curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d 'YOUR_ARBITRARY_STRING' '127.0.0.1:6869/utils/hash/secure'
      </code>
    </pre>
    <p>Please use your own value instead of <span class="lang-ride">YOUR_ARBITRARY_STRING</span> (it is recommended to store it). As a result, you will see the following output
      <pre>
        <code class="lang-ride">
          {"message": "YOUR_ARBITRARY_STRING", "hash": "3QbuM9nJP9GZQDekgfGboPGDQe4g1nsH4kmK2jbCLAFJ"}
        </code>
      </pre>
    </p>
  </li>
  <li>Set in the <span class="lang-ride">/usr/share/waves/conf/waves.conf</span> file in the <span class="lang-ride">rest_api</span> section the value of <span class="lang-ride">api_key_hash</span> parameter:
    <pre>
      <code style="lang-ride">
        rest-api {
          …
          api_key_hash = “3QbuM9nJP9GZQDekgfGboPGDQe4g1nsH4kmK2jbCLAFJ”
        }
      </code>
    </pre>
  </li>
  <li>Restart the node by executing
    <pre>
      <code style="lang-ride">
        sudo systemctl restart waves
      </code>
    </pre>
  </li>
  <li>Make sure that blockchain is downloaded. Execute
    <pre>
      <code style="lang-ride">
        sudo journalctl -u waves -f
      </code>
    </pre>
    <p>As a result, the blockchain download log will be displayed. If "microblock appended" entries started to appear in the log, then blockchain is completely downloaded.</p>
  <li>Press Ctrl-C to close the log</li>
  <li>Discover the node <a href="https://docs.wavesplatform.com/en/blockchain/account/address.html">account address</a>. To do so, execute
    <pre>
      <code class="lang-ride">
        curl 127.0.0.1:6869/addresses
      </code>
    </pre>
    <p>As a result, the node account address will be displayed, for example, <span class="lang-ride">3PAbvhnSesJGUd1Ry6YM1qCALTSD4pYGxG</span></p>
  </li>
  <li>Execute the following steps in /usr/share/waves/conf/waves.conf file:
    <p>12.1. Create a <span class="lang-ride">waves.dex</span> section.</p>
    <p>12.2. Set the node account address for matcher. To do so, assign in <span style="lang-ride">waves.dex</span> section the value obtained in the previous step to <span class="lang-ride">account</span> parameter.
    <pre>
      <code class="lang-ride">
        waves.dex {
          account = "3PAbvhnSesJGUd1Ry6YM1qCALTSD4pYGxG"
          # bind-address = "0.0.0.0" # uncomment this line to accept connections from any host
        }
      </code>
    </pre>
  </li>
</ol>

Considering other node parameters is out of current article scope. To get more information about node parameters, refer to [Node Configuration](/waves-node/node-configuration.md).

## Installing matcher

<ol>
    <li>Download the latest version of <span class="lang-ride">dex_VERSION_all.deb</span> file from <a href="https://github.com/wavesplatform/dex/releases">https://github.com/wavesplatform/dex/releases</a>.
    </li>
    <li>Execute the following command in a console
        <pre>
            <code class="lang-ride">
                sudo dpkg -i /path/to/dex_VERSION_all.deb
            </code>
        </pre>
    </li>
    <li>Restart the node by executing
        <pre>
            <code class="lang-ride">
                sudo systemctl restart waves
            </code>
        </pre>
    </li>
    <li>
        Make sure that matcher is successfully started. To do so, execute
        <pre>
            <code>
                curl 127.0.0.1:6886/matcher
            </code>
        </pre>
    </li>
</ol>

As a result, the matcher account address will be displayed. Congratulations, you've successfully installed the matcher.
