# Encoding functions

|#| Name | Description | Complexity |
|:---| :--- | :--- | :--- |
| 1 | [toBase16String(ByteVector): String](#to-base-16-string)  | Encodes array of bytes to [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string | 10 |
| 2 | [toBase58String(ByteVector): String](#to-base-58-string) | Encodes array of bytes to [Base58](https://en.wikipedia.org/wiki/Base58) string | 10 |
| 3 | [toBase64String(ByteVector): String](#to-base-64-string) | Encodes array of bytes to [Base64](https://en.wikipedia.org/wiki/Base64) string | 10 |


## toBase16String(ByteVector): String<a id="to-base-16-string"></a>

Encodes an array of bytes to a [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string.

```
toBase16String(bytes: ByteVector): String
```

### Parameters

#### `bytes`: [ByteVector](/ride/data-types/byte-vector.md)

The array of bytes to encode.

### Examples

```ride
toBase16String("Ride".toBytes()) # Returns "52696465"
toBase16String(base16'52696465') # Returns "52696465"
```

## toBase58String(ByteVector): String<a id="to-base-58-string"></a>

Encodes an array of bytes to a [Base58](https://en.wikipedia.org/wiki/Base58) string.

```
toBase58String(bytes: ByteVector): String
```

### Parameters

#### `bytes`: [ByteVector](/ride/data-types/byte-vector.md)

The array of bytes to encode.

### Examples

```ride
toBase58String("Ride".toBytes()) # Returns "37BPKA"
toBase58String(base58'37BPKA')  # Returns "37BPKA"
```

## toBase64String(ByteVector): String<a id="to-base-64-string"></a>

Encodes an array of bytes to a [Base64](https://en.wikipedia.org/wiki/Base64) string.

```
toBase64String(bytes: ByteVector): String
```

### Parameters

#### `bytes`: [ByteVector](/ride/data-types/byte-vector.md)

The array of bytes to encode.

### Examples

```ride
toBase64String("Ride".toBytes()) # Returns "UmlkZQ=="
toBase64String(base64'UmlkZQ==') # Returns "UmlkZQ=="
```
