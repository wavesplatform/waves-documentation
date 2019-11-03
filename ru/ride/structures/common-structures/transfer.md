# Transfer

Структура перевода [токенов](/blockchain/token.md) транзакции массового перевода.

## Конструктор

``` ride
Transfer(recipient: Address|Alias, amount: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ride/structures/common-structures/address.md)&#124;[Alias](/ride/structures/common-structures/alias.md) | Адрес получателя |
| 2 | amount | [Int](/ride/data-types/int.md) | Количество токенов |
