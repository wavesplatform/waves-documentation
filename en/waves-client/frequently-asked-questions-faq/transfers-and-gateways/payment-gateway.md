## What is a payment gateway?

Waves platform allows you to hold and transfer external currencies on its blockchain. This works through an established centralized [Coinomat](https://coinomat.com/) and [Wavesplatform](https://wavesplatform.com) gateways: Bitcoins or any supported external coins are sent to a user's personal Waves address via standard transfer and after the depositing user receives Waves based tokens \(wBTC\) issued in the Waves blockchain. Every single gateway tokens are backed 1:1 with the real external coins.

\*At the moment, there are gateways for [Bitcoin](/waves-client/transfers-and-gateways/bitcoin-transfers.md), [Litecoin](/waves-client/transfers-and-gateways/litecoin-transfers.md), [ZCash](/waves-client/transfers-and-gateways/zcash-transfers.md), [Bitcoin Cash](/waves-client/transfers-and-gateways/bitcoin-cash-transfers.md), [Dash](/waves-client/transfers-and-gateways/dash-transfers.md), [Monero](/waves-client/transfers-and-gateways/monero-transfers.md), [Bitcoin SV](/waves-client/transfers-and-gateways/bitcoin-sv-transfers.md) managed by the **Coinonmat** gateway and [Ethereum](/waves-client/transfers-and-gateways/ethereum-transfers.md), [Waves Enterprise](/waves-client/transfers-and-gateways/waves-enterprise-transfers.md), [Ergo](/waves-client/transfers-and-gateways/ergo-transfers.md), [Bancor](/waves-client/transfers-and-gateways/bancor-transfers.md) managed by the **Waves platform** gateway.

## How does it work?

After creating a new transfer, Bitcoins or any other supported external coins are transferred to the gateway side as wBTC (Waves BTC) tokens via Waves network, then Coinomat processing them and finally sending as external BTC transaction, i.e. wBTC &gt; Waves network &gt; Coinomat &gt; BTC. For deposits, the process is repeating but in the opposite direction BTC &gt; Coinomat gateway &gt; Waves network &gt; wBTC asset. For the Wavesplatform gateways processing have the same algorithms.

So, you will receive coins to specified address. Please keep in mind, transfers **may** takes up to 120 minutes.

**Warning**: The gateway transactions are always processing only via the Waves addresses. For Coinomat gateway: **3PAs2qSeUAfgqSKS8LpZPKGYEjJKcud9Djr**. Addresses for Wavesplatform gateways can be vary. Please check wallet notification during creating outgoing transfers (see **Gateway address**):

**Coinomat gateway**:

![](/_assets/payment_gateway_01.png)

**Wavesplatform gateway**:

![](/_assets/payment_gateway_02.png)
