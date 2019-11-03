# Транзакция выпуска

**Транзакция выпуска** — [транзакция](/blockchain/transaction.md), которая [выпускает токен](/blockchain/token.md).

## Выпуск NFT <a id="nft"></a>

Выпуск одного [NFT](/blockchain/token/non-fungible-token.md) производится с помощью транзакции выпуска, у которой значение поля "Количество токенов" равняется 1, а значения полей "Число знаков после запятой" и "Флаг довыпуска" — 0.

Комиссия за выпуск одного NFT составляет 0,001 [WAVES](/blockchain/token/waves.md).

Для выпуска NFT вы можете использовать npm-пакет [waves-games](https://www.npmjs.com/package/@waves/waves-games).

### JSON-представление транзакции выпуска не взаимозаменяемого токена

``` json
{
  "type": 3,
  "version": 1,
  "chainId": 87,
  "senderPublicKey": "FkoFqtAeibv2E6Y86ZDRfAkZz61LwUMjLAP2gmS1j7xe",
  "name": "The One Ring",
  "description": "Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk, agh burzum-ishi krimpatul.",
  "amount": 1,
  "decimals": 0,
  "reissuable": false,
  "fee": 100000,
  "timestamp": 1485529001965,
  "script": null,
  "proofs": [
    "2kSNWQM7zx4xXkSZrksZPSNYY32WXAdvQcBTvySMrtZ5rzWYpyXYcm8tbdUSjbyBT2LtMfiyQnYXguxrMdLpWgCq"
  ],
  "id": "8jfD2JBLe23XtCCSQoTx5eAW5QCU6Mbxi3r78aNQLcNf",
  "sender": "3Mv61qe6egMSjRDZiiuvJDnf3Q1qW9tTZDB",
  "feeAssetId": null,
  "assetId": "8jfD2JBLe23XtCCSQoTx5eAW5QCU6Mbxi3r78aNQLcNf",
  "height": 193
}
```

## Бинарный формат

Смотрите страницу [Бинарный формат транзакции выпуска](/blockchain/binary-format/transaction-binary-format/issue-transaction-binary-format.md).
