# What is Smart Account

The functionality of a regular [account](/blockchain/account.md) only allows you to verify that the [transaction](/blockchain/transaction.md) released from it was actually sent from this account.

Аttaching an [account script](/ride/script/script-types/account-script.md) to an account extends its functionality. It enables checking outgoing transactions for compliance with the conditions specified in the script. An account with a script attached to it is called a [smart account](/blockchain/account/smart-account.md). Only those transactions that have been validated can be sent from the smart account. For example, an account owner can set a rule according to which transactions can be sent from the address only if the [blockchain height](/blockchain/blockchain/blockchain-height.md) exceeds N. Another example — an account owner can allow sending only certain types of transactions. Or disable any validation other than the rule that all transactions sent from the [address](/blockchain/account/address.md) should be considered valid.

The following parameters can be used for checks:

- [Transaction Signature](/blockchain/transaction/transaction-signature.md).
- [Transaction proof](/blockchain/transaction/transaction-proof.md).
- The current blockchain height.
- Arbitrary data existing in the blockchain, for example, [oracle](/blockchain/oracle.md) data.

## Attaching an Account Script to an Account

As we mentioned before, an account without a script validates transactions using the [transaction validation](/blockchain/transaction/transaction-validation.md) mechanism. The operation of this mechanism is equivalent to the operation of the following script:

```ride
sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPk)
```

To attach your own script to an account, you need to send a [set script transaction](/blockchain/transaction-type/set-script-transaction.md) from it. Only one script can be attached to an account. “Detaching” a script from a smart account or replacing the old account script with a new one is possible unless the old script forbids it. To "detach" a script or replace it with a new one, you will need to send a new set script transaction. The transaction fee for setting the script is 0.01 [WAVES](/blockchain/token/waves.md).

## Account Script Structure

### Directive

The directive should be placed at the very beginning of the script. Review the example directive:

```ride
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

The given directive consists of three annotations and provides the compiler with the following information:

- the script will use the third version of the library of standard functions
- the type of script content is Expression
- the [script context](/ride/script/script-context.md) will be the account context. In particular, this means that `this` variable type will be `Address`.

If the directive is missing, then default annotations values will be used:

- STDLIB_VERSION 2
- CONTENT_TYPE EXPRESSION
- SCRIPT_TYPE ACCOUNT

## Expression

The expression checks the transactions sent by the account for compliance with the specified conditions. If the conditions are not met, the transaction will not be sent. Possible results of the expression are

- `true` (transaction is allowed)
- `false` (transaction is not allowed)
- `error`

An account script may contain several expressions.

## Smart Account Script Examples

### Buying or Selling only BTC

An account with the script below can make sales transactions only in relation to BTC:

```ride
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'
let BTCId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
match tx {
   case o: Order =>
      sigVerify(o.bodyBytes, o.proofs[0], cooperPubKey ) && (o.assetPair.priceAsset == BTCId || o.assetPair.amountAsset == BTCId)
   case _ => sigVerify(tx.bodyBytes, tx.proofs[0], cooperPubKey )
}
```

### Purchase of a Certain Asset

The script below allows making purchases from your account

- only a given asset
- for a given price only
- only for WAVES

```ride
let myAssetId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'
  
match tx {
   case o: Order =>
      sigVerify(o.bodyBytes, o.proofs[0], cooperPubKey ) && o.assetPair.priceAsset == null && o.assetPair.amountAsset == myAssetId && o.price == 500000 && o.amount == 1000 && o.orderType == Buy
   case _ => sigVerify(tx.bodyBytes, tx.proofs[0], cooperPubKey )
}
```

## Smart Account Fees

If the transaction is sent from a smart account, the transaction fee is increased by 0.004 WAVES. So if the transaction fee is 0.001 WAVES, the owner of the smart account will pay 0.001 + 0.004 = 0.005 WAVES.
