# Built-in variables

A **built-in variable** is a [variable](/ride/variables.md) of the [script context](/ride/script/script-context.md).

## List of built-in variables
<table style="width:100%">
  <tr>
    <th align="left">#</th>
    <th align="left">Name</th>
    <th align="left">Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Buy</td>
    <td><a href="/blockchain/order.md">Order</a> type</td>
  </tr>
  <tr>
    <td>2</td>
    <td>
      <ul>
        <li>CEILING</li>
        <li>DOWN</li>
        <li>FLOOR</li>
        <li>HALFDOWN</li>
        <li>HALFEVEN</li>
        <li>HALFUP</li>
        <li>UP</li>
      </ul>
    </td>
    <td>
      <a href="/ride/functions/built-in-functions/math-functions.md">Rounding methods</a> used in the <a href="/ride/functions/built-in-functions/math-functions.md">log</a> and <a href="/ride/functions/built-in-functions/math-functions.md">pow</a> functions
    </td>
  </tr>
  <tr>
    <td>3</td>
    <td>height</td>
    <td><a href="/blockchain/blockchain/blockchain-height.md">Blockchain height</a> at the script execution time</td>
  </tr>
  <tr>
    <td>4</td>
    <td>lastBlock</td>
    <td>Information about the last <a href="/blockchain/block.md">block</a> of the blockchain at the script execution time</td>
  </tr>
  <tr>
    <td>5</td>
    <td>nil</td>
    <td>Variable that contains an empty <a href="/ride/data-types/list.md">list.</a><br>The variable is used for creating lists. For example, instead of:<br>
<pre>
<code class=“lang-ride”>
    let a = [5,6]
</code>
</pre>
    you can write:
<pre>
<code class=“lang-ride”>
    let b = 5::6::nil
</code>
</pre>
      Lists are created using both methods. The first method is a syntactic sugar      
    </td>
  </tr>
  <tr>
    <td>6</td>
    <td>
      <ul>
        <li>NOALG</li>
        <li>MD5</li>
        <li>SHA1</li>
        <li>SHA224</li>
        <li>SHA256</li>
        <li>SHA384</li>
        <li>SHA512</li>
        <li>SHA3224</li>
        <li>SHA3256</li>
        <li>SHA3384</li>
        <li>SHA3512</li>
      </ul>
    </td>
    <td>
      Variables that are passed as the first parameter to the <a href="/ride/functions/built-in-functions/verification-functions.md">rsaVerify</a> function
    </td>
  </tr>
  <tr>
    <td>7</td>
    <td>Sell</td>
    <td><a href="/blockchain/order.md">Order</a> type</td>
  </tr>
  <tr>
    <td>8</td>
    <td>this</td>
    <td>Transaction sender <a href="/blockchain/account/address.md">address</a> or information about the <a href="/blockchain/token.md">token</a></td>
  </tr>
  <tr>
    <td>9</td>
    <td>tx</td>
    <td><a href="/blockchain/transaction.md">Transaction</a> or <a href="/blockchain/order.md">order</a></td>
  </tr>
  <tr>
    <td>10</td>
    <td>unit</td>
    <td>Variable that contains an object of <a href="/ride/data-types/unit.md">Unit</a> type.<br><b>Example 1</b><br> the <code>deposit</code> function transfers 5 <a href="/blockchain/token/wavelet.md">WAVELETs</a> to the account, that <a href="/ride/functions/callable-function.md">called</a> this function.

<pre>
<code class=“lang-ride”>
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

@Callable(inv)
func deposit() = {
  TransferSet([
    ScriptTransfer(inv.caller, 5, unit) # Transfer 5 WAVELETs to the inv.caller account. Instead of the token ID the unit is specified
  ])
}
</code>
</pre>

WAVES does not have a <a href="/blockchain/token/token-id.md">token ID</a>; the <code>unit</code> is passed instead of the ID.<br><b>Example 2</b><br>The <a href="/ride/functions/built-in-functions/blockchain-functions.md"><tt>assetInfo</tt></a> function requests information about the token by its ID. Next, the <code>isDefined</code> function checks that a token with this ID exists on the blockchain.
<pre>
<code class=“lang-ride”>
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}

let asset = assetInfo(base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS')
token.isDefined()
</code>
</pre>
Instead of calling the <code>isDefined</code> function, you may use the equality with <code>unit</code>.
<pre>
<code class=“lang-ride”>
asset != unit
# Expression asset != unit is equivalent to the expression token.isDefined()
</code>
</pre>
  </td>
  </tr>
</table>
