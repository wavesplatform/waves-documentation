# Data transaction tool

Use the **Data transaction tool** to write data transaction in the data storage of the oracle account.

In Waves Oracles login to your oracle account via Waves Keeper. Hit **Send transaction** on the sidebar. If an oracle card is created, but the specification is not filled in, you will see a notification about it. To use the data transaction tool, a specification card should already be [created for the oracle](/waves-oracles/create-an-oracle-card-with-waves-oracle.md).

The pop-up will open.

![](/waves-oracles/img/data_transaction_tool.png)

For boolean type keys: Yes - True, No - False.

For string type keys the value is limited to 32 Kb.

For integer type keys the value is equal to 8 bytes and only integers are available.

For binary type keys, you can download a file that is converted to base64, limit the file size to 32 Kb.

If the key is a variable (for example, assetId), it is determined by the presence of the $ symbol at the beginning of its name in the specification. In this case, you can edit both the key and its value. To edit the keys, click on the pencil-icon next to it.

The mandatory parameters are marked with an asterisk. Optional parameters may be left out. The cross-icon on the right side of the form - removes the key-value.

In the lower part of the form in the special area, the data transaction is dynamically displayed with all pairs of key-value of the data array, as well as the fee of this transaction.

To send a transaction, hit Save and approve it with Waves Keeper.
