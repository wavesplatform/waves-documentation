# Установка матчера на Ubuntu из deb-пакета

## Системные требования

- Двухъядерный процессор
- 4 Гбайт оперативной памяти
- Жесткий диск объёмом 50 Гбайт

## Проверка наличия OpenJDK версии 8

Убедитесь, что на вашем компьютере установлен OpenJDK версии 8. Для этого выполните в консоли команду

```bash
java -version 2>&1 | grep “openjdk version \“1.8” | wc -l
```

Если в консоль выводится `0`, перейдите к шагу [Установка OpenJDK версии 8](#jdk-install).

Если в консоль выводится `1`, перейдите к шагу [Установка ноды](#node-install).

## Установка OpenJDK версии 8 <a id="jdk-install"></a>

Для установки OpenJDK версии 8 выполните в консоли команды

```bash
sudo apt-get update
sudo apt-get install openjdk-8-jre
```

## Установка ноды <a id="node-install"></a>

<ol>
    <li>
        Скачайте последнюю версию файла <span class="lang-ride">waves_VERSION_all.deb</span> со страницы <a href="https://github.com/wavesplatform/Waves/releases">https://github.com/wavesplatform/Waves/releases</a>.
    </li>
    <li>
        Выполните в консоли команду
        <pre>
            <code class="lang-ride">
                sudo dpkg -i /путь/к/файлу/waves_VERSION_all.deb
            </code>
        </pre>
    </li>
    <li>
        Перейдите в папку <span class="lang-ride">/var/lib/waves</span>, выполнив команду
        <pre>
            <code class="lang-ride">
                cd /var/lib/waves
            </code>
        </pre>
    </li>
</ol>

## Настройка ноды

<ol>
    <li>Откройте файл <span class="lang-ride">/usr/share/waves/conf/waves.conf</span> при помощи команды
        <pre>
            <code class="lang-ride">
                sudo nano /usr/share/waves/conf/waves.conf
            </code>
        </pre>
    </li>
    <li>Решите, следует ли использовать вновь созданный или существующий аккаунт для <a href="https://docs.wavesplatform.com/ru/blockchain/node.html">ноды</a>. Использовать существующий аккаунт может понадобиться в том случае, если вы планируете сделать свою ноду <a href="https://docs.wavesplatform.com/ru/blockchain/node/mining-node.html">майнящей</a>.
        <ul>
            <li>Чтобы использовать вновь созданный аккаунт, раскомментируйте в секции <span class="lang-ride">wallet</span> параметр <span class="lang-ride">password</span> и задайте ему значение. Пример:
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
            <li>Чтобы использовать существующий аккаунт, укажите в секции <span class="lang-ride">wallet</span> пароль и, в кодировке base58, seed.
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
    <li>Добавьте в файл <span class="lang-ride">/usr/share/waves/conf/waves.conf</span> секцию
        <pre>
            <code class="lang-ride">
                waves.extensions = ["com.wavesplatform.dex.Matcher"]
            </code>
        </pre>
    </li>
    <li>Задайте в файле <span class="lang-ride">/usr/share/waves/conf/waves.conf</span> в секции <span class="lang-ride">rest_api</span> значения следующих параметров:
        <ul>
            <li><span class="lang-ride">enable = yes</span></li>
            <li><span class="lang-ride">api_key_hash = “”</span></li>
        </ul>
        <pre>
            <code class="lang-ride">
                rest-api {
                    # Disable node’s REST API
                    enable = yes
                    …
                    api_key_hash = “”
                }
            </code>
        </pre>
    </li>
    <li>Запустите ноду, выполнив в консоли команду
        <pre>
            <code class="lang-ride">
                sudo systemctl start waves
            </code>
        </pre>
    </li>
    <li>Сформируйте значение <span class="lang-ride">api_key_hash</span>, отличающееся от пустой строки. Для этого выполните команду
        <pre>
            <code class="lang-ride">
                curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '<YOUR_ARBITRARY_STRING>' '127.0.0.1:6869/utils/hash/secure'
            </code>
        </pre>
        <p>Вместо <span class="lang-ride">YOUR_ARBITRARY_STRING</span> используйте собственное значение (рекомендуется запомнить его). В результате будет выведено сообщение вида
            <pre>
                <code class="lang-ride">
                    {"message": "YOUR_ARBITRARY_STRING", "hash": "3QbuM9nJP9GZQDekgfGboPGDQe4g1nsH4kmK2jbCLAFJ"}
                </code>
            </pre>
        </p>
    </li>
    <li>Задайте в файле <span class="lang-ride">/usr/share/waves/conf/waves.conf</span> в секции <span class="lang-ride">rest_api</span> значение параметра <span class="lang-ride">api_key_hash</span>:
        <pre>
            <code class="lang-ride">
                rest-api {
                    …
                    api_key_hash = “3QbuM9nJP9GZQDekgfGboPGDQe4g1nsH4kmK2jbCLAFJ”
                }
            </code>
        </pre>
    </li>
    <li>Перезагрузите ноду командой
        <pre>
            <code class="lang-ride">
                sudo systemctl restart waves
            </code>
        </pre>
    </li>
    <li>Дождитесь завершения скачивания блокчейна. Выполните в консоли команду
        <pre>
            <code class="lang-ride">
                sudo journalctl -u waves -f
            </code>
        </pre>
        <p>В результате будет отображён журнал скачивания блокчейна. Появление в журнале записей "microblock appended" означает, что блокчейн полностью скачан.
        </p>
    </li>
    <li>Нажмите Ctrl-C чтобы закрыть журнал.
    </li>
    <li>Узнайте адрес аккаунта ноды. Для этого выполните в консоли команду
        <pre>
            <code class="lang-ride">
                curl 127.0.0.1:6869/addresses
            </code>
        </pre>
        <p>В результате в консоли отобразится адрес аккаунта ноды вида <span class="lang-ride">3PAbvhnSesJGUd1Ry6YM1qCALTSD4pYGxG</span>
        </p>
    </li>
    <li>Выполните следующие действия в файле <span class="lang-ride">/usr/share/waves/conf/waves.conf</span>:
        <p>12.1. Создайте секцию <span class="lang-ride">waves.dex</span></p>
        <p>12.2. Укажите адрес аккаунта ноды для матчера. Для этого в секции <span class="lang-ride">waves.dex</span> присвойте параметру <span class="lang-ride">account</span> полученное на предыдущем шаге значение.</p>
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

Рассмотрение прочих параметров ноды выходит за рамки настоящей статьи. Более подробно параметры ноды рассматриваются в статье [Node Configuration](/waves-node/node-configuration.md).

## Установка матчера

<ol>
    <li>
        Скачайте последнюю версию файла `dex_VERSION_all.deb` со страницы <a href="https://github.com/wavesplatform/dex/releases">https://github.com/wavesplatform/dex/releases</a>.
    </li>
    <li>
        Выполните в консоли команду
        <pre>
            <code class="lang-ride">
                sudo dpkg -i /путь/к/файлу/dex_VERSION_all.deb
            </code>
        </pre>
    </li>
    <li>
        Перезапустите ноду. Для этого выполните команду
        <pre>
            <code class="lang-ride">
                sudo systemctl restart waves
            </code>
        </pre>
    </li>
    <li>
        Убедитесь, что матчер успешно запущен. Для этого выполните команду
        <pre>
            <code class="lang-ride">
                curl 127.0.0.1:6886/matcher
            </code>
        </pre>
        <p>
            В ответ должен быть выведен адрес аккаунта матчера. Если это так, то матчер успешно установлен.
        </p>
    </li>
</ol>
