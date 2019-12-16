# Reissue

> [!ВНИМАНИЕ]
> Структура Reissue представлена в [Стандартной библиотеке](/ride/script/standard-library.md) **версии 4**, которая в настоящее время доступна только на [Stagenet](/blockchain/blockchain-network/stage-network.md).

Структура [довыпуска токена](/blockchain/transaction-type/reissue-transaction.md).

## Конструктор

```ride
Reissuen(assetId: ByteVector, isReissuable: Boolean, quantity: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ride/data-types/byte-vector.md) | [ID токена](/blockchain/token/token-id.md) для довыпуска |
| 2 | isReissuable | [Boolean](/ride/data-types/boolean.md) | Флаг возможности довыпуска |
| 3 | quantity | [Int](/ride/data-types/int.md) | Количество токена |
