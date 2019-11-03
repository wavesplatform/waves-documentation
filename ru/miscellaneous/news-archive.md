# Архив новостей

## Августовские статьи

### Начало работы

* [Руководство пользователя](getting-started/getting-started-for-users.md)
* [Руководство разработчика](getting-started/getting-started-for-developers.md)

### RIDE

* Встроенные функции
  * [Функции верификации](ride/functions/built-in-functions/verification-functions.md)
  * [Функции декодирования](ride/functions/built-in-functions/decoding-functions.md)
  * [Функции исключения](ride/functions/built-in-functions/exception-functions.md)
  * [Функции кодирования](ride/functions/built-in-functions/encoding-functions.md)
  * [Функции конвертации](ride/functions/built-in-functions/converting-functions.md)
  * [Функции массива байтов](ride/functions/built-in-functions/byte-array-functions.md)
  * [Функции хеширования](ride/functions/built-in-functions/hashing-functions.md)
* [Выражение](ride/base-concepts/expression.md)
* [Директивы](ride/script/directives.md)
* [Константы](ride/constants.md)
* [Операторы](ride/operators.md)
* [Определение](ride/base-concepts/definition.md)
* [Переменные](ride/variables.md)
  * [Встроенные переменные](ride/variables/built-in-variables.md)
* [Функции](ride/functions.md) — [<span style="color:green">обновлено</span>](https://github.com/wavesplatform/waves-documentation/pull/1465/files)
* Структуры
  * Общие структуры
    * [Alias](ride/structures/common-structures/alias.md)
  * Структуры транзакций
    * [DataTransaction](ride/structures/transaction-structures/data-transaction.md)
    * [ExchangeTransaction](ride/structures/transaction-structures/exchange-transaction.md)
    * [GenesisTransaction](ride/structures/transaction-structures/genesis-transaction.md)
    * [InvokeScriptTransaction](ride/structures/transaction-structures/invoke-script-transaction.md)
    * [IssueTransaction](ride/structures/transaction-structures/issue-transaction.md)
    * [LeaseTransaction](ride/structures/transaction-structures/lease-transaction.md)
    * [LeaseCancelTransaction](ride/structures/transaction-structures/lease-cancel-transaction.md)
    * [MassTransferTransaction](ride/structures/transaction-structures/mass-transfer-transaction.md)
    * [ReissueTransaction](ride/structures/transaction-structures/reissue-transaction.md)
    * [SetAssetScriptTransaction](ride/structures/transaction-structures/set-asset-script-transaction.md)
    * [SetScriptTransaction](ride/structures/transaction-structures/set-script-transaction.md)
    * [TransferTransaction](ride/structures/transaction-structures/transfer-transaction.md)

### Блокчейн

* Бинарный формат
  * [Бинарный формат адреса](blockchain/binary-format/address-binary-format.md)
  * [Бинарный формат псевдонима](blockchain/binary-format/alias-binary-format.md)
* Блок
  * [Временная метка блока](blockchain/block/block-timestamp.md)
* Блокчейн
  * [Типы данных блокчейна](blockchain/blockchain/blockchain-data-types.md)
* Нода
  * [Валидирующая нода](blockchain/node/validating-node.md)
* Сеть блокчейна
  * [Байт сети](blockchain/blockchain-network/chain-id.md)
* [Оракул](blockchain/oracle.md)
* Тип транзакции
  * [Транзакция данных](blockchain/transaction-type/data-transaction.md) — [<span style="color:green">обновлено</span>](https://github.com/wavesplatform/waves-documentation/pull/1456/files)
* Токен  
  * [ID токена](blockchain/token/token-id.md)
* Транзакция
  * [ID транзакции](blockchain/transaction/transaction-id.md)
  * [Версия транзакции](blockchain/transaction/transaction-version.md)
  * [Временная метка транзакции](blockchain/transaction/transaction-timestamp.md)

### Oracles

* [Как создать оракул](waves-oracles/how-to-create-an-oracle.md)
* [Карточка оракула](waves-oracles/oracle-card.md)
* [О Waves Oracles](waves-oracles/about-waves-oracles.md)
* [Обновление карточки оракула](waves-oracles/updating-oracle-card.md)
* [Создание карточки оракула при помощи Waves Oracle](waves-oracles/create-an-oracle-card-with-waves-oracle.md)
* [Создание карточки оракула при помощи транзакции данных](waves-oracles/create-an-oracle-card-with-a-data-transaction.md)

## Waves Node

* [Запуск Waves Node в Яндекс.Облаке](waves-node/running-waves-node-in-yandex-cloud.md)
* [Установка gRPC Server](waves-node/extensions/grpc-server/grpc-server-installation.md)
* [Предварительные требования](waves-node/prerequisites.md)
  * [Требования к аппаратному обеспечению](waves-node/prerequisites/hardware-requirements.md)

## Июльские статьи

### Блокчейн

* [Байты тела транзакции](blockchain/transaction/transaction-body-bytes.md)
* [Бинарный формат](blockchain/binary-format.md)
* [Бинарный формат транзакции](blockchain/binary-format/transaction-binary-format.md)
* Блок
  * [Блок генезиса](blockchain/block/genesis-block.md)
  * [Генерация блока](blockchain/block/block-generation.md)
    * [Базовая цель](blockchain/block/block-generation/base-target.md)
  * [Подпись блока](blockchain/block/block-signature.md)
* [Комиссия матчера](blockchain/matcher-fee.md)
* [Лизинг](blockchain/leasing.md)
* [Майнинг](blockchain/mining.md)
  * [Майнер](blockchain/mining/miner.md)
  * [Майнящий аккаунт](blockchain/mining/mining-account.md)
* [Ордер](blockchain/order.md)
* [Сеть блокчейна](blockchain/blockchain-network.md)
* Тип транзакции
  * [Транзакция вызова скрипта](blockchain/transaction-type/invoke-script-transaction.md)
  * [Транзакция выпуска](blockchain/transaction-type/issue-transaction.md)
  * [Транзакция довыпуска](blockchain/transaction-type/reissue-transaction.md)
  * [Транзакция закрытия лизинга](blockchain/transaction-type/lease-cancel-transaction.md)
  * [Транзакция массового перевода](blockchain/transaction-type/mass-transfer-transaction.md)
  * [Транзакция обмена](blockchain/transaction-type/exchange-transaction.md)
  * [Транзакция перевода](blockchain/transaction-type/transfer-transaction.md)
  * [Транзакция установки скрипта](blockchain/transaction-type/set-script-transaction.md)
  * [Транзакция установки скрипта ассета](blockchain/transaction-type/set-asset-script-transaction.md)
* Узел
  * [Майнящая нода](blockchain/node/mining-node.md)

### Waves Node

* Расширения
  * [gRPC Server](waves-node/extensions/grpc-server.md)
    * [Установка gRPC Server](waves-node/extensions/grpc-server/grpc-server-installation.md)
  * [Матчер](waves-node/extensions/matcher.md)

### RIDE

* [Аннотации](ride/functions/annotations.md)
* Структуры
  * [Общие структуры](ride/structures/common-structures.md)
    * [Address](ride/structures/common-structures/address.md)
    * [Asset](ride/structures/common-structures/asset.md)
    * [AssetPair](ride/structures/common-structures/asset-pair.md)
    * [AttachedPayment](ride/structures/common-structures/attached-payment.md)
    * [BlockInfo](ride/structures/common-structures/block-info.md)
    * [DataEntry](ride/structures/common-structures/data-entry.md)
    * [Invocation](ride/structures/common-structures/invocation.md)
    * [Order](ride/structures/common-structures/order.md)
    * [ScriptResult](ride/structures/common-structures/script-result.md)
    * [ScriptTransfer](ride/structures/common-structures/script-transfer.md)
    * [Transfer](ride/structures/common-structures/transfer.md)
    * [TransferSet](ride/structures/common-structures/transfer-set.md)
    * [WriteSet](ride/structures/common-structures/write-set.md)
  * [Структуры транзакций](ride/structures/transaction-structures.md)
    * [BurnTransaction](ride/structures/transaction-structures/burn-transaction.md)
    * [CreateAliasTransaction](/ride/structures/transaction-structures/create-alias-transaction.md)
* [Типы данных](/ride/data-types.md)
* Функции
  * [Вызываемая функция](ride/functions/callable-function.md)
  * [Функция-верификатор](ride/functions/verifier-function.md)

##  Июньские статьи

### Блокчейн

* [Аккаунт](/blockchain/account.md)
* [Блок](/blockchain/block.md)
  * [Высота блока](/blockchain/block/block-height.md)
* [Блокчейн](/blockchain/blockchain.md)
* [Высота блокчейна](/blockchain/blockchain/blockchain-height.md)
* Тип транзакции
  * [Транзакция генезиса](/blockchain/transaction-type/genesis-transaction.md)
  * [Транзакция данных](/blockchain/transaction-type/data-transaction.md)
  * [Транзакция лизинга](/blockchain/transaction-type/lease-transaction.md)
* Токен
  * [Не взаимозаменяемый токен](/blockchain/token/non-fungible-token.md)
* [Узел](/blockchain/node.md)

### Waves DEX

* [О Waves DEX](/waves-dex/about-waves-dex.md)

### RIDE

* Базовые понятия
  * [Сложность](/ride/base-concepts/complexity.md)
* Встроенные функции
  * [Математические функции](/ride/functions/built-in-functions/math-functions.md)
  * [Функции блокчейна](/ride/functions/built-in-functions/blockchain-functions.md)
  * [Функции списка](/ride/functions/built-in-functions/list-functions.md)
  * [Функции строки](/ride/functions/built-in-functions/string-functions.md)
  * [Функции хранилища данных аккаунта](/ride/functions/built-in-functions/account-data-storage-functions.md)


### Смарт-контракты (Waves dApps)

* [Простое голосование на блокчейне Waves](/smart-contracts/simple-voting-on-the-waves-blockchain.md)

### Waves Node

* [Расширения](/waves-node/extensions.md)
  * [gRPC Server](/waves-node/extensions/grpc-server.md)
  * [Матчер](/waves-node/extensions/matcher.md)

### Инструменты разработчика

* [REPL](/developer-tools/repl.md)

### Waves Token Rating

* [Интерфейс пользователя](/waves-token-rating/user-interface.md)
* [О Waves Token Rating](/waves-token-rating/about-waves-token-rating.md)
* [Транзакция данных оракула Token Rating](/waves-token-rating/data-transaction-of-the-token-rating-oracle.md)
* [Транзакция данных с оценкой пользователя](/waves-token-rating/data-transaction-with-user-s-rate.md)
* [Формула рейтинга](/waves-token-rating/rating-formula.md)
