# JS library for signing data

## Installation

```bash
$ npm install --save @waves/signature-adapter
```

## Usage

```typescript
import { SeedAdapter, SIGN_TYPE } from '@waves/signature-adapter';
import { Money, Asset } from '@waves/data-entities';

const asset = new Asset({
   ticker: 'WAVES',
   id: 'WAVES',
   name: 'Waves',
   precision: 8,
   description: '',
   height: 0,
   timestamp: new Date('2016-04-11T21:00:00.000Z'),
   sender: '',
   quantity: 10000000000000000,
   reissuable: false
});

const transferTransactionData = {
   recipient: 'some address or alias',
   amount: Money.fromTokens(1, asset),
   attachment: 'Some attachment text less 140 bytes',
   fee: Money.fromTokens(0.001, asset)
};

const adapter = new SeedAdapter('some seed phrase with 15 or more chars');
const signable = adapter.makeSignable({
   type: SIGN_TYPE.TRANSFER,
   data: transferTransactionData
});

signable.getDataForApi().then(data => fetch('node-url', {
   method: 'POST',
   body: JSON.stringify(data)
}));
```

Adapters are used to sign data. There are two types of adapters:  
SeedAdapter - is an adapter for usage with seed in string representation  
LedgerAdapter - is an adapter for usage with Ledger hardware wallet

#### SeedAdapter

SeedAdapter accepts either a seed phrase or an object containing information about the seed phrase on create  
Object structure:

* **encryptedSeed {string}** - seed phrase encoded with passwords.
* **password {string}** - password that is encrypted seed phrase.
* **encryptionRounds {number}** - encryption complexity.
* **networkCode {string}** - network byte code \("W" for mainnet, and "T" for testnet\).

_If you use seed phrase to create SeedAdapter note that the minimum length of a phrase is 15 characters. See the documentation @waves/signature-generator for more details_

Example of creation SeedAdapter with seed phrase:

```typescript
import { SeedAdapter } from '@waves/signature-adapter';

const adapter = new SeedAdapter('some seed phrase more 15 chars');
```

#### LedgerAdapter

SeedAdapter accepts an object that contains information about an address and wallet ID in Ledger on create  
Object structure:

* **publicKey {string}** - public key for the address
* **address {string}** - address
* **id {number}** - wallet ID in Ledger

To get an objects for creating an instance of LedgerAdapter there is a static method of the class **"getUserList"**.

getUserList\(from?: number, to?: number\): Promise &lt; Array &lt; {publicKey: string, address: string, id: number} &gt; &gt;;

Where ‘from’ is wallet ID in the Ledger from which to start receiving data, ‘to’ - the number to finish.

Example:

```typescript
import { LedgerAdapter } from '@waves/signature-adapter';

LedgerAdapter.getUserList().then(([userData]) => new LedgerAdapter(userData));
```

## Common methods for both types of adapters

* isAvailable\(\): Promise&lt;void&gt;; Returns promise which returns an error in case the adapter is unavailable.

* getPublicKey\(\): Promise&lt;string&gt;; Returns a public key.

* getAddress\(\): Promise&lt; string &gt;; Returns an address.

* getPrivateKey\(\): Promise&lt; string &gt;; Returns a private key or an error If adapter is not able to return it \(in case of  LedgerAdapter\).

* signRequest\(bytes: Uint8Array\): Promise&lt; string &gt;; Accepts byte array for signing, returns promise with a signature. This method is used for signing any data except transactions and orders.

* signTransaction\(bytes: Uint8Array\): Promise&lt; string &gt;; Accepts byte array for signing, returns promise with a signature. This method is used for signing transactions.

* signOrder\(bytes: Uint8Array\): Promise&lt; string &gt;; Accepts byte array for signing, returns promise with a signature. This method is used for signing orders.

* signData\(bytes: Uint8Array\): Promise&lt; string &gt;; Accepts byte array for signing, returns promise with a signature. This method is used for signing any data  
  _This method is not recommended for signing transactions due to incorrect confirmation display on Ledger_.

* getSeed\(\): Promise&lt; string &gt;; Returns the seed phrase or an error If adapter is not able to return it \(in case of  LedgerAdapter\)

* makeSignable\(signData\): Signable; Accepts data for signature \(Visit [interfaces](https://github.com/wavesplatform/waves-signature-adapter/blob/master/src/prepareTx/interfaces.ts) for more information about “TSignData” interface\) and returns an instance of the Signable class.

## Signable

* getTxData\(\): {object}; Returns a copy of the object data transferred for signature.

* getSignData\(\): Promise&lt; object &gt;; Returns data for signing as received for making signature [@waves/signature-generator](https://github.com/wavesplatform/waves-signature-generator).

* addProof\(proof: string\): Signable; Accepts the signature for adding it to the signature list. Signature list is used for "getDataForApi" method.

* getId\(\): Promise&lt; string &gt;; Returns promise with hash of all data used for signature.

* sign\(\): Promise&lt; Singable &gt;; Method initiates signing and returns promise that waits the completion of signing. This method adds only one signature for the lifetime of one instance of the Signable class. When you call it again it returns a previously created promise.

* getSignature\(\): Promise&lt; string &gt;; Acts same as sign\(\) method, but returns promise with signature.

* getBytes\(\): Promise&lt; Uint8Array &gt;; Returns bytes for signing.

* getMyProofs\(\): Promise&lt; Array &lt; string &gt; &gt;; Returns array of signatures that belongs to public key of the adapter from which the instance of class Signable was created.

* hasMySignature\(\): Promise&lt; boolean &gt;; Returns promise with boolean status about presence of “own” signature \(Same as in “getMyProofs” method\).

* addMyProof\(\): Promise&lt; string &gt;; This method checks the presence of “own” signature. If signature exists it returns the last “own” signature, otherwise its signs and returns the new signature.

* getDataForApi\(\):Promise&lt; object &gt;; Calls the method “addMyProof” to guarantee the presence of one “own” signature. Returns the data that is prepared to send into node. Adds the list of signatures.



