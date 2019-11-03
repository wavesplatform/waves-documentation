# Approach and capabilities
Waves Contracts are simple predicates, answering a question whether a given transaction is allowed.

There're 2 places to restrict a transaction: AccountScript and AssetScript.

## Account Script
An account can be restricted of any outgoing transaction based on signature(s) and other supplied data, named proofs, other transaction fields, current blockchain height and an arbitrary data existing in a blockchain, like data from Oracles, which post the data via `DataTransaction`.

To setup an `AccountScript`, account needs to issue `SetScriptTransaction` which contains the predicate. Upon success every outgoing transaction will be validated not by the default mechanism of signature validation, but according to the predicate logic. `AccountScript` can further be changed or cleared if the script installed allows the new `SetScriptTransaction` to process. The default account has no script, which is equivalent(except for restrictions -- read further!) to this script:

```
sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPk)
```

Some actions are denied for ScriptedAccounts:
 - Mining, since supporting multisignature blocks looks like  unnecessary complication
 - Trading on DEX, since that would require multisignature orders i.e. a lot of work and, most importantly, unclear usability scenario. This restriction can be considered as temporary one.

For language description, capabilities and available in-script API, please refer to [Smart Contracts Language Description page](language-description.md).
