# Creating smart account

In this article, we will review the creation of [smart account](/blockchain/account/smart-account.md) using [Waves IDE](/smart-contracts/tools/waves-ide.md).

To create smart account in Waves IDE, complete the following steps:

1. Open https://ide.wavesplatform.com/ in the browser.
2. Click **Add account** in the upper right screen area to open the following drop-down list.

![](/smart-contracts/img/add_account.png)

3. Make one of the following actions:

    - If you already have an account, click **Import account** in the drop-down list. Make the following actions in the displayed form:
        1. Type in [seed](/waves-client/frequently-asked-questions-faq/account-management/seed-phrase.md) in the **Seed phrase** field.
        2. Come up with an account name and enter it in the **Account name** field.
        3. Click **Import**.
    - If you don't have an account yet, click **Generate new account** in the drop-down list. As a result, the following account attributes will be displayed
        - account [address](/blockchain/account/address.md)
        - public key
        - private key
        - seed. It is recommended to remind the seed — if you lose it, it will be impossible to restore access to the account.

4. Click ![](/smart-contracts/img/plus.png) in the upper right screen area. As a result, the drop-down list will be displayed.

![](/smart-contracts/img/plus2.png)

5. Click **Account script**. As a result, the tab will be displayed. Write the smart account code in this tab.
6. Click **Deploy** when you'll finish with the smart account code.
