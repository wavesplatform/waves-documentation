# Data transaction functions

The functions listed below retrieve data from the [data transaction](/blockchain/transaction-type/data-transaction.md) or from any list of objects of [DataEntry](/ride/structures/common-structures/data-entry.md).

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | [getInteger(List[DataEntry], String): Int&#124;Unit](#get-integer-string) | Gets an integer value from a list of data entires by key | 10 |
| 2 | [getInteger(List[DataEntry], Int): Int&#124;Unit](#get-integer-integer) | Gets an integer value from a list of data entires by index | 30 |
| 3 | [getIntegerValue(List[DataEntry], String): Int](#get-integer-value-string) | Gets an integer value from a list of data entires by key. Throws an exception if there is no data | 10 |
| 4 | [getIntegerValue(List[DataEntry], Int): Int](#get-integer-value-integer) | Gets an integer value from a list of data entires by index. Throws an exception if there is no data | 30 |
| 5 | [getBoolean(List[DataEntry], String): Boolean&#124;Unit](#get-boolean-string) | Gets a boolean value from a list of data entires by key | 10 |
| 6 | [getBoolean(List[DataEntry], Int): Boolean&#124;Unit](#get-boolean-integer) | Gets a boolean value from a list of data entires by index | 30 |
| 7 | [getBooleanValue(List[DataEntry], String): Boolean](#get-boolean-value-string) | Gets a boolean value from a list of data entires by key. Throws an exception if there is no data | 10 |
| 8 | [getBooleanValue(List[DataEntry], Int: Boolean](#get-boolean-value-integer) | Gets a boolean value from a list of data entires by index. Throws an exception if there is no data | 30 |
| 9 | [getBinary(List[DataEntry], String): ByteVector&#124;Unit](#get-binary-string) | Gets a binary value from a list of data entires by key | 10 |
| 10 | [getBinary(List[DataEntry], Int): ByteVector&#124;Unit](#get-binary-integer) | Gets a binary value from a list of data entires by index | 30 |
| 11 | [getBinaryValue(ListDataEntry, String): ByteVector](#get-binary-value-string) | Gets a binary value from a list of data entires by key. Throws an exception if there is no data | 10 |
| 12 | [getBinaryValue(List[DataEntry], Int): ByteVector](#get-binary-value-integer) | Gets a binary value from a list of data entires by index. Throws an exception if there is no data | 30 |
| 13 | [getString(List[DataEntry] String): String&#124;Unit](#get-string-string) | Gets a string value from a list of data entires by key | 10 |
| 14 | [getString(List[DataEntry], Int): String&#124;Unit](get-string-integer) | Gets a string value from a list of data entires by index | 30 |
| 15 | [getStringValue(List[DataEntry], String): String](get-string-value-string) | Gets a string value from a list of data entires by key. Throws an exception if there is no data | 10 |
| 16 | [getStringValue(List[DataEntry], Int): String](#get-string-value-integer) | Gets a string value from a list of data entires by index. Throws an exception if there is no data | 30 |

## getInteger(ListDataEntry, String): Int|Unit<a id="get-integer-string"></a>

Gets integer from a list of data entires by key.

``` ride
getInteger(data: List[DataEntry], key: String): Int|Unit
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### key: String

Key.

## getInteger(ListDataEntry, Int): Int|Unit<a id="get-integer-integer"></a>

Gets an integer value from a list of data entires by index.

``` ride
getInteger(data: List[DataEntry], index: Int): Int|Unit
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usally tx.data.

#### index: Int

Index.

## getIntegerValue(ListDataEntry, String): Int<a id="get-integer-value-string"></a>

Gets an integer value from a list of data entires by key. Throws an exception if there is no data.

``` ride
getIntegerValue(data: List[DataEntry], key: String): Int
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### key: String

Key.

## getIntegerValue(ListDataEntry, Int): Int<a id="get-integer-value-integer"></a>

Gets an integer value from a list of data entires by index. Throws an exception if there is no data.

``` ride
getIntegerValue(data: List[DataEntry], index: Int): Int
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### index: Int

Index.

## getBoolean(List[DataEntry], String): Boolean|Unit<a id="get-boolean-string"></a>

Gets a boolean value from a list of data entires by key.

``` ride
getBoolean(data: List[DataEntry], key: String): Union of boolean
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### key: String

Key.

## getBoolean(List[DataEntry], Int): Boolean|Unit<a id="get-boolean-integer"></a>

Gets a boolean value from a list of data entires by index.

``` ride
getBoolean(data: List[DataEntry], index: Int): Union of boolean
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### index: Int

Index.

## getBooleanValue(List[DataEntry], String): Boolean<a id="get-boolean-value-string"></a>

Gets a boolean value from a list of data entires by key. Throws an exception if there is no data.

``` ride
getBooleanValue(data: List[DataEntry], key: String): Boolean
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### key: String

Key.

## getBooleanValue(List[DataEntry], Int): Boolean<a id="get-boolean-value-integer"></a>

Gets a boolean value from a list of data entires by index. Throws an exception if there is no data.

``` ride
getBooleanValue(data: List[DataEntry], index: Int): Boolean
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### index: Int

Index.

## getBinary(List[DataEntry], String): ByteVector|Unit<a id="get-binary-string"></a>

Gets a binary value from a list of data entires by key.

``` ride
getBinary(data: List[DataEntry], key: String): Union of ByteVector
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### key: String

Key.

## getBinary(List[DataEntry], Int): ByteVector|Unit<a id="get-binary-integer"></a>

Gets a binary value from a list of data entires by index.

``` ride
getBinary(data: List[DataEntry], index: Int): Union of ByteVector
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### index: Int

Index.

## getBinaryValue(List[DataEntry], String): ByteVector<a id="get-binary-value-string"></a>

Gets a binary value from a list of data entires by key. Throws an exception if there is no data.

``` ride
getBinaryValue(data: List[DataEntry], key: String): ByteVector
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### key: String

Key.

## getBinaryValue(List[DataEntry], Int): ByteVector<a id="get-binary-value-integer"></a>

Gets a binary value from a list of data entires by index. Throws an exception if there is no data.

``` ride
getBinaryValue(data: List[DataEntry], index: Int): ByteVector
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### index: Int

Index.

## getString(List[DataEntry], String): String|Unit<a id="get-string-string"></a>

Gets a string value from a list of data entires by key.

``` ride
getString(data: List[DataEntry], key: String): Union of string
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### key: String

Key.

## getString(List[DataEntry], Int): String|Unit<a id="get-string-integer"></a>

Gets a string value from a list of data entires by index.

``` ride
getString(data: List[DataEntry], index: Int): Union of string
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### index: Int

Index.

## getStringValue(List[DataEntry], String): String<a id="get-string-value-string"></a>

Gets a string value from a list of data entires by key. Throws an exception if there is no data.

``` ride
getStringValue(data: List[DataEntry], key: String) : String
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### key: String

Key.

## getStringValue(List[DataEntry], Int): String<a id="get-string-value-integer"></a>

Gets a string value from a list of data entires by index. Throws an exception if there is no data.

``` ride
getStringValue(data: List[DataEntry], index: Int): String
```

### Parameters

#### data: List[DataEntry]

DataEntry vector, usually tx.data.

#### index: Int

Index.
