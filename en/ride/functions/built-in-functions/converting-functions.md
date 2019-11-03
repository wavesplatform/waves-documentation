# Converting functions

| # | Name | Description | Complexity |
|:--- | :--- | :--- | :--- |
| 1 | [addressFromPublicKey(ByteVector): Address](#address-from-public-key)| Gets the corresponding [address](/blockchain/account/address.md) of the account public key | 82 |
| 2 | [addressFromRecipient(Address&#124;Alias): Address](#address-from-recipient) | Gets the corresponding [address](/blockchain/account/address.md) of the [alias](/blockchain/account/alias.md) | 100 |
| 3 | [parseInt(String): Int&#124;Unit](#parse-int) | Converts the string representation of a number to its integer equivalent | 20 |
| 4 | [parseIntValue(String): Int](#parse-int-value) | Converts the string representation of a number to its integer equivalent.<br>Raises an exception if the string cannot be parsed | 20 |
| 5 | [toBytes(Boolean): ByteVector](#tobytes-bool) | Converts a boolean value to an array of bytes | 1 |
| 6 | [toBytes(Int): ByteVector](#tobytes-int) | Converts an integer to an array of bytes | 1 |
| 7 | [toBytes(String): ByteVector](#tobytes-string) | Converts a string to an array of bytes | 1 |
| 8 | [toInt(ByteVector): Int](#toint-bytes) | Converts an array of bytes to an integer | 10 |
| 9 | [toInt(ByteVector, Int): Int](#toint-bytes-int) | Converts an array of bytes to an integer starting from a certain index | 10 |
| 10 | [toString(Address): String](#to-string-address) | Converts an array of bytes of an [address](/blockchain/account/address.md) to a string | 10 |
| 11 | [toString(Boolean): String](#tostring-bool) | Converts a boolean value to a string | 1 |
| 12 | [toString(Int): String](#tostring-int) | Converts an integer to a string | 1 |
| 13 | [toUtf8String(ByteVector): String](#to-utf8-string) | Converts an array of bytes to a [UTF-8](https://en.wikipedia.org/wiki/UTF-8) string | 20 |


## addressFromPublicKey(ByteVector): Address<a id="address-from-public-key"></a>

Gets the corresponding [address](/blockchain/account/address.md) of the account public key.

```
addressFromPublicKey(publicKey: ByteVector): Address
```

### Parameters

#### `publicKey`: [ByteVector](/ride/data-types/byte-vector.md)

Public key.

### Examples

```ride
let address = addressFromPublicKey(base58'J1t6NBs5Hd588Dn7mAPytqkhgeBshzv3zecScfFJWE2D')
```

## addressFromRecipient(Address|Alias): Address<a id="address-from-recipient"></a>

Gets the corresponding [address](/blockchain/account/address.md) of the [alias](/blockchain/account/alias.md).

``` ride
addressFromRecipient(AddressOrAlias: Address|Alias): Address
```

### Parameters

#### AddressOrAlias: [Address](/ride/structures/common-structures/address.md)&#124;[Alias](/ride/structures/common-structures/alias.md)

Address or alias, usually tx.recipient.

### Examples

```ride
let address =Address(base58'3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF')
addressFromRecipient(address)
```


### parseInt(String): Int|Unit<a id="parse-int"></a>

Converts the string representation of a number to its integer equivalent.

```
parseInt(str: String): Int|Unit
```

### Parameters

#### `str`: [String](/ride/data-types/string.md)

String to parse.

### Examples

```ride
parseInt("10") # Returns 10
parseInt("010") # Returns 10
parseInt("Ride") # Returns Unit
parseInt("10.30") # Returns Unit
```

### parseIntValue(String): Int<a id="parse-int-value"></a>

Converts the string representation of a number to its integer equivalent.

Raises an exception if the string cannot be parsed.

```
parseIntValue(str: String): Int
```

### Parameters

#### `str`: [String](/ride/data-types/string.md)

String to parse.

### Examples

```ride
parseIntValue("10") # Returns 10
parseIntValue("010") # Returns 10
parseIntValue("Ride") # Error while parsing string to integer
parseIntValue("10.30") # Error while parsing string to integer
parseIntValue("20 WAVES") # Error while parsing string to integer
```

## toBytes(Boolean): ByteVector<a id="tobytes-bool"></a>

Converts a boolean value to an array of bytes.

```
toBytes(b: Boolean): ByteVector
```

### Parameters

#### `b`: [Boolean](/ride/data-types/boolean.md)

Boolean to convert.

### Examples

```ride
toBytes(true) # Returns 2
toBytes(false) # Returns 1
```

## toBytes(Int): ByteVector<a id="tobytes-int"></a>

Converts an integer to an array of bytes.

```
toBytes(n: Int): ByteVector
```

### Parameters

#### `n`: [Int](/ride/data-types/int.md)

Integer to convert.

### Examples

```ride
toBytes(10) # Returns 1111111B
```

## toBytes(String): ByteVector<a id="tobytes-string"></a>

Converts a string to an array of bytes.

```
toBytes(s: String): ByteVector
```

### Parameters

#### `s`: [String](/ride/data-types/string.md)

String to convert.

### Examples

```ride
toBytes("Ride") # Returns 37BPKA
```

## toInt(ByteVector): Int<a id="toint-bytes"></a>

Converts an array of bytes to an integer.

```
toInt(bin: ByteVector) : Int
```

### Parameters

#### `bin`: [ByteVector](/ride/data-types/byte-vector.md)

Array of bytes to convert.

### Examples

```ride
toInt(bytes) # Returns 10
```

### toInt(ByteVector, Int): Int<a id="toint-bytes-int"></a>

Converts an array of bytes to an integer starting from a certain index.

```
toInt(bin: ByteVector, offset: Int): Int
```

### Parameters

#### `bin`: [ByteVector](/ride/data-types/byte-vector.md)

Array of bytes to convert.

#### `offset`: [Int](/ride/data-types/int.md)

Index to start from.

### Examples

```ride
let bytes = toBytes("Ride on Waves")
toInt(bytes, 2) # Returns 7234224039401641825
toInt(bytes, 6) # Index out of bounds
```

## toString(Address): String<a id="to-string-address"></a>

Converts an array of bytes of an [address](/blockchain/account/address.md) to a string.

``` ride
toString(Address: Address): String
```

### Parameters

#### `Address`: [Address](/ride/structures/common-structures/address.md)

Address to convert.

### Examples

```ride
let address =Address(base58'3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF')
toString(address) # Returns "3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF"
```

### toString(Boolean): String<a id="tostring-bool"></a>

Converts a boolean value to a string.

```
toString(b: Boolean): String
```

### Parameters

#### `b`: [Boolean](/ride/data-types/boolean.md)

Boolean to convert.

### Examples

```ride
toString(true) # Returns "true"
toString(false) # Returns "false"
```

### toString(Int): String<a id="tostring-int"></a>

Converts an integer to a string.

```
toString(n: Int): String
```

### Parameters

#### `n`: [Int](/ride/data-types/int.md)

Integer to convert.

### Examples

```ride
toString(10) # Returns "10"
```


### toUtf8String(ByteVector): String<a id="to-utf8-string"></a>

Converts an array of bytes to a [UTF-8](https://en.wikipedia.org/wiki/UTF-8) string.

```
toUtf8String(u: ByteVector): String
```

### Parameters

#### `u`: [ByteVector](/ride/data-types/byte-vector.md)

Array of bytes to convert.

### Examples

```ride
let bytes = toBytes("Ride on Waves")
toUtf8String(bytes) # Returns "Ride on Waves"
```
