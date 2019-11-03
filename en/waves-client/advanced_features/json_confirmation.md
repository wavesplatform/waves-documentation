# ​How to create JSON confirmation

As you may know, Waves app contains advanced functionality. One of them is [Script transaction](/waves-client/advanced_features/script_transaction.md). With this feature, you can create a multi-signature wallet. So, several owners of one Waves account can manage the funds stored on the same balance. For easier management of script transactions, we integrated a special section called **JSON**.

**Note**:The fee for a transfer of a Smart Asset from a Smart Account would be 0.001+0.004+0.004=**0.009 Waves**.
Set Alias for an account without a script would cost **0.001 WAVES**, whereas for a Smart Account it would be 0.001+0.004=**0.005 WAVES**.

**Before you start, please keep in mind. We do not recommend you submit JSON unless you are an experienced user. Errors may lead to loss of funds**.

You can use either [**Online app**](https://dex.wavesplatform.com), or standalone version for [**Windows app**](https://wavesplatform.com/files/WavesDEX-win.zip), [**Mac OS app**](https://wavesplatform.com/files/WavesDEX-mac.dmg) or [**Linux app**](https://wavesplatform.com/files/WavesDEX-linux.deb). All versions support automatic update.

So, to start using all available features of the application, first you need to activate the advanced features.

Open online or desktop Waves app and click on the **Account avatar** at the top right corner. Then click on the **Settings**.

![](/_assets/advanced_features_001.png)

You will be forwarded to the **Settings page**. Find and put the checkmark near **Advanced features**.

![](/_assets/advanced_features_01.png)

After that, close the settings.

So, let's transfer **1 Waves** or any available assets from the multi-sign account.

**Note**: Please keep in mind, if you specified sequence of accounts as A, B, C. Where **A** is multi-sig account and **B**, **C** participants of the created contract So, to confirm the withdrawal from the multi-sig account, you must follow the sequence of confirmation by other members of the multi-sig account.

Login to the multi-sig account. At the top left corner click on the **Send** button.

![](/_assets/json_01.png)

Choose the neccessary currency and fill in the sending form. After you have entered all necessary information, click on the **Continue** button.

Choose **JSON** section and copy the code, or share the **Link** or just show the QR Code from the **Export** section.

![](/_assets/json_03.png)

Share the data with other members of the multi-sig account.

**Note**: If you specified in the contract that two confirmations are required from the three accounts, then each participant should repeat the actions described below.

So now, contract member should log in to the account which has the right to confirm the multi-sig transaction.

At the top right corner click on the **<> JSON** button.

After that, put recieved JSON code in the **TX JSON** field and click on the **Continue** button.

![](/_assets/json_04.png)

Re-check entered data and click on the **Sign** button.

![](/_assets/json_05.png)

After a few seconds, created transaction will be confirmed. Thus, members of the multi-signature contract have confirmed the withdrawal request from the multi-sig account.

___

If you have troubles with our platform, please create a [support](https://support.wavesplatform.com/) ticket or write a [question](https://forum.wavesplatform.com/) on our forum.
