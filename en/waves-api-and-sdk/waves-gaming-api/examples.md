# Examples

[_The Gaming SDK_](https://github.com/wavesplatform/waves-games#readme) has many supported functions, you can see the [_full description of all functions here_](https://wavesplatform.github.io/waves-games/index.html).

## 1. Create an item

```js
async function createItem()
{
const items = Items(ChainId.Testnet)
const request = items.create(100,false, { version:1, main: { name:'The sword of pain', img:'img_url'}, misc: {} }, seed)
const item =await request.execute()
console.log(item)
}
```

## 2. Get previously created item

```js
async function getItem() 
{
 const items = Items(ChainId.Testnet)
 const item = await items.getItem('6vq5YokeJUeCU3BCah65LTgiS5ESzjJdNurddY4ZDhcG', false)
 console.log(item)
}
```

## 3. **Get all items created by address or game**

It returns an item list issued by particular game creator.

```js
async function getItemList() 
{
 const items = Items(ChainId.Testnet)
 const list = await items.getItemList('creatorAddress')
 console.log(list)
}
```

## 4. Change Amount

If item was not previously freezed you can change amount of items created

```js
async function changeAmount()
{
 const items = Items(ChainId.Testnet)
 items.changeAmount('6vq5YokeJUeCU3BCah65LTgiS5ESzjJdNurddY4ZDhcG', 10, false, seed)
}
```



