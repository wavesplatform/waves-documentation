# Order

An **order** is an instruction from the [account owner](/blockchain/account.md) to the [matcher](/waves-node/extensions/matcher.md) to buy or sell the [token](/blockchain/token.md) on [DEX](/waves-dex/about-waves-dex.md).

## Order cancellation

The order sender may cancel the order before it is executed.

Unexecuted orders are automatically canceled after 30 days from the date of opening.

## Order expiration date

An **order expiration date** is a date when the order is automatically canceled if it is not executed by this date.

The date is specified in _milliseconds_ which have passed since the beginning of the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time) until the expiration date.

The expiration time varies from 1 minute to 30 days.

## Order timestamp

An **order timestamp** is a time when [matcher](/waves-node/extensions/matcher.md) adds the [order](/blockchain/order.md) to the [order book](https://en.wikipedia.org/wiki/Order_book_%28trading%29) on [DEX](/waves-dex/about-waves-dex.md).

The time is specified in _milliseconds_ that have passed since the beginning of the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).

## Order binary format

See the [Order binary format](/blockchain/binary-format/order-binary-format.md) page.
