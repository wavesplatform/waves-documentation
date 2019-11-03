# Transaction validation

## Default transaction validation

After the creation of a Waves account, each outgoing from this account transaction is checked for validity. If a transaction is valid, then it makes it to a generated block in the blockchain, if not — it's rejected by the blockchain.

By default, _only_ the fact that an outgoing transaction belongs to the owner of the account it was sent from, is checked. To check that, the transaction's binary data, the account owner's public key and the digital signature of the transaction are run through special `sigVerify` function. If the `sigVerify` function returns `true` — the transaction is considered valid, otherwise — invalid.

## Transaction validation using account script

If the validation logic goes beyond the detection of transaction ownership, then a programmer writes an [account script](/ride/script/script-types/account-script.md) that contains that logic. This script is attached to the account making this account a [smart account](/blockchain/account/smart-account.md). Now it's account script's duty to validate all the outgoing transactions from the account. Still, the `sigVerify` function is widely used by programmers inside of the account script.
