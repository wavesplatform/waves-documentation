# WavesC

C library for working with Waves.

# Build

This package uses `cmake` 2.8+ for building and it depends on `openssl` dev package.

To build it on **linux** should install `openssl-dev` and just call cmake and make

```js
cmake .
make
```

On **Mac OS X** you should [install openssl using brew](http://brewformulas.org/Openssl) and then pass the openssl path as cmake parameter:

```js
brew install openssl
cmake -DOPENSSL_ROOT_DIR=/usr/local/opt/openssl .
make
```

For a quick start, we took the [bcdev's waves\_vanity source code](https://github.com/bcdev-/waves_vanity)source code as a basis.

