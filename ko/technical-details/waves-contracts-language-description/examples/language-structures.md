# Effective RIDE Examples

RIDE's [Introduction](/technical-details/waves-contracts-language-description/language-description.md#introduction)

## Formatting

You can use the following recommendations to make your scripts readable, maintainable and useful.

### Spaces

We support the following chars `" ", "\r", "\t", "\n"`. Try to avoid long lines, sometimes you'll work with  
scripts from terminals or browsers frames. For readability you can use blank lines between logic blocks.

### Constant Naming

Language Version 1.0 supports only a constants. To define constant you should use `let` structure  
 `let = constName (";"|"\r"|"\n") BLOCK`. For multi definition structure is  
 `let = constName (";"|"\r"|"\n")[let = constName (";"|"\r"|"\n")]+ BLOCK`.  
Use clear and understandable names, avoid using keywords of the language such as `height`, `tx`, `None`,  
`if-then-else`,  or functions names. Main points are: clearness, understandable and shortness. The language parser  
uses rules:

```
number = [+-]?['0'-'9']+

string = """, [1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-]*, """

byteVector = "base58'", [123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]* , "'"

constName = {latin-numeric string strating with char, excluding keywords}
```

Prefer:

```
let txHeight = height; true

let hash = "some secret message"

let one = 1; let two = 2; let three = 3;  one + two + three >= 8

let alicePubKey  = base58’B1Yz7fH1bJ2gVDjyJnuyKNTdMFARkKEpV’ (...)

let isAccepted = getBoolean(tx.recipient, tx.id) (...)
```

To:

```
let x = tx.attachment (...)

let none = MyFunc($Then) (...)
```

### Braces

Braces are used to create logical expressions or functions calls:

```
let notaryAgreement = if(isDefined(tx.proof[1])) then (...)

let massTransferAttrs = ((match tx {
              case a: MasstransferTransaction => true} && (size(tx.transfers) == 2)) (...)

(...) (txToGovAttrsAllow && sig && txToGov)  || (txToUsers && sig)
```

### Comments

Start with a `#`
```
# add up some numbers
let total = 3 + 5 + 8 + 11  # Fibonacci
```

## Types

As described in [Available data types](/technical-details/waves-contracts-language-description/language-description.md#available-data-types),  
language has the following types: `Bottom Type, Primitive Types, Complex Types`. Users shouldn't specify type,  
the language will do it automatically, but remember basic rules:

* don't mix up different types `100500 + true` or `tx.timestamp - "hash"` 
* a full type checking(ensuring type-safety in all branches of execution) is done in compilation phase 

## Collections

Details are available by link [List\[T\]](/technical-details/waves-contracts-language-description/language-description.md#listt),  
and below is examples of `List[T]` usage:

```
let commonAmount = (tx.transfers[0].amount + tx.transfers[1].amount) (...)

let accSig = sigVerify(tx.bodyBytes,tx.proofs[0],accountPK) (...)
```

## Control structures

### Binary Operations

Operations include `">=", ">", "<", "<=", "+", "-", "&&", "||", "=="`. Consider examples for binary operators  
in RIDE:

```
let amountTxCorrect = tx.amount == 300000 (...)

let sig = ((match tx {
              case a: LeaseTransaction => true}) || sigVerify(tx.bodyBytes,tx.proofs[0],sigA)) (...)

(...) height <= 15000000
```

### Getter structures

You can use getter structures for field access of transactions or something with a complicated structure, just use  
`"."` symbol:

```
(...) extract(mTx).bodyBytes (...)

(...) tx.transfers[1].amount (...)
```

### IF-THEN-ELSE

IF-THEN-ELSE works in the same way as defined in many program languages. Structure of if-then-else is `"if(BLOCK) then BLOCK else BLOCK`

```
let isRecipientAgreed = if(isDefined(recipientAgreement)) then extract(recipientAgreement) else false (...)

let minSignaturesRequired = if( height < 1000) 2 else 1
```

### Pattern matching

As Scala's documentation says: "Pattern matching is a mechanism for checking a value against a pattern. A successful  
match can also deconstruct a value into its constituent parts. It is a more powerful version of the switch statement  
in Java and it can likewise be used in place of a series of if/else statements."

RIDE also inherits such functionality but in a more simple mode, a basic statement for usage:

```java
match tx {
    case a: TypeA => 0
    case b: TypeB => 1
 }
```

## Union Types

Union Types is a powerful concept in many programming languages, expressiong a capability of a varaible to be one of allowed types.
Union types intersect, e.g.
given

```
PointA(x: Long, y: Long)
PointB(x: Long, y: String, z: Boolean)
```

and variable `p` being of type `PointA | PointB` (Union type)

```
let a = p.x # a is of type Long
let b = p.y # b is of type  Long | String
let c = p.z # won't compile!
```

If one wants to distinguish `PointA` from `PointB`, he needs to pattern-match the variable:

```
let v = match (p) {
 case pb: PointB => p.z # compilation works, because pb is of type PointB in this context
 case pa: _ => throw()  # compilation works, because throw() returns `Nothing`
}
```

In this example,`tx`, `d` don't have `recipient` field, but `t` has. All calls to transaction fields are now exception-free.

### Crypto functions

Sometimes users need operate confidential information, for such needs RIDE has crypto functions `"sha256", "blake2b256",       
"keccak256"`. In very popular use case as AtomicSwap, you can find an example of such usage:

```
let Bob = extract(addressFromString("3N5GRqzDBhjVXnCn44baHcz2GoZy5qLxtTh")).bytes
let Alice = extract(addressFromString("3MrEzc1mfWdk9SUkeremcsPLRWhViT9R9XF")).bytes
let AlicesPK = base58'FM5ojNqW7e9cZ9zhPYGkpSP1Pcd8Z3e3MNKYVS5pGJ8Z'

let txRecipient = addressFromRecipient(tx.recipient).bytes
let txSender = addressFromPublicKey(tx.senderPk).bytes

let txToBob = (txRecipient == Bob) && (sha256(tx.proofs[0]) == base58'$shaSecret') && ((20 + $beforeHeight) >= height)
let backToAliceAfterHeight = ((height >= (21 + $beforeHeight)) && (txRecipient == Alice))

txToBob || backToAliceAfterHeight
```

where `$shaSecret` is `sha256"BN6RTYGWcwektQfSFzH8raYo9awaLgQ7pLyWLQY4S4F5"` of `"some secret message from Alice"`,  
`$beforeHeight` is some predefined height.

For example transaction's list will be:  
1\) TransferTransactionV2 from AliceBC1 to swapBC1  
2\) TransferTransactionV2 from swapBC1 to BobBC1 OR after some height from swapBC1 to AliceBC1

