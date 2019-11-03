# Script Performance Tests
We conducted performance tests for all aspects of our scripts. For this purpose, we developed an benchmark subproject with [JMH](http://openjdk.java.net/projects/code-tools/jmh/), that computes a complexity of scripts after compilation phase by AST (Abstract Syntax Tree) traversal in special _complexity units_. _Complexity units_ is a measure of the script's relative cost: we found out the most expensive operation in terms of computational complexity and defined it equal to 100 complexity units. In every test, we conducted 10 tests and calculated the average cost. The performance tests' results are the following:
## Environment Functions Benchmark 
Functions used in the script that do not refer to the state:

| Benchmark | Score | Error |
| ------------- | ------------- | ------------- |
|`addressFromPublicKey`| 15\,457.000 ns/op | ± 1\,551.809 ns/op|          
|`addressFromString_full`|	28\,437.102 ns/op	| ± 706.255 ns/op|
|`base58_26_encode`	|2\,207.600 ns/op	|± 34.466 ns/op|
|`base58_decode_full`|	18\,645.203 ns/op|	± 415.800 ns/op|
|`base58_encode`|	12\,243.466 ns/op |	± 197.687 ns/op|
|`blake2b256`	| 7\,991.033 ns/op	| ± 438.591 ns/op|
|`curve25519_full`	| 628\,001.764 ns/op	| ± 35\,875.443 ns/op|
|`curve25519_generateKeypair`|	95\,835.192 ns/op |	± 4\,453.657 ns/op|
|`curve25519_sign_full`	| 303\,429.901 ns/op |	± 6\,683.234 ns/op|
|`keccak256`	| 27\,588.387 ns/op	| ± 1\,002.837 ns/op|
|`random_bytes_500`	| 1\,188.761 ns/op |	± 41.945 ns/op|
|`secureHash`	| 10\,292.214 ns/op |	± 233.883 ns/op|
|`sha256`	| 3\,633.718 ns/op |	± 142.837 ns/op|

Where:
 - The `_full` suffix means that we create an array of N random bytes, then we either code it and decode it, or we sign it and check it.
 - `base58_26_encode` - the test for 26 bytes.
 - `base58_decode_full`,` base58_encode` - tests for 64 bytes.
 - `curve25519_sign_full`, `curve25519_full` - tests for 512 bytes.
## Waves Environment Benchmark
Functions used in the script that refer to the state:

| Benchmark|Score                        |Error                      |
|----------------|-------------------------------|-----------------------------|
|`accountBalanceOf_asset`| 10\,887.166 ns/op|± 490.024 ns/op|
|`accountBalanceOf_waves`|12\,837.177 ns/op|± 46.377 ns/op|
|`data`|12\,154.862 ns/op|± 666.479 ns/op|
|`resolveAddress`|7\,925.741 ns/op|± 114.994 ns/op|
|`transactionById`|70\,485.131 ns/op|± 3\,587.244 ns/op|
|`transactionHeightById`|66\,644.724 ns/op|± 1\,663.940 ns/op|

## Language Serde Benchmark
Processes of serialization and deserialization of the script:

| Benchmark|Score                        |Error                      |
|----------------|-------------------------------|-----------------------------|
|`serialize`| 572\,441.780 ns/op|± 241\,711.329 ns/op|
|`deserialize`| 492\,556.077 ns/op|± 46\,122.237 ns/op|
## Script Estimator Benchmark

In this test, we used a script, which size is about 1 kB. It contains sums of 100 numbers and one comparison operation. Here the script's complexity computation is presented:

| Benchmark|Score                        |Error                      |
|----------------|-------------------------------|-----------------------------|
|`apply`| 130\,286.995 ns/op|± 3\,544.940 ns/op|

## Script Evaluator Benchmark
The execution time of the script described in the previous section:

| Benchmark|Score                        |Error                      |
|----------------|-------------------------------|-----------------------------|
|`apply`| 172\,482.796 ns/op|± 4\,170.202 ns/op|


## State Synthetic Benchmark
Comparison the applying of a block with 5\,000 tx for a scripted account and for regular one:

| Benchmark|Score                        |Error                      |
|----------------|-------------------------------|-----------------------------|
|`appendBlock_smart`| 2\,861.589 ms/op|± 108.005 ms/op|
|`appendBlock` | 2\,069.613 ms/op|± 449.040 ms/op|

## Results
We found the most expensive functions:
 - base58
 - sigVerify

As a result, we define the following constraint for a script cost: a script must have a size no more 8 kB and must be faster than 20 executions of `sigVerify`, that is most expensive operation.
The fixed fee for each scripted unit is equal to 400\,000 _wavelets_ (Waves coins, 100\,000\,000 wavelets = 1 Wave), i.e. if you use a scripted asset (smart asset) then you pay 400\,000 wavelets, if you also have a scripted transaction then you have to pay 2 * 400\,000 wavelets. 

