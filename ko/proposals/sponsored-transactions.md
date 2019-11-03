# Sponsored transactions approach to address asset fee issues

This is new feature proposal posted here to discuss, it is not something that is already implemented.

Alternative name for this feature is **Autonomous Assets**, since end users don't need any other assets for fees to operate with them.

## Problems we want to solve

1. Some projects want their users to be able to operate with their tokens without using Waves token at all. Often it makes much sense since these assets have a value.  Currently it's impossible to ensure all the miners accept particular asset as a fee. It means that for these transactions users cannot have Waves NG experience - almost guaranteed transaction confirmation in 5 seconds. Also custom fees aren't support in official wallets and other apps.

2. In fact current asset fee schema is used to create free transactions, although waves transactions are very cheap by default. We want them to be very cheap, but not free. We want miners and leasers to get more waves.

3. We want all the transactions to require at least some spending in waves token to increase demand for waves and its value.

## Proposed solution

We suggest solution called Sponsored Transactions. In order to feet problem (1) we introduce new ability for assets - Sponsored Fee Asset. Issuer of any asset can create `SponsoredFeeAssetTransaction` with following fields: 

* Asset Id
* Sponsored or not (true/false)
* Transaction fee (amount of asset users should pay for a single transaction)
 
Sponsor also should put some amount of waves to his account.

After this transaction is confirmed, it becomes possible to use this asset as a fee (automatically for all miners). When transaction with fee in sponsored fee asset appears any miner just puts it to forged block. Instead of just transferring fee asset to miner's balance blockchain does a bit different thing: It automatically moves fee asset to sponsor's (issuer's) account and transfers standard transaction cost in waves from sponsor's to miner's accounts. In fact two miners will receive these waves because of NG 40/60 fee distributions.

Sponsor also can create another `SponsoredFeeAssetTransaction` to change fee size or cancel sponsorship.

## Example

I issue my own asset - Super Coin. I want others to use super coin as a fee. I create SponsoredFeeAssetTransaction(asset="Super Coin's id", sponsored=true, transactionFee=0.1). Then I put 100 waves to my account. Now anyone can create Transfer transaction with 0.1 super coin as a fee. Someone creates transaction with fee = 0.1 super coin, as a result I get 0.1 super coin on my account, and miners get 0.001 waves from my account. Since I have 100 waves, users can do 100000 transaction until the deposit will be fully transferred to miners, at this moment I will have 10000 super coins from fees. When deposit is gone no new transactions with super coin fees can be made.

## Benefits

As you can see, asset issuer collects some coins on his account as a result. This naturally reduces circulating supply of his asset and may increase its value. Issuer is free to decide what to do with these assets: He can leave tokens on account, burn them or sell on DEX to refill waves deposit.

With the introduction of Sponsored Transactions we can switch off current asset fee feature, i.e. do not accept non-sponsored assets as a fees. This solves problems (2) and (3). It will be impossible to use asset fees just to create free transactions. Every transaction will require some waves.

As a result of this change all node will know which asset is accepted as a fee and how much transactions cost, so no need for extra configuration. Since fees are same for all nodes and known to everyone we'll be able to support custom asset fee in official wallets and other applications.

## Open Questions

1. Should we give an ability to sponsor only transactions transferring specific asset? For example, I issued super coin and I want users to be able to use super coin as a fee only when they transferring super coins. So they should't be able to use it when transferring other assets. Or maybe I want to allow to transfer not only super coins, but some other assets (some limited number).

2. Should only asset issuer to be able to sponsor transactions or any other participant? Theoretically one can say that he will sponsor transactions paid in USD, for example, when someone pays fee in USD he will pay miners in waves. Moreover there can be several people wanting to do it, in this case system should automatically choose sponsor with lowest fee. This  makes sense, but also makes system more complicated.