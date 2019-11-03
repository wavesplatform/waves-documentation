## Creating and deploying a script manually

Without `Waves Client` or any API libraries. We will try to make manually a simple multisig 2 of 2 here.

Assumptions:  
1. We have own node. For example, it has the `example.org` domain  
2. We set up a script for a [generated](/development-and-api/node-api/address.md#post-addresses) account

For example, we generated these addresses:

* `3MxjWXEUcVCeiaEUqNcorB5HxSpLsgJCGxE` - Alice's account;
* `3MqGVvfgqdqqU6P9mTAsLSxyRoRjrHF18Mf` - Bob's account;
* `3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X` - Shared account with waves we want to spend.

If Alice and Bob are the one person, it may be treated as 2FA \(some kind\).

### Creating a script

You can create a script at our [IDE site](http://ide.wavesplatform.com/).

1. Start with examples: try to click on menu and choose `Multisig (2 of 3)`
2. Edit a way you want. For this example we will use the following script:

   ```
   let alicePubKey  = base58'Ey6Z9XkWsvG8JZwyxhkTjydRcGp1wg6rbC3AYcxq7Efr'
   let bobPubKey    = base58'5PvhyouzHn2Pcev56oBvwpnsGK5fEu1dA8fM2nJQM4HR'

   let aliceSigned  = if(sigVerify(tx.bodyBytes, tx.proofs[0], alicePubKey)) then 1 else 0
   let bobSigned    = if(sigVerify(tx.bodyBytes, tx.proofs[1], bobPubKey  )) then 1 else 0

   aliceSigned + bobSigned >= 2
   ```

3. Switch to the `BINARY` tab

4. Click on `COPY TO CLIPBOARD` button. A compiled and Base58-encoded script should be copied into your clipboard. It will be required later.

For example, compiled and Base58-encoded script is \(separated by lines\):

```
5Xt9H8mHtikSytHF72xAU3NJwDydxXYMMhmWiNVLbYdBRQ3FHXksc8kW8tKFm3fGto1EwTt4YSybEUrpT2yB71hCvUS3WxWfsC4PxU7
oTGt687w8T195NVeMPUqdWeHT5BwVrsoFkXF5SuMEGTaB4RyP43ygfTCNNdWauiV7guKmSvH3V2dFpK1HvhVPBjG1QafJ63Awp5qLzQ
orFAbBVxgfqFLk6c99vrHCHpdjjiPv3vMN7FWLFrMPhGZbzBdyqQ8pCy1dkadxdkAytxZ3AUszTM2cfREgh9QjVVtcody7VsxDsbTPv
uETHgcrk96jY7Pzft2nE7W9VF3EcGXJ7VDSKX5ucVpkZwugJCa4SgAkBGPnCxmUf3RmrAUuWaCQPMPfUyayyWfZ4wDguz74cLuDpmU3
htVHbcuVQ7KrU55b5w4QFZyLDzHvgXXtCiqMEKFTrepcdy2LjA55D63EUhmQgVA6yqQbmLU6WKFabEsXETBRtzmCqPmGeB4iQXS16rB
WBMHK214mYRoxdAH3zvKyWQcqndnWETd59mCEGkRjB9UUL6vmCF1ZQCSytdJKgyRhRQ7pzxxa5iL92hGSCRdw7yFWAv77aCV3ujJjqs
SAtDTKwqmdqJpWtBWYLEy6cfaTTKCQFNH2Lnj2DYgaFRWETGQVQpMMVYFKkk
```

In futher instruction we define this script with `<script>` to make examples as short as possible.

### Attaching a script to account

1. Now we prepare a JSON request to sign a SetScriptTransaction for shared account with the given script:

   ```json
   {
    "type": 13,
    "version": 1,
    "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X",
    "fee": 100000,
    "script": "<script>`"
   }
   ```

   Note, `fee` is `100000` - a minimal required fee to deploy your script

2. And send it to [/transactions/sign](/development-and-api/node-api/transactions.md#post-transactionssign):

   ```bash
   $ curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' \
   --header 'X-API-Key: <it is a secret>' \
   -d '{ "type": 13, "version": 1, "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X", "fee": 100000, \
   "script": "<script>" }' 'https://example.org/transactions/sign'
   ```

   and receive a JSON ready to broadcast:

   ```json
   {
    "type": 13,
    "id": "8w7yauNiENsJP8oDUpVEfiAzyEzMKoXbJEqS26Ht99mg",
    "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X",
    "senderPublicKey": "66xdGznqt2AVLMZRHme9vFPC6cvN4yV95wRWPfTus3Qe",
    "fee": 100000,
    "timestamp": 1525797758819,
    "proofs": [
      "4Ro4e4UrsVkaFbHtu96qZwHAdf8N4TtpjSGik9kRusmmYKCxicdsEqcgQrYden36nurqhY9EBkTKwD499kAi5rxe"
    ],
    "version": 1,
    "script": "<script>"
   }
   ```

3. Then we [broadcast](/development-and-api/node-api/transactions.md#post-transactionsbroadcast) a prepared request:

   ```bash
   $ curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' \
   --header 'X-API-Key: <it is a secret>' \
   -d '{ "type": 13, "id": "8w7yauNiENsJP8oDUpVEfiAzyEzMKoXbJEqS26Ht99mg", "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X", \
    "senderPublicKey": "66xdGznqt2AVLMZRHme9vFPC6cvN4yV95wRWPfTus3Qe", "fee": 100000, "timestamp": 1525797758819, \
    "proofs": [ "4Ro4e4UrsVkaFbHtu96qZwHAdf8N4TtpjSGik9kRusmmYKCxicdsEqcgQrYden36nurqhY9EBkTKwD499kAi5rxe" ], \
    "version": 1, "script": "<script>" }' \
   'https://example.org/transactions/broadcast'
   ```

4. And check it was applied:

   ```bash
   $ curl http://example.org/addresses/scriptInfo/3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X
   {
    "address" : "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X",
    "script" : "<script>",
    "scriptText" : "<scriptText>",
    "complexity" : 27,
    "extraFee" : 400000
   }
   ```
   where `<scriptText>` is a String representation of compiled `<script>` (expression tree)

Fine! Now we able to make transfers from this account.

### Trying to transfer waves with bad request

**From shared account to another account: **`3MqCPnaoTvE81Es4FSR1m7S6yMUnnJPu9bj`

```json
{
  "type": 4,
  "id": "B7G5KGorZDNrGZbVJ4bi4bhHKX62SVvf18gopK5pi43o",
  "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X",
  "senderPublicKey": "66xdGznqt2AVLMZRHme9vFPC6cvN4yV95wRWPfTus3Qe",
  "fee": 100000,
  "timestamp": 1525797949015,
  "proofs": [
    "yJKWiny1LtcamWxkxJvuYLxAJoxEnc9QTV4WHDk5D2N2rKsvuJjcobwgo1Mu1yRuPm5BZeYEW1nKaDSkZi7xSo5"
  ],
  "version": 2,
  "recipient": "3MqCPnaoTvE81Es4FSR1m7S6yMUnnJPu9bj",
  "assetId": null,
  "feeAssetId": null,
  "amount": 100000,
  "attachment": ""
}
```

Let's try:

```bash
$ curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-API-Key: <it is a secret>' \
-d '{ "type": 4, "id": "B7G5KGorZDNrGZbVJ4bi4bhHKX62SVvf18gopK5pi43o", "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X", \
"senderPublicKey": "66xdGznqt2AVLMZRHme9vFPC6cvN4yV95wRWPfTus3Qe", "fee": 100000, "timestamp": 1525797949015, \
"proofs": [ "yJKWiny1LtcamWxkxJvuYLxAJoxEnc9QTV4WHDk5D2N2rKsvuJjcobwgo1Mu1yRuPm5BZeYEW1nKaDSkZi7xSo5" ], \
"version": 2, "recipient": "3MqCPnaoTvE81Es4FSR1m7S6yMUnnJPu9bj", "assetId": null, "feeAssetId": null, \
"amount": 100000, "attachment": "" }' 'https://example.org/transactions/broadcast'
```

And we got:

> State check failed. Reason: TransactionNotAllowedByScript

### Scenario with a successful transfer

Now, let's try to make a valid transactions with all required proofs. For example, we want to sign this transfer request:

```json
{
  "type": 4,
  "version": 2,
  "amount": 100000,
  "fee": 500000,
  "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X",
  "recipient": "3MqCPnaoTvE81Es4FSR1m7S6yMUnnJPu9bj"
}
```

1. Alice signs this request by her private key through [POST /transactions/sign/{signerAddress}](/development-and-api/node-api/transactions.md#post-transactionssignsigneraddress)

   * Alice address: `3MxjWXEUcVCeiaEUqNcorB5HxSpLsgJCGxE`
   * JSON:

     ```json
     {
       "type": 4,
       "version": 2,
       "amount": 100000,
       "fee": 500000,
       "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X",
       "recipient": "3MqCPnaoTvE81Es4FSR1m7S6yMUnnJPu9bj"
     }
     ```

     She gets:

     ```json
     {
       "type": 4,
       "id": "3Pin3DBWL9oW353sGzjdiuvdNp3xKwf2N6B69U5Bv6FS",
       "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X",
       "senderPublicKey": "66xdGznqt2AVLMZRHme9vFPC6cvN4yV95wRWPfTus3Qe",
       "fee": 500000,
       "timestamp": 1525798423735,
       "proofs": [
         "idjwEn3KZWD4R8mKMbonfu6NMuZnyergXXG4T4d5rUQmJu3gs6ChKwAvSXgxai9G7ASZKAm7CExFCt8z59Bv8WB"
       ],
       "version": 2,
       "recipient": "3MqCPnaoTvE81Es4FSR1m7S6yMUnnJPu9bj",
       "assetId": null,
       "feeAssetId": null,
       "amount": 100000,
       "attachment": ""
     }
     ```

2. Alice gives received JSON of her transaction to Bob

3. Bob signs it by his private key by same method [POST /transactions/sign/{signerAddress}](/development-and-api/node-api/transactions.md#post-transactionssignsigneraddress)

   * Signer address: `3MqGVvfgqdqqU6P9mTAsLSxyRoRjrHF18Mf`
   * JSON:

     ```json
     {
       "type": 4,
       "id": "3Pin3DBWL9oW353sGzjdiuvdNp3xKwf2N6B69U5Bv6FS",
       "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X",
       "senderPublicKey": "66xdGznqt2AVLMZRHme9vFPC6cvN4yV95wRWPfTus3Qe",
       "fee": 500000,
       "timestamp": 1525798423735,
       "proofs": [
         "idjwEn3KZWD4R8mKMbonfu6NMuZnyergXXG4T4d5rUQmJu3gs6ChKwAvSXgxai9G7ASZKAm7CExFCt8z59Bv8WB"
       ],
       "version": 2,
       "recipient": "3MqCPnaoTvE81Es4FSR1m7S6yMUnnJPu9bj",
       "assetId": null,
       "feeAssetId": null,
       "amount": 100000,
       "attachment": ""
     }
     ```

     He gets:

     ```json
     {
       "type": 4,
       "id": "3Pin3DBWL9oW353sGzjdiuvdNp3xKwf2N6B69U5Bv6FS",
       "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X",
       "senderPublicKey": "66xdGznqt2AVLMZRHme9vFPC6cvN4yV95wRWPfTus3Qe",
       "fee": 500000,
       "timestamp": 1525798423734,
       "proofs": [
         "J1VEeSFpNE5sE9Gf3GiZ5NarqUWtd5SUAH3HGGmnFVsHntbKsyQxubHS3itaPguYXoEcwFMdtMuLTuZYbmrjifG"
       ],
       "version": 2,
       "recipient": "3MqCPnaoTvE81Es4FSR1m7S6yMUnnJPu9bj",
       "assetId": null,
       "feeAssetId": null,
       "amount": 100000,
       "attachment": ""
     }
     ```

4. Bob merges proofs in such a way that Alice's proof must be the first, and his proof - the second:

   ```json
   {
    "type": 4,
    "id": "3Pin3DBWL9oW353sGzjdiuvdNp3xKwf2N6B69U5Bv6FS",
    "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X",
    "senderPublicKey": "66xdGznqt2AVLMZRHme9vFPC6cvN4yV95wRWPfTus3Qe",
    "fee": 500000,
    "timestamp": 1525798423735,
    "proofs": [
      "idjwEn3KZWD4R8mKMbonfu6NMuZnyergXXG4T4d5rUQmJu3gs6ChKwAvSXgxai9G7ASZKAm7CExFCt8z59Bv8WB",
      "J1VEeSFpNE5sE9Gf3GiZ5NarqUWtd5SUAH3HGGmnFVsHntbKsyQxubHS3itaPguYXoEcwFMdtMuLTuZYbmrjifG"
    ],
    "version": 2,
    "recipient": "3MqCPnaoTvE81Es4FSR1m7S6yMUnnJPu9bj",
    "assetId": null,
    "feeAssetId": null,
    "amount": 100000,
    "attachment": ""
   }
   ```

5. Bob [broadcasts](/development-and-api/node-api/transactions.md#post-transactionsbroadcast) the transaction

   ```json
    {
      "type": 4,
      "id": "3Pin3DBWL9oW353sGzjdiuvdNp3xKwf2N6B69U5Bv6FS",
      "sender": "3N7H4jTBMKtZfNCY86K2ND1rWcvFsGjDT3X",
      "senderPublicKey": "66xdGznqt2AVLMZRHme9vFPC6cvN4yV95wRWPfTus3Qe",
      "fee": 500000,
      "timestamp": 1525798423735,
      "proofs": [
        "idjwEn3KZWD4R8mKMbonfu6NMuZnyergXXG4T4d5rUQmJu3gs6ChKwAvSXgxai9G7ASZKAm7CExFCt8z59Bv8WB",
        "J1VEeSFpNE5sE9Gf3GiZ5NarqUWtd5SUAH3HGGmnFVsHntbKsyQxubHS3itaPguYXoEcwFMdtMuLTuZYbmrjifG"
      ],
      "version": 2,
      "recipient": "3MqCPnaoTvE81Es4FSR1m7S6yMUnnJPu9bj",
      "assetId": null,
      "feeAssetId": null,
      "amount": 100000,
      "attachment": ""
    }
   ```

