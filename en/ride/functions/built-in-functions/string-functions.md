# String functions

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | [drop(String, Int): String](#drop) | Drops the first `n` characters of a string | 1 |
| 2 | [dropRight(String, Int): String](#drop-right) | Drops the last `n` characters of a string | 19 |
| 3 | [indexOf(String, String): Int&#124;Unit](#index-of-string) | Returns the index of the first occurrence of a substring | 20 |
| 4 | [indexOf(String, String, Int): Int&#124;Unit](#index-of-string-int) | Returns the index of the first occurrence of a substring after a certain index | 20 |
| 5 | [size(String): Int](#size) | Returns the size of a string | 1 |
| 6 | [split(String, String): List[String]](#split) | Splits a string delimited by a separator into a list of substrings | 100 |
| 7 | [take(String, Int): String](#take) | Takes the first `n` characters from a string | 1 |
| 8 | [takeRight(String, Int): String](#take-right) | Takes the last `n` characters from a string | 19 |

## drop(String, Int): Str<a id="drop"></a>

Drops the first `n` characters of a string.

``` ride
drop(xs: String, number: Int): String
```

### Parameters

#### `xs`: String

The string.

#### `number`: Int

The number `n`.

### Examples

```ride
drop("Apple", 0) # Returns "Apple"
drop("Apple", 1) # Returns "pple"
drop("Apple", 3) # Returns "le"
drop("Apple", 5) # Returns an empty string
drop("Apple", 15) # Returns an empty string
```

## dropRight(String, Int): String<a id="drop-right"></a>

Drops the last `n` characters of a string.

``` ride
dropRight(xs: String, number: Int): String
```

### Parameters

#### `xs`: String

The string.

#### `number`: Int

The number `n`.

### Examples

```ride
dropRight("Apple", 0) # Returns "Apple"
dropRight("Apple", 1) # Returns "Appl"
dropRight("Apple", 3) # Returns "Ap"
dropRight("Apple", 5) # Returns an empty string
dropRight("Apple", 15) # Returns an empty string
```

## indexOf(String, String): Int|Unit<a id="index-of-string"></a>

Returns the index of the first occurrence of a substring.

``` ride
indexOf(str: String, substr: String): Int|Unit
```

### Parameters

#### `str`: String

The string.

#### `substr`: String

The substring.

### Examples

```ride
indexOf("Apple","ple") # Returns 3
indexOf("Apple","le") # Returns 4
indexOf("Apple","e") # Returns 5
```

## indexOf(String, String, Int): Int|Unit<a id="index-of-string-int"></a>

Returns the index of the first occurrence of a substring after a certain index.

``` ride
indexOf(str: String, substr: String, offset: Int): Int|Unit
```

### Parameters

#### `str`: String

The string.

#### `substr`: String

The substring.

#### `offset`: Int

The index.

### Examples

```ride
indexOf("Apple","ple", 1) # Returns 2
indexOf("Apple","le", 2) # Returns 3
indexOf("Apple","e", 3) # Returns 4
```

## size(String): Int<a id="size"></a>

Returns the size of a string.

``` ride
size(xs: String): Int
```

### Parameters

#### `xs`: String

The string.

### Examples

```ride
size("Ap") # Returns 2
size("Appl") # Returns 4
size("Apple") # Returns 5
```

## split(String, String): List[String]<a id="split"></a>

Splits a string delimited by a separator into a list of substrings.

``` ride
split(str: String, separator: String): List[String]
```

### Parameters

#### `str`: String

The string.

#### `separator`: Int

The separator.

### Examples

```ride
split("A.p.p.l.e", ".") # Returns ["A", "p", "p", "l", "e"]
split("Apple", ".") # Returns ["Apple"]
split("Apple", "") # Returns ["A", "p", "p", "l", "e"]
split("Ap.ple", ".") # Returns ["Ap","ple"]
```

## take(String, Int): String<a id="take"></a>

Takes the first `n` characters from a string.

``` ride
take(xs: String, number: Int): String
```

### Parameters

#### `xs`: String

The string.

#### `number`: Int

The number `n`.

### Examples

```ride
take("Apple", 0) # Returns an empty string
take("Apple", 1) # Returns "A"
take("Apple", 3) # Returns "App"
take("Apple", 5) # Returns "Apple"
take("Apple", 15) # Returns "Apple"
take("Apple", -10) # Returns an empty string
```

## takeRight(String, Int): String<a id="take-right"></a>

Takes the last `n` characters from a string.

``` ride
takeRight(xs: String, number: Int): String
```

### Parameters

#### `xs`: String

The string.

#### `number`: Int

The number `n`.

### Examples

```ride
takeRight("Apple", 0) # Returns an empty string
takeRight("Apple", 1) # Returns "A"
takeRight("Apple", 3) # Returns "ple"
takeRight("Apple", 5) # Returns "Apple"
takeRight("Apple", 15) # Returns "Apple"
```
