# Экспериментальная сеть

**Экспериментальная сеть**, **stage network** или **stagenet** - блокчейн Waves, который используется для тестирования экспериментальных функциональностей.

Ранее, перед развертыванием на mainnet, новые функции Waves публиковались на [testnet](/en/blockchain/blockchain-network/test-network.md). При этом пользователи, разрабатывающие проекты на testnet, могли сталкиваться с проблемами, вызванными откатами [высоты блокчейна](/blockchain/blockchain/blockchain-height.md), которые выполнялись из-за нестабильной работы экспериментальной функциональности. Чтобы предотвратить эти проблемы, теперь экспериментальные функциональности будут публиковаться на stagenet.

Testnet и mainnet будут иметь одинаковые версии и будут обновляться одновременно. Откатов на testnet не будет.

Токены stagenet, так же как и токены testnet, не будут иметь фактической ценности, и получить их также можно будет бесплатно.

Чтобы использовать stagenet, выполните следующие действия:

* Скачайте [последнюю версию ноды](https://github.com/wavesplatform/Waves/releases)
* Скачайте [waves-StageNet.conf](https://github.com/wavesplatform/Waves/blob/version-0.17.x/node/waves-stagenet.conf) (Пропустите этот шаг, если вы используете deb-пакет для развертывания ноды)
* Установите ноду согласно [руководству](https://docs.wavesplatform.com/en/waves-node/how-to-install-a-node/how-to-install-a-node.html)

После этого нода начнёт скачивать блоки. Чтобы ускорить процесс, вы можете импортировать блоки согласно [руководству](https://docs.wavesplatform.com/en/waves-node/options-for-getting-actual-blockchain.html).

Если вы хотите стать майнером на stagenet, отправьте [запрос](https://wavesplatform.atlassian.net/servicedesk/customer/portal/11/create/178) чтобы получить токены WAVES для лизинга.

Получить токены для stagenet-аккаунта можно при помощи [Waves Explorer](https://wavesexplorer.com/stagenet/faucet).

Stagenet также доступен на:

* [Waves Explorer](https://wavesexplorer.com/stagenet)
* [Waves IDE](https://ide.wavesplatform.com/). Чтобы использовать IDE со stagenet, в настройках укажите `Custom Nodes` как `https://nodes-stagenet.wavesnodes.com/`, а `Network byte` как `S`.
* [Waves Keeper](https://wavesplatform.com/technology/keeper). Чтобы использовать Waves Keeper со stagenet, в настройках укажите `Node address` как `https://nodes-stagenet.wavesnodes.com/` и `Matcher address` как `https://matcher-stagenet.wavesplatform.com`.

Если у вас остались вопросы по stagenet, вы можете задать их в Discord на [канале stagenet](https://discordapp.com/channels/420933539375087617/615843628618612746).
