# Account script

An **account script** is a [script](/ride/script.md) that has the following [directives](/ride/script/directives.md):

``` ride
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

The [body](/ride/script/script-body.md) of the account script is an [expression](/ride/base-concepts/expression.md) of the boolean type.

## Attaching account script

An account script is attached to the [account](/blockchain/account.md) with a [set script transaction](/blockchain/transaction-type/set-script-transaction.md).

An account with the account script attached to it is called a [smart account](/blockchain/account/smart-account.md).

Only one script can be attached to an account.
