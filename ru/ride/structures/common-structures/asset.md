# Asset

Структура [токена](/blockchain/token.md).

## Конструктор

``` ride
Asset(quantity: Int, decimals: Int, issuer: Address, issuerPublicKey: ByteVector, reissuable: Boolean, scripted: Boolean, sponsored: Boolean)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/ride/data-types/byte-vector.md) | [ID токена](/blockchain/token/token-id.md)
| 2 | quantity | [Int](/ride/data-types/int.md) | Количество выпущенных [токенов](/blockchain/token.md) |
| 3 | decimals | [Int](/ride/data-types/int.md) | Число знаков после запятой у токена |
| 4 | issuer | [Address](/ride/structures/common-structures/address.md) | Адрес аккаунта, который выпустил токен |
| 5 | issuerPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Открытый ключ аккаунта, выпустившего токен |
| 6 | reissuable | [Boolean](/ride/data-types/boolean.md) | true — токен можно довыпускать, false — нельзя довыпускать |
| 7 | scripted | [Boolean](/ride/data-types/boolean.md) | true — [смарт-ассет](/blockchain/token/smart-asset.md), false — обычный токен |
| 8 | sponsored | [Boolean](/ride/data-types/boolean.md) | true — токен спонсируемый, false — неспонсируемый |
