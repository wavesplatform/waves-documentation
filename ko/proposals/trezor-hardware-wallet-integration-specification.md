# Introduction

The integration of the waves consists of several parts: the development of a custom firmware for the device and the protocol of interaction and the integration of the communication library, implementation of the protocol of interaction with the device in the final application.

## Code structure

Trezor uses many repositories as modules for building, so we need to work in all of them:

* [trezor-common](https://github.com/Tolsi/trezor-common/tree/waves-integration)

Here we are interested in `protob/messages.proto` file to add the new messages for exchange with the device.
* [trezor-crypto](https://github.com/Tolsi/trezor-crypto/tree/waves-integration)

Here we must implement all common cryptographic methods used in crypto currency for use in other modules.

* [trezor-mcu](https://github.com/Tolsi/trezor-mcu/tree/waves-integration)

Here we must respond to messages coming from the computer and implement the user interface and the logic of the integration itself using other modules.

* [python-trezor](https://github.com/Tolsi/python-trezor/tree/waves-integration)

This is a python library for integrating the wallet and a test utility for communicating with it. It is convenient to use it for debugging.

So the `trezor-*` modules will be included into `trezor-mcu` (for old Trezor wallet) or `trezor-core` (for new Trezor T) as git modules.

## A custom firmware for the device

It's into the [trezor-mcu](https://github.com/Tolsi/trezor-mcu/tree/waves-integration) repo. The firmware can be [compiled this commands](https://github.com/trezor/trezor-mcu#how-to-build-trezor-firmware).

Check the `build-firmware.sh` script for more details. For the development all the production ledger repos was changed to my forked repos.

## Application protocol

At this moment (the application is in development), there are 2 commands: obtaining an address (public key will be added), the signature of the passed transactions (you can sign it as message right now) and just the signature of the passed message (as `utf-8 bytes`).

You can build the protob files for `python-trezor` using the `python-trezor/tools/build_protobuf` script. You need to run it from `python-trezor/tools` folder and has `python-common` package cloned in `../../python-common` (the same folder as python-trezor).

## Cryptography protocol

It uses [the same method like a Ledger Nano S app (ED25519 with the signature and public key conversion to Curve25519 format)](https://github.com/wavesplatform/nanos-app-waves/wiki/Integration-manual#cryptography-protocol), but under the hood. So that's just Curve25519 and you don't need to do anything with that, it just works.

# Integration

The device uses a binary [Google Protocol Buffers](https://developers.google.com/protocol-buffers/) protocol. Messages for communicating with the device have been implemented, you can find them [here](https://github.com/Tolsi/trezor-common/blob/waves-integration/protob/messages.proto#L102).
An example of integration on python can be found in [the modified trezorztl util](https://github.com/Tolsi/python-trezor/blob/waves-integration/trezorlib/client.py#L532).

## Getting a public key

See [this](https://github.com/Tolsi/python-trezor/blob/waves-integration/trezorlib/client.py#L532).

## Sign a message

See [this](https://github.com/Tolsi/python-trezor/blob/waves-integration/trezorlib/client.py#L581).

# Communication library

You should pick one for your project language:

* [JS](https://github.com/trezor/trezor.js)
* [JS](https://github.com/trezor/connect)
* [Python](https://github.com/trezor/python-trezor)
* [Android](https://github.com/trezor/trezor-android)
* [Go](https://github.com/trezor/trezord-go)