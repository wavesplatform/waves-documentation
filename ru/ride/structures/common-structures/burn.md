# Burn

> [!ВНИМАНИЕ]
> Структура Burn представлена в [Стандартной библиотеке](/ride/script/standard-library.md) **версии 4**, которая в настоящее время доступна только на [Stagenet](/blockchain/blockchain-network/stage-network.md).

Структура [сжигания токена](/blockchain/transaction-type/burn-transaction.md).

## Конструктор

```ride
Burn(assetId: ByteVector, quantity: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ride/data-types/byte-vector.md) | [ID токена](/blockchain/token/token-id.md), предназначенного для сжигания |
| 2 | quantity | [Int](/ride/data-types/int.md) | Количество токена |
