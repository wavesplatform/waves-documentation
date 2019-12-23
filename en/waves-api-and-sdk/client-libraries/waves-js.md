# Waves JS API

* [Overview](#overview)
* [Getting Started](#getting-started)
* [Constructior](#constructor)
* [Methods](#methods)

<a id="overview"></a>
## Overview

Waves JS API is a TypeScript/JavaScript component for your web app for interacting with the Waves blockchain. Using Waves JS API you can easily create and sign transactions.

Waves JS API uses external Provider library to authenticate users with their accounts and to get their signatures of transactions and arbitrary messages. Your web app and Waves JS API itself do not have access to user's private key and SEED phrase.

![](./_assets/waves-js.png)

For now, the following Providers are available:

* TestProvider that creates test account from SEED. TestProvider is a part of Waves JS API and can be used at the app debugging stage/
* [Waves.Exchange](https://waves.exchange) Provider is the wallet software that 


Supports node interaction, offline transaction signing, Matcher orders, and creating addresses and keys.
Waves Keeper is a browser extension that allows secure interaction with Waves-enabled web services.

Seed phrases and private keys are encrypted and stored within the extension and cannot be accessed by online dApps and services, making sure that users' funds are protected from hackers and malicious websites. Completion of a transaction doesn't require entering any sensitive information.

Waves Keeper is designed for convenience, so users can sign transactions with just a couple of clicks. Users can create multiple wallets and switch between them easily. And if a user ever forgets the password to the account, the access can be recovered from the seed phrase.

Waves JS API enables:

* to authenticate users with their accounts,
* to get their signatures of transactions and arbitrary messages,
* broadcast transactions to blockchain.

In order to implement these features, Signer API uses Provider – an external library that signs transactions. Currently, the only Provider available is Waves.Exchange.

In code you can use [TypeScript types](https://github.com/wavesplatform/waveskeeper-types).

<a id="getting-started"></a>
## Getting Started

### 1. Provider SDK installation

To install Waves.Exchange Provider SDK, use

```
npm i @waves/waves-js @waves.exchange/storage-provider -S
```

### 2. Library initialization

Add library initialization to you app.

For Mainnet & Waves.Exchange Provider:

```js
import Waves from '@waves/waves-js';
import Provider from '@waves.exchange/storage-provider';

const waves = new Waves();
waves.setProvider(new Provider());
```

For Testnet & Waves.Exchange Provider:

```js
import Waves from '@waves/waves-js';
import Provider from '@waves.exchange/storage-provider';

const waves = new Waves({
  // Specify URL of the node on Testnet
  NODE_URL: 'https://pool.testnet.wavesnodes.com'
});
waves.setProvider(new Provider());
```

& Waves.Exchange Provider:

import Waves from '../src/Waves';
import { TestProvider } from './TestProvider';
import { libs } from '@waves/waves-transactions';
import { CHAIN_ID, NODE_URL, STATE } from './_state';


const seed = libs.crypto.randomSeed();
const address = libs.crypto.address(seed, CHAIN_ID);
const publicKey = libs.crypto.publicKey(seed);




After that you will be able to use Signer API features in the app.

### 3. Basic example

Now your application is ready to work with Waves Platform. Let's test it by implementing basic functionality. For example, we could try to authenticate user login, get his/her balances and transfer funds.

```js
it('Login', async () => {
    const waves = new Waves({ NODE_URL: NODE_URL });
    const provider = new TestProvider(seed);
    await waves.setProvider(provider);

it('Login', async () => {
    const waves = new Waves({ NODE_URL: NODE_URL });
    const provider = new TestProvider(seed);
    await waves.setProvider(provider);

    const user = await waves.login();
    expect(user.address).toBe(address);
    expect(user.publicKey).toBe(publicKey);
});

it('Get balances empty', async () => {
    const waves = new Waves({ NODE_URL: NODE_URL });
    const provider = new TestProvider(seed);
    await waves.setProvider(provider);

    await waves.login();
    const balances = await waves.getBalance();
    expect(balances.length).toBe(1);
    expect(balances[0].assetId).toBe('WAVES');
    expect(balances[0].amount).toBe('0');
});

```

<a id="constructor"></a>
## Constructor

```js
new Waves({
  NODE_URL: 'string',
  POLL_INTERVAL: number,
  MATCHER_URL: 'string'm
 }): Waves
```

Creates an object that features the following [methods](#methods).

Parameters:

| Parameter | Default value | Description |
| :--- | :--- | :--- |
| NODE_URL | https://nodes.wavesnodes.com | Node that is used to access a blockchain |
| POLL_INTERVAL |  | Node that is used to access a blockchain |
| MATCHER_URL | https://matcher.waves.exchange/ | Matcher that is used to serve orders |

<a id="methods"></a>
## Methods

* [alias](#alias)
* [batch](#batch)
* [broadcast](#broadcast)
* [burn](#burn)
* [cancelLease](#cancellease)
* [data](#data)
* [exchange](#exchange)
* [getBalance](#getbalance)
* [getSponsoredBalances](#getsponsoredbalances)
* [invoke](#invoke)
* [issue](#issue)
* [lease](#lease)
* [login](#login)
* [logout](#logout)
* [make](#make)
* [massTransfer](#masstransfer)
* [off](#off)
* [on](#on)
* [once](#once)
* [reissue](#reissue)
* [setAssetScript](#setassetscript)
* [setProvider](#setprovider)
* [setScript](#setscript)
* [signMessage](#signmessage)
* [signTx](#signtx)
* [signTypedData](#signtypeddata)
* [sponsorship](#sponsorship)
* [transfer](#transfer)
* [waitTxConfirm](#waittxconfirm)

<a id="alias"></a>
### alias

Creates and signs [alias transaction](https://docs.wavesplatform.com/en/blockchain/transaction-type/alias-transaction.html).

```js
alias(data: {
  alias: 'string',
  chainId: number,
  fee: LONG,
  proofs: Array<string>,
  senderPublicKey: string,
})
```

**Parameters:**

| Field name | Default value | Description |
| :--- | :--- | :--- |
| alias* | | |
| chainId | Defined by node | 'W'.charCodeAt(0) or 87 means Mainnet<br>
'T'.charCodeAt(0) or 84 means Testnet |
| fee | ?? | [Transaction fee](https://docs.wavesplatform.com/en/blockchain/transaction/transaction-fee.html) |
| proofs | | Необязательный?? Как получить?? Что если не указаны?? |
| senderPublicKey | | Base58-encoded public key of transaction sender that is returned by [login](#login) method |

\* Required field

**Returns:** ???

**Usage:**

```js
const data = {
  alias: 'new_alias',
}

const signedAliasTx = alias(data)
console.log(signedAliasTx)
```

**Output example:**

```js
```

<a id="batch"></a>
### batch

Signs transations and send them to the blockchain.

```js
batch(txOrList)
```

**Parameters:**

| Field name | Default value | Description |
| :--- | :--- | :--- |
| txOrList* | | Transaction or list of transaction |

\* Required field

**Usage:**

```js
??
```

**Output example:**

<a id="broadcast"></a>
### broadcast

Sends transactions that are already signed to the blockchain.

```js
broadcast(tx,[options])
```

```js
broadcast(list: T[],[options])
```

**Returns:** Promise of ???

**Parameters:**

| Field name | Default value | Description |
| :--- | :--- | :--- |
| tx* | | Signed transaction |
| list* | | Signed transaction |
| options.retry | ?? | Number of attemps to send each transaction to blockchain (in case of fail) |
| options.chain | false | [Type: boolean] Send the next transaction only after the previous transaction put in the blockchain |
| options.confirmations | -1 | Number of confirmations after that the Promise is resolved |

\* One of `tx`, `list` is required.

Но ведь транзакция уже подписана?? учитывается ли первая подпись в количестве подтверждений?

**Usage:**

```js

```

**Output example:**

<a id="burn"></a>
### burn

Creates and signs [burn transaction](https://docs.wavesplatform.com/en/blockchain/transaction-type/burn-transaction.html).

```js
burn(data: {
    assetId*: 'string',
    quantity*: LONG,
    chainId: number,
})
```

**Returns:** Promise of ???

**Parameters:**

| Field name | Default value | Description |
| :--- | :--- | :--- |
| assetId* | | Id of the asset to burn. `WAVES` or `null` means WAVES |
| quantity* | | Amount of asset multiplied by 10^`decimals`. For example, decimals of WAVES is 8, so the real amount is multipied by 10^8. `{ "WAVES": 677728840 }` means 6.77728840 |
| chainId | Defined by node | 'W'.charCodeAt(0) or 87 means Mainnet<br>
'T'.charCodeAt(0) or 84 means Testnet |

\* Required field.

**Usage:**

```js
const data = {
  assetId: '4uK8i4ThRGbehENwa6MxyLtxAjAo1Rj9fduborGExarC',
  quantity: 100,
}

const signedBurnTx = burn(data)
console.log(signedBurnTx)
```

<a id="cancellease"></a>
#### cancelLease

Creates and signs [lease cancel transaction transaction](https://docs.wavesplatform.com/en/blockchain/transaction-type/lease-cancel-transaction.html).

```js
cancelLease(data: {
    leaseId: 'string',
    chainId: number,
})
```

**Returns:** Promise of ???

**Parameters:**

| Field name | Default value | Description |
| :--- | :--- | :--- |
| leasetId* | | Id of the lease transaction |
| chainId | Defined by node | 'W'.charCodeAt(0) or 87 means Mainnet<br>
'T'.charCodeAt(0) or 84 means Testnet |

\* Required field.

**Usage:**

```js
const data = {
  leaseId: '69HK14PEHq2UGRfRYghVW8Kc3487uJaoUmk2ntT4kw7X',
}

const signedLeaseCancelTx = cancelLease(data)
console.log(signedLeaseCancelTx)
```

<a id="data"></a>
### data

Creates and signs [data](https://docs.wavesplatform.com/en/blockchain/transaction-type/data-transaction.html) transaction.

```js
data(data: [{
    key: 'string',
    type: 'string' | 'integer' | 'binary' | 'boolean',
    value: 'string' | number | boolean | Uint8Array | Array<number>,
])
```

or

```js
data(data: [{
    key: 'string',
    value: 'string' | number | boolean | Uint8Array | number[],
}])
```

Почему в одном случае Array\<number\>>, в другом number []? Надо ли отдельно описать Uint8Array, возможно достаточно number?

**Returns:** Promise of ???

**Parameters:**

| Field name | Default value | Description |
| :--- | :--- | :--- |
| key* | | Key of a record. Maximum of 100 characters |
| type | | Type of a record |
| value* | | Value of a record. Maximum of 5 Kbytes |

\* Required field.

**Usage:**

```js
const data = [{
  key: 'name',
  type: 'string',
  value: 'Lorem ipsum dolor sit amet',
},
{
  key: 'value',
  type: 'number',
  value: 1234567,
}]

const signedDataTx = waves.data(data)
console.log(signedDataTx)
```

<a id="exchange"></a>
### exchange

Creates and signs [exchange](https://docs.wavesplatform.com/en/blockchain/transaction-type/data-transaction.html) transaction.

```js
exchange(data: {
    buyOrder: IExchangeTransactionOrder<LONG> & IWithProofs;
    sellOrder: IExchangeTransactionOrder<LONG> & IWithProofs;
    price: LONG;
    amount: LONG;
    buyMatcherFee: LONG;
    sellMatcherFee: LONG;)
```

**Returns:** Promise of ???

**Parameters:**

| Field name | Default value | Description |
| :--- | :--- | :--- |
| key* | | Key of a record. Maximum of 100 characters |
| type | | Type of a record |
| value* | | Value of a record. Maximum of 5 Kbytes |

\* Required field.

**Usage:**

```js
const data = [{
  key: 'name',
  type: 'string',
  value: 'Lorem ipsum dolor sit amet',
},
{
  key: 'value',
  type: 'number',
  value: 1234567,
}]

const signedDataTx = waves.data(data)
console.log(signedDataTx)
```

<a id="getbalance"></a>
### getBalance

If user is authenticates, prodives balances of assets in user's portfolio.

    /**
     * Получаем список балансов пользователя (необходимо выполнить login перед использованием)
     * Basic usage example:
     *
     */
**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
await waves.getBalance();
```

**Output example:**

```js
{
  public
}
```

<a id="getsponsoredbalances"></a>
### getSponsoredBalances

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="invoke"></a>
### invoke

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="issue"></a>
### issue

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="lease"></a>
### lease

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="login"></a>
### login

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="logout"></a>
### logout

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="make"></a>
### make

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="masstransfer"></a>
### massTransfer

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="off"></a>
### off

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="on"></a>
### on

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="once"></a>
### once

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="reissue"></a>
### reissue

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="setassetscript"></a>
### setAssetScript

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="setprovider"></a>
### setProvider

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="setscript"></a>
### setScript

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="signmessage"></a>
### signMessage

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="signtx"></a>
### signTx

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="signtypeddata"></a>
### signTypedData

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="sponsorship"></a>
### sponsorship

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="transfer"></a>
### transfer

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```

<a id="waittxconfirm"></a>
### waitTxConfirm

Description

```js
```

**Parameters:**

| Field name | Type | Description |
| :--- | :--- | :--- |

**Returns:** ???

**Usage:**
```ts
```

**Output example:**

```js
{
}
```
