# Decoding functions

|#| Name | Description | Complexity |
|:---| :--- | :--- | :--- |
| 1 | [addressFromString(String): Address&#124;Unit](#address-from-string)| Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string | 124 |
| 2 | [addressFromStringValue(String): Address](#address-from-string-value) | Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string.<br>Raises an exception if the address cannot be decoded | 124 |
| 3 | [fromBase16String(String): ByteVector](#from-base-16-string) | Decodes [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string to an array of bytes | 10 |
| 4 | [fromBase58String(String): ByteVector](#from-base-58-string) | Decodes [Base58](https://en.wikipedia.org/wiki/Base58) string to an array of bytes | 10 |
| 5 | [fromBase64String(String): ByteVector](#from-base-64-string)| Decodes [Base64](https://en.wikipedia.org/wiki/Base64) string to an array of bytes | 10 |

### addressFromString(String): Address|Unit<a id="address-from-string"></a>

Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string.

```
addressFromString(string: String): Address|Unit
```

### Parameters

#### `string`: [String](en/ride/data-types/string.md)

The string to decode.

### Examples

```ride
let address = addressFromString("3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF")
```

## addressFromStringValue(String): Address <a id="address-from-string-value"></a>

Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string.

Raises an exception if the address cannot be decoded.

```
addressFromStringValue(string: String): Address
```

### Parameters

#### `string`: [String](en/ride/data-types/string.md)

The string to decode.

### Examples

```ride
let address = addressFromStringValue("3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF")
```

## fromBase16String(String): ByteVector<a id="from-base-16-string"></a>

Decodes a [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string to an array of bytes.

```
fromBase16String(str: String): ByteVector
```

### Parameters

#### `str`: [String](en/ride/data-types/string.md)

The string to decode.

### Examples

```ride
let bytes = fromBase16String("52696465")
```

## fromBase58String(String): ByteVector<a id="from-base-58-string"></a>

Decodes a [Base58](https://en.wikipedia.org/wiki/Base58) string to an array of bytes.

```
fromBase58String(str: String): ByteVector
```

### Parameters

#### `str`: [String](en/ride/data-types/string.md)

The string to decode.

### Examples

```ride
let bytes = fromBase58String("37BPKA")
```

## fromBase64String(String): ByteVector<a id="from-base-64-string"></a>

Decodes a [Base64](https://en.wikipedia.org/wiki/Base64) string to an array of bytes.

```
fromBase64String(str: String): ByteVector
```

### Parameters

#### `str`: [String](en/ride/data-types/string.md)

The string to decode.

### Examples

```ride
let bytes = fromBase64String("UmlkZQ==")
```
