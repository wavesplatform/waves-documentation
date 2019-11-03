# Функции списка

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [getElement(List[T], Int): T](#get-element)  | Получает элемент [списка](/ride/data-types/list.md) по индексу | 2 |
| 2 | [cons(T, List[T]): List[T]](#cons)  | Вставляет элемент в начало [списка](/ride/data-types/list.md) | 2 |
| 3 | [size(List[T]): Int](#size)  | Возвращает размер [списка](/ride/data-types/list.md) | 2 |

## getElement(List[T], Int): T<a id="get-element"></a>

Получает элемент [списка](/ride/data-types/list.md) по индексу.

``` ride
getElement(arr: List[T], pos: Int): T
```

### Параметры

#### `arr`: [List[T]](/ride/data-types/list.md)

Список.

#### `pos`: Int

Индекс элемента.

### Примеры

```ride
getElement(["Ride", "on", "Waves"], 0)  # Возвращает "Ride"
getElement([false, true], 1) # Возвращает true
```

## cons(T, List[T]): List[T] <a id="cons"></a>

Вставляет элемент в начало [списка](/ride/data-types/list.md).

``` ride
cons(head:T, tail: List[T]): List[T]
```

### Параметры

#### `head`: T

Элемент.

#### `tail`: [List[T]](/ride/data-types/list.md)

Список.

### Примеры

```ride
cons("Ride", ["on", "Waves"]) # Возвращает ["Ride", "on", "Waves"]
cons(1, [2, 3, 4, 5]) # Возвращает [1, 2, 3, 4, 5]
```

## size(List[T]): Int <a id="size"></a>

Возвращает размер [списка](/ride/data-types/list.md).

``` ride
size(arr: List[T]): Int
```

### Параметры

#### `arr`: [List[T]](/ride/data-types/list.md)

Список.

### Примеры

```ride
size(["Ride", "on", "Waves"]) # Возвращает 3
```
