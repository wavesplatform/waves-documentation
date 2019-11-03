# List functions

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | [getElement(List[T], Int): T](#get-element) | Gets element from the [list](/ride/data-types/list.md) by index | 2 |
| 2 | [cons(T, List[T]): List[T]](#cons) | Inserts element to the beginning of the [list](/ride/data-types/list.md) | 2 |
| 3 | [size(List[T]): Int](#size) | Returns the size of the [list](/ride/data-types/list.md) | 2 |

## getElement(List[T], Int): T <a id="get-element"></a>

Gets element from the [list](/ride/data-types/list.md) by index.

``` ride
getElement(arr: List[T], pos: Int): T
```

### Parameters

#### `arr`: [List[T]](/ride/data-types/list.md)

List.

#### `pos`: Int

Index of the element.

### Examples

```ride
getElement(["Ride", "on", "Waves"], 0)  # Returns "Ride"
getElement([false, true], 1) # Returns true
```

## cons(T, List[T]): List[T] <a id="cons"></a>

Inserts element to the beginning of the [list](/ride/data-types/list.md).

``` ride
cons(head:T, tail: List[T]): List[T]
```

### Parameters

#### `head`: T

Element.

#### `tail`: [List[T]](/ride/data-types/list.md)

List.

### Examples

```ride
cons("Ride", ["on", "Waves"]) # Returns ["Ride", "on", "Waves"]
cons(1, [2, 3, 4, 5]) # Returns [1, 2, 3, 4, 5]
```

## size(List[T]): Int <a id="size"></a>

Returns the size of the [list](/ride/data-types/list.md).

``` ride
size(arr: List[T]): Int
```

### Parameters

#### `arr`: [List[T]](/ride/data-types/list.md)

List.

### Examples

```ride
size(["Ride", "on", "Waves"]) # Returns 3
```
