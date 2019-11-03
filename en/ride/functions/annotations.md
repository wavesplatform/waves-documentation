# Annotations

An **annotation** is a form of metadata that is added to a [function](/ride/functions.md) of a [dApp script](/ride/script/script-types/dapp-script.md).

At the present moment, there are two annotations: `@Callable` and `@Verifier`.

## @Callable(inv: [Invocation](/ride/structures/common-structures.md#invocation))

Annotation of a [callable function](/ride/functions/callable-function.md).

Variable `inv` contains information about the transaction that invoked the function of a [dApp](/blockchain/account/dapp.md).

## @Verifier(tx: Transaction|[Order](/ride/structures/common-structures.md#order))

Annotation of a [verifier function](/ride/functions/verifier-function.md).

Variable `tx` contains information about the transaction or the order that was sent.
