# Функции строки

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [drop(String, Int): String](#drop)  | Удаляет первые `n` символов строки | 1 |
| 2 | [dropRight(String, Int): String](#drop-right)  | Удаляет последние `n` символов строки | 19 |
| 3 | [indexOf(String, String): Int&#124;Unit](#index-of-first)  | Возвращает индекс первого вхождения подстроки  | 20 |
| 4 | [indexOf(String, String, Int): Int&#124;Unit](#index-after-index)  | Возвращает индекс первого вхождения подстроки после указанного индекса | 20 |
| 5 | [size(String): Int](#size)  | Возвращает длину строки | 1 |
| 6 | [split(String, String): List[String]](#split)  | Разбивает строку на список подстрок, используя разделитель | 100 |
| 7 | [take(String, Int): String](#take)  | Возвращает первые `n` символов строки | 1 |
| 8 | [takeRight(String, Int): String](#take-right)  | Возвращает последние `n` символов строки | 19 |

## drop(String, Int): String<a id=drop></a>

Удаляет первые `n` символов строки.

``` ride
drop(xs: String, number: Int): String
```

### Параметры

#### `xs`: String

Строка.

#### `number`: Int

Число `n`.

### Примеры

```ride
drop("Apple", 0) # Возвращает "Apple"
drop("Apple", 1) # Возвращает "pple"
drop("Apple", 3) # Возвращает "le"
drop("Apple", 5) # Возвращает пустую строку
drop("Apple", 15) # Возвращает пустую строку
```

## dropRight(String, Int): String<a id=drop-right></a>

Удаляет последние `n` символов строки.

``` ride
dropRight(xs: String, number: Int): String
```

### Параметры

#### `xs`: String

Строка.

#### `number`: Int

Число `n`.

### Примеры

```ride
dropRight("Apple", 0) # Возвращает "Apple"
dropRight("Apple", 1) # Возвращает "Appl"
dropRight("Apple", 3) # Возвращает "Ap"
dropRight("Apple", 5) # Возвращает пустую строку
dropRight("Apple", 15) # Возвращает пустую строку
```

## indexOf(String, String): Int&#124;Unit<a id=index-of></a>

Возвращает индекс первого вхождения подстроки.

``` ride
indexOf(str: String, substr: String): Int|Unit
```

### Параметры

#### `str`: String

Строка.

#### `substr`: String

Подстрока.

### Примеры

```ride
indexOf("Apple","ple") # Возвращает 3
indexOf("Apple","le") # Возвращает 4
indexOf("Apple","e") # Возвращает 5
```

## indexOf(String, String, Int): Int&#124;Unit<a id=index-of></a>

Возвращает индекс первого вхождения подстроки после указанного индекса.

``` ride
indexOf(str: String, substr: String, offset: Int): Int|Unit
```

### Параметры

#### `str`: String

Строка.

#### `substr`: String

Подстрока.

#### `offset`: Int

Индекс.

### Примеры

```ride
indexOf("Apple","ple", 1) # Возвращает 2
indexOf("Apple","le", 2) # Возвращает 3
indexOf("Apple","e", 3) # Возвращает 4
```

## size(String): Int<a id=size></a>

Возвращает длину строки.

``` ride
size(xs: String): Int
```

### Параметры

#### `xs`: String

Строка.

### Примеры

```ride
size("Ap") # Возвращает 2
size("Appl") # Возвращает 4
size("Apple") # Возвращает 5
```

## split(String, String): List[String]<a id=split></a>

Разбивает строку на список подстрок, используя разделитель.

``` ride
split(str: String, separator: String): List[String]
```

### Параметры

#### `str`: String

Строка.

#### `separator`: Int

Разделитель.

### Примеры

```ride
split("A.p.p.l.e", ".") # Возвращает ["A", "p", "p", "l", "e"]
split("Apple", ".") # Возвращает ["Apple"]
split("Apple", "") # Возвращает ["A", "p", "p", "l", "e"]
split("Ap.ple", ".") # Возвращает ["Ap","ple"]
```

## take(String, Int): String<a id=take></a>

Возвращает первые n символов строки.

``` ride
take(xs: String, number: Int): String
```

### Параметры

#### `xs`: String

Строка.

#### `number`: Int

Число `n`.

### Примеры

```ride
take("Apple", 0) # Возвращает пустую строку
take("Apple", 1) # Возвращает "A"
take("Apple", 3) # Возвращает "App"
take("Apple", 5) # Возвращает "Apple"
take("Apple", 15) # Возвращает "Apple"
take("Apple", -10) # Возвращает ""
```

## takeRight(String, Int): String<a id=take-right></a>

Возвращает последние `n` символов строки.

``` ride
takeRight(xs: String, number: Int): String
```

### Параметры

#### `xs`: String

Строка.

#### `number`: Int

Число `n`.

### Примеры

```ride
takeRight("Apple", 0) # Возвращает пустую строку
takeRight("Apple", 1) # Возвращает "A"
takeRight("Apple", 3) # Возвращает "ple"
takeRight("Apple", 5) # Возвращает "Apple"
takeRight("Apple", 15) # Возвращает "Apple"
```
