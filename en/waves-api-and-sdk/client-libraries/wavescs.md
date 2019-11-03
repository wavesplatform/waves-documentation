# WavesCS
A C# library for interacting with the Waves blockchain

Supports node interaction, offline transaction signing, Matcher orders, and creating addresses and keys.

## Getting Started

You can download **WavesCS.dll** from [releases](https://github.com/wavesplatform/WavesCS/releases) and add it to your project's References and in your code as:
```
using WavesCS;
```

If you want to work with full WavesCS project as contributor you should use also all crypto **.dll** from releases in your References.

Target framework .NET Framework 4.5.1
## Documentation

The library utilizes classes to represent various Waves data structures and encoding and serialization methods:

- WavesCS.Node
- WavesCS.Order
- WavesCS.OrderBook
- WavesCS.PrivateKeyAccount
- WavesCS.Transaction
- WavesCS.AddressEncoding
- WavesCS.Base58
- WavesCS.Utils


#### Code Example
Code examples are in [WavesCSTests](https://github.com/wavesplatform/WavesCS/tree/master/WavesCSTests) project.

### Source code
[WavesCS Github repository](https://github.com/wavesplatform/WavesCS)
