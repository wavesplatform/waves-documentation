# ScriptResult

> [!WARNING]
> Структура ScriptResult не входит в [Стандартную библиотеку](/ride/script/standard-library.md) версии 4. Используйте List[BinaryEntry|BooleanEntry|IntEntry|StringEntry|ScriptTranfer|Issue|Reissue|Burn] вместо этой структуры.

Структура результата выполнения [вызываемой функции](/ride/functions/callable-function.md).

## Конструктор для стандартной библиотеки версии 3

``` ride
ScriptResult(writeSet: WriteSet, transferSet: TransferSet)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | writeSet | [WriteSet](/ride/structures/common-structures/write-set.md) | Список записей [хранилища данных аккаунта](/blockchain/account/account-data-storage.md) |
| 2 | transferSet | [TransferSet](/ride/structures/common-structures/transfer-set.md) | Список переводов токенов |
