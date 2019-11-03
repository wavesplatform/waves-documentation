# Что такое dApp. Чем dApp отличается от смарт-аккаунта

Перед тем как начать знакомство с [dApp](/blockchain/account/dapp.md), рассмотрим функциональность смежных сущностей — [аккаунта](/blockchain/account.md) и [смарт-аккаунта](/blockchain/account/smart-account.md).

Функциональность обычного аккаунта позволяет удостовериться, что выпущенная с него [транзакция](/blockchain/transaction.md) в действительности была отправлена с этого аккаунта.

Смарт-аккаунт, то есть аккаунт с прикрепленным [скриптом аккаунта](/ride/script/script-types/account-script.md), позволяет проверять исходящие транзакции на соответствие условиям, указанным в скрипте. Например, владелец аккаунта может установить правило, согласно которому транзакции могут отправляться с [адреса](/blockchain/account/address.md) только в том случае, если высота блокчейна превышает N. Другой пример — можно разрешить отправку транзакций только определённого типа. Либо вообще отменить какую-либо проверку, установив правило, согласно которому все транзакции, отправляемые с адреса, должны считаться валидными.

Возможности dApp еще шире — он умеет не только валидировать исходящие транзакции, но и позволяет другим аккаунтам вызывать содержащиеся в нем функции. С этой точки зрения dApp представляет собой настоящее приложение, работающее на блокчейне.

## Предварительные требования для написания dApp

dApp пишутся на языке [Ride](/ride/about-ride.md). Для создания dApp необходим [аккаунт](/blockchain/account.md), на балансе которого должно быть достаточно [WAVES](/blockchain/token/waves.md) для оплаты транзакции установки скрипта (1 WAVES). Чтобы сразу начать писать dApp, воспользуйтесь [Waves IDE](/smart-contracts/tools/waves-ide.md).

## Структура dApp

### Директива

Каждый скрипт Ride должен начинаться с директивы. Рассмотрим пример директивы:

```ride
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

Приведенная директива сообщает компилятору, что

- в скрипте будет использоваться третья версия библиотеки стандартных функций,
- типом данного скрипта является dApp,
- скрипт будет привязан к аккаунту (а не к ассету).

### Контекст скрипта

За директивой следует контекст скрипта. В контексте скрипта объявляются переменные и определяются функции, которые будут доступны в пределах всего dApp. Помимо объявленных разработчиком переменных и функций, контекст скрипта включает [встроенные переменные](/ride/variables/built-in-variables.md) и [встроенные функции](/ride/functions/built-in-functions.md). Разработчик может не объявлять собственные переменные и не определять собственные функции — на наличие встроенных переменных и функций это не повлияет.

### Объявление вызываемых функций

Как мы уже говорили, dApp позволяет вызывать свои функции другим аккаунтам. Эти функции помечаются [аннотацией](/ride/functions/annotations.md) `@Callable(invocation)`, где `invocation` — произвольный объект контекста скрипта.

Ниже приведен пример вызываемой функции, которая записывает в [хранилище данных аккаунта](/blockchain/account/account-data-storage.md) значение `42` по ключу `someDataKey`, если её вызывает владелец аккаунта. Если это пытается сделать кто-то другой, функция кидает исключение. Транзакция в этом случае не будет валидной и не попадет в блокчейн:

```ride
@Callable(invocation)
func foo() = {
   if (invocation.caller == this)
   then
       ScriptResult(
            WriteSet([DataEntry("someDataKey", 42)]),
            TransferSet([ScriptTransfer(invocation.caller, 100500, unit)])
        )
   else
       throw("Only owner can use this function.")
}
```

### Объявление функции валидации

Функция валидации делает то же самое, что и смарт-аккаунт, то есть валидирует исходящие транзакции. Эта функция помечается аннотацией `@Verifier(tx)`, где `tx` — текущая транзакция, которую в данный момент проверяет функция. Возможными результатами выполнения функции валидации являются:

- `true` (транзакция разрешена),
- `false` (транзакция запрещена),
- ошибка.

Если в dApp нет функции валидации, то выполняется валидация по умолчанию (то есть проверка того, что транзакция действительно подписана этим аккаунтом).

dApp с приведённой ниже функцией валидации будет разрешать только [транзакции перевода](/blockchain/transaction-type/transfer-transaction.md) (отправка транзакций другого типа будет запрещена):

```ride
@Verifier(tx)
func verify() = {
    match tx {
        case ttx:TransferTransaction => sigVerify(ttx.bodyBytes, ttx.proofs[0], ttx.senderPublicKey)
        case _ => false
    }
}
```

## Ограничения dApp

| Ограничение | Максимальное значение |
|---|---|
| Размер скрипта | 32 Кбайт |
| [Complexity](/ride/base-concepts/complexity.md) | 4000 |
| Количество аргументов Callable-функции | 22 |
| Размер имени аннотированной функции | 255 байт |
| Размер WriteSet | 5 Кбайт |
| Количество записей в [WriteSet](/ride/structures/common-structures/write-set.md) | 100 |
| Количество переводов в [TransferSet](/ride/structures/common-structures/transfer-set.md) | 10 |
| Размер значения переменной типа String | 32767 символов |
| Размер значения переменной типа ByteVector | 65536 байт |

Помимо перечисленных ограничений, за каждую транзакцию, отправляемую с dApp, взимается дополнительные 0,004 WAVES. Минимальная плата за большинство транзакций составляет 0,001 WAVES. Таким образом, стоимость отправки каждой из этих транзакций составит для владельца dApp 0,005 WAVES.

## Пример dApp

dApp в приведённом ниже примере позволяет класть WAVES на депозит и забирать их обратно, при этом возможность забрать “чужие” WAVES исключена.

```ride
# Директивы
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
 
# Блок Контекста скрипта
# (Пустой)
 
# Вызываемая функция. Реализует размещение средств на счету
@Callable(i)        # Объект контекста с именем i
func deposit() = {
   let pmt = extract(i.payment)
   if (isDefined(pmt.assetId)) then throw("can hold waves only at the moment")
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
 
# Вызываемая функция. Реализует снятие средств со счёта
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
 
# Функция валидации исходящих транзакций. Дублирует базовую функциональность проверки принадлежности транзакции владельцу аккаунта
@Verifier(tx)
func verify() = {
    sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey)
}
```

## Прикрепление dApp к аккаунту

Чтобы прикрепить dApp к аккаунту, используйте [транзакцию установки скрипта](/blockchain/transaction-type/set-script-transaction.md).
