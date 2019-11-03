# Транзакция данных оракула Token Rating

Раз в сутки [оракул](/waves-oracles/oracle.md) [Token Rating](https://oracles.wavesexplorer.com/oracle/3P2eDV4pWJGmPjLGLrW4dsMA53te4gzkwnH) отправляет в блокчейн [транзакцию данных](/blockchain/transaction-type/data-transaction.md) с [рейтингами и оценками](/waves-token-rating/rating-formula.md) токенов.

Транзакция данных содержит информацию о токенах, которые за прошедшие 24 часа были оценены.

Одна транзакция содержит информацию не более чем о 25 токенах — если оцененных токенов будет больше, то будет отправлено несколько транзакций.

Пример [массива данных](/blockchain/transaction-type/data-transaction.md) такой транзакции:

``` js
"data": [
  {
    "key": "assetRating_BsL9uRX4bucKcSY7rfUPhqKjXiWomUQTGFGhodNySACb_1"
    "type": "integer",
    "value": 43,
  },
  {
    "type": "integer",
    "value": 28343,
    "key": "assetWeight_BsL9uRX4bucKcSY7rfUPhqKjXiWomUQTGFGhodNySACb"
  },
  {
    "type": "integer",
    "value": 12,
    "key": "assetVotes_BsL9uRX4bucKcSY7rfUPhqKjXiWomUQTGFGhodNySACb"
  },
  {
    "key": "scoreBoard_BsL9uRX4bucKcSY7rfUPhqKjXiWomUQTGFGhodNySACb"
    "type": "string",
    "value": "{\"1\":{\"votes\":0,\"tokens\":0},\"2\":{\"votes\":1,\"tokens\":322},\"3\":{\"votes\":0,\"tokens\":0},\"4\":{\"votes\":0,\"tokens\":0},\"5\":{\"votes\":1,\"tokens\":1120}}",
  },
  ...
  {
      "type": "integer",
      "value": 45,
      "key": "tickerRating_1"
  },
  {
      "type": "integer",
      "value": 10000,
      "key": "tickerWeight"
  },
  {
      "type": "integer",
      "value": 11,
      "key": "tickerVotes"
  }
]
```

Поле `key` формируется с помощью [конкатенации](https://ru.wikipedia.org/wiki/Конкатенация) строки, характеризующей параметр, и строки с ID токена.

| Ключ | Тип | Описание |
| :--- | :--- | :--- |
| assetRating_assetId_1 | Целое число | Рейтинг токена (значение умножено на 10) |
| assetWeight_assetId | Целое число | Вес WCT токена |
| assetVotes_assetId | Целое число | Количество оценок токена |
| scoreBoard_assetId | Строка | Поле value содержит [экранированную](https://ru.wikipedia.org/wiki/Экранирование_символов) строку с оценками |
| tickerRating_1 | Целое число | Сервисный параметр, который отражает значение рейтинга (умноженное на 10), которое должно быть у токена, чтобы его владелец самостоятельно задать ему тикер |
| tickerWeight | Целое число | Сервисный параметр, который отражает значение веса WCT, которое должно быть у токена, чтобы его владелец самостоятельно задать ему тикер |
| tickerVotes | Целое число | Сервисный параметр, который отражает значение количества оценок, которое должно быть у токена, чтобы его владелец самостоятельно задать ему тикер |


## Пример экранированной строки с оценками

Предположим, имеется экранированная строка с оценками:

 ``` js
 "{\"1\":{\"votes\":0,\"tokens\":0},\"2\":{\"votes\":0,\"tokens\":0},\"3\":{\"votes\":3,\"tokens\":545},\"4\":{\"votes\":0,\"tokens\":0},\"5\":{\"votes\":2,\"tokens\":3827}}"
 ```

Разэкранируем данную строку:

``` js
{
  "1": {
    "votes": 0,
    "tokens": 0
  },
  "2": {
    "votes": 0,
    "tokens": 0
  },
  "3": {
    "votes": 3,
    "tokens": 545
  },
  "4": {
    "votes": 0,
    "tokens": 0
  },
  "5": {
    "votes": 2,
    "tokens": 3827
  }
```

Из строки следует, что никто не оценил токен одной, двумя или четырьмя звездами.

Три пользователя оценили токен тремя звездами. Сумма [весов W<sub>n</sub>](/waves-token-rating/rating-formula.md) этих оценок равна 545.

Два пользователя оценили токен пятью звездами. Сумма весов Wn этих оценок равна 3827.
