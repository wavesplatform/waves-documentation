# Бинарный формат транзакции генезиса

> Узнать больше о [транзакции генезиса](/blockchain/transaction-type/genesis-transaction.md)

## Транзакция версии 1

| Порядковый номер поля | Поле | Название JSON-поля |Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/blockchain/transaction-type.md) |type| [Byte](/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 1 |
| 2 | [Временная метка транзакции](/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 3 | [Адрес](/blockchain/account/address.md) получателя | recipient | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 26 |  |
| 4 | Количество [WAVES](/blockchain/token/waves.md), которое будет переведено на [аккаунт](/blockchain/account.md) | amount | [Long](/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 5 | [Комиссия за транзакцию](/blockchain/transaction/transaction-fee.md) | fee | [Long](/blockchain/blockchain/blockchain-data-types.md)| 8 |  |
| 6 | [Подпись транзакции](/blockchain/transaction/transaction-signature.md) | signature | Array[[Byte](/blockchain/blockchain/blockchain-data-types.md)] | 64 |  ||

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/2DVtfgXjpMeFf2PQCqvwxAiaGbiDsxDjSdNQkc5JQ74eWxjWFYgwvqzC4dn7iB1AhuM32WxEiVi1SGijsBtYQwn8) в Node API.
