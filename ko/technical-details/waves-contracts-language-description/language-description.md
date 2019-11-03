# Language description

Waves Contracts language is:

* Lazy
* Strong typed
* Statically typed
* Expression-based.

Operations and constructs available are:

* Binary operations:`>=`, `>`, `<`, `<=`, `+`, `-`, `&&`, `||`, `*`, `%`, `/`, `==`, `!=`
* Unary operations `-`, `!`
* Constants declaration via `let`
* `if-then-else` clause
* Accessing fields of any of instances of predifined sctructures via `.`
* Accessing list element by index `[]`
* Calls to predefined functions via `()`

## Available data types

* `Long`
* `String`
* `Boolean`
* `ByteVector`
* `List[T]`
* Predefined non-recursive data structure like `Transaction`, `Block`, etc
* `Unit` - a type which has ony one instance, `unit`.
* `Nothing`- "bottom type", no instance of this type can exist, but it conforms to any other type.
* Union types, like `Int | String | Transaction`, `ByteVector | Unit`

### Structures

* `Point(x: Int, y: Int)`
* `Alias(name: String)`

Defining user structures is restricted in RIDE.
One can create instance of any pre-defined structure by calling constructor.

```
let addr = Address(base58'3My3KZgFQ3CrVHgz6vGRt8687sH4oAA1qp8')
let alias = Alias("alicia")
let name  = alias.name
```

### List\[T\]

User can't create `List[T]` instances but input data can contains some `List[T]` fields.
Now all of transactions contain field `proofs: List[ByteVector]` and MassTransfer transactions contain field `transfers: List[Transfer]`.

To access lists element you can use syntax `list[index]` with the first element at index 0.

To determinate count of lists elements you can use function `size`:
* `size `: `List[T] => Long`
This is also true for `DataType.ByteArray`:
* `size `: `DataType.ByteArray => Long`

### ByteVector
Standard ByteVector type 

* `size `: `ByteVector => Long`
* `take`: `ByteVector`, `Long` => `ByteVector`
* `drop`: `ByteVector`, `Long` => `ByteVector`
* `dropRight`: `ByteVector`, `Long` => `ByteVector`
* `takeRight`: `ByteVector`, `Long` => `ByteVector`

### Long

* `fraction(value: LONG, numerator: LONG, denominator: LONG) => LONG`

### String
Standard string type

* `size `: `String => Long`
* `take`: `String`, `Long` => `String`
* `drop`: `String`, `Long` => `String`
* `takeRight`: `String`, `Long` => `String`
* `dropRight`: `String`, `Long` => `String`

	
## Pattern Matching

There is a mechanism for checking a value against a pattern and you can handle the different expected types in a match expression. A match expression has a value, the match keyword, and at least one case clause:
```
match tx {
	case a:Transfer => t.recepient
	case b:MassTransfer => t.transfers
}
```


# Examples

Here's a complete multisig 2 of 3 example. Keep in mind all`let`s could actually be inlined, they exist only for the sake of readability.

```
let alicePubKey  = base58'B1Yz7fH1bJ2gVDjyJnuyKNTdMFARkKEpV'
let bobPubKey    = base58'7hghYeWtiekfebgAcuCg9ai2NXbRreNzc'
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'

let aliceSigned  = if(sigVerify(tx.bodyBytes, tx.proofs[0], alicePubKey  )) then 1 else 0
let bobSigned    = if(sigVerify(tx.bodyBytes, tx.proofs[1], bobPubKey    )) then 1 else 0
let cooperSigned = if(sigVerify(tx.bodyBytes, tx.proofs[2], cooperPubKey )) then 1 else 0

aliceSigned + bobSigned + cooperSigned >= 2
```

