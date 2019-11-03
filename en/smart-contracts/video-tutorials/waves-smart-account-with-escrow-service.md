#Waves Smart Account with escrow service
In this tutorial, we will discuss the problem of buying physical goods with cryptocurrencies. Should the buyer trust the seller and pay before receiving the goods? Should the seller trust the buyer and ship the goods before receiving payment? This problem can be solved by using a third party escrow service. A well-known improvement uses Waves multisignature feature. In this scheme, the money is not sent directly to the escrow service’s address, but instead, it is sent to a 2-of-3 multisig address with one key controlled by each of the transacting parties and one controlled by the mediator. When there is no dispute, the two transacting parties can create together the transfer transaction. Only if there is a dispute the mediator will get involved, collaborating with either the buyer or seller (as appropriate) to redeem the funds.

{%youtube%}31dwYcgb65M{%endyoutube%}

The source code from this video is available on [Github](https://github.com/Nazeim/Waves-Smart-Contracts-Tutorials/blob/master/src/main/java/Escrow.java).
