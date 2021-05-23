## Elven Tools

[elven.tools](https://www.elven.tools)

This app is a result of learning and playing with [Elrond](https://elrond.com/) blockchain and its [tooling](https://github.com/ElrondNetwork).

Elven Tools is a replication of NFTs creation functionality only on the testnet. Using it, you can issue ESDT tokens for NFTs, create NFTs, upload images to IPFS, showing already created NFTs and transactions. All done using React tools from Elrond, which are in the early stage, but I am impressed that I could build a lot.

### Tooling

1. Elrond tooling. Mainly [React tools](https://www.npmjs.com/package/@elrondnetwork/dapp), and [JavaScript SDK](https://www.npmjs.com/package/@elrondnetwork/erdjs).
2. IPFS based tooling - The app takes any URL for the asset. The best is to use [NFT.storage](https://nft.storage/) - free, decentralized storage and bandwidth for NFTs on [IPFS](https://ipfs.io/) and [Filecoin](https://filecoin.io/). Let's store NFTs files in a decentralized way. It should provide a pinning service as well.

### What you need to play with it

1. Create you wallet address using the testnet. You can do this here: [testnet-wallet.elrond.com](https://testnet-wallet.elrond.com/)
2. Your would also need some xEGLD. Go to the [Elrond Testnet Faucet](https://r3d4.fr/elrond/testnet) (I guess not an official tool, but it works well). Take as much as you can because there are limitations for one address. You can always create another one.
3. With wallet address and some xEGLD you can start playing with Elven Tools

### What's next
I would like to have much more docs. Like detailed erdjs SDK documentation, going through many different docs and codebase burns a lot of time. Of course, I understand that everything takes time, and we will get those soon. I want to shape Elven Tools to be responsible for NFTs minting and sending. It would be good to hide the ESDT token issuance. I want to make it work with different user accounts. The UX should be more straightforward and better looking. There are also too many transaction confirmations, and probably we can do something with that. There will be a couple of bugs for sure. It may also lack some error handling in some places, so some work is needed here too.

### Things I don't know yet
- It would be good to integrate some tooling for uploads, NFT.storage is nice, but every user should use a separate account. Bare IPFS needs pinning service anyway.
- Preferably, I would like to use only JavaScript SDK, with custom React implementation, but at this moment, I didn't want to spend more time checking how much work is required
- There is a lot of questions, and documentation is lacking some information about especially JavaScript SDK

### If you want to contact me
- julian.cwirko@gmail.com
- [https://twitter.com/JulianCwirko](twitter.com/juliancwirko)

#### Until I figure out and learn a couple of more things, there are no plans to run it on the mainnet, but who knows, maybe in the future.
