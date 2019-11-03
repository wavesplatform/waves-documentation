# Transaction proof binary format

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Proofs version | Byte \(constant, value = 1\) | 1
| 2 | Proofs count |  | 2
| 3 | Proof 1 length \(P1\) |  | 2
| 4 | Proof 1 | ByteStr \(Array[Byte]\) | P1 <= 64
| 5 | Proof 2 length \(P2\) |  | 2
| 6 | Proof 2  | ByteStr \(Array[Byte]\) | P2 <= 64
| ... | ... | ... | ... |
