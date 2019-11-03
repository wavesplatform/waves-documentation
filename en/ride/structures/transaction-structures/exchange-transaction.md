# ExchangeTransaction

Structure of an [exchange transaction](/blockchain/transaction-type/exchange-transaction.md).

### Constructor

``` ride
ExchangeTransaction(buyOrder: Order, sellOrder: Order, price: Int, amount: Int, buyMatcherFee: Int, sellMatcherFee: Int, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | buyOrder | [Order](/ride/structures/common-structures/order.md) | [Token](/blockchain/token.md) purchase [order](/blockchain/order.md) |
| 2 | sellOrder | [Order](/ride/structures/common-structures/order.md) | Token sell order |
| 3 | price | [Int](/ride/data-types/int.md) | Price of exchanging token |
| 4 | amount | [Int](/ride/data-types/int.md) | Amount of exchanging tokens |
| 5 | buyMatcherFee | [Int](/ride/data-types/int.md) | [Matcher](/waves-node/extensions/matcher.md)'s purchase fee |
| 6 | sellMatcherFee | [Int](/ride/data-types/int.md) | Matcher's sell fee |
| 7 | id | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction ID](/blockchain/transaction/transaction-id.md) |
| 8 | fee | [Int](/ride/data-types/int.md) | [Transaction fee](/blockchain/transaction/transaction-fee.md) |
| 9 | timestamp | [Int](/ride/data-types/int.md) | [Transaction timestamp](/blockchain/transaction/transaction-timestamp.md) |
| 10 | version | [Int](/ride/data-types/int.md) | [Transaction version](/blockchain/transaction/transaction-version.md) |
| 11 | sender | [Address](/ride/structures/common-structures/address.md) | [Address](/blockchain/account/address.md) of a transaction sender |
| 12 | senderPublicKey | [ByteVector](/ride/data-types/byte-vector.md) | Account public key of a sender |
| 13 | bodyBytes | [ByteVector](/ride/data-types/byte-vector.md) | [Transaction body bytes](/blockchain/transaction/transaction-body-bytes.md) |
| 14 | proofs | [List](/ride/data-types/list.md)[[ByteVector](/ride/data-types/byte-vector.md)] | Array of [proofs](/blockchain/transaction/transaction-proof.md) |
