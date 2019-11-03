# Chain ID

A **chain ID** is a blockchain setting that affects the forming of an [address](/blockchain/account/address.md).

The linkage in the [transaction binary format](/blockchain/binary-format/transaction-binary-format.md) between the address and the chain ID makes it impossible to move transactions between different [blockchain networks](/blockchain/blockchain-network.md).

Any [ASCII](https://en.wikipedia.org/wiki/ASCII) characters except for the [control characters](https://en.wikipedia.org/wiki/ASCII#Control_characters) is used as a chain ID. The chain ID value is set by the `address-scheme-character` setting in the node configuration file.
