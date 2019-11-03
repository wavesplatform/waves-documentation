# Mass Transfer Transaction

### Problem

People who perform mass payments, such as token sharedrops, currently produce lots of similar Transfer transactions. This incurs some extra cost to both the sender \(in terms of fees paid\), and the blockchain \(in terms of storage spent on duplicate data, as well as processing power spent on verifying signatures for each transaction\).

### One Sender, Many Recipients

To address this issue, we're going to introduce a new transaction type, Mass Transfer. A Mass Transfer combines several ordinary Transfer transactions that share single sender and asset ID. Under the hood it has a list of recipients, and an amount to be transferred to each recipient.

The new transaction has a type value of 11. Below is a sample Mass Transfer transaction encoded as JSON:

```cpp
{
  "type" : 11,
  "version" : 1,
  "id" : "BG7MQF8KffVU6MMbJW5xPowVQsohwJhfEJ4wSF8cWdC2",
  "sender" : "3HhQxe5kLwuTfE3psYcorrhogY4fCwz2BSh",
  "senderPublicKey" : "7eAkEXtFGRPQ9pxjhtcQtbH889n8xSPWuswKfW2v3iK4",
  "fee" : 200000,
  "timestamp" : 1518091313964,
  "proofs" : [ "4Ph6RpcPFfBhU2fx6JgcHLwBuYSpn..." ],   // see Proofs below
  "assetId" : null,
  "attachment" : "59QuUcqP6p",
  "transfers" : [ {
    "recipient" : "3HUQa6qtLhNvBJNyPV1pDRahbrcuQkaDQv2",
    "amount" : 100000000
  }, {
    "recipient" : "3HaAdZcCXAqhvFj113Gbe3Kww4rCGMUZaEZ",
    "amount" : 200000000
  },
  ...
  ]
}
```

It's easy to see how compact this transaction is compared to several Transfer transactions. Here we have a sequence of recipients and associated amounts, while sender, asset ID, fee, timestamp and signature occur just once.

### Constraints

The maximum number of recipients in a single transaction is 100. There is no minimum recipient number. You can create a transaction with one or even zero recipients. In addition, restrictions that apply to Transfers apply here as well, such as you cannot send negative amount and cannot send more than you have on your account.

Other than that, we've decided not to put any restrictions on transactions that are harmless, even if they may seem against common sense. For example, transfers to self are allowed, as well as zero valued transfers. In the recipients list, a recipient can occur several times, this is not considered an error.

### Proofs

In order to prepare for the upcoming Smart Accounts feature, Mass Transfer transaction has the signature field replaced with an array of so called "proofs". Proofs are an alternative way to authorize the transaction that is more flexible than signatures and enables smart contracts such as multisig and atomic swap. Each proof is a Base58 encoded byte string and can be a signature, a secret, or anything else – the semantics of a proof is dictated by the smart contract that interprets it. There can be up to 8 proofs at most 64 bytes each.

Now until smart accounts are implemented and activated, the only proof that is actually used is the transaction signature. It should be the very first element in the proofs array, while all the other elements are currently ignored. If you post signed Mass Transfer transactions using REST API, instead of

`"signature": "21jgWvYq6XZuke2bLE8bQEbdXJEk..."`

your JSON should include

`"proofs": [ "21jgWvYq6XZuke2bLE8bQEbdXJEk..." ]`

### Fees

Unlike other transactions, Mass Transfer fee is made up of two amounts: a fixed one plus a per-recipient one. By default the formula looks like:

```
100_000 + 50_000 * N
```

where `N` is the number of recipients in transaction. The total is rounded up to the nearest 100_000. Fee can be configured in miner node settings using the usual syntax, just keep in mind that there are two parts to it. Below is an excerpt from the configuration file that ships with the node:

```cpp
transfer {
    WAVES = 100000
}
mass-transfer {
    # Fee for MassTransfer transaction is calculated as
    # [transfer fee] + [mass transfer fee] * [number of transfers in transaction]
    WAVES = 50000
}
```

Mass Transfer transaction accepts fees in WAVES only.

### Changes to REST API

There is just a single new REST endpoint, `/assets/masstransfer`, to sign and send a mass transfer transaction. Like its counterparts, it requires authentication using `X-Api-Key` header.

Just as with other transaction types, `/transactions/sign` can be used to create and sign a Mass Transfer transaction without broadcasting it. Use `/transactions/broadcast` to broadcast a signed transaction.
