# 资产（定制代币）

资产（定制代币）是一种具有一定共识价值的数字资产。 Waves平台允许用户创建自己的代币来满足他们的特定需求。

# 1. 1. 发行您自己的代币 

Waves平台允许企业根据自己任何需求发行自己的代币。 通过发行代币，企业可以通过区块链创建内部数字货币。 这样，它可以使用区块链支付项目内的服务和货物，甚至用于众筹。

在Waves平台上发行代币具有多种优势，其中包括能够在Waves去中心化交易所即刻实时交易代币。 不仅如此， waves代币在网络上可用于支付费用，从而为其区块链上的定制资产创造额外的需求。 在初始创建资产之后，可以进一步增加代币供应总数。

# 2. 资产操作 \(发行、重新发行和销毁资产\) 

点击[这里](/development-and-api/node-api/asset-transactions.md) 你可以找到更多关于资产交易的信息。

## 2.1 发行资产交易 

此交易的责任是根据用户特定需求来创建新资产。

| 项目 | 项目描述 |
| :--- | :--- |
| 名字 | \[资产名称\] \[4-16\]行 - 资产鉴定， 不一定非要独特 |
| 详情 | \[资产简要描述\]  \[0-1000\]行 - 资产描述文本 |
| 数量 | \[代币总数量\] 长期发行的资产。小数位必须考虑在内，即数量乘以API级别的小数位数以便能够仅使用整数值工作。 |
| 重新发行可能性 | \[确定额外资产是否可以在以后额外发行的可能性\] 布尔型 - 一个标志，用于确定是否以后可以再发行额外资产。|
| 小数 | 字节 \[0-8\] - 小数位数。 |
| 发行日期 | \[资产发行日期\]。 |
| 费用 | \[创建你自己的代币需要1 WAVES\] 内部-向矿工支付的费用。|

## 2.2 重新发行资产交易 

只有在发行人需要增加总代币供应量时，资产发行人才能够重新发行该资产。

| 项目 | 项目描述 |
| :--- | :--- |
| 发行人 | \[从中创建代币的Waves地址的数量\] 排列\[字节\] - 发行交易的TXID。 |
| 识别码 | \[资产识别码。独特的价值,不能重复\] 排列\[字节\] - 在第一期交易中重新发行可再发行资产txid的情况下。 |
| 数量 | \[增发的资产数量 \(不可分割的资产数量\)\] 长。 |
| 重新发行日期 | \[重新发行资产日期\]。|
| 费用 | \[创建你自己的代币需要1 WAVES\] 内部 - 向矿工支付的费用。|

## 2.3 销毁资产 

在持有特定资产的任何地址都可以选择销毁其持有的部分或全部资产。 资产状态和跳跃表将根据清除交易被重新计算。

| 项目 | 项目描述 |
| :--- | :--- |
| 发行人 | \[从中创建代币的 Waves 地址的数量\] 排列\[字节\] - 发行交易的TXID。 |
| 数量 | \[将销毁的资产数量 \(不可分割的资产数量\)\]。|
| 销毁日期 | \[销毁资产清除日期\]。 |
| 费用 | \[交易费用\]. |

# 3. 当前已验证资产示例 

* [Waves Community Token - Waves社区代币 \(WCT\)](http://www.waveswiki.org/index.php?title=Waves_Community_Token_%28WCT%29)
* [Miner Reward Token -  矿工奖励代币 \(MRT\)](http://www.waveswiki.org/index.php?title=Miner_Reward_Token_%28MRT%29)
* [Incent](http://www.waveswiki.org/index.php?title=Incent)
* [EncryptoTel \(ETT\)](http://www.waveswiki.org/index.php?title=EncryptoTel)
* [MobileGo Token \(Mgo\)](http://www.waveswiki.org/index.php?title=MobileGo_Token)
* [Wavesgo Token \(WGO\)](http://www.waveswiki.org/index.php?title=Wavesgo_Token)
* [Starrie \($STAR\)](http://www.waveswiki.org/index.php?title=Starrie)
* [Mercury \(MER\)](http://www.waveswiki.org/index.php?title=Mercury)
* [Riptobux \(RBX\)](http://www.waveswiki.org/index.php?title=Riptobux)
* [Wavesnode.NET \(WNET\)](http://www.waveswiki.org/index.php?title=Wavesnode.NET)

点击[这里](http://support.wavesplatform.com/forums/2-knowledge-base/topics/8141-list-of-verified-assets/)你可以找到一个更完整的验证资产示例，但仍然非详尽的已验证资产列表 \(该列表不断地更新\).


# 4. Waves去中心化交易所（DEX) 预售ICO众筹代币 

如果您想在去中心化交易所 DEX 平台上预售您的ICO众筹代币，您需要执行以下操作:

1. 决定所需的投资额。
2. 设置代币的价格。
3. 发布一系列售卖订单。

售出的代币将在投资项目后立即自动提供给所有客户。
