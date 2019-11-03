# Implementation Details

While the user writes WavesContracts code in high-level language, Waves Contracts execution engine is a straightforward evaluator of low-level expression tree within context. In order to achieve that, there're several stages which make text script produce an an execution result. These are:

1. Parsing.
2. Typechecking & Compiling.
3. Evaluating.

## 1. Parsing Stage

Parser builds untyped Abstract Syntax Tree\(AST\) from script text. Only syntax rules are checked at this phase, like correct variable names, function invocation with `()` and so on.

The syntax doesn't require line breaks \(`\n`\) or `;`. The full description goes as follows:

```
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

All types available are:

| Types | Description |
| :--- | :--- |
| Bottom Type | NOTHING |
| Primitive Types | UNIT, LONG, BYTEVECTOR, BOOLEAN, STRING |
| Complex Types | TYPEREF\(typename\), Option\(Type\) and List\(Type\) |

**Note. **User can't create new types, only predefined ones are available.

Parser generated AST is based on the following constructs:

| Constract | Description |
| :--- | :--- |
| LET\(name, expr\) | Used to define a variable |
| REF\(name\) | Used to access its value |
| GETTER\(expr, fieldName\) | Used to access field of structure |
| FUNCTION\_CALL\(name, argExprs\) | Used to invoke a predefined function within context |
| IF\(clause, ifTrue, ifFalse\) | Used for lazy branching |
| CONST\_LONG\(long\), CONST\_BYTEVECTOR\(byteVector\),      CONST\_STRING\(string\) | Used as Leafs |
| BINARY\_OP\(EXPR, OP\_KIND, EXPR\) | Used exclusively for ease of parsing |

## 2. Type Checking and Compiling Stage

Untyped AST is enriched with types, types are checked, according to function signatures. It operates within a context of type definitions, types of defined values and predefined function signatures. An expression operates **BLOCK**, which consists of **EXPRs**. Each **EXPR** has a type and is one of:

| Types | Description |
| :--- | :--- |
| LET\(name, block\) | Used to define a variable |
| GETTER\(expr, fieldName, resultTtype\) | Used to access field of structure |
| FUNCTION\_CALL\(name, argBlocks, resultType\) | Used to invoke a predefined function within context |
| IF\(clause, ifTrueBlock, ifFalseBlock, resultType\) | Used for Lazy branching |
| CONST\_LONG\(long\), CONST\_BYTEVECTOR\(byteVector\), CONST\_STRING\(string\), REF\(name, resultType\) | Used as Leafs |

These are very similar to those in previous step, but they are typed\(for example, Untyped `REF` is enriched with type, derived from right-side expression\). This set doesn't include `BINARY_OP` as well, it gets translated to `FUNCTION_CALL`. This set doesn’t include constructs that are used exclusively for ease of parsing.

This step is important to validate user input so that less mistakes are made: for instance, `3 + false` is valid syntaxically, but typechecker won't compile it, because `+`  function requires two arguments of type `Long`.  
**Note.** The output of this stage is exactly what is sent to the blockchain.

This set doesn’t include constructs that are used exclusively for ease of parsing. This step is important to validate user input.

## 3. Evaluator Stage

Evaluator operates a typed expression tree within a context. It traverses the low-level typed AST, produced at the previous step, returning either the execution result or an execution error.

`Context` contains:

* A map of predefined functions with implementation.
* Predefined types, e.g. structures.
* Lazy values that can be calculated upon calls within given tree path. They cannot be re-defined.

Lazy values are calculated maximum once.

If evaluator results in exception\(for instance, Long Overflow\), result of script evaluation is `false`.

