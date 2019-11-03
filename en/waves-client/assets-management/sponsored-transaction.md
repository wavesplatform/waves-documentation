# How to use sponsored transactions

Some projects want their users to be able to operate with their tokens without using Waves token at all. Often it makes much sense since these assets have value. Currently, it's impossible to ensure all the miners accept particular asset as a fee.

For these reasons, we implemented a completely new feature called Sponsored Transactions. So, any user who issued their token can use custom fees in official wallets and other apps.

**Note**: Before you start, please make sure that you have at least 2 WAVES on the balance. Since activation and deactivation procedure cost 1 WAVES per request.

**How to activate sponsored transactions**.

Open up your Waves wallet.

Go to the **Portfolio**.

![](/_assets/token_creation_04.png)

Find the required token and click on the ![](/_assets/token_reissue_02.png) button.

Click on the **Enable Sponsorship**.

![](/_assets/sponsored_transaction_03.png)

The following window will appear. Read the conditions carefully in the **yellow box** before proceeding.

![](/_assets/sponsored_transaction_04.png)

Choose the required amount of sponsored token to be charged to users.
**Note**: After activation you'll be able to change the specified amount without deactivation. To do so, find your token, click on the (![](/_assets/sponsored_transaction_02.png)) button and choose **Change Sponsorship**.

Click on the **Continue button**.

Recheck entered data and click on the **Confirm button**. Activation will be processed with the next block.

![](/_assets/sponsored_transaction_05.png)

After all, you'll be able to see activation status. There will be a special % symbol near token logo.

![](/_assets/sponsored_transaction_06.png)

**Note**: For each user transaction in the sponsored mode, you will be charged a commission of 0.001 Waves.
**Note**: If the balance of your account will not have enough Waves to pay for user transactions. In this case, your sponsored transactions will be canceled.

**For example**: You activated the sponsored transaction. You have free - 3 Waves, in orders - 5 Waves and in leasing - 10 Waves. As soon as 3 Waves run out, the active sponsored mode will use Waves from active (unfilled) orders. In this case, orders at the time of the matching will be canceled, since you will not have enough Waves to pay the order fee or to ensure an active order. As soon as all free Waves are used, the sponsored mode will be forcibly disabled.​

**How to deactivate sponsored transactions**.

The deactivation process is extremely simple. Find your token, click on the (![](/_assets/sponsored_transaction_02.png)) button and choose **Disable Sponsorship**.

![](/_assets/sponsored_transaction_07.png)

The following window will appear.
Be sure that you want to deactivate it and click on the Confirm button.
Deactivation will be processed with the next block.

![](/_assets/sponsored_transaction_08.png)

After all, you'll be able to see deactivation status. A special symbol will be removed from the token logo.

![](/_assets/sponsored_transaction_09.png)

___

See more articles in the [Assets Management](/waves-client/assets-management.md) chapter.

If  you have troubles with our platform, please create a [support](https://support.wavesplatform.com/) ticket or write a [question](https://forum.wavesplatform.com/) on our forum.
