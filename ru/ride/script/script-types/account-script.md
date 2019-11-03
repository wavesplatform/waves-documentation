# Скрипт аккаунта

**Скрипт аккаунта** — [скрипт](/ride/script.md), у которого есть следующие [директивы](/ride/script/directives.md):

``` ride
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

[Тело](/ride/script/script-body.md) скрипта аккаунта — [выражение](/ride/base-concepts/expression.md) логического типа.

## Прикрепление скрипта аккаунта

Скрипт аккаунта прикрепляется к [аккаунту](/blockchain/account.md) с помощью [транзакции установки скрипта](/blockchain/transaction-type/set-script-transaction.md).

Аккаунт с прикрепленным к нему скриптом аккаунта называется [смарт-аккаунтом](/blockchain/account/smart-account.md).

К аккаунту можно прикрепить только один скрипт.
