# ScriptTransfer

Структура перевода [токенов](/blockchain/token.md).

### Конструктор

``` ride
ScriptTransfer(recipient: Address|Alias, amount: Int, asset: ByteVector|Unit)
```

### Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ride/structures/common-structures/address.md)&#124;[Alias](/ride/structures/common-structures/alias.md) | [Адрес](/blockchain/account/address.md) или [псевдоним](/blockchain/account/alias.md) получателя токенов |
| 2 | amount | [Int](/ride/data-types/int.md) | Количество токенов |
| 3 | asset | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | ID токена |
