# ScriptResult

Структура результата выполнения вызываемой функции.

## Конструктор

``` ride
ScriptResult(writeSet: WriteSet, transferSet: TransferSet)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | writeSet | [WriteSet](/ride/structures/common-structures/write-set.md) | Список записей [хранилища данных аккаунта](/blockchain/account/account-data-storage.md) |
| 2 | transferSet | [TransferSet](/ride/structures/common-structures/transfer-set.md) | Список переводов токенов |
