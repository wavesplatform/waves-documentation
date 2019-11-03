# DataEntry

Структура записи [хранилища данных аккаунта](/blockchain/account/account-data-storage.md).

## Конструктор

``` ride
DataEntry(key: String, value: Int|Boolean|ByteVector|String)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ride/data-types/string.md) | Ключ записи |
| 2 | value | [Int](/ride/data-types/int.md)&#124;[Boolean](/ride/data-types/boolean.md)&#124;[ByteVector](/ride/data-types/byte-vector.md)&#124;[String](/ride/data-types/string.md) | Значение записи |
