# ​How to create Script transaction

Script transactions allow you to extend the available functionality of the standard Waves application. One of the uses of script transaction is creating a multi-signature wallet. For more information, please check the following [advanced tutroial](https://docs.wavesplatform.com/en/smart-contracts/video-tutorials/creating-multisignature-account-via-waves-client.html).
Also, script can be developed with [Waves Ride IDE](https://ide.wavesplatform.com/). To manage multi-signature account among contract participants, please visit the following article [JSON confirmation](/waves-client/advanced_features/json_confirmation.md).

**Note**:The fee for a transfer of a Smart Asset from a Smart Account would be 0.001+0.004+0.004=**0.009 Waves**.
Set Alias for an account without a script would cost **0.001 WAVES**, whereas for a Smart Account it would be 0.001+0.004=**0.005 WAVES**.

**Before you start, please keep in mind. We do not recommend you submit script transactions unless you are an experienced user. Errors can lead to permanent loss of access to your account**.

You can use either [**Online app**](https://dex.wavesplatform.com), or standalone version for [**Windows app**](https://wavesplatform.com/files/WavesDEX-win.zip), [**Mac OS app**](https://wavesplatform.com/files/WavesDEX-mac.dmg) or [**Linux app**](https://wavesplatform.com/files/WavesDEX-linux.deb). All versions support automatic update.

So, to start using all available features of the application, first you need to activate the advanced features.

Open online or desktop Waves app and click on the **Account avatar** at the top right corner. Then click on the **Settings**.

![](/_assets/advanced_features_001.png)

You will be forwarded to the **Settings page**. Find and put the checkmark near **Advanced features**.

![](/_assets/advanced_features_01.png)

In the **Security** settings you will find **Script** and **Set Script** button. Click on the **Set Script**.

![](/_assets/advanced_features_03.1.png)

Read the important notice carefully before proceeding. Afetr that, click on the **Accept and continue**.

![](/_assets/advanced_features_03.2.png)

The following pop-up will appear.

In this section, put a prepared Base64 code of your script and click on the **Sign** button.

![](/_assets/advanced_features_03.png)

Re-check entered data and click on the **Confirm** button.

![](/_assets/advanced_features_04.png)

After a few seconds, created transaction will be confirmed, and generated script will start to work in the Waves network.

# How to cancel Script transaction

You can also cancel the active script transaction. For this just follow the instruction described below.

In the upper right corner, click on the **<> Script** button.

Just leave **Script** filed empty and click on the **Sign** button.

The following pop-up will appear.

Choose **JSON** section and copy the code in the **TX JSON** field, or share the **Link** or just show the QR Code from the **Export** section.

![](/_assets/advanced_features_05.png)

Share the data with other members of the multi-sig account.

**Note**: If you specified in the contract that two confirmations are required from the three accounts, then each participant should repeat the actions described below.

So now, contract member should log in to the account which has the right to confirm the multi-sig transaction.

At the top right corner click on the **<> JSON** button.

After that, put recieved JSON code in the **TX JSON** field and click on the **Continue** button.

![](/_assets/advanced_features_06.png)

Re-check entered data and click on the **Sign** button.

![](/_assets/advanced_features_07.png)

After a few seconds, created transaction will be confirmed. Thus, members of the multi-signature contract have confirmed the cancellation.
___

If you have troubles with our platform, please create a [support](https://support.wavesplatform.com/) ticket or write a [question](https://forum.wavesplatform.com/) on our forum.
