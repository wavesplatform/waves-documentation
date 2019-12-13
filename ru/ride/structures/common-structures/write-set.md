# WriteSet (доступно в Стандартной библиотеке версии 3)

> [!ВНИМАНИЕ]
> Структура WriteSet не входит в [Стандартную библиотеку](/ride/script/standard-library.md) версии 4. Используйте `BinaryEntry`, `BooleanEntry`, `IntEntry` и `StringEntry` в `ScriptResult`.

Структура списка записей [хранилища данных аккаунта](/blockchain/account/account-data-storage.md).

## Конструктор

``` ride
WriteSet(data: List[DataEntry])
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | data | [List](/ride/data-types/list.md)[[DataEntry](/ride/structures/common-structures/data-entry.md)] | Список записей хранилища данных аккаунта |
