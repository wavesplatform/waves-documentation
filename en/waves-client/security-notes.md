# Important Security Notes to Be Considered By End Users {#SecurityNotes-ImportantSecurityNotestoBeConsideredByEndUsers:}

# SEED & Password {#AccountsOperations-SEED&Password}

Before you create an account, you should know some important points about the Waves wallet system. In Waves wallet, there is no .dat file which keeps your private keys but a SEED which grants you access to them. The SEED is by default a string of 15 English words and basically your passphrase to your funds - **if you lose your SEED, you lose access to your account**.

We strongly encourage you to additionally back up the SEED on a piece of paper and store it in a safe place. The provided string of 15 English words is cryptographically extremely secure and with the current technology unbreakable \(the chance someone can break a passphrase given by the client is 1:\(2048^15\)\). Each and every SEED is only linked to one single Waves account. Every digit, character, symbol - if there is one symbol too much, a different account opens up. If there is a wrong symbol, a different account opens up. If there is a spelling mistake, a different account opens up.

## Do not forget to create a backup copy of the seed phrase! See how to do it:

* [Online/Desktop client](https://docs.wavesplatform.com/en/waves-client/account-management/creating-an-account.html#warning)
* [iOS App](https://docs.wavesplatform.com/en/waves-client/mobile-apps/iOS/account-management/creating-an-account.html#warning)
* [Android App](https://docs.wavesplatform.com/en/waves-client/mobile-apps/android/account-management/creating-an-account.html#warning)

During the account creation, you will also be asked to generate a password for your address.

The password has two purposes:

1. It encrypts the SEED locally so the SEED is never sent to the network unprotected.
2. Your account will be cached so you don't have to import the SEED from new every time you want to log in. The password secures that only you can log into your account which stored in the localstorage. If you happen to lose your password, you can simply delete the account from the localstorage, restore account by using your SEED.

**Notes**

Forgetting the password, you can easily create a new one by using the form of account recovery through a secret phrase. See how to do it:

* [Online/Desktop client](/waves-client/account-management/restore-an-account.md)
* [iOS App](/waves-client/mobile-apps/iOS/account-management/restore-an-account.md)
* [Android App](/waves-client/mobile-apps/android/account-management/restore-an-account.md)

* The secret phrase can not be changed. If you accidentally sent it to someone or suspect that it was taken by fraudsters, immediately create a new Waves wallet and transfer all funds to it, without forgetting to keep a new secret phrase.

## Personal Account {#SecurityNotes-PersonalAccount}

* To access your account, do not use browsers that have extensions and plug-ins installed, they can access your secret passphrase.
* Protect the account with a password.
* You use your wallet anonymously, your account is not tied to e-mail or to other identifying information.
* Password protects your account as part of a specific device or browser.
* Check whether the connection is in secure SSL mode - in the address bar of your web browser, you should see the closed lock icon \(on the right or on the left, depending on the browser\).

* As an additional way of protection use [**Ledger Nano S**](/waves-client/account-management/ledger-nano.md) or/and [**Waves Keeper**](/waves-keeper/about-waves-keeper.md).

## General Notes {#SecurityNotes-GeneralNotes}

* Before you enter a secret phrase from your account or download the application, carefully look at the address bar of the browser and make sure that you are on the official resource of the company:
* Use the official software. Do not install unknown or hacked programs.
* Do not open letters or links from unknown senders.
* Regularly check for updates to the operating system and browser.
* Do not go into the wallet, using public WiFi or from someone else's device.
