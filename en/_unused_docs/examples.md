# Examples
{% prettylink link="https://github.com/wavesplatform/ride-examples" %}RIDE Examples on Github{% endprettylink %}

As we explained before, Functions are invoked using _**InvokeScriptTransaction**_, which specifies the account which calls the script,

The account contract whose script is called, Name and arguments of the function being called and optionally an attached payment\(the account that calls the script can pay the contract account\).

## dApp Wallet

In this example, multiple accounts can deposit their funds and safely take them back while no one can interfere with this.

A dApp wallet is implemented where you can send payment as WAVES and save them in the wallet via the callable _**deposit function**_ or you can take them back via the callable _**withdraw function**_.

_**As a first step**_, let's write a function which gets how much WAVES did the **contract issuer** give to the contract. let's name this function **getBalance\(address\) :Int. **

The getInteger function gets data that were put into the blockhain where address is `this` and the key is `toBase58String(address.bytes)`.

```js
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

func getBalance(address: String) = {
  match getInteger(this, address) {
    case a: Int => a
    case _ => 0
  }
}
```

Now we need to define a **deposit function**\(as Callable function\) where the user can send payment as WAVES and save them in the wallet.

**@Callable\(i\): **the parameter "i" is of type Invocation, Invocation data type contains contract caller and the attache payment if any.

```js
@Callable(i)
func deposit() = {
  let caller = toBase58String(i.caller.bytes) #contract caller address.
  let currentBalance = getBalance(caller) #how much WAVES did the contract issuer give to the contract.

  let payment = match(i.payment) { #even none or exact amount of the attached payment(InvokeScriptTransaction).
    case p : AttachedPayment => p
    case _ => throw("You have to provide a payment to deposit")
  }

  if (payment.assetId != unit) then throw("This wallet cannot hold assets other than WAVES")
  else {
    let newBalance = currentBalance + payment.amount
    WriteSet([DataEntry(caller, newBalance)]) #it defines what data (caller address and the new balance) will be stored in contract's account.
  }
}

# List[T] is a sequence (a : T, b : T, c : T, …).
# DataEntry (key : String, value : String | Binary | Integer | Boolean)
```

Finally we need to write the **withdraw function** \(Callable function\) where the user can take WAVES back.

```js
@Callable(i)
func withdraw(amount: Int) = {
let caller = toBase58String(i.caller.bytes) # contract caller address.
let currentBalance = getBalance(caller) # how much WAVES did the contract issuer give to the contract.

if (amount < 0) then throw("Can't withdraw negative amount") # checking if the amount is negative or not
else if (amount > currentBalance) then throw("Not enough balance") # checking enough balance
else {
let newBalance = currentBalance - amount
ScriptResult(
WriteSet([DataEntry(caller, newBalance)]),
TransferSet([ScriptTransfer(i.caller, amount, unit)]) # it defines outgoing payments.
)
}
}

# scriptResult(recipient : Address, amount : Integer, assetId : ByteArray)
```

## Dividing funds into two parts equally

In this Example, let's suppose that we need to implement a mechanism to ensure that funds in an account will be divided equally between two specific addresses Alice and Bob. To each of them we will send exactly \(\(balance - fee\) / 2\) WAVES.

Let's divide the funds into two specified addresses by calling the split function described in the script. This feature splits all contract account funds in half, sending them to two addresses, Alice and Bob. In this case, the commission is paid by the one who sends this transaction.

```js
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE CONTRACT #-}
{-# SCRIPT_TYPE ACCOUNT #-}

# predefined addresses of recipients
let Alice = Address(base58'3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8')
let Bob = Address(base58'3N78bNBYhT6pt6nugc6ay1uW1nLEfnRWkJd')

@Callable(i)
func divideAmount() = {
# calculate the amount of WAVES that will be transferred to Alice and Bob
    let transferAmount = wavesBalance(this) / 2
# the result of a contract invocation contains two transfers (to Alice and to Bob)
    TransferSet([
                ScriptTransfer(Alice, transferAmount, unit),
                ScriptTransfer(Bob, transferAmount, unit)
    ])
}
```

## InvokeScript Transaction to execute Functions

You can execute the functions by using [IDE](https://ide.wavesplatform.com/) console. Also it's available in the JS library \([waves-transactions](/waves-api-and-sdk/client-libraries/waves-transactions.md)\).

```js
broadcast(invokeScript({dApp: "Contract Address", call:{function:"divideAmount",args:[]}, payment: []}))
```
