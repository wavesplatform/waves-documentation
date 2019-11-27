# Byte array functions

|#|Name | Description | Complexity |
|:---| :--- | :--- | :--- |
|1| [drop(ByteVector, Int): ByteVector](#drop) | Returns the byte array without the first `N` bytes | 1 |
|2| [dropRight(ByteVector, Int): ByteVector](#drop-right) | Returns the byte array without the last `N` bytes | 19 |
|3| [size(ByteVector): Int](#size) | Returns the number of bytes in the byte array | 1 |
|4| [take(ByteVector, Int): ByteVector](#take) | Returns the first `N` bytes of the byte array | 1 |
|5| [takeRight(ByteVector, Int): ByteVector](#take-right) | Returns the last `N` bytes of the byte array | 19 |

## drop(ByteVector, Int): ByteVector<a id="drop"></a>

Returns the byte array without the first `N` bytes.

``` ride
drop(xs: ByteVector, number: Int): ByteVector
```

### Parameters

#### `xs`: [ByteVector](/ride/data-types/byte-vector.md)

Byte array.

### Examples

``` ride
drop("Ride".toBytes(), 2)   # Returns the byte array without the first 2 bytes
drop(125.toBytes(), 2)      # Returns the byte array without the first 2 bytes
drop(base16'52696465', 3)   # Returns the byte array without the first 3 bytes
drop(base58'37BPKA', 3)     # Returns the byte array without the first 3 bytes
drop(base64'UmlkZQ==', 3)   # Returns the byte array without the first 3 bytes
```

#### `number`: [Int](/ride/data-types/int.md)

Number `N`.

## dropRight(ByteVector, Int): ByteVector<a id="drop-right"></a>

Returns the byte array without the last `N` bytes.

``` ride
dropRight(xs: ByteVector, number: Int): ByteVector
```

### Parameters

#### `xs`: [ByteVector](/ride/data-types/byte-vector.md)

Byte array.

#### `number`: [Int](/ride/data-types/int.md)

Number `N`.

### Examples

``` ride
dropRight("Ride".toBytes(), 2)  # Returns the byte array without the last 2 bytes
dropRight(125.toBytes(), 2)     # Returns the byte array without the last 2 bytes
dropRight(base16'52696465', 3)  # Returns the byte array without the last 3 bytes
dropRight(base58'37BPKA', 3)    # Returns the byte array without the last 3 bytes
dropRight(base64'UmlkZQ==', 3)  # Returns the byte array without the last 3 bytes
```

## size(ByteVector): Int<a id="size"></a>

Returns the number of bytes in the byte array.

``` ride
size(byteVector: ByteVector): Int
```

### Parameters

#### `byteVector`: [ByteVector](/ride/data-types/byte-vector.md)

Byte array.

### Examples

``` ride
size("Hello".toBytes())         # Returns 5
size("Hello world".toBytes())   # Returns 11
size(64.toBytes())              # Returns 8 because all integers in Ride take 8 bytes
size(200000.toBytes())          # Returns 8 because all integers in Ride take 8 bytes
size(base58'37BPKA')            # Returns 4
```

## take(ByteVector, Int): ByteVector<a id="take"></a>

Returns the first `N` bytes of the byte array.

``` ride
take(xs: ByteVector, number: Int): ByteVector
```

### Parameters

#### `xs`: [ByteVector](/ride/data-types/byte-vector.md)

Byte array.

#### `number`: [Int](/ride/data-types/int.md)

Number `N`.

### Examples

``` ride
take(base58'37BPKA', 0) # Returns the empty byte array
take(base58'37BPKA', 1) # Returns the byte array consisting of first byte of initial byte array
take(base58'37BPKA', 15) # Returns whole byte array
take(base58'37BPKA', -10) # Returns the empty byte array
```

## takeRight(ByteVector, Int): ByteVector<a id="take-right"></a>

Returns the last `N` bytes of the byte array.

``` ride
takeRight(xs: ByteVector, number: Int): ByteVector
```

### Parameters

#### `xs`: [ByteVector](/ride/data-types/byte-vector.md)

Byte array.

#### `number`: [Int](/ride/data-types/int.md)

Number `N`.

### Examples

``` ride
takeRight(base58'37BPKA', 2) # Returns the last 2 bytes of the byte array
```
