# Функции исключения

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [throw()](#throw) | Выбрасывает исключение | 1 |
| 2 | [throw(String)](#throw-string) | Выбрасывает исключение с сообщением | 1 |

## throw() <a id="throw"></a>

Выбрасывает исключение.

``` ride
throw()
```

### Пример

``` ride
let amount = match getInteger(this, toBase58String(i.caller.bytes))
if (amount < 0)
            then throw()
```

## throw(String) <a id="throw-string"></a>

Выбрасывает исключение с сообщением.

``` ride
throw(err: String)
```

### Параметры

#### `err`: String

Сообщение исключения.

### Пример

``` ride
let amount = match getInteger(this, toBase58String(i.caller.bytes))
if (amount < 0)
            then throw("Can't send negative amount")
```
