# Структуры

Все структры в RIDE являются встроенными — вы не можете создавать свои собственные структуры.

У всех структур есть конструктор.

## Примеры

Код, который создает экземпляр структуры `DataEntry` и читает из него ключ и значение.

``` ride
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
 
let data = DataEntry("Age", 33)
let key  = data.key
let val = data.value
```
