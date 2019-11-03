# Smart Asset With Notary Proof Example

Suppose that we want to transfer some assets only when we receive proof of possession from the notary, who we can trust.

Also, we want to check that the recipient is able to accept the transfer. For this purposes we can write a script for our smart asset:

```js
let king = extract(addressFromString("${king.address}"))
let company = extract(addressFromString("${company.address}"))
let notary1 = addressFromPublicKey(extract(getByteArray(king,"notary1PK")))
let txIdBase58String = toBase58String(tx.id)
let notary1Agreement = getBoolean(notary1,txIdBase58String)
let isNotary1Agreed = if(isDefined(notary1Agreement)) then extract(notary1Agreement) else false

match tx { 
  case t:TransferTransaction =>
let recipientAddress = addressFromRecipient(t.recipient)
let recipientAgreement = getBoolean(recipientAddress,txIdBase58String)
let isRecipientAgreed = if(isDefined(recipientAgreement)) then extract(recipientAgreement) else false
let senderAddress = addressFromPublicKey(tgi.senderPk)
senderAddress.bytes == company.bytes || (isNotary1Agreed && isRecipientAgreed)

case _ => false
}
```

In `isNotary1Agreed`, here is a check to confirm that the transfer transaction has the signature of the notary.   
In `recipientAgreement`, we check that the recipient allows the current   
transaction, and in the end we return `true` if both of these conditions are satisfied, or `false` otherwise.

For example transactions list will be:  
1\) kingDataTransaction -&gt; DataTransaction for king's address with BinaryDataEntry\("notary1PK", ByteStr\(notary.publicKey\)\).

2\) transferFromCompanyToA -&gt; TransferTransactionV1 from accountA to accountB.

3\) notaryDataTransaction -&gt; DataTransaction for notary's address with BooleanDataEntry\(transferFromAToB.id\(\).base58, true\).

4\) accountBDataTransaction -&gt; DataTransaction for accountB's address with BooleanDataEntry\(transferFromAToB.id\(\).base58, true\).

5\) transferFromAToB -&gt; TransferTransactionV1 from accountA to accountB.

**match tx **is used  to check the transaction type before accessing field. So each transaction type has its own fields, and you have to match tx type first.

**Note**. Please check the example on our [IDE](https://ide.wavesplatform.com/).

