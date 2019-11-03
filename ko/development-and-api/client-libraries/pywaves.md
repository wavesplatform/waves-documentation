# PyWaves
PyWaves is an object-oriented Python interface to the Waves blockchain platform. The library is developing by community and open source. Latest documentation and examples can be found in [Github repository](https://github.com/PyWaves/PyWaves/). 

## Getting Started

You can install PyWaves using:

    pip install pywaves

## Documentation

The library utilizes classes to represent various Waves data structures:

- pywaves.Address
- pywaves.Asset
- pywaves.AssetPair
- pywaves.Order

#### Code Example
```python
import pywaves as pw

myAddress = pw.Address(privateKey='CtMQWJZqfc7PRzSWiMKaGmWFm4q2VN5fMcYyKDBPDx6S')
otherAddress = pw.Address('3PNTcNiUzppQXDL9RZrK3BcftbujiFqrAfM')
myAddress.sendWaves(otherAddress, 10000000)
myToken = myAddress.issueAsset('Token1', 'My Token', 1000, 0)
while not myToken.status():
	pass
myAddress.sendAsset(otherAddress, myToken, 50)

```



### Source code
[PyWaves Github repository](https://github.com/PyWaves/PyWaves/)