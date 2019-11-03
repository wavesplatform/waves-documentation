# Директивы

**Директива** — инструкция, которая задает режим компиляции [скрипта](/ride/script.md).

``` ride
{-# НАЗВАНИЕ_ДИРЕКТИВЫ ЗНАЧЕНИЕ #-}
```

## Список директив

| № | Название директивы | Функция директивы | Возможные значения |
| :--- | :--- | :--- | :--- |
| 1 | CONTENT_TYPE | Определяет, чем является [тело скрипта](/ride/script/script-body.md) — [выражением](/ride/base-concepts/expression.md) или _набором_ [определений](/ride/base-concepts/definition.md) | `EXPRESSION` — выражение<br>`DAPP` — набор определений |
| 2 | SCRIPT_TYPE | Определяет [контекст скрипта](/ride/script/script-context.md) | `ACCOUNT`<br>`ASSET` |
| 3 | STDLIB_VERSION | Задает версию [Стандартной библиотеки](/ride/script/standard-library.md) | `3`<br>`2`<br>`1` |
