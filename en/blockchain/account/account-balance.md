# Account balance

An **account balance** is the amount of the [token](/blockchain/token.md) that is stored on the [account](/blockchain/account.md).

One account can store different tokens in different amounts. For example, an account can have 50 [WAVES](/blockchain/token/waves.md) and 200 [WCTs](/blockchain/token/wct.md) at the same time. The amount of the Y token on the account is called the **account balance in Y token**. If there is no Y token on the account, it is said that the **account balance in Y token is equal to zero**.

## Account balance in WAVES token
There are four balances in WAVES token:

* regular
* effective
* available
* generating

In addition to WAVES that belong to the account owner, the account may store WAVES that belong to other accounts — those are [leased](/blockchain/leasing.md) WAVES.

The **regular balance** is the amount of WAVES on the account which belongs directly to the account owner.

To explain the effective and available balances, we will introduce the following designations:

`A` — regular balance,

`L` — the amount of WAVES which account leased to other accounts,

`R`— the amount of WAVES which were leased to the account by other accounts.

The **effective balance** is:

```
A - L + R
```

The **available balance** is:

```
A - L
```

The **generating balance** is the minimum value of the effective balance during the last 1000 blocks.

## Top up and view account balance

You can buy and sell tokens using [Waves Wallet](https://wavesplatform.com/technology/wallet) and [Waves DEX](https://dex.wavesplatform.com/) applications or at one of the [centralized exchanges](https://coinmarketcap.com/currencies/waves/#markets).

You can view your account balance in Waves Wallet, Waves DEX, and also in the browser extension called [Keeper](https://wavesplatform.com/technology/keeper).

Example of the Wallet window with the list of tokens on the account:

<img src="img/account-balance.png" alt="faucet" width="300"/>

You can view the list of tokens on account in [Waves Explorer](https://wavesexplorer.com/) — for that find the account by its [address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) and go to the **Assets** tab.

<img src="img/tokens.png" alt="faucet" width="550"/>

## Retrieving account balance using Node API
You can get account balance in WAVES by using the Node API request.

Example of the request:

```
curl https://nodes.wavesplatform.com/addresses/balance/details/<account address>
```

Example of the response:

```
{
  "address": "3PMCn1EHq4WrsfUazezyYu23H1gHKvuffER",
  "regular": 6086358429,
  "generating": 5086358429,
  "available": 5086358429,
  "effective": 5086358429
}
```
