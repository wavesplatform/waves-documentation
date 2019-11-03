# Get signatures message binary format

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID \(0x14\) | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |
| 6 | Block IDs count \(N\) | Int | 4 |
| 7 | Block \#1 ID | Bytes | 64 |
| ... | ... | ... | ... |
| 6 + N | Block \#N ID | Bytes | 64 |
