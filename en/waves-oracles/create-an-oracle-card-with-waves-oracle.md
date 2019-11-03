# Create an oracle card with Waves Oracle

Only authorized users can create an [oracle card](/waves-oracles/oracle-card.md). Authorization is performed using Waves Keeper.

The account can create no more than one oracle card.

If the authorization is done through a test network account, the oracle card will be created in the test network. If the authorization is done through an account from the main network, the oracle card will be created in the main network.

## Create an oracle card

1. Determine which Waves account you will use to create your oracle card. This can be an existing account or a newly created one. Use the instructions to create a new Waves account.
2. Install Waves Keeper if this extension is not already installed.
3. Go to Waves Oracles and log in.
4. Select **Create an oracle**.
5. Fill in the fields of the oracle card registration form.
6. Click **Create**.
7. Confirm the transaction in Waves Keeper by clicking **Approve**.
8. Wait until the oracle card is created.

Once the oracle card has been created, the oracle card is available to all users. The oracle card informs users what data and in what format the oracle will send from sources (e.g. external APIs) to blockchain Waves.

## Fields of the 'create my oracle' form

| Field | Description |
| :--- | :--- |
| Network | Lock input. Network Mainnet or Testnet which you log in with Waves Keeper |
| Address | Lock input. Waves address which you log in with Waves Keeper |
| Oracle name | Your oracle name |
| Link | Link to the data providers website (source of data) |
| Category | Select a category of data for better indexing in Waves Oracles for other users |
| Status | Select the current oracle status:<ul><li>development</li><li>test</li><li>production</li><li>archive</li></ul> |
| About | Goals and ideas of the current protocol, description of data sources or algorithm based on which data appears, list of use cases, list of references with descriptions |
| Update frequency | How often the provider updates the data in time, or blocks, or by request only |
| Summary of Changes from Previous Version | Summary of the made revisions |
| Specification | Specification kit. You can add or remove an arbitrary number of parameters by specifying their type, required and description. It is in this format that oracle will need to transmit data from the data source to the consumer.<br>If the parameter key should be variable, for example, assetId, then write **$** at the beginning: **$assetId** |
| Example | Example of oracle transaction. For a better understanding of your oracle by other users insert a sample transaction in JSON by the format specified in the specification |
