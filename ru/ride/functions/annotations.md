# Аннотации

**Аннотация** — форма метаданных, которая добавляется к [функции](/ride/functions.md) [dApp-скрипта](/ride/script/script-types/dapp-script.md).

В настоящее время существуют две аннотации: `@Callable` и `@Verifier`.

Аннотированная функция не может быть вызвана внутри dApp-скрипта.

## @Callable(inv: [Invocation](/ride/structures/common-structures.md#invocation))

Аннотация [вызываемой функции](/ride/functions/callable-function.md).

Переменная `inv` содержит информацию о транзакции, которая вызвала функцию [dApp](/blockchain/account/dapp.md).

## @Verifier(tx: Transaction|[Order](/ride/structures/common-structures.md#order))

Аннотация [функции-верификатора](/ride/functions/verifier-function.md).

Переменная `tx` содержит информацию об отправляемой транзакции или ордере.
