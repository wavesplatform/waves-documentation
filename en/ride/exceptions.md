# Exceptions

You can throw exceptions using `throw` function:

```ride
func main(amount: Int) = {
   if (amount > 0)
   then
        "Done!"
   else
        throw("Error!")
}
```

The return type of `throw` is [Nothing](/ride/data-types.md).

There is no exception handling in RIDE — after an exception has been thrown, the script will stop its execution; the transaction will be considered as failed and will not be included in the block.
