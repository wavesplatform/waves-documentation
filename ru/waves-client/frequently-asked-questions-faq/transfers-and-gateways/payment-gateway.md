## **Что такое платежный шлюз?**

Платформа Waves позволяет хранить и передавать внешние валюты с использованием своей сети. Данная возможность реализована на основе централизованного шлюза [Coinomat](https://coinomat.com/) и собственного шлюза [Wavesplatform](https://wavesplatform.com): Биткоины или любые поддерживаемые внешние монеты передаются на личный адрес пользователя посредством стандартной транзакции. После обработки пользователь получает, например Bitcoin ассет (wBTC). Каждый wBTC ассет обеспечен 1:1 ценностью относительно реальной монеты.

\*В данный момен доступны шлюзы на основе **Coinomat** шлюза для: [Bitcoin](/waves-client/transfers-and-gateways/bitcoin-transfers.md), [Litecoin](/waves-client/transfers-and-gateways/litecoin-transfers.md), [ZCash](/waves-client/transfers-and-gateways/zcash-transfers.md), [Bitcoin Cash](/waves-client/transfers-and-gateways/bitcoin-cash-transfers.md), [Dash](/waves-client/transfers-and-gateways/dash-transfers.md), [Monero](/waves-client/transfers-and-gateways/monero-transfers.md), [Bitcoin SV](/waves-client/transfers-and-gateways/bitcoin-sv-transfers.md) и [Ethereum](/waves-client/transfers-and-gateways/ethereum-transfers.md), [Waves Enterprise](/waves-client/transfers-and-gateways/waves-enterprise-transfers.md), [Ergo](/waves-client/transfers-and-gateways/ergo-transfers.md), [Bancor](/waves-client/transfers-and-gateways/bancor-transfers.md) на основе **Wavesplatform** шлюза.

## **Как это работает?**

После создания заявки на вывод, например Bitcoin, токены wBTC передаются в Waves сеть, затем Coinomat шлюз обрабатывает их и отправляет монеты на внешний Bitcoin адрес, то есть wBTC &gt; Waves сеть &gt; Coinomat &gt; BTC. При вводе средств, процесс обработки повторяется, но в обратном порядке BTC &gt; Coinomat &gt; Waves сеть &gt; wBTC ассет. Логика обработки платежей для Wavesplatform шлюза является такой же.

Процесс ввода и вывода криптовалют может занимать до 120 минут. Средства будут направлены на указанный адрес.

**Важно**: Внешние транзакции всегда отправляются только на Waves адреса шлюзов: для шлюза Coinomat -  **3PAs2qSeUAfgqSKS8LpZPKGYEjJKcud9Djr**; для Wavesplatform шлюза адреса могут отличаться. При выводе криптовалют из Waves аккаунта проверяйте адрес в уведомлении (cм. **Адрес шлюза**):

**Coinomat шлюз**:

![](/_assets/payment_gateway_01.png)

**Wavesplatform шлюз**:

![](/_assets/payment_gateway_02.png)
