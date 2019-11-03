# WavesC

Biblioteca C para trabalhar com Waves.

# Build

Este pacote usa o `cmake` 2.8+ para construção e depende do pacote` openssl` dev.

Para construí-lo no **linux** deve instalar o `openssl-dev` e apenas chamar o cmake e fazer

```js
cmake .
make
```

No **Mac OS X** você deve [instalar openssl usando brew](http://brewformulas.org/Openssl) e depois passar o caminho openssl como parâmetro cmake:

```js
brew install openssl
cmake -DOPENSSL_ROOT_DIR=/usr/local/opt/openssl .
make
```

Para um começo rápido, pegamos o [bcdev's waves\_vanity source code](https://github.com/bcdev-/waves_vanity) código fonte como base.

