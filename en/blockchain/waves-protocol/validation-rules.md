# Account validation

Account is valid then it is a valid Base58 string and the length of corresponding array is 26 bytes. Version of address \(1st byte\) is equal to 1. The network byte \(2nd byte\) is equal to network ID. The checksum of address \(last 4 bytes\) is correct.

# Transactions validation

## Transfer transaction

Transfer transaction is valid then:

1. Recipient address is valid. If not, _InvalidAddress _validation result will be returned.
2. Size of attachment is less or equal then _MaxAttachementSize _\(140 bytes\). In other case _TooBigArray _validation result will be returned.
3. Transaction's amount is more then 0, otherwise _NegativeAmount _validation result is returned.
4. Transaction's fee is positive, otherwise _InsufficientFee _validation result is returned.
5. Adding fee to amount does not lead to Long overflow. In case of Long overflow _OverflowError _validation result will be returned.
6. Transaction's signature is valid, otherwise _InvalidSignature _validation result is returned.

## Issue transaction

Issue transaction is valid then:

1. Sender's address is valid. If not, _InvalidAddress _validation result will be returned.
2. Quantity of asset is positive, otherwise _NegativeAmount _validation result is returned.
3. Transaction's fee is more or equal to _MinFee _\(100000000 wavelets = 1 Wave\), in other case _InsufficientFee _validation result is returned.
4. Size of description is less or equal to _MaxDescriptionLength _\(1000 bytes\), otherwise _TooBigArray _is returned.
5. Size of name is more or equal to _MinAssetNameLength _and less or equal to _MaxAssetNameLength_, in other case _InvalidName _validation result will be returned.
6. Decimals is positive and less or equal to _MaxDecimals_, in other case _TooBigArray _is returned.
7. Transaction's signature is valid, otherwise _InvalidSignature _validation result is returned.

## Reissue transaction

Reissue transaction is valid then:

1. Sender's account is valid. Otherwise _InvalidAddress _validation result is returned.
2. Quantity is positive, in other case _NegativeAmount _validation result will be returned.
3. Transaction's fee is positive, in other case _InsufficienFee _result will be returned.
4. Transaction's signature is valid, otherwise _InvalidSignature _validation result is returned.

# Block validations

Block is valid then:

1. Block chain contains referenced block.
2. Block's signature is valid.
3. Block's consensus data is valid.
4. Block's transactions are valid.

## Consensus data validation

Block's consensus data is valid then:

1. Block creation time is no more then _MaxTimeDrift _\(15 seconds\) in future.
2. Block's transactions are sorted. This rule works only after 1477958400000 on Testnet and 1479168000000 on Mainnet.
3. Block chain contains parent block or block chain height is equal 1.
4. Block's base target is valid.
5. Block's generator signature is valid.
6. Generator's balance is more or equal then _MinimalEffectiveBalanceForGeneration _\(1000000000000 wavelets\). This rule always works on Testnet and works only after 1479168000000 on Mainnet.
7. Block's hit is less then calculated block's target.

## Transactions data validation

Block's transactions are valid then:

1. Creation time of every transaction in block is less then block's creation time no more then on _MaxTxAndBlockDiff _\(2 hours\).
2. All transactions are valid against state.

### Transaction validation against state

Transactions are valid then:

1. Transaction is valid by transaction validation rules.
2. Transaction creation time more then block's creation time no more then on _MaxTimeForUnconfirmed _\(90 minutes\). This limitation works always on Testnet and only after 1479168000000 on Mainnet.
3. Application of transaction to accounts should not lead to temporary negative balance. This rule works after 1479168000000 on Mainnet and after 1477958400000 on Testnet.
4. Changes made by transaction should be sorted by their amount. This rule works on both Mainnet and Testnet after 1479416400000.
5. Application of transaction's amount to current balance should not lead to Long overflow.
6. After application of all block's transactions affected balances should not be negative.

# Unconfirmed Transactions Pool validation

Transaction could be inserted in Unconfirmed Transactions Pool then:

1. Transaction is valid by transaction validation rules.
2. If transaction's fee is more or equal to a minimum fee that was set by the owner of a node.
3. There is a space for a new transaction if Unconfirmed Transactions Pool. By default the pool is limited by 1000 transactions.
4. Unconfirmed Transactions Pool does not contain transaction with the same ID.
5. Transaction created not later then _MaxTimeForUncofimed _\(90 minutes\) after the last block was created.
6. Transaction creation time is no more then _MaxTimeDrift _\(15 seconds\) in future.
7. Transaction is valid against state.



