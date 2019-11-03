# Checkpoint message binary format

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID \(0x64\) | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |
| 6 | Checkpoint items count \(N\) | Int | 4 |
| 7 | Checkpoint \#1 height | Long | 8 |
| 8 | Checkpoint \#1 signature | Bytes | 64 |
| ... | ... | ... | ... |
| 6 + 2 \* N - 1 | Checkpoint \#N height | Long | 8 |
| 6 + 2 \* N | Checkpoint \#N signature | Bytes | 64 |
