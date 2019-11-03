# Создание карточки оракула при помощи транзакции данных

## Отправка транзакции данных

Параметры карточки оракула описываются в транзакции данных, и она же служит для создания карточки оракула.

Для того чтобы определить карточку оракула, транзакция данных должна иметь специальный атрибут `wpo_oracle` в массиве data:

```
{
    "key": "wpo_oracle",
    "type": "string",
    "value": "oracle"
}
```

Атрибут `wpo_oracle` отличает транзакции данных, предназначенные для регистрации карточки оракула, от других транзакций данных.

Оракулы, которые регистрируются в тестовой сети, должны иметь атрибут `wpo_testnet`.

Для обеспечения надежности протокола передачи данных между оракулом и пользователями, рекомендуется использовать версионность этого протокола. Для этого в каждой транзакции данных, при помощи которой регистрируется или обновляется карточка оракула, следует указывать параметр «версия».

## Описание транзакции данных

См. [информацию о транзакции данных](/blockchain/transaction-type/data-transaction.md).

## Параметры карточки оракула

### Параметры ключей массива data транзакции данных

| Ключ | Поле в Waves Oracles | Тип | Обязательный | Значение |
| :--- | :--- | :--- | :--- | :--- |
| wpo_oracle |  | Строка | да | Должно быть равно "oracle".<br>Позволяет находить в блокчейне транзакции данных карточек оракула  |
| wpo_testnet |  | Логический тип | да (только в тестовой сети) | Должно быть равно true.<br>Параметр используется только в тестовой сети. |
| wpo_createdate |  | Целое число | да | Временная метка создания первой версии карточки оракула.<br>Равно 0, когда карточка создается впервые |
| wpo_createid |  | Строка | да | Равно "origin", если карточка создается впервые.<br>Если карточка оракула обновляется, в поле записывается ID транзакции, при помощи которой была создана первая версия карточки оракула |
| wpo_addres | Address | Строка | да | Аккаунт, в хранилище данных которого хранится карточка оракула |
| wpo_name | Oracle name | Строка | да | Название оракула |
| wpo_link | Link | Строка | нет | Ссылка на источник данных |
| wpo_protocol | Category | Целое число | да | [Код протокола](/waves-oracles/create-an-oracle-card-with-a-data-transaction.md#codes) |
| wpo_status | Status | Целое число | да | Текущий статус оракула. Задается целым числом:<br>3 — archive<br>2 — development<br>1 — production<br>0 — test |
| wpo_description | About | Строка | нет | Данные поля About |
| wpo_frequency | Update frequency | Строка | нет | Данные поля Update frequency |
| wpo_revisions | Summary of Changes from Previous Version | Строка | нет | Данные поля Summary of Changes from Previous Version |
| wpo_specifation | Specification | Массив байтов | нет | [Спецификация оракула](/waves-oracles/create-an-oracle-card-with-a-data-transaction.md#specification) |
| wpo_example | Example | Массив байтов | нет | [Пример формата транзакции оракула](/waves-oracles/create-an-oracle-card-with-a-data-transaction.md#example) |
| wpo_updatedate |  | Целое число | да | Временная метка обновления карточки оракула.<br>Равно 0, если карточка создается впервые. |

### Ключ со спецификацией оракула <a id="specification"></a>

Каждый параметр спецификации оракула состоит из четырех атрибутов:

| Атрибут | Описание |
| :--- | :--- |
| Name | Название параметра |
| Type | 1 — строка<br>2 — целое число<br>3 — логическое значение<br>4 — массив байтов |
| Required | 1 — да<br>0 — нет |
| Description | Описание параметра |

### Пример

Приведем пример оракула, который передает параметры `version`, `weather`, `temperature`.

Параметры `version` и `weather` являются обязательными. JSON, описывающий спецификацию такого оракула, будет выглядеть следующим образом:

```
[
    {
        "name": "version",
        "type": 1,
        "required": 1,
        "description": "current version of protocol"
    },
    {
        "name": "weather",
        "type": 1,
        "required": 1,
        "description": "weather data"
    },
    {
        "name": "temperature",
        "type": 2,
        "required": 0,
        "description": "сelsius"
    }
]
```

Ключ "wpo_specification" представляет собой закодированные в base64 упомянутые выше параметры.

```
{
    "key": "wpo_specifation",
    "type": "string",
    "value": "base64:Clt7CiJuYW1lIjogInZlcnNpb24iLAoidHlwZSI6IDEsCiJyZXF1aXJlZCI6IDEsCiJkZXNjcmlwdGlvbiI6ICJjdXJyZW50IHZlcnNpb24gb2YgcHJvdG9jb2wiCn0sIHsKIm5hbWUiOiAid2VhdGhlciIsCiJ0eXBlIjogMSwKInJlcXVpcmVkIjogMSwKImRlc2NyaXB0aW9uIjogIndlYXRoZXIgZGF0YSIKfSwgewoibmFtZSI6ICJ0ZW1wZXJhdHVyZSIsCiJ0eXBlIjogMiwKInJlcXVpcmVkIjogMCwKImRlc2NyaXB0aW9uIjogItGBZWxzaXVzIgp9Cl0="
}
```

### Ключ с примером формата транзакции оракула <a id="example"></a>

Значение ключа "wpo_example" представляет собой строку base64, содержащую пример формата транзакции оракула.

JSON с примером использования оракула:

```
{
    "version": "1.00.95-release",
    "weather": "sun",
    "temperature": 23
}
```

Ключ "wpo_example" представляет собой закодированный в base64 упомянутый выше пример.

```
{
    "key": "wpo_example",
    "type": "string",
    "value": "base64:ewoidmVyc2lvbiI6ICIxLjAwLjk1LXJlbGVhc2UiLAoid2VhdGhlciI6ICJzdW4iLAoidGVtcGVyYXR1cmUiOiAyMwp9"
}
```

### Пример транзакции данных, используемой для создания карточки оракула

```
{
    "type": 12,
    "version": 1,
    "senderPublicKey": "442hJo5S9U2jsdTvJ4v5zacH324XMnq3qUWCPmbkBWbZ",
    "fee": 300000,
    "timestamp": 1547218635000,
    "data": [{
            "key": "wpo_oracle",
            "type": "string",
            "value": "oracle"
        }, {
            "key": "wpo_createdate",
            "type": "integer",
            "value": 1548865781425
        }, {
            "key": "wpo_createid",
            "type": "string",
            "value": "CoQ79XjwgBiYxpzTVM2RQV1cFWeujF3JdwtAzdL6jx2r"
        }, {
            "key": "wpo_address",
            "type": "string",
            "value": "3Mso8hGr8dv4DK4nEY8fJykGpQkxK7PaZvs"
        }, {
            "key": "wpo_name",
            "type": "string",
            "value": "Example Stocks Oracle"
        }, {
            "key": "wpo_link",
            "type": "string",
            "value": "example.com"
        }, {
            "key": "wpo_protocol",
            "type": "integer",
            "value": 301
        }, {
            "key": "wpo_status",
            "type": "integer",
            "value": 1
        }, {
            "key": "wpo_description",
            "type": "string",
            "value": "An example of a public oracle containing information on various financial instruments in accordance with the requirements of the WPO002 protocol standard, such as stocks, commodities, fiat and cryptocurrencies."
        }, {
            "key": "wpo_frequency",
            "type": "string",
            "value": "Information is updated every 60 minutes."
        }, {
            "key": "wpo_revisions",
            "type": "string",
            "value": "Summary of revisions made"
        }, {
            "key": "wpo_specifation",
            "type": "string",
            "value": "base64:Clt7CiJuYW1lIjogInZlcnNpb24iLAoidHlwZSI6IDEsCiJyZXF1aXJlZCI6IDEsCiJkZXNjcmlwdGlvbiI6ICJjdXJyZW50IHZlcnNpb24gb2YgcHJvdG9jb2wiCn0sIHsKIm5hbWUiOiAid2VhdGhlciIsCiJ0eXBlIjogMSwKInJlcXVpcmVkIjogMSwKImRlc2NyaXB0aW9uIjogIndlYXRoZXIgZGF0YSIKfSwgewoibmFtZSI6ICJ0ZW1wZXJhdHVyZSIsCiJ0eXBlIjogMiwKInJlcXVpcmVkIjogMCwKImRlc2NyaXB0aW9uIjogItGBZWxzaXVzIgp9Cl0="
        }, {
            "key": "wpo_example",
            "type": "string",
            "value": "base64:ewoidmVyc2lvbiI6ICIxLjAwLjk1LXJlbGVhc2UiLAoid2VhdGhlciI6ICJzdW4iLAoidGVtcGVyYXR1cmUiOiAyMwp9"
        }, {
            "key": "wpo_updatedate",
            "type": "integer",
            "value": 1548866781425
        }
    ]
}
```

## Коды протокола оракула <a id="codes"></a>

| Код категории | Значение кода | Описание |
| :--- | :--- | :--- |
| 100 | 100 | Algorithms & calculations (random value for example) |
|  | 101 | Pseudorandom algorithms |
| 200 | 200 | Offline data source (IoT, sensors, other hardware) |
|  | 201 | Smart trackers (smartphone, watch, collar, bracelet, etc.) |
|  | 202 | Transfer, logistics, connected car, smart car |
|  | 203 | Smart home |
| 300 | 300 | Online data source (rates, market data, weather, etc.) |
|  | 301 | Market data & exchange rates |
|  | 302 | Weather data & forecasts |
|  | 303 | Sport & bets |
|  | 304 | Other blockchains |
|  | 305 | Time, date, calendar |
| 400 | 400 | Data management |
|  | 401 | Rights |
|  | 402 | Media & content |
|  | 403 | Document flow, work (plans, activity records, etc.) |
| 500 | 500 | dApps |
|  | 501 | Identification |
|  | 502 | Games |
