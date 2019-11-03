# Функция-верификатор

**Функция-верификатор** — [функция](/ride/functions.md) [dApp-скрипта](/ride/script/script-types/dapp-script.md) с [аннотацией](/ride/functions/annotations.md) `@Verifier`.

Функция-верификатор отвечает за [валидацию транзакций](/blockchain/transaction/transaction-validation.md) и ордеров, которые отправляются с [dApp](/blockchain/account/dapp.md).

У dApp-скрипта может быть только _одна_ функция-верификатор.

Функция-верификатор не имеет аргументов.

## Пример

``` ride
@Verifier(tx)
func verify() = {
    match tx {
        case _: Order|SetScriptTransaction =>
            sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey)
        case _ => false
    }
}
```
