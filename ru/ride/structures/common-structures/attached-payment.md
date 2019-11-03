# AttachedPayment

Структура платежа транзакции вызова скрипта.

## Конструктор

``` ride
AttachedPayment(assetId: ByteVector|Unit, amount: Int)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | ID [токена](/blockchain/token.md) |
| 2 | amount | [Int](/ride/data-types/int.md) | Сумма платежа |
