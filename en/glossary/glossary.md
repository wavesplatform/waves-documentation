<h1>Glossary</h1>

<a href="#A-letter">A</a> | <a href="#B-letter">B</a> | <a href="#C-letter">C</a> | <a href="#D-letter">D</a> | <a href="#E-letter">E</a> | <a href="#F-letter">F</a> | <a href="#G-letter">G</a> | <a href="#H-letter">H</a> | I | J | <a href="#K-letter">K</a> | <a href="#L-letter">L</a> | <a href="#M-letter">M</a> | <a href="#N-letter">N</a> | <a href="#O-letter">O</a> | <a href="#P-letter">P</a> | Q | <a href="#R-letter">R</a> | <a href="#S-letter">S</a> | <a href="#T-letter">T</a> | <a href="#U-letter">U</a> | <a href="#V-letter">V</a> | <a href="#W-letter">W</a> | X | Y | Z

<h2>A</h2><a id="A-letter"></a>

<h3>Account</h3><a id="account-data-storage"></a>

An **account** is a [cryptographically connected](https://en.wikipedia.org/wiki/Public-key_cryptography) pair of [public](#public-key)
 and [private keys](#private-key) on the [blockchain](#blockchain). Accounts uniquely correlate [transactions](#transaction) and [orders](#order) with their senders.

<h3>Account data storage</h3><a id="account-data-storage"></a>

An **account data storage** is the store of data records in the key-value format associated with the [account](#account). Each account has single data storage. The size of the account data storage is unlimited.

<h3>Account script</h3><a id="account-script"></a>

An **account script** is a [Ride](#ride) [script](#script) that has the following directives:

```ride
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

The account script is attached to the [account](#account) using the [set script transaction](/blockchain/transaction-type/set-script-transaction.md). Only one script can be attached to an [account](#account). An account with an account script attached is called a [smart account](#smart-account).

<h3>Address</h3><a id="address"></a>

An **address** is a unique [account](#account) identifier. The address can be represented as an alphanumeric string.

<h3>Airdrop</h3><a id="airdrop"></a>

An **airdrop** is a simultaneous sending of [tokens](#token) to multiple [addresses](#address). As a rule, the airdrop is used as an incentive for holders of a certain token as part of a marketing campaign to promote a project, increase its recognition, and attract investors.

<h3>Alias</h3><a id="alias"></a>

An **alias** is a short, easy-to-remember [address](#address) name. There cannot be two aliases with the same name. A single address can have multiple aliases.

<h3>Asset</h3><a id="asset"></a>

An asset is a synonym for the [token](#token).

<h3>Asset script</h3><a id="asset-script"></a>

An **asset script** is a [Ride](#ride) [script](#script) that has the following directives:

```ride
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}
```

The asset script is attached to the [asset](#asset) using the [set asset script transaction](/blockchain/transaction-type/set-asset-script-transaction.md). You can attach a script to an asset only at the time the asset creation. However, you can change the script later, if needed. An asset with a script attached to it is called a [smart asset](#smart-asset).

<h2>B</h2><a id="B-letter"></a>

<h3>Block</h3><a id="block"></a>

A **block** is a unit of the [blockchain](#blockchain) chain. The block contains [transactions](#transaction): from 0 to 6000 inclusive. The maximum block size is 1 MB.

<h3>Blockchain</h3><a id="blockchain"></a>

A **blockchain** is a continuous sequential chain of [blocks](#block), that are linked using cryptography.

<h3>Block height</h3><a id="block-height"></a>

A **block height** is a [block](#block) sequence number in the [blockchain](#blockchain).

<h3>Blockchain height</h3><a id="blockchain-height"></a>

A **blockchain height** is a sequence number of the last [block](#block) in the [blockchain](#blockchain).

<h3>Blockchain network</h3><a id="blockchain-network"></a>

A **blockchain network** is a computer network that consists of [nodes](#node).

<h3>Block signature</h3><a id="block-signature"></a>

A **block signature** is a [hash](#hash) that the [mining node](#mining-node) receives when it signs the generated [block](#block) with the [private key](#private-key) of the [mining account](#mining-account).

<h2>C</h2><a id="C-letter"></a>

<h3>Consensus</h3><a id="consensus"></a>

The **consensus** is a set of rules in accordance with which [blockchain](#blockchain) operates. Waves uses the [LPoS consensus](#lpos).

<h3>Cryptocurrency</h3><a id="cryptocurrency"></a>

A **cryptocurrency** is a type of [digital currency](https://en.wikipedia.org/wiki/Digital_currency), the creation and control of which is based on cryptographic methods.

<h2>D</h2><a id="D-letter"></a>

<h3>dApp</h3><a id="dapp"></a>

A **dApp** is an [account](#account) with the [dApp script](#dapp-script) attached.

<h3>dApp script</h3><a id="dapp-script"></a>

A **dApp script** is a [Ride](#ride) [script](#script) used to create [dApp](#dapp). The dApp script has the following directive:

```ride
{-# CONTENT_TYPE DAPP #-}
```

dApp-script can be attached to the [account](#account) using the [set script transaction](/blockchain/transaction-type/set-script-transaction.md), and, as a result, the dApp will be created.

<h3>Decentralized application</h3><a id="decentralized-application"></a>

A **decentralized application** is an application that is stored and executed on the [blockchain network](#blockchain-network).

<h3>DEX</h3><a id="dex"></a>

**DEX** (or Waves DEX) is a decentralized exchange (https://dex.wavesplatform.com) that allows users to issue and trade [tokens](#token) within the Waves [blockchain](#blockchain).

<h2>E</h2><a id="E-letter"></a>

<h3>Explorer</h3><a id="explorer"></a>

**Explorer** (or Waves Explorer) is an online service (https://wavesexplorer.com) that displays Waves [blockchain](#blockchain) data in a human-readable form.

<h2>F</h2><a id="F-letter"></a>

<h3>Faucet</h3><a id="faucet"></a>

A **test network faucet** (or faucet) is a [Waves Explorer](#explorer) tool that refills the [test network](#test-network) [accounts](#account) with the [WAVES](#waves) test [tokens](#token). For one recharge, the user receives 10 testnet WAVES.

<h2>G</h2><a id="G-letter"></a>

<h3>Gateway</h3><a id="gateway"></a>

**Gateway** is a centralized payment solution that allows transferring [cryptocurrencies](#cryptocurrency) from one [blockchain](#blockchain) to another and vice versa; as well as transferring fiat money to and out of the blockchain.

<h3>Genesis block</h3><a id="genesis-block"></a>

The **genesis block** (or genesis) is the very first [block](#block) of the [blockchain](#blockchain). The genesis block contains one or several [genesis transactions](/blockchain/transaction-type/genesis-transaction.md).

<h3>Genesis transaction</h3><a id="genesis-transaction"></a>

**Genesis transaction** is a [genesis block](#genesis-block) [transaction](#transaction) that charges [WAVES](#waves) to an [account](#account). The genesis transactions define the initial distribution of WAVES between accounts during the creation of the [blockchain](#blockchain).

<h2>H</h2><a id="H-letter"></a>

<h3>Hash</h3><a id="hash"></a>

A **hash** is a result of applying a [hash function](#hash-function).

<h3>Hash function</h3><a id="hash-function"></a>

A **hash function** (or fold function) is a function that converts an array of input data of arbitrary length into a bit string of a fixed length, performed by a certain algorithm.

<h2>K</h2><a id="K-letter"></a>

<h3>Keeper</h3><a id="keeper"></a>

**Keeper** (or Waves Keeper) is a web browser extension that allows users to securely interact with Waves-enabled web services.

<h2>L</h2><a id="L-letter"></a>

<h3>Leasing</h3><a id="leasing"></a>

**Leasing** is a temporary reversible transfer of [WAVES](#waves) from one account to another to [increase the stability and security of the network](/waves-client/account-management/waves-leasing.md), as well as potentially get [mining reward](/blockchain/mining/mining-reward.md). Note that the WAVES [tokens](#token) are not actually being transferred to another [account](#account), they remain on the sender's balance, however, they are 'frozen' and cannot participate in the buying and selling operations, as well as they cannot be sent to another account. The leased tokens provide the leasing recipient with a greater chance of [mining](#mining) a [block](#block). The recipient of the lease can share the income from mining with the one who leased WAVES to him. However, the Waves platform does not regulate the payment process for [LPoS](#lpos) [mining](#mining), this remains at the discretion of the [miner](#miner). At any time, the sender can 'unfreeze' tokens by invoking the [Lease Cancel transaction](/blockchain/transaction-type/lease-cancel-transaction.md).

<h3>LPoS</h3><a id="lpos"></a>

**LPoS** (or Leased Proof-of-Stake) is a [consensus](#consensus) algorithm in which the probability of generating the next [block](#block) by the participant is proportional to the share of [cryptocurrency](#cryptocurrency) belonging to this participant or leased to this participant from their total supply. In other words, the more [tokens](#token) on the [account](#account) of the [miner](#miner) (own and leased to them), the higher the probability of generating the next block.

<h2>M</h2><a id="M-letter"></a>

<h3>Mainnet</h3><a id="mainnet"></a>

The **mainnet** (or main network) is the main Waves [blockchain network](#blockchain-network).

<h3>Matcher</h3><a id="matcher"></a>

A **matcher** is a [node](#node) extension that executes [orders](#order) on the [DEX](#dex) exchange.

<h3>Miner</h3><a id="miner"></a>

A **miner** is the owner of the [mining node](#mining-node).

<h3>Mining</h3><a id="mining"></a>

**Mining** is the process of generating a [block](#block) by a [mining node](#mining-node), as a result of which a new block is added to the [blockchain](#blockchain) and [WAVES](#waves) [tokens](#token) are issued. For block generation, [miners](#miner) receive a [reward for mining](/blockchain/mining/mining-reward.md), as well as [transaction fees](/blockchain/transaction/transaction-fee.md), according to the rules of the [Waves-NG](/blockchain/waves-protocol/waves-ng-protocol.md) protocol.

<h3>Mining account</h3><a id="mining-account"></a>

A **mining account** is an [account](#account) that the [mining node](#mining-node) uses to [sign](#block-signature) the generated [blocks](#block).

<h3>Mining node</h3><a id="mining-node"></a>

A **mining node** is a [node](#node) that can perform [mining](#mining). Each mining node is a [validating node](#validating-node).

<h3>Multisignature</h3><a id="multisignature"></a>

**Multisignature** is an implementation of an electronic signature that requires the use of several [private keys](#private-key) as a condition for [transaction](#transaction) execution.

<h2>N</h2><a id="N-letter"></a>

<h3>NFT</h3><a id="nft"></a>

**NFT** (Non-Fungible Token) is a [token](#token) with unique ID. Two 'regular' tokens can not be distinguished from each other — they are the same, i.e. fungible. Each NFT is unique; there cannot be two identical NFTs. Most often NFTs are used in games.

<h3>Node</h3><a id="node"></a>

A **node** is a [host](https://ru.wikipedia.org/wiki/Хост) that is connected to the [blockchain network](#blockchain-network) using the [Waves Node](https://github.com/wavesplatform/Waves) application. The node stores [blocks](#block), sends and validates [transactions](#transaction).

<h2>O</h2><a id="O-letter"></a>

<h3>Oracle</h3><a id="oracle"></a>

**Oracle** is a provider of data from the outside world to the [blockchain](#blockchain).

<h3>Oracle card</h3><a id="oracle-card"></a>

An **oracle card** is a public description of the [oracle](#oracle) in the [blockchain](#blockchain) according to a [standardized protocol](/waves-oracles/create-an-oracle-card-with-a-data-transaction.md) in the form of a [data transaction](/blockchain/transaction-type/data-transaction.md).

<h3>Order</h3><a id="order"></a>

**Order** (or exchange order) is an instruction to buy or sell a [token](#token) on [DEX](#dex).

<h2>P</h2><a id="P-letter"></a>

<h3>PoS</h3><a id="pos"></a>

**PoS** (Proof-of-Stake) is a [consensus](#consensus) algorithm in which the probability of generating the next [block](#block) is proportional to the share of [cryptocurrency](#cryptocurrency) belonging to this participant from their total supply. In other words, the more [tokens](#token) on the [account](#account) of a [miner](#miner), the higher the probability of generating the next block.

<h3>PoW</h3><a id="pow"></a>

**PoW** (Proof-of-Work) is a [consensus](#consensus) algorithm in which it is required to perform a complex calculation in order to generate a new [block](#block). That is, the higher the performance of the [miner's](#miner) equipment, the higher the probability of generating the next block.

<h3>Private key</h3><a id="private-key"></a>

The **private key** is one of a pair of [account](#account) keys. The account owner signs the [transaction](#transaction) with the [private key](#private-key) before sending it, and, as a result, gets the digital signature of the transaction.

<h3>Public key</h3><a id="public-key"></a>

The **public key** is one of a pair of [account](#account) keys. A public key uniquely correlates a [transaction](#transaction) with its sender. The transaction signature is checked against the public key with some function, and, if it returns true, we can be sure that the user has valid [private key](#private-key) for this public key.

<h2>R</h2><a id="R-letter"></a>

<h3>Ride</h3><a id="ride"></a>

The **Ride** is a functional expression-based programming language. Ride is used to write [scripts](#script). The language has [strong static typing](https://en.wikipedia.org/wiki/Type_system), it is case sensitive, has no loops, recursions, and goto-like expressions, and therefore it is [Turing-incomplete](https://en.wikipedia.org/wiki/Turing_completeness).

<h2>S</h2><a id="S-letter"></a>

<h3>Script</h3><a id="script"></a>

A **script** is the source code on the [Ride](#ride) language. There are three types of scripts: [dApp script](#dapp-script), [account script](#account-script), [asset script](#asset-script).

<h3>Secret phrase</h3><a id="secret-phrase"></a>

**Secret phrase** (or Seed) is a set of characters (usually, it is 15 English words with spaces between them) that allows you to access your Waves [address](#address) and, accordingly, the funds on your [account](#account). When registering an account, you are asked to keep your secret phrase safe.

<h3>Smart account</h3><a id="smart-account"></a>

A **smart account** is an [account](#account) with an [account script](#account-script) attached. Only one script can be attached to an account. The account script is attached to the account using the [set script transaction](/blockchain/transaction-type/set-script-transaction.md).

<h3>Smart asset</h3><a id="smart-asset"></a>

A **smart asset** is a [token](#token) with an [asset script](#asset-script) attached.

<h3>Stagenet</h3><a id="stagenet"></a>

**Stagenet** (or staging network) is the Waves [blockchain network](#blockchain-network), which is used for experiments, intermediate testing of new functionality, as well as providing access for the Waves community to intermediate releases. It is important to consider that this network is unstable, a frequent rollback of blockchain data to the N-th height in the past is possible.

<h2>T</h2><a id="T-letter"></a>

<h3>Test network</h3><a id="test-network"></a>

**Test network** (or testnet) is a Waves [blockchain](#blockchain) test network, which is used by developers to test their products, and by users to get acquainted with the blockchain.

<h3>Token</h3><a id="token"></a>

A **token** is a [blockchain](#blockchain) object that represents another object from the physical or virtual world or an abstract concept.

<h3>Token rating</h3><a id="token-rating"></a>

**Token Rating** is an online service (https://tokenrating.wavesexplorer.com) that displays the ratings of [tokens](#token) (projects) issued on the Waves platform. The service allows users to vote for a particular token.

<h3>Transaction</h3><a id="transaction"></a>

The **transaction** is an action on the [blockchain](#blockchain) on behalf of the [account](#account). Transactions can be sent only from the account — thus, any transaction can be correlated with a certain account.

<h2>U</h2><a id="U-letter"></a>

<h3>UTX pool</h3><a id="utx-pool"></a>

**UTX pool** (or Unconfirmed Transactions pool) is a pool of unconfirmed [node](#node) [transactions](#transaction) that are waiting for validation.

<h2>V</h2><a id="V-letter"></a>

<h3>Validating node</h3><a id="validating-node"></a>

A **validating node** is a [node](#node) that validates [transactions](#transaction).

<h2>W</h2><a id="W-letter"></a>

<h3>Wallet</h3><a id="wallet"></a>

A **wallet** is a section of the [Waves DEX](#dex) online service. It allows us to send and receive [tokens](#token), view [transactions](#transaction) and [cryptocurrency](#cryptocurrency) rates, and [lease](#leasing) [WAVES](#waves).

<h3>WAVELET</h3><a id="wavelet"></a>

**WAVELET** is 1/100 000 000 [WAVES](#waves). 1 WAVELET is the minimum number of WAVES that you can work with within the Waves [blockchain](#blockchain).

<h3>WAVES</h3><a id="waves"></a>

**WAVES** is the main [token](#token) of the Waves platform. 1 WAVES equals 100,000,000 [WAVELET](#wavelet). In April 2016, 100 million WAVES were released. WAVES cannot be burned using a [burn transaction](/blockchain/transaction-type/burn-transaction.md).

<h3>WCT</h3><a id="wct"></a>

**WCT** (or Waves Community Token) is a [token](#token) used by members of the Waves community during voting and other activities.

<h3>WRT</h3><a id="wrt"></a>

**WRT** (or Waves Reward Token) is a [token](#token) that is used to reward contributors. Contributors can participate in the creation of [dApps](#dapp), serve as external auditors or assist in events and receive rewards for this. The more difficult the contributor’s task is, the more WRT tokens they can get. Also, with the help of WRT, Waves community members can thank the most influential and useful members of the Waves ecosystem.
