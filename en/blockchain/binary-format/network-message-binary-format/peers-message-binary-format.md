# Peers message binary format

Peers message is a respond on Get peers message.

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID \(0x02\) | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |
| 6 | Peers count \(N\) | Int | 4 |
| 7 | Peer \#1 IP address | Bytes | 4 |
| 8 | Peer \#1 port | Int | 4 |
| ... | ... | ... | ... |
| 6 + 2 \* N - 1 | Peer \#N IP address | Bytes | 4 |
| 6 + 2 \* N | Peer \#N port | Int | 4 |
