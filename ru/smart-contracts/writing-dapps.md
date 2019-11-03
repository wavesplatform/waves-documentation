# Написание dApps
## Валидация транзакций по умолчанию
После создания акаунта на платформе Waves, каждая транзакция, которая отправляется с этого аккаунта, проходит проверку на валидность. Если транзакция проходит проверку, то она попадает в генерируемый блок блокчейна, если нет — она отбрасывается.

По умолчанию, во время валидации происходит проверка _только _факта принадлежности транзакции владельцу аккаунта, с которого транзакция отправляется. Для этого бинарные данные транзакции, открытый ключ владельца аккаунта, а также цифровая подпись транзакции прогоняются через специальную функцию `sigVerify`. Если функция `sigVerify` возвращет `true` — транзакция считается валидной, иначе — невалидной.

## Валидация транзакций скриптом аккаунта
Если в алгоритме валидации необходимо прописать более сложную логику, чем просто проверку принадлежности транзакции владельцу аккаунта, то для этого на языке RIDE пишут специальный скрипт, который эту логику содержит. Данный скрипт привязывается к аккаунту. Такой скрипт называется скриптом аккаунта. После привязки все транзакции, отправляемые с данного аккаунта, валидируются **скриптом аккаунта**.

## IDE для написания скрипта аккаунта
В качестве IDE для написания скриптов на языке RIDE мы используем [Waves IDE](http://ide.wavesplatform.com). Чтобы создать новый скрипт, кликнем на кнопку **New** и выберем пункт **Account Script**.
![](../../assets/1.png)

Откроется новая вкладка, в которой мы сможем писать наш RIDE-скрипт.
![](../../assets/2.png)

## Работа с объектом транзакции внутри скрипта аккаунта
У скрипта аккаунта есть контекст, содержащий некоторые полезные переменные. Одной из таких переменных является переменная `tx`, которая содержит в себе информацию о валидируемой скриптом транзакции. В блокчейне Waves существует  [несколько типов транзакций](/waves-node/node-api/transactions.md). Внутри скрипта аккаунта мы должны иметь возможность определять тип транзакции,  с которой мы имеем дело. Приведение типов осуществляется с помощью оператора `match`:
```
let accountPubKey = base58'9xPqZ7fhgKxRsgkbahawNMsgHhM9TMYa3SXwNmn3bvyS'
 
match (tx)
{
    case t: TransferTransaction =>
        sigVerify(tx.proofs[0], tx.bodyBytes, accountPubKey)
        &&
        t.amount < 100
 
    case t: IssueTransaction =>
        sigVerify(tx.proofs[0], tx.bodyBytes, accountPubKey)
 
    case _ =>
        false
}
```
В примере выше мы говорим, что если отправляемая с аккаунта транзакция является трансфер-транзакцией, и сумма перевода составляет менее 100 токенов, то мы разрешаем такую транзакцию. Также мы разрешаем любую транзакцию типа Issue Transaction. Все остальные типы транзакций отправлять с аккаунта мы запрещаем.

## Структура децентрализованного приложения
Децентрализованное приложение состоит из следующих элементов:
- Директивы
- Контекст скрипта
- Объявление вызываемых функций
- Объявление функции валидации

Порядок, в котором элементы определены внутри скрипта приложения важен — он должен быть такой, как в списке выше.

## Директивы
Т.к. компилятор работает с любым видом скриптов нашей системы, ему необходима дополнительная информация для работы. Поэтому во всех скриптах желательно использовать директивы, иначе будут использованы значения по умолчанию, которые могут не подходить в конкретном случае.

Для dApp набор директив следующий:
```
{-# STDLIB_VERSION 3 #-}
{-# SCRIPT_TYPE ACCOUNT #-}
{-# CONTENT_TYPE DAPP #-}
```
STDLIB_VERSION 3 — версия библиотеки стандартных функций.

SCRIPT_TYPE ACCOUNT — директива указывающая на то, что скрипт привязан к аккаунту (а не к ассету).

CONTENT_TYPE DAPP — директива, указывающая, что тип данного скрипта это dApp.

## Контекст скрипта
Контекст скрипта — это контекст, в котором могут быть определены [неизменяемые переменные](/smart-contracts/ride-language/immutable-variables-and-the-let-keyword.md), и определены функции, которые будут доступны в пределах всего dApp.
```
let someConstant = 42
func doSomething() = {
    1+1
}
```
## Объявление вызываемых функций
Здесь мы можем объявлять функции, которые будут вызываться с помощью InvokeScript-транзакции. Такие функции помечаются аннотацией `@Callable(contextObj)`, где `contextObj` — произвольное имя объекта контекста. Объект контекста содержит поля:

- `caller` — адрес аккаунта, который вызвал данную функцию.
- `callerPublicKey` — открытый ключ аккаунта, который вызвал данную функцию.
- `payment` — платёж, который приложен к данному вызову функции. Платёж может быть пустым (UNIT).

Вызываемая функция может использовать функции и значения из контекста скрипта (см. выше) или из своего контекста (т.е. не может использовать другие вызываемые функции и функцию валидации).
```
@Callable(contextObj)
func foo() = {
   if (contextObj.caller == this)
   then
       ScriptResult(
            WriteSet([DataEntry("someDataKey", 42)]),
            TransferSet([ScriptTransfer(contextObj.caller, 100500, unit)])
        )
   else
       throw("Only owner can use this function.")
}
```
Ограничения для вызываемых функций:

- Имя функции не может превышать 255 символов.
- Каждая из функций может принимать не больше 22 аргументов.
- Допустимые типы аргументов: Int, String, Boolean, ByteVector

Возможные результаты выполнения (одно значение из списка): 

- ScriptResult
- WriteSet
- TransferSet

**WriteSet** — в результате записывает список DataEntry (ключ, значение) в аккаунт. 

Ограничения:

- Максимальная длина списка: 100.
- Максимальный размер одного ключа: 100 символов. 


**TransferSet** — в результате создаёт список платежей ScriptTransfer, которые будут применены после вызова функции.

Ограничения:

- Максимальная длина списка: 10.

**ScriptResult** — содержит WriteSet и TransferSet.

```
@Callable(contextObj)
 
func foo() = {
    val a = 0
 
    if (a == 1)
    then ScriptResult(
            WriteSet([DataEntry("someDataKey", 42)]),
            TransferSet([ScriptTransfer(contextObj.caller, 100500, unit)])
        )
 
    else if (a == 2)
    then WriteSet([DataEntry("someDataKey", 42)]),
    else
        TransferSet([ScriptTransfer(contextObj.caller, 100500, unit)])
 
}
```

## Объявление функции валидации
Функция валидации в dApp играет роль скрипта аккаунта — она валидирует все исходящие из данного аккаунта транзакции.

Такая функция помечается аннотацией `@Verifier(tx)`, где `tx` — текущая транзакция, которую в данный момент функция проверяет. Доступные поля транзакции по её типу можно посмотреть на странице [Functions and Standard Libary](/en/smart-contracts/ride-language/standard-library.md).

Возможные результаты выполнения:

- true
- false
- ошибка

Если в dApp нет функции валидации, то выполняется алгоритм валидации по умолчанию (с помощью функции `sigVerify`).



Пример функции, разрешающей только Transfer-транзакции (любая другая транзакция с данного аккаунта отправлена не будет):
```
@Verifier(tx)
func verify() = {
    match tx {
        case ttx:TransferTransaction => sigVerify(ttx.bodyBytes, ttx.proofs[0], ttx.senderPublicKey)
        case _ => false
    }
}
```
## Параметры функции InvokeScriptTransaction
| Имя параметра | Тип параметра | Описание  |
|---|---|---|
|  type  |Int   |  тип транзакции (16 для InvokeScript) |
| dApp   | Address  | адрес, по которому вызывается функция  |
|  payment  | OPTION[AttachedPayment]  | отправляемый платеж (размер, ассет) |
|  fee  |  Int | размер вознаграждения |
| feeAssetId | OPTION[ByteVector] | идентификатор ассета вознаграждения (null для WAVES)|
|  call: <br /> - function <br /> -args | <br /> String <br />LIST[UNION(Boolean,ByteVector,Int,String)]  | <br /> имя вызываемой функции <br /> список передаваемых аргументов |
|  id  | ByteVector  |  идентификатор транзакции |
|  timestamp  |  Int | время выполнения транзакции  |
|  version  | Int  |  версия транзакции (на текущий момент 1) |
|  sender  |  Address |  адрес вызывающего аккаунта |
|  senderPublicKey  | ByteVector  |  открытый ключ вызывающего аккаунта |
| proofs   | LIST[ByteVector]  |  набор подписей, подтверждающих подлинность транзакции |
|  chainId |  Byte | идентификатор сети блокчейна <br /> "T" — тестовая <br /> "W" — боевая  |

## JSON InvokeScript-транзакции
```
{
 
  "type": 16,
  "version": 1,
  "senderPublicKey": "2GEvUnpNpve2rSAs51c2HMTkaCYW9QRgwR16Z2HGJZgC",
  "dApp": "3FYR1f5YydHXF8dtfRJRyX3PoDCoT7a36Kq",
  "call": {
    "function": "deposit",
    "args": [{type:"integer", value: 600000000}]
  },
  "payment": [
    {
      "amount": 200000000,
      "assetId": null
    }
  ],
  "fee": 1000000,
  "feeAssetId": null,
  "timestamp": 1555073997308,
  "chainId": 68,
  "proofs": [
      "42Tf6VSVi3Cq6yHK1ENcVtyQbt9Ap8fcu57gYoZWChJTPPz52qRDM5NThuhFDVB4qE2gPZonuvjEJVtWHVYyNvJC"
  ],
  "id": "2fcMC9ihuLAcGNsbiSLDgz8dekq2JkrtjihroUiyNYCp"
}
```

## Пример децентрализованного приложения
```
# Директивы
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
 
# Блок Контекста скрипта
# ПУСТОЙ
 
# Вызываемая функция — принимает платежи с других аккаунтов и записывает на их счёт (в данные аккаунта, на котором установлен DApp)
@Callable(i)        # Объект контекста с именем i
func deposit() = {
   let pmt = extract(i.payment)
   if (isDefined(pmt.assetId)) then throw("can hodl waves only at the moment")
   else {
        let currentKey = toBase58String(i.caller.bytes)
        let currentAmount = match getInteger(this, currentKey) {
            case a:Int => a
            case _ => 0
        }
        let newAmount = currentAmount + pmt.amount
        WriteSet([DataEntry(currentKey, newAmount)])
   }
}
 
# Вызываемая функция - снимает со счёта валюту и переводит владельцу, если у нега на счету что-то есть
@Callable(i)                    # Объект контекста с именем i
func withdraw(amount: Int) = {
        let currentKey = toBase58String(i.caller.bytes)
        let currentAmount = match getInteger(this, currentKey) {
            case a:Int => a
            case _ => 0
        }
        let newAmount = currentAmount - amount
     if (amount < 0)
            then throw("Can't withdraw negative amount")
    else if (newAmount < 0)
            then throw("Not enough balance")
            else ScriptResult(
                    WriteSet([DataEntry(currentKey, newAmount)]),
                    TransferSet([ScriptTransfer(i.caller, amount, unit)])
                )
    }
 
 
# Функция валидации исходящих транзакций — данная реализация полностью соответствует реализации по умолчанию
@Verifier(tx)
func verify() = {
    sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey)
}
```


