# Waves Auth API

If you want to authorize a user in your service by means of his Waves account, here's the solution. In general, you should redirect the user to the official Waves Client \([https://dex.wavesplatform.com/](https://dex.wavesplatform.com/)\) with certain query parameters including some arbitrary data for him to sign.

That might be needed in cases when you need to work with user personal data and to be sure that a given blockchain account belongs to that user.

## Process

1. You add the Waves Auth widget to your site.
2. A user stumbles upon your site and wants to log in using his Waves account.
3. He clicks the widget button and gets redirected to the official Waves Client, along with some random data from the widget.
4. There, the user chooses whether to log in or to cancel that chain of actions.
5. If he proceeds, the data will be signed with the user's private key.
6. The user then gets redirected back to your site, along with the signature and user's public key.
7. You check the validity of the signature against the data provided for that user.
8. If all is correct, the user is now authenticated in your service.

If the user interrupts the process, he stays on the Waves Client page.

## Details

Due to the length limitations of the query string all parameters are expressed with one character.

### Request

[Example](https://dex.wavesplatform.com#gateway/auth?r=https://example.com&n=Service%20Name&d=0123456789abc&i=/img/logo.png&success=/wavesAuth): `https://dex.wavesplatform.com#gateway/auth?r=https://example.com&n=Service%20Name&d=0123456789abc&i=/img/logo.png&success=/wavesAuth`.

Basic path is `https://dex.wavesplatform.com#gateway/auth`. Then the query parameters go.

#### Referrer

`?r=https://example.com` — the URL of your service. It should be HTTPS-only. _\(Required\)_

#### Name

`?n=Service%20Name` — the name of your service. _\(Required\)_

#### Data

`?d=randomChars` — the data which is signed by the user's private key. _\(Required\)_

#### Icon path

`?i=/path/to/the/icon.png` — a path relative to the Referrer parameter. It hosts the logo of your app. _\(Optional\)_

#### Success path

`?s=/path/to/an/API/method` — a path to the method which redirects the user while the signing is successful. By default, the user is redirected to the referrer root. _\(Optional\)_

#### Debug mode

`?debug=true` — a flag to display error messages. _\(Optional\)_

### Response

Example: `https://example.com/?s=2w7QKSkxKEUwCVhx2VGrt5YiYVtAdoBZ8KQcxuNjGfN6n4fi1bn7PfPTnmdygZ6d87WhSXF1B9hW2pSmP7HucVbh&p=2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr&a=3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj`

#### Signature

`?s=base58EncodedSignature` — a signature of the data which is signed by the user's private key.

#### Public key

`?p=base58EncodedPublicKey` — user's public key.

#### Address

`?a=base58EncodedAddress` — user's Waves address.

### How to check signature validity

You can use the [@waves/signature-generator](https://www.npmjs.com/package/@waves/signature-generator) npm package.

Signed data consists of three objects `Prefix string` + `URL host` + `Provided Data`
Signature is taken from the data in the following order: a `WavesWalletAuthentication` string, then a string with your host parameter value, then a string with your data parameter value.
All strings is converted to `length bytes + value bytes` as in [Data Transactions](/blockchain/transaction-type/data-transaction.md)
Prefix string and the host is required for security purposes if malicious service tries to use transaction data and signature from Auth API it would be useless to broadcast into blockchain.

We also suggest address validation in case the signature and public key is valid but the address was swapped.

#### Js example code
```javascript
const sg = require('@waves/signature-generator')
const crypto = sg.utils.crypto
const StringWithLength = sg.StringWithLength
const generate = sg.generate
const base58 = sg.libs.base58

const generator = new generate([
  new StringWithLength('prefix'),
  new StringWithLength('host'),
  new StringWithLength('data')
]);

function authValidate(data, sign, publicKey) {
  const prefix = 'WavesWalletAuthentication'

  const byteGen = new generator({
    prefix: prefix,
    host: data.host,
    data : data.data,
  });

   return byteGen.getBytes()
    .then(
      function (bytes) {
        return crypto.isValidSignature(bytes, sign, publicKey)
      })
}

function addressValidate(publicKey, address) {
  var publicKeyBytes = base58.decode(publicKey)
  var addressFromPublicKey = crypto.buildRawAddress(publicKeyBytes)

  return (addressFromPublicKey == address)
}

//Signed data from example link
var signedData = {
  host: 'example.com',
  data: '0123456789abc'
}

var realSignature = '2w7QKSkxKEUwCVhx2VGrt5YiYVtAdoBZ8KQcxuNjGfN6n4fi1bn7PfPTnmdygZ6d87WhSXF1B9hW2pSmP7HucVbh'
var publicKey = '2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr'
var address = '3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj'

//Check returned address and address from public key
var addressValidation = addressValidate(publicKey, address)
console.log('Address validation: ' + addressValidation + '\n')

//Example with real signature
let signatureCheck = authValidate(signedData, realSignature, publicKey)

signatureCheck.then(function(result) {
  console.log('Host: ' + signedData.host)
  console.log('Data: ' + signedData.data)
  console.log('Public key: ' + publicKey)
  console.log('Address: ' + address)
  console.log('Real signature: ' + realSignature)
  console.log('Real signature check: ' + result + '\n')
})

//Example with fake signature
var fakeSignature = '29qWReHU9RXrQdQyXVXVciZarWXu7DXwekyV1zPivkrAzf4VSHb2Aq2FCKgRkKSozHFknKeq99dQaSmkhUDtZWsw'
signatureCheck = authValidate(signedData, fakeSignature, publicKey)

signatureCheck.then(function(result) {
  console.log('Host: ' + signedData.host)
  console.log('Data: ' + signedData.data)
  console.log('Public key: ' + publicKey)
  console.log('Address: ' + address)
  console.log('Fake signature: ' + fakeSignature)
  console.log('Fake signature check: ' + result + '\n')
})
```

#### Python example code
```python
import axolotl_curve25519 as curve
import pywaves.crypto as crypto
import base58
from urllib.parse import urlparse, parse_qs


def str_with_length(string_data):
    string_length_bytes = len(string_data).to_bytes(2, byteorder='big')
    string_bytes = string_data.encode('utf-8')
    return string_length_bytes + string_bytes


def signed_data(host, data):
    prefix = 'WavesWalletAuthentication'
    return str_with_length(prefix) + str_with_length(host) + str_with_length(data)


def verify(public_key, signature, message):
    public_key_bytes = base58.b58decode(public_key)
    signature_bytes = base58.b58decode(signature)

    return curve.verifySignature(public_key_bytes, message, signature_bytes) == 0


def verifyAddress(public_key, address):
    public_key_bytes = base58.b58decode(public_key)
    unhashed_address = chr(1) + str('W') + crypto.hashChain(public_key_bytes)[0:20]
    address_hash = crypto.hashChain(crypto.str2bytes(unhashed_address))[0:4]
    address_from_public_key = base58.b58encode(crypto.str2bytes(unhashed_address + address_hash))

    return address_from_public_key == address



redirected_url = 'https://example.com/?s=2w7QKSkxKEUwCVhx2VGrt5YiYVtAdoBZ8KQcxuNjGfN6n4fi1bn7PfPTnmdygZ6d87WhSXF1B9hW2pSmP7HucVbh&p=2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr&a=3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj'
parsed_url = urlparse(redirected_url)
parsed_query = parse_qs(parsed_url.query)

address = parsed_query['a'][0]
pub_key = parsed_query['p'][0]
signature = parsed_query['s'][0]
data_string = '0123456789abc'
host_string = parsed_url.netloc
message_bytes = signed_data(host_string, data_string)

print('Address:', address)
print('Public key:', pub_key)
print('Signed Data:', message_bytes)
print('Real signature:', signature)
print('Verified:', verify(pub_key, signature, message_bytes))
print('Address verified:', verifyAddress(pub_key, address))

fake_signature = '29qWReHU9RXrQdQyXVXVciZarWXu7DXwekyV1zPivkrAzf4VSHb2Aq2FCKgRkKSozHFknKeq99dQaSmkhUDtZWsw'

print('Fake signature:', fake_signature)
print('Fake signature verification:', verify(pub_key, fake_signature, message_bytes))
```

#### Php example code
```php
<?php

/*
 * Requires WavesKit by deemru
 * https://github.com/deemru/WavesKit
 */

require_once __DIR__ . '/vendor/autoload.php';
use deemru\WavesKit;

function signed_data( $host, $data )
{
    $prefix = 'WavesWalletAuthentication';
    return str_with_length($prefix) . str_with_length($host) . str_with_length($data);    
}

function str_with_length( $data )
{
    return pack('n', strlen($data)).$data;
}

$wk = new WavesKit("W");
$redirected_url = "https://example.com/?s=2w7QKSkxKEUwCVhx2VGrt5YiYVtAdoBZ8KQcxuNjGfN6n4fi1bn7PfPTnmdygZ6d87WhSXF1B9hW2pSmP7HucVbh&p=2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr&a=3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj";
$parsed_url = parse_url($redirected_url);
parse_str($parsed_url['query'], $parsed_query);
$address = $parsed_query['a'];
$pub_key = $parsed_query['p'];
$signature = $parsed_query['s'];
$data_string = '0123456789abc';
$host_string = $parsed_url['host'];
$message_bytes = signed_data($host_string, $data_string);

$wk->log('i', 'Address: '. $address);
$wk->log('i', 'Public key:' . $pub_key);
$wk->log('i', 'Signed Data: ' . $message_bytes);
$wk->log('i', 'Real signature: '. $signature);

$wk->setPublicKey( $pub_key );
$is_address_verified = $address === $wk->getAddress();

if ( $is_address_verified === true) 
    $wk->log('s', "Address: Verified: TRUE"); 
else 
    $wk->log('e', "Address: Verified: FALSE");

$signature_verified = $wk->verify($wk->base58Decode($signature), $message_bytes);

if ( $signature_verified === true) 
    $wk->log('s', "Signature Verified: TRUE"); 
else 
    $wk->log('e', "Signature Verified: FALSE");

$fake_signature = '29qWReHU9RXrQdQyXVXVciZarWXu7DXwekyV1zPivkrAzf4VSHb2Aq2FCKgRkKSozHFknKeq99dQaSmkhUDtZWsw';
$wk->log('i', 'Fake Signature: '. $fake_signature);

$signature_verified = $wk->verify($wk->base58Decode($fake_signature), $message_bytes);

if ( $signature_verified === true) 
    $wk->log('e', "Fake Signature Verified: TRUE"); 
else 
    $wk->log('s', "Fake Signature Verified: FALSE");
?>
```
