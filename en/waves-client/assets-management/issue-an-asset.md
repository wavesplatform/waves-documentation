# How to create a Token

Issuing your own token on Waves couldn’t be simpler, in the Waves client there is a tab for “Token Creation” where you can give your token a name and description, choose the total token and decimals and then create it.

It costs just 1 Waves to do so and then your token can be traded on the DEX.

At the top-left corner click on the **Create token** to start the creation process.

![](/_assets/token_creation_01.png)

**Note**: Before creating a new asset, please make sure that you have at least 1 WAVES on your account to pay the fee charged for the asset creation.

You'll see the following window:

![](/_assets/token_creation_02.png)

Let's describe each boxes:

**Name of your asset**: First of all, give your token a name. Important to know here is that names are not unique to prevent name squatting but the identifier, also called asset ID, is unique. Whenever you are looking for a token, search and confirm it is the right one by checking the asset ID. However, if our anti-spam system detects duplicate names, it will automatically mark as spam tokens. So, before you start, please read carefully condition for creating new tokens;

**Description**: Write a description for your token. You are also able to include website links which are particularly useful considering the asset description as of now is unchangeable;

**Total tokens**: Define the total supply of your token. The total supply can either be fixed at issuance or increased later by making the asset re-issuable;

**Reissuable**: Re-issuable defines if an asset issuer can increase the token's supply at a later point or not. If set to "Reissuable", the issuer can increase the supply any time. It's also important to know that if re-issuable is set to true at the beginning, it can still be changed to false at a later stage;

**Decimals**: Set how many decimals your asset shall have. For example, if you set 8 decimals as in Bitcoin, your token can be divided down to 0.00000001. If you set 0, your token can only be transacted in whole pieces (1, 3, 15);

**Smart asset**: A Smart Asset is an asset with an attached script that places conditions on every transaction made for the token in question.
Each validation of a transaction by a Smart Asset’s script increases the transaction fee by 0.004 WAVES. For example, if a regular tx is made for a Smart Asset, the cost is **0.001 + 0.004 = 0.005 Waves**. If an exchange transaction is made, the cost is **0.003 + 0.004 = 0.007 Waves**. [Learn more](https://docs.wavesplatform.com/en/smart-contracts/smart-assets.html)

**Note**: Before creating a new Asset, make sure that you have at least 1 WAVES for asset creation fee.
**Note**: The name of the created asset can not be shorter than 4 characters.

Check all fields in the **Preview** box and if everything is OK, click on the **Generate** button.

![](/_assets/token_creation_03.png)

After that please carefully read asset creation conditions and if everything is correct, click on the **Send**. If not, please change the name of the token under the token creation conditions by clicking **Go Back**.

![](/_assets/token_creation_03.1.png)

After all you'll be able to see your newly created token in the **Portfolio**.

![](/_assets/token_creation_04.png)

You can sort and easily to find your tokens in the **Portfolio** settings.

![](/_assets/token_creation_05.png)
___

See more articles in the [Assets Management](/waves-client/assets-management.md) chapter.

If you have troubles with our platform, please create a [support](https://support.wavesplatform.com/) ticket or write a [question](https://forum.wavesplatform.com/) on our forum.
