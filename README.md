## Elven Tools

- [elven.tools](https://www.elven.tools)
- [Quick walkthrough video (uses the testnet)](https://youtu.be/EyND_L37Pac)

This app is a result of learning and playing with [Elrond](https://elrond.com/) blockchain and its [tooling](https://github.com/ElrondNetwork).

Elven Tools is a replication of NFTs creation functionality only on the devnet. Using it, you can issue ESDT tokens for NFTs, create NFTs, displaying already created NFTs and transactions. All done using React tools from Elrond, which are in the early stage, but I am impressed that I could build a lot.

**You would need to have the devnet address. You can use a couple of different ways to unlock and sign transactions. For now, it was tested using web wallet and Maiar browser extension.**

### Local run

- clone the repo
- run `yarn install`
- run `cp .env.devnet.example .env.local` (or if you need the testnet config `cp .env.testnet.example .env.local`)
- run `yarn start`

### Tooling

1. Elrond tooling. Mainly [React tools](https://www.npmjs.com/package/@elrondnetwork/dapp), and [JavaScript SDK](https://www.npmjs.com/package/@elrondnetwork/erdjs).
2. IPFS based tooling - The app takes any URL for the asset. The best is to use [NFT.storage](https://nft.storage/) - free, decentralized storage and bandwidth for NFTs on [IPFS](https://ipfs.io/) and [Filecoin](https://filecoin.io/). It should provide a pinning service as well.

### What you need to play with it

1. Create your wallet address using the devnet. You can do this here: [devnet-wallet.elrond.com](https://devnet-wallet.elrond.com/)
2. You would also need some xEGLD. Go to the [Elrond Devnet Faucet](https://r3d4.fr/elrond/devnet) (I guess not an official tool, but it works well). You can also use an official one accessible from the devnet web wallet.
3. With wallet address and some xEGLD you can start playing with Elven Tools
4. Unlock it using web wallet json file and password or Maiar browser extension.
5. Then you can start creating NFTs.

### Roadmap
- Smart Contract implementation
- Possibility to mint single NFTs using Smart Contract
- Possibility to list it and sell - simple marketplace
- Custom erdjs script for automation and mass minting
- Possibility to list a collection - minted using [nft-art-maker](https://github.com/juliancwirko/nft-art-maker) and custom script (WIP)
- Much better UI/UX
- Improvements (SC and frontend)
- If it will make sense, and if it will work well - deploy to the mainnet (???)

### Things I don't know yet
- It would be good to integrate some tooling for uploads, [NFT.storage](https://nft.storage/) or [Web3 Storage](https://web3.storage/) are nice, but every user should use a separate account. Bare IPFS is ok, but it needs pinning service anyway. I know that the Elrond team works on a solution and NFT marketplace, so I hope I will play with these soon.
- I prefer to use only JavaScript SDK with custom React implementation, but now, I don't want to spend more time checking how much work is required to make all authentication providers work.
- It would be awesome to have the possibility to sign multiple 'create nft' transactions without the need to confirm every in the UI

### If you want to contact me
- julian.cwirko@gmail.com
- [https://twitter.com/JulianCwirko](twitter.com/juliancwirko)

#### Until I figure out and learn a couple of more things, there are no plans to make it a thing, but maybe it will become usable during my learning process.

### Also, check out my other learning resources and tools regarding Elrond blockchain

- [nft-art-maker](https://github.com/juliancwirko/nft-art-maker)
- [Smart Contract for Elrond and Arwen](https://www.julian.io/articles/elrond-smart-contracts.html)
- [Simple user interface for Elrond Smart Contract](https://www.julian.io/articles/elrond-dapp-ui.html)
- [Simple Smart Contract GitHub repository](https://github.com/juliancwirko/elrond-simple-sc)
- [Frontend app utilizing simple Smart Contract](https://github.com/juliancwirko/elrond-simple-sc-frontend-app)
- [Custom Elrond Dapp template for Create React App](https://github.com/juliancwirko/cra-template-elrond-dapp)
- [Elrond Smart Contracts - interacting using erdpy - walkthrough video](https://youtu.be/mIsNI7ZxQRM)
- [Elrond Smart Contract frontend app - walkthrough video](https://youtu.be/Sjpj7Btasgs)
