# Implementation Details

While the user writes **Waves Contracts** code in the high-level language, Waves Contracts execution engine is a straightforward evaluator of **low-level expression tree** within context. In order to achieve that, there're several stages which make text script produce an execution result. These are:

1. Parsing
2. Compilation \(typechecking & compiling\).
3. Deserialization
4. Cost computation
5. Evaluation

## 1. Parsing Stage

The Parser builds **untyped Abstract Syntax Tree\(AST\)** from the **script text**. At this phase, Only syntax rules are checked such as correct variable names, function invocation with `()` and so on.

The syntax doesn't require line breaks \(`\n`\) or `;`. The full description goes as follows:

```js
number = [+-]?['0'-'9']+
string = """, [1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-]*, """
byteVector = "base58'", [123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]* , "'"
binaryOp = expr , ("||" | "&&" | "==" | "!=" | ">=" | ">" | "<" | "<=" | "+" | "-" | "*" | "%" | "/") , expr
unaryOp =  ("-" | "!") , expr
expression = binaryOp | atom
varName = {latin-numeric string strating with char, excluding keywords}
let = "let " , varName , "=" , block
block = let? , expr
if = "if" , "(" , block , ")" , "then" , block , "else" , block
ref = varName
getter = ref , "." , varName
functionCall = varName , "(" , expr* , ")"
listAccess = expr , "[" , expr* , "]"
braces = "(" , block , ")"
curlyBraces = "{" , block , "}"
atom = if | functionCall | listAccess | byteVector | string | number | braces | curlyBraces | getter | ref
```

**All available types are:**

| Types | Description |
| :--- | :--- |
| Bottom Type | NOTHING |
| Primitive Types | UNIT, LONG, BYTEVECTOR, BOOLEAN, STRING |
| Complex Types | TYPEREF\(typename\), Option\(Type\) and List\(Type\) |

**Note. **User can't create new types, only predefined ones are available.



The Parser generates AST based on the following constructs:

| Constract | Description |
| :--- | :--- |
| LET\(name, expr\) | Used to define a variable |
| REF\(name\) | Used to access its value |
| GETTER\(expr, fieldName\) | Used to access field of structure |
| FUNCTION\_CALL\(name, argExprs\) | Used to invoke a predefined function within context |
| IF\(clause, ifTrue, ifFalse\) | Used for lazy branching |
| CONST\_LONG\(long\), CONST\_BYTEVECTOR\(byteVector\),      CONST\_STRING\(string\) | Used as Leafs |
| BINARY\_OP\(EXPR, OP\_KIND, EXPR\) | Used exclusively for ease of parsing |

## 2. Compilation Stage

The **Untyped AST** is enriched with types and then they're checked according to the **function signatures**.

It operates within a context of type definitions, types of defined values and predefined function signatures.

An expression operates the base type **EXPR**, and its sub-type of **BLOCK**. Each **EXPR** has a type and is one of:

| Types | Description |
| :--- | :--- |
| LET\(name, block\) | Used to define a variable |
| GETTER\(expr, fieldName\) | Used to access field of structure |
| FUNCTION\_CALL\(name, argBlocks\) | Used to invoke a predefined function within context |
| IF\(clause, ifTrueBlock, ifFalseBlock\) | Used for Lazy branching |
| CONST\_LONG\(long\), CONST\_BYTEVECTOR\(byteVector\), CONST\_STRING\(string\), REF\(name\) | Used as Leafs |

This set doesn't include **BINARY\_OP** as well, it gets translated to **FUNCTION\_CALL**. This set doesn’t include constructs that are used exclusively for ease of parsing. The **pattern matching** mechanism is replaced by `IF` + `.isInstanceOf` call.

This step is important to validate user input so that less mistakes are made: for instance, `3 + false` is valid syntactically, but typechecker won't compile it, because `+`  function requires two arguments of type `Long`. 

The result types of each **EXPR** aren't shown to the outside and don't go to the next stage.

**Note.** The output of this stage is exactly what is sent to the blockchain.

## 3. Deserialization Stage

In  this  stage  RIDE  only  checks  syntax rules, like correct variable names, function invocation with \(\) and so on.

## 4. Cost Computation Stage

It operates within a context of type **definitions**, types of **defined values** and predefined **function signatures**.

An expression operates the base type **EXPR**, and its sub-type **BLOCK**. Each **EXPR** has a type and  this type  is one of:

* LET\(name, block\) to define a variable.
* GETTER\(expr, fieldName\) to access field of structure.
* FUNCTION\_CALL\(name, argBlocks\) to invoke a predefined function within context
* IF\(clause, ifTrueBlock, ifFalseBlock\) for lazy branching.
* Leafs:CONST\_LONG\(long\), CONST\_BYTEVECTOR\(byteVector\), CONST\_STRING\(string\), REF\(name\), TRUE, FALSE

## 5. Evaluator Stage

Evaluator operates a **typed expression tree **within a context. It traverses the low-level typed AST \(which is produced at the previous step\) and return either the **execution result** or an **execution error**.

`Context` contains:

* A map of predefined functions with implementation.
* Predefined types, e.g. structures.
* Lazy values, that can be calculated upon calls within given tree path, cannot be re-defined and they are calculated maximum once.

If the evaluator has exception results\(for instance, Long Overflow\), the script evaluation will be `false`.

