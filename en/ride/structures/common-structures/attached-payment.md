# AttachedPayment

Structure of an [invoke script transaction](/blockchain/transaction-type/invoke-script-transaction.md) payment.

## Constructor

``` ride
AttachedPayment(assetId: ByteVector|Unit, amount: Int)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ride/data-types/byte-vector.md)&#124;[Unit](/ride/data-types/unit.md) | ID of a [token](/blockchain/token.md) |
| 2 | amount | [Int](/ride/data-types/int.md) | Payment amount |
