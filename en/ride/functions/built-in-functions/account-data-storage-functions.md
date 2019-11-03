# Account data storage functions

> Learn more about [account data storage](/blockchain/account/account-data-storage.md)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | [assetBalancе(Address&#124;Alias, ByteVector): Int](#asset-balance) | Gets account balance by token ID | 100 |
| 2 | [getBinary(Address&#124;Alias, String): ByteVector&#124;Unit](#get-binary) | Gets an array of bytes by key | 100 |
| 3 | [getBinaryValue(Address&#124;Alias, String): ByteVector](#get-binary-value) | Gets an array of bytes by key. Throws an exception if there is no data | 100 |
| 4 | [getBoolean(Address&#124;Alias, String): Boolean&#124;Unit](#get-boolean) | Gets a boolean value by key | 100 |
| 5 | [getBooleanValue(Address&#124;Alias, String): Boolean](#get-boolean-value) | Gets a boolean value by key. Throws an exception if there is no data | 100 |
| 6 | [getInteger(Address&#124;Alias, String): Int&#124;Unit](#get-integer) | Gets an integer by key | 100 |
| 7 | [getIntegerValue(Address&#124;Alias, String): Int](#get-integer-value) | Gets an integer by key. Throws an exception if there is no data | 100 |
| 8 | [getString(Address&#124;Alias, String): String&#124;Unit](#get-string) | Gets a string by key | 100 |
| 9 | [getStringValue(Address&#124;Alias, String): String](#get-string-value) | Gets a string by key. Throws an exception if there is no data | 100 |
| 10 | [wavesBalance(Address&#124;Alias): Int](#waves-balance) | Gets account balance in [WAVES](/blockchain/token/waves.md) | 109 |

## assetBalance(Address|Alias, ByteVector): Int<a id="asset-balance"></a>

Gets account balance by token ID.

``` ride
assetBalance(addressOrAlias: Address|Alias, assetId: ByteVector): Int
```

### Parameters

#### `addressOrAlias`: Address|Alias

[Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the account.

#### `assetId`: ByteVector

Token ID.

## getBinary(Address|Alias, String): ByteVector|Unit<a id="get-binary"></a>

Gets an array of bytes by key.

``` ride
getBinary(addressOrAlias: Address|Alias, key: String): ByteVector|Unit
```

### Parameters

#### `addressOrAlias`: Address|Alias

[Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the account.

#### `key`: String

The key.

## getBinaryValue(Address|Alias, String): ByteVector<a id="get-binary-value"></a>

Gets an array of bytes by key. Throws an exception if there is no data.

``` ride
getBinaryValue(addressOrAlias: Address|Alias, key: String): ByteVector
```

### Parameters

#### `addressOrAlias`: Address|Alias

[Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the account.

#### `key`: String

The key.

## getBoolean(Address|Alias, String): Boolean|Unit<a id="get-boolean"></a>

Gets a boolean value by key.

``` ride
getBoolean(addressOrAlias: Address|Alias, key: String): Boolean|Unit
```

### Parameters

#### `addressOrAlias`: Address|Alias

[Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the account.

#### key: String

The key.

## getBooleanValue(Address|Alias, String): Boolean<a id="get-boolean-value"></a>

Gets a boolean value by key. Throws an exception if there is no data.

``` ride
getBooleanValue(addressOrAlias: Address|Alias, key: String): Boolean
```

### Parameters

#### addressOrAlias: Address|Alias

[Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the account.

#### key: String

The key.

## getInteger(Address|Alias, String): Int|Unit<a id="get-integer"></a>

Gets an integer by key.

``` ride
getInteger(addressOrAlias: Address|Alias, key: String): Int|Unit
```

### Parameters

#### addressOrAlias: Address|Alias

[Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the account.

#### key: String

The key.

## getIntegerValue(Address|Alias, String): Int<a id="get-integer-value"></a>

Gets an integer by key. Throws an exception if there is no data.

``` ride
getIntegerValue(addressOrAlias: Address|Alias, key: String): Int
```

### Parameters

#### addressOrAlias: Address|Alias

[Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the account.

#### key: String

The key.

## getString(Address|Alias, String): String|Unit<a id="get-string"></a>

Gets a string by key.

``` ride
getString(addressOrAlias: Address|Alias, key: String): String|Unit
```

### Parameters

#### addressOrAlias: Address|Alias

[Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the account.

#### key: String

The key.

## getStringValue(Address|Alias, String): String<a id="get-string-value"></a>

Gets a string by key. Throws an exception if there is no data.

``` ride
getStringValue(addressOrAlias: Address|Alias, key: String): String
```

### Parameters

#### addressOrAlias: Address|Alias

[Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the account.

#### key: String

The key.

## wavesBalance(Address|Alias): Int<a id="waves-balance"></a>

Gets account balance in [WAVES](/blockchain/token/waves.md).

``` ride
wavesBalance(addressOrAlias: Address|Alias): Int
```

### Parameters

#### addressOrAlias: Address|Alias

[Address](/blockchain/account/address.md) or [alias](/blockchain/account/alias.md) of the account.
