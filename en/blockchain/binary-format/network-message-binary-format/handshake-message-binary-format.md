# Handshake message binary format

Handshake is used to start communication between two nodes.

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Application name length \(N\) | Byte | 1 |
| 2 | Application name \(UTF-8 encoded bytes\) | Bytes | N |
| 3 | Application version major | Int | 4 |
| 4 | Application version minor | Int | 4 |
| 5 | Application version patch | Int | 4 |
| 6 | Node name length \(M\) | Byte | 1 |
| 7 | Node name \(UTF-8 encoded bytes\) | Bytes | M |
| 8 | Node nonce | Long | 8 |
| 9 | Declared address length \(K\) or 0 if no declared address was set | Int | 4 |
| 10 | Declared address bytes \(if length is not 0\) | Bytes | K |
| 11 | Timestamp | Long | 8 |
