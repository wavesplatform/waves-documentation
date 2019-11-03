# User interface

## Account

Tokens can be rated from browsers only with Waves Keeper installed. In mobile browsers, only display of ratings is available.

If Waves Keeper is installed, then in the upper right corner you can see the calculated value of the weight of your rating based on the number of WCT tokens on your account.

The menu consists of following items:

* Account - account information
* Rating - default Token Rating page
* My tokens - the token management panel for issuers
* Log out

## Filters

### Top 20

Displays 20 tokens that have the best overall indicators of rating, sums of all weights [W<sub>n</sub>](/waves-token-rating/rating-formula.md), and the number of [addresses](/blockchain/account/address.md) that rated token.

### All tokens

Displays all tokens.

On the **All Tokens** page, additional filters are available: by rating, WCT weight and votes sum.

You can also view all the tokens you have rated by switching the filter Only my votes to the active position.

## Rating table

The table displays only tokens that were ever rated. Tokens without ratings can be found via the search bar.

| Column | Description |
| :--- | :--- |
| Name | Name of the token.<br>If the token is suspicious, then next to its name there will be special mark |
| Rating | Rating of the token.<br> If you have already rated the token, then next to its rating there will be a mark with your score |
| WCT weight	| Sum of all weights W<sub>n</sub> of all scores |
| Vote sum | Number of users' rates |
| Total amount | Amount of issued tokens |
| Last price | The current price of a single token from [DEX](/waves-dex/about-waves-dex.md) (updates every three hours) |

## Token's card

### Filters

#### WCT

Displays distribution of weights W<sub>n</sub> by rates.

#### Votes

Displays distribution of a number of addresses that rated token by rates.

### My voting history

This section is displayed only if you already rated token.

| Field | Description |
| :--- | :--- |
| Vote date | Date and time of voting|
| WCT weight | Weight of score |
| My vote | Score |

### Market information

This section is displayed only if the token has a ticker or is traded on the DEX.

| Field | Description |
| :--- | :--- |
| Ticker | The token ticker on DEX if there is |
| Price in USD | The current price of the token in USD |
| Price in WAVES | The current price of the token in WAVES |
| Capitalization | Capitalization (product of the token's price and the amount of issued tokens) |

### General information

| Field | Description |
| :--- | :--- |
| ID | ID of the token |
| Name | Name of the token |
| Website | Link to the website. Displayed only if the issuer adds the link |
| Total amount | Amount of issued tokens |
| Decimal points | Number of decimal places of token |
| Type | Tells if the [reissue transaction](/blockchain/transaction-type/reissue-transaction.md) is possible. <br>Takes one of two values: "Reissuable" or "Not reissuable" |
| Issuer | Address from which the token was issued |
| Block | The [blockchain height](/blockchain/blockchain/blockchain-height.md) at which the [issue transaction](/blockchain/transaction-type/issue-transaction.md) went to the [block](/blockchain/block.md) |
| Issue date | Token issue date |
| Description | Token description |
| Additional information | Additional information from the issuer about the token or project. Displayed only if the issuer adds it |
