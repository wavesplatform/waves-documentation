# PyWaves
PyWaves é uma interface Python orientada a objetos para a plataforma blockchain Waves. A biblioteca está sendo desenvolvida pela comunidade e pelo código aberto. 
A documentação e os exemplos mais recentes podem ser encontrados em [Github repository](https://github.com/PyWaves/PyWaves/). 

## Começando

Você pode instalar o PyWaves usando:

    pip install pywaves

## Documentação

A biblioteca utiliza classes para representar várias estruturas de dados do Waves:

- pywaves.Address
- pywaves.Asset
- pywaves.AssetPair
- pywaves.Order

#### Exemplo de código
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



### Código fonte
[PyWaves Github repository](https://github.com/PyWaves/PyWaves/)
