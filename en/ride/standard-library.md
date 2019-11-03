# Standard Library
{% prettylink link="https://cdn.rawgit.com/wavesplatform/waves-documentation/master/en/doc.html" %}Full Details{% endprettylink %}

# Input variables
|vars|type|doc|
|-------|---|---|
| unit| [Unit](#Unit) | Single instance value|
| height| <a>Int</a> | Current blockchain height|
| tx| [Order](#Order) [TransferTransaction](#TransferTransaction) [IssueTransaction](#IssueTransaction) [ReissueTransaction](#ReissueTransaction) [BurnTransaction](#BurnTransaction) [LeaseTransaction](#LeaseTransaction) [LeaseCancelTransaction](#LeaseCancelTransaction) [MassTransferTransaction](#MassTransferTransaction) [CreateAliasTransaction](#CreateAliasTransaction) [SetScriptTransaction](#SetScriptTransaction) [SponsorFeeTransaction](#SponsorFeeTransaction) [ExchangeTransaction](#ExchangeTransaction) [DataTransaction](#DataTransaction)|  Processing transaction|

# Common fields
|tx type|id | fee| timestamp|version|sender|senderPublicKey|bodyBytes|proofs|
|---|---|---|---|---|---|---|---|---|
|TransferTransaction|  <a>ByteVector</a> |  <a>Int</a> |  <a>Int</a> |  <a>Int</a> |  <a>Address</a> |  <a>ByteVector</a> |  <a>ByteVector</a> |  LIST[<a>ByteVector</a>]|
|IssueTransaction|  <a>ByteVector</a> |  <a>Int</a> |  <a>Int</a> |  <a>Int</a> |  <a>Address</a> |  <a>ByteVector</a> |  <a>ByteVector</a> |  LIST[<a>ByteVector</a>]|
|ReissueTransaction|  <a>ByteVector</a> |  <a>Int</a> |  <a>Int</a> |  <a>Int</a> |  <a>Address</a> |  <a>ByteVector</a> |  <a>ByteVector</a> |  LIST[<a>ByteVector</a>]|
|BurnTransaction|  <a>ByteVector</a> |  <a>Int</a> |  <a>Int</a> |  <a>Int</a> |  <a>Address</a> |  <a>ByteVector</a> |  <a>ByteVector</a> |  LIST[<a>ByteVector</a>]|
|LeaseTransaction|  <a>ByteVector</a> |  <a>Int</a> |  <a>Int</a> |  <a>Int</a> |  <a>Address</a> |  <a>ByteVector</a> |  <a>ByteVector</a> |  LIST[<a>ByteVector</a>]|
|LeaseCancelTransaction|  <a>ByteVector</a> |  <a>Int</a> |  <a>Int</a> |  <a>Int</a> |  <a>Address</a> |  <a>ByteVector</a> |  <a>ByteVector</a> |  LIST[<a>ByteVector</a>]|
|MassTransferTransaction|  <a>ByteVector</a> |  <a>Int</a> |  <a>Int</a> |  <a>Int</a> |  <a>Address</a> |  <a>ByteVector</a> |  <a>ByteVector</a> |  LIST[<a>ByteVector</a>]|
|CreateAliasTransaction|  <a>ByteVector</a> |  <a>Int</a> |  <a>Int</a> |  <a>Int</a> |  <a>Address</a> |  <a>ByteVector</a> |  <a>ByteVector</a> |  LIST[<a>ByteVector</a>]|
|SetScriptTransaction|  <a>ByteVector</a> |  <a>Int</a> |  <a>Int</a> |  <a>Int</a> |  <a>Address</a> |  <a>ByteVector</a> |  <a>ByteVector</a> |  LIST[<a>ByteVector</a>]|
|SponsorFeeTransaction|  <a>ByteVector</a> |  <a>Int</a> |  <a>Int</a> |  <a>Int</a> |  <a>Address</a> |  <a>ByteVector</a> |  <a>ByteVector</a> |  LIST[<a>ByteVector</a>]|
|ExchangeTransaction|  <a>ByteVector</a> |  <a>Int</a> |  <a>Int</a> |  <a>Int</a> |  <a>Address</a> |  <a>ByteVector</a> |  <a>ByteVector</a> |  LIST[<a>ByteVector</a>]|
|DataTransaction|  <a>ByteVector</a> |  <a>Int</a> |  <a>Int</a> |  <a>Int</a> |  <a>Address</a> |  <a>ByteVector</a> |  <a>ByteVector</a> |  LIST[<a>ByteVector</a>]|


 <h1>Transfers fields</h1><table><tr><td></td><td>PaymentTransaction</td><td>TransferTransaction</td><td>MassTransferTransaction</td><tr><tr><td>amount</td><td>  <a href="#Int">Int</a></td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>recipient</td><td>    <a href="#Address">Address</a> <a href="#Alias">Alias</a></td><td>    <a href="#Address">Address</a> <a href="#Alias">Alias</a></td><td>-</td></tr><tr><td>feeAssetId</td><td>-</td><td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td><td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td></tr><tr><td>assetId</td><td>-</td><td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td><td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td></tr><tr><td>attachment</td><td>-</td><td>  <a href="#ByteVector">ByteVector</a></td><td>  <a href="#ByteVector">ByteVector</a></td></tr><tr><td>totalAmount</td><td>-</td><td>-</td><td>  <a href="#Int">Int</a></td></tr><tr><td>transfers</td><td>-</td><td>-</td><td>  LIST[<a href="#Transfer">Transfer</a>]</td></tr><tr><td>transferCount</td><td>-</td><td>-</td><td>  <a href="#Int">Int</a></td></tr></table>

 <h1>Issuing assets fields</h1><table><tr><td></td><td>IssueTransaction</td><td>ReissueTransaction</td><td>BurnTransaction</td><td>SponsorFeeTransaction</td><tr><tr><td>quantity</td><td>  <a href="#Int">Int</a></td><td>  <a href="#Int">Int</a></td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>name</td><td>  <a href="#ByteVector">ByteVector</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td>description</td><td>  <a href="#ByteVector">ByteVector</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td>reissuable</td><td>  <a href="#Boolean">Boolean</a></td><td>  <a href="#Boolean">Boolean</a></td><td>-</td><td>-</td></tr><tr><td>decimals</td><td>  <a href="#Int">Int</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td>script</td><td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td><td>-</td><td>-</td><td>-</td></tr><tr><td>assetId</td><td>-</td><td>  <a href="#ByteVector">ByteVector</a></td><td>  <a href="#ByteVector">ByteVector</a></td><td>  <a href="#ByteVector">ByteVector</a></td></tr><tr><td>minSponsoredAssetFee</td><td>-</td><td>-</td><td>-</td><td>  OPTION[<a href="#Int">Int</a>]</td></tr></table>

 <h1>Leasing fields</h1><table><tr><td></td><td>LeaseTransaction</td><td>LeaseCancelTransaction</td><tr><tr><td>amount</td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>recipient</td><td>    <a href="#Address">Address</a> <a href="#Alias">Alias</a></td><td>-</td></tr><tr><td>leaseId</td><td>-</td><td>  <a href="#ByteVector">ByteVector</a></td></tr></table>

 <h1>Other fields</h1><table><tr><td></td><td>CreateAliasTransaction</td><td>SetScriptTransaction</td><td>ExchangeTransaction</td><td>DataTransaction</td><tr><tr><td>alias</td><td>  <a href="#String">String</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td>script</td><td>-</td><td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td><td>-</td><td>-</td></tr><tr><td>buyOrder</td><td>-</td><td>-</td><td>  <a href="#Order">Order</a></td><td>-</td></tr><tr><td>sellOrder</td><td>-</td><td>-</td><td>  <a href="#Order">Order</a></td><td>-</td></tr><tr><td>price</td><td>-</td><td>-</td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>amount</td><td>-</td><td>-</td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>buyMatcherFee</td><td>-</td><td>-</td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>sellMatcherFee</td><td>-</td><td>-</td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>data</td><td>-</td><td>-</td><td>-</td><td>  LIST[<a href="#DataEntry">DataEntry</a>]</td></tr></table>
