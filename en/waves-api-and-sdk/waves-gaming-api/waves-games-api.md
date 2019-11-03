# **I’m a developer, where to start?**

As a developer, you will have some tools to make your life easier in creating your items such as gaming SDK and developer dashboard. So your first step should be in understanding our SDK. let’s explain the gaming SDK.

## **Waves Gaming SDK**

[_**This Waves gaming library**_](https://www.npmjs.com/package/@waves/waves-games) will enable you as a developer to integrate blockchain operations into your games including token issuance/transfer and smart contract operations into your applications. It provides a high-level abstraction over NODE REST API and MATCHER REST API. There is also an interface that you can use as a foundation to tokenize your game assets.

## What you can do with this SDK?

1. Create an item on the blockchain with arbitrary metadata.

2. Track an item among players \(wallets\).

3. Sell an item on Waves DEX.

4. Buy an item on Waves DEX.

5. List items associated with a particular game \(i.e. issuer address\).

6. List items for sale by players or developers.

# How does Waves blockchain gaming protocol works?

The idea is to combine two types of Waves transactions which are Issue and Data transactions so the user can issue an item and start trading it on Waves DEX. The item is represented on Waves blockhain with tokens, using the following structure, There are two transactions needed to create an item.

Let’s understand the structure of issue and data transactions and how they represent items in games.

## **Issue transaction**

The logic is very similar to issue your own tokens but here you issue items packed with tokens. basically, it defines an id for an item set and total amount of items \(or unlimited\) in the game universe.

```js
Id,
decimals:0,
quantity: amount, // amount of items to be issued.
reissuable: !isLimited // you can limit the number of items.
```

## **Data Transaction**

Data transaction defines an item set metadata. \(item name, picture, additional game data\) With this transaction, you can add an item name, an item image and more game information about your item. This transaction have Id attribute which refers to issue transaction to represent the item.

```js
IssuerID,
Name: for example 'The sword of pain', // the name of your item
Img: the image URL,
Misc: it’s a Key value where you can store more information about your item such as power and health.
```



