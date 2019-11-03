# 자산

자산은 특정의 consensus value를 가진 일종의 디지털 자산입니다. 사용자들은 Waves 플랫폼에서 그들만의 토큰을 만들 수 있습니다.d.

# 1. 나의 토큰 발행하기 

Waves 플랫폼에서는 사업 수행을 위해 필요한 자체 토큰을 발행할 수 있습니다. 토큰을 발행함으로써 블록체인을 통해 내부 디지털 화폐를 만들 수 있습니다. 이렇게 하면 블록체인을 사용하여 해당 프로젝트의 상품 및 서비스를 결제할 수 있게 하거나 크라우드펀딩을 진행할 수 있습니다.

Waves 플랫폼에서 토큰을 발행하면 Waves DEX에서 토큰을 즉시 거래할 수 있다는 점을 포함해 여러 가지 이점이 있습니다. 그뿐만 아니라 Waves 토큰은 네트워크 내에서 수수료를 지불하는데 사용될 수 있으며 블록체인에서 커스텀 자산에 대한 추가적인 수요를 창출할 수 있습니다. 자산을 발행한 후에도 향후 토큰의 총 공급 수량을 늘릴 수 있습니다.

# 2. 자산 운영 \(자산의 발행과 재발행 그리고 소각\) 

[여기](/development-and-api/node-api/asset-transactions.md)에서 자산 트랜잭션에 대한 세부 사항을 확인할 수 있습니다..

## 2.1 자산 트랜잭션 발행 

이 트랜잭션은 사용자의 요구에 따라 새로운 자산을 발행합니다.

| 필드 | 필드 값 |
| :--- | :--- |
| 이름 | \[자산 이름\] String \[4-16\] - 자산 식별. 이름이 유니크 할 필요는 없습니다. |
| 세부 사항 | \[자산의 간단한 설명\] String \[0-1000\] - 자산 설명 텍스트. |
| 수량 | \[총 토큰 수량\] Long - 발행 자산의 수량. 소수점 자리를 고려해야합니다. 즉, 정수 값으로 만 작동할 수 있도록 수량에 API 수준의 소수점 자리를 곱합니다. |
| 재발행 여부 | \[향후 해당 자산의 추가 발행 가능 여부를 결정\]Boolean - 향후 추가 자산을 발행 가능 여부를 결정하는 flag 값. |
| 소수점 | Byte \[0-8\] - 소수점 자릿수. |
| 발행 날짜 | \[자산 발행 날짜\]. |
| 수수료 | \[토큰 생성을 위한 수수료 1 WAVES\] Int - 마이너들에게 제공되는 수수료. |

## 2.2 자산 재발행 트랜잭션 

만약 발행자가 토큰의 총 공급량을 늘리리고 싶다면 자산을 발행한 사람만이 자산을 재발행 할 수 있습니다.

| 필드 | 필드값 |
| :--- | :--- |
| 발행자 | \[토큰을 생성한 Waves 주소\] Array\[Byte\] - 발행 트랜잭션의 txid. |
| 식별자 | \[자산 식별자. 고유한 값, 반복될 수 없음\] Array\[Byte\] - 재발행 가능한 자산의 재발행 txid일 경우. |
| 수량 | \[발행 할 자산의 추가 수량 \(분할할 수 없는 자산의 수\)\] Long. |
| 재발행 날짜 | \[자산 재발행 날짜\]. |
| 수수료 | \[토큰 생성을 위한 수수료 1 WAVES\] Int - 마이너들에게 제공되는 수수료. |

## 2.3 자산의 소각 

해당 자산을 보유하고 있는 주소는 자산의 일부 또는 모든 수량을 소각할 수 있습니다. 자산 상태 및 skip list는 Delete 트랜잭션을 기반으로 다시 계산됩니다.

| 필드 | 필드값 |
| :--- | :--- |
| 발행자 | \[토큰을 생성한 Waves 주소\] Array\[Byte\] - 발행 트랜잭션의 txid. |
| 수량 | \[소각할 자산 수량 \(분할 할 수 없는 자산의 수\)\]. |
| 소각 날짜 | \[자산 소각 날짜\]. |
| 수수료 | \[트랜잭션 수수료\]. |

# 3. 검증된 자산의 예시 

* [Waves Community Token \(WCT\)](http://www.waveswiki.org/index.php?title=Waves_Community_Token_%28WCT%29)
* [Miner Reward Token \(MRT\)](http://www.waveswiki.org/index.php?title=Miner_Reward_Token_%28MRT%29)
* [Incent](http://www.waveswiki.org/index.php?title=Incent)
* [EncryptoTel \(ETT\)](http://www.waveswiki.org/index.php?title=EncryptoTel)
* [MobileGo Token \(Mgo\)](http://www.waveswiki.org/index.php?title=MobileGo_Token)
* [Wavesgo Token \(WGO\)](http://www.waveswiki.org/index.php?title=Wavesgo_Token)
* [Starrie \($STAR\)](http://www.waveswiki.org/index.php?title=Starrie)
* [Mercury \(MER\)](http://www.waveswiki.org/index.php?title=Mercury)
* [Riptobux \(RBX\)](http://www.waveswiki.org/index.php?title=Riptobux)
* [Wavesnode.NET \(WNET\)](http://www.waveswiki.org/index.php?title=Wavesnode.NET)

[여기](http://support.wavesplatform.com/forums/2-knowledge-base/topics/8141-list-of-verified-assets/)에서 불완전하지만 검증된 자산의 전체 목록을 확인할 수 있습니다 \(목록은 지속적으로 업데이트됩니다\).

# 4. Waves DEX에서의 Pre-ICO 토큰 세일 

DEX 플랫폼에서 귀하의 ICO 토큰의 사전판매를 진행하려면 아래의 지시사항에 따라야 합니다:

1. 원하는 투자 금액을 결정하십시오.
2. 토큰의 가격을 설정하십시오.
3. 일련의 판매 주문을 발행하세요.

판매된 토큰은 프로젝트에 투자한 뒤 즉시 모든 고객들에게 자동으로 제공됩니다.
