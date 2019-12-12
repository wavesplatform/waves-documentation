# Directives

A **directive** is an instruction that sets the compilation mode of the [script](/ride/script.md).

``` ride
{-# DIRECTIVE_NAME VALUE #-}
```

## Directives list

| # | Directive name | Directive function | Possible values |
| :--- | :--- | :--- | :--- |
| 1 | CONTENT_TYPE | Defines whether the [script body](/ride/script/script-body.md) is an [expression](/ride/base-concepts/expression.md) or a _set_ of [definitions](/ride/base-concepts/definition.md) | `EXPRESSION` — Boolean expression<br>`DAPP` — set of definitions |
| 2 | SCRIPT_TYPE | Defines the [script context](/ride/script/script-context.md) | `ACCOUNT`<br>`ASSET` |
| 3 | STDLIB_VERSION | Sets the version of the [Standard Library](/ride/script/standard-library.md) | `4` (available on [Stagenet](/blockchain/blockchain-network/stage-network.md) only) <br>`3`<br>`2`<br>`1` |
