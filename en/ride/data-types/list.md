# List

The **List** is a keyword of the list data type.

Lists support [concatenation](https://en.wikipedia.org/wiki/Concatenation), as well as adding operations to the beginning and end of the list.

| Operation  | Symbol  | Complexity  |
|---|---|---|
| Concatenation  | ++  | 10  |
| Adding the element to the end of the list  | :+  | 3  |
| Adding the element to the beginning of the list  | ::  | 3  |

The same list can store different types of data.

When two lists are concatenated or an item is added to the list, their types are combined.

The maximum size of the list as a result of these operations cannot exceed 1000 elements.

## Example

```ride
let intList  = [1, 2]             # List[Int]
let strList  = ["3", "4"]         # List[String]
let joined   = intList ++ strList # List[Int|String]
let appended = joined :+ true     # List[Boolean|Int|String]
let inner    = intList :: joined  # List[Int|List[Int]|String]
```
