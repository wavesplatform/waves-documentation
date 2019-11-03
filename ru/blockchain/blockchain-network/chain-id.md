# Байт сети

**Байт сети** — настройка блокчейна, которая влияет на формирование [адреса](/blockchain/account/address.md).

Связка адреса и байта сети в [бинарном формате транзакции](/blockchain/binary-format/transaction-binary-format.md) делает невозможным перенос транзакций между разными [сетями блокчейна](/blockchain/blockchain-network.md).

В качестве байта сети используется любой [ASCII](https://ru.wikipedia.org/wiki/ASCII)-символ за исключением [управляющих символов](https://ru.wikipedia.org/wiki/ASCII#Управляющие_символы). Байт сети задается настройкой `address-scheme-character` в файле конфигурации ноды.
