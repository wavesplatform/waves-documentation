# Waves Payments API

If you want to make someone pay with WAVES or any other Waves tokens, you can use our Payments API.

## Process

0. You need to set up a button on your site which triggers a creation of an URL and a redirect to it.
1. A user decides to buy something and the user presses that button.
2. After that, The user is redirected to the Waves Client with a payment parameters window.
3. The user modifies those parameters if possible and submits the form.
4. If everything's okay, The user is redirected back to referer.
5. Referer is provided with transaction ID which can be checked if it's in the blockchain.

If the user interrupts the process, he stays on the Waves Client page.

## Details

### Request

Example: `https://beta.wavesplatform.com/#send/WAVES?recipient=your-alias&amount=1&referrer=https://example.com&strict`.

Basic path is `https://beta.wavesplatform.com/#send/{assetId}`. Then there are the parameters.

#### Asset ID

`/#send/8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS` — the ID of the asset needed for the payment. Required. The only path parameter here.

#### Recipient

`?recipient=3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj` — the address (or an alias) to send tokens to. Required.

#### Amount

`?amount=10.5` — the amount of tokens to pay. Required.

#### Referrer

`?referrer=https://example.com/waves-payment` — the URL of your service. It should be HTTPS-only. Required.

#### Strict mode

`?strict` — if this flag is set, user won't be able to change the data in the form.

### Response

Example: `https://example.com/waves-payment?txId=D1USZfZPzVd2XNH9xj52Z81XhxChpwUKDJpQHz2haXRT`.

The ID of user's payment transaction will be in the query.

#### Transaction ID

`?txId=D1USZfZPzVd2XNH9xj52Z81XhxChpwUKDJpQHz2haXRT` — the ID of user's successful transaction.
