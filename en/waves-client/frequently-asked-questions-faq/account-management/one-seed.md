# I restored my wallet using the correct passphrase, but I don't see my funds

Restoring wallets is a deterministic mathematical process. If you enter a set of words, you will **always** recover the same wallet. If any of those words are different from your original wallet, you will instead recover an empty wallet. If you are sure you are using the correct recovery phrase, we identified several typical cases where users can make a mistake.

**Case 1** - Most probably it's because you imported an incorrect seed passphrase. By default Waves seed always contains 15 English words with spaces between each word. Except the beginning of the first word and the end of the last word.

![](/_assets/one_seed_01.png)

So, please make sure that you are importing the correct seed phrase because even a single character will generate completely different waves address.

As shown in the screenshot below, you may notice how Waves address has changed after incorrect importing of a few words

![](/_assets/one_seed_02.png)

Usually there is only a small discrepancy between the word you have written down and the actual word of your backup phrase. To determine the correct word match, you may just need to match it to the most similar word actually used in waves wallet backup phrases.

![](/_assets/one_seed_03.png)

For a full list of the words used in waves wallet seed phrases, you can view the following list: https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt

**Case 2** - The following case is more relevant if you created an account in the old version of the Waves app (Lite client) and accidentally added non-default characters or used a custom seed phrase (created by your self). Please make sure that the original phrase doesn't have any white spaces or line breaks at the end of the line because Beta wallet doesn't recognise any additional non default symbols at the begin and at the end of the phrase.

If the phrase has non-standard characters, the only way to transfer funds is to create a new account and transfer funds from the old address to the new address.
