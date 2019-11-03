## General fields
This fields are usual for all transaction types (except GenesisTransaction, it has no `.proven` field):

* `.header` - the general information about transaction
  - `.id` - return a transaction's id ByteVector
  - `.fee` - return a transaction's fee as a Long number
  - `.timestamp` - return a transaction's unix timestamp * 1000 as Long number of ms
  - `.version` - return a transaction's version as a Long number

* `.proven` -  the general information about proven of transaction
   - `.senderPk` - return the sender public key as ByteVector
   - `.bodyBytes` - return a transaction's body as ByteVector
   - `.proofs` - return the list of proofs for transaction as List[ByteVector]
   
## Issuing

| field	| [IssueTransaction](https://docs.wavesplatform.com/waves-client/assets-management/issue-an-asset.html) |	[ReissueTransaction](https://docs.wavesplatform.com/waves-client/assets-management/issue-an-asset.html)	| [BurnTransaction](https://docs.wavesplatform.com/waves-client/assets-management/burn-an-asset.html) |
| ------------- | ------------- | ------------- | ------------- |
| quantity	| + |	+	| + |
| name	| +	| | | 
| description |	+ |		| |
| reissuable |	+ |	+	| |
| decimals |	+		| | |
| script	| + |		|||
| assetId	|	 | + | + |

* `.quantity` - return a quantity of asset which are involved in transaction as a Long number
* `.name` - return a name of asset as ByteVector
* `.description` - return a descriptions of asset as ByteVector
* `.reissuable` - return "true" is the asset are reissuable and "false" otherwise (Boolean)
* `.decimals` - return a number of simbols after comma as a Long
* `.script` - return a script if it is a smart asset and None otherwise (Option[ByteVector])
* `.assetId` - return id of an existed asset as ByteVector

## Transferring

| field | TransferTransaction	| [MassTransferTransaction](https://docs.wavesplatform.com/technical-details/mass-transfer-transaction.html)	| PaymentTransaction* |
| ------------- | ------------- | ------------- | ------------- |
| feeAssetId	| +	| +	| |
| amount	| +	|	 | + | 
| assetId	| +	| + |  | 
| recepient |	+	|	| + |
| attachment	| +	| +	| | 
| totalAmount	| |	+	| |
| transfers	|		| + | |
|transferCount|	|	+ |	| 

* PaymentTransaction - the old version of TransferTransaction
* `.feeAssetId` - return an id of fee's asset as Option[ByteVector]
* `.totalAmount` - return a total amount of transferred asset as a Long number 
* `.transfers` - return all transfer's transactions of mass transfer as List[Transfer]
* `.transferCount` - return a total count of transfers in mass transfer as a Long number 
* `.attachment` - return an arbitrary attachment of transfer as ByteVector

## Leasing
* LeaseTransaction
   - `.amount` - return an amount of asset which are leased as a Long number
   - `.recepient` -	return a recepient address as addressOrAliasType  
* LeaseCancelTransaction - 
   - `.leaseId` - return an id of cancelled leasing

## Exchange Transaction and Order 
* `ExchangeTransaction` - the transaction from DEX [Matcher](https://docs.wavesplatform.com/platform-features/decentralized-cryptocurrency-exchange-dex.html)
  - `.buyOrder` - return an order that is bought as orderType.typeRef,
  - `.sellOrder` -  return an order that is sold as orderType.typeRef,
  - `.price` - return a deal's price as a Long number
  - `.amount` - return a deal's amount as a Long number
  - `.buyMatcherFee` - return a Matcher's fee from the buy order as a Long number
  - `.sellMatcherFee` - return a Matcher's fee from the sell order as a Long number
* `Order` - an order for Matcher's order book   
  - `senderPublicKey` - return ByteVector, sender's public key
  - `.matcherPublicKey` - return ByteVector, matcher public key
  - `.assetPair` - return assetPairType.typeRef
  - `.orderType` - return the order type: buyType or sellType 
  - `.price` - return the order price as Long number
  - `.amount` - return the number of assets assigned by this order as Long number
  - `.timestamp` - return the order's placement unix timestamp * 1000 as Long number of ms
  - `.expiration` - return the order's expiration timestamp as Long number
  - `.matcherFee` - return the matcher fee for this order as Long number
  - `.signature` - return the signature of order's sender as ByteVector
    
## Other
* `CreateAliasTransaction` - create a personal [Alias](https://docs.wavesplatform.com/waves-client/account-management/creating-an-alias.html)
   - `.alias` - return an alias name as String
* GenesisTransaction - 
   - `.amount` - return an initial amount of assets as a Long number
   - `.recipient` - return an address for initial assets placing as Address
* DataTransaction -[Here](https://docs.wavesplatform.com/technical-details/data-transaction.html) you can find more details about Data Transaction.
   - `.data` - List[DataEntriesType]
* SetScriptTransaction - sets the script which veri es all outgoing transactions. The set script can be changed by another SetScriptTransaction call unless it's prohibited by a previously set script.
   - `.script` - Option[ByteVector]
* SponsorFeeTransaction - [Here](https://docs.wavesplatform.com/technical-details/sponsored-fee.html)  you can find more details aboutfee sponsorship.
   - `.assetId` - return an asset id as ByteVector
   - `.minSponsoredAssetFee` - return a minimal sponsored asset fee as Option[Long]
 
## Predefined functions

WavesContracts standard library not only contains predefined data types and instances, but also predefined functions that can be called. Some of them are pure, others can access blockchain state.


* Native Waves context functions:
   - `addressFromRecipient` : `Option(ByteVector) => addressType`
   - `transactionById` : `ByteVector => Option[Transaction]` - provides tx in blockchain by id
   - `assetBalance`: `addressOrAliasType => Long` - provide balance info for any account
   - `transactionHeightById`: `ByteVector => UNION(LONG, UNIT)` - provides height of tx in blockchain by id
   
* User's Waves context functions
   - `addressFromPublicKey` : `ByteVector => addressType`
   - `addressFromString` : `String => UNION(addressType.typeRef, UNIT)`
   - `wavesBalance`: `addressOrAliasType => Long` - provide balance info for any account
 
* `DataTransaction`can set/overwrite a typed primitive value for a key on account of sender. These fields can be accessed from         WavesContracts via:
    
   - `getInteger`:`(accountAddress: ByteVector, key: String) => Option[Long]`
   - `getBoolean`:`(accountAddress: ByteVector, key: String) => Option[Boolean]`
   - `getBinary`:`(accountAddress: ByteVector, key: String) => Option[ByteVector]`
   - `getString`:`(accountAddress: ByteVector, key: String) => Option[String]`
  
* Crypto functions:
	- `sigVerify`:`(body: ByteVector, signature: ByteVector, pubKey: ByteVector) => Boolean`
	- `keccak256`,`blake2b256`, `sha256` : `ByteVector => ByteVector`
	- `fromBase58String'`, `fromBase64String'`: `String => ByteVector` 		
	- `toBase58String'`, `toBase64String'`: `ByteVector => String` 	
