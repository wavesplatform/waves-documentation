# Issue transaction

An **issue transaction** is a [transaction](/blockchain/transaction.md) that [issues token](/blockchain/token.md).

## Issue of NFT <a id="nft"></a>

The issue of an [NFT](/blockchain/token/non-fungible-token.md) is made by an issue transaction that has the "Amount" field equal 1, and the "Number of decimal places" and "Reissue flag" fields equal 0.

The fee for the issue of a single NFT is 0.001 [WAVES](/blockchain/token/waves.md).

To issue NFTs you can use the [waves-games](https://www.npmjs.com/package/@waves/waves-games) npm package.

### JSON representation of an issue transaction of an NFT

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

## Binary format

See the page [Issue transaction binary format](/blockchain/binary-format/transaction-binary-format/issue-transaction-binary-format.md).
