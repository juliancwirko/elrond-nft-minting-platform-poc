import MainLayout from './MainLayout';
import { useHistory } from 'react-router-dom';
import { Pane, Button, Paragraph, Heading, Link } from 'evergreen-ui';

const Home: React.FC = () => {
  const history = useHistory();

  const unlock = () => {
    history.push('/unlock');
  };

  return (
    <MainLayout>
      <Pane backgroundColor="white" elevation={1} padding={30}>
        <Paragraph marginBottom={30}>
          This app is a result of learning and playing with{' '}
          <Link href="https://elrond.com/">Elrond</Link> blockchain and its{' '}
          <Link href="https://github.com/ElrondNetwork">tooling</Link>.
        </Paragraph>

        <Paragraph marginBottom={30}>
          <Button onClick={unlock}>Unlock Elven Tools</Button>
          <Link marginLeft={10} href="https://github.com/juliancwirko">
            Github
          </Link>
        </Paragraph>

        <Paragraph marginBottom={30}>
          Elven Tools is a replication of NFTs creation functionality only on
          the devnet. Using it, you can issue ESDT tokens for NFTs, create NFTs,
          displaying already created NFTs and transactions. All done using React
          tools from Elrond, which are in the early stage, but I am impressed
          that I could build a lot.
        </Paragraph>

        <Pane marginBottom={30}>
          <Pane maxWidth={560} width="100%">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/EyND_L37Pac"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Pane>
        </Pane>

        <Paragraph marginBottom={30} fontWeight="bold">
          You would need to have the devnet address. The best is to unlock using
          the web wallet. The browser extension wallet will unlock the app, but
          you won't create NFT using it on the devnet. The functionality will
          probably come later.
        </Paragraph>

        <Heading>Tooling:</Heading>
        <Paragraph>
          1. Elrond tooling. Mainly{' '}
          <Link href="https://www.npmjs.com/package/@elrondnetwork/dapp">
            React tools
          </Link>
          , and{' '}
          <Link href="https://www.npmjs.com/package/@elrondnetwork/erdjs">
            JavaScript SDK
          </Link>
          .
        </Paragraph>
        <Paragraph marginBottom={30}>
          2. IPFS based tooling - The app takes any URL for the asset. The best
          is to use <Link href="https://nft.storage/">NFT.storage</Link> free,
          decentralized storage, and bandwidth for NFTs on{' '}
          <Link href="https://ipfs.io/">IPFS</Link> and{' '}
          <Link href="https://filecoin.io/">Filecoin</Link>. Let's store NFTs
          files in a decentralized way. It should provide a pinning service as
          well.
        </Paragraph>

        <Heading>What you need to play with it:</Heading>
        <Paragraph>
          1. Create your wallet address using the devnet. You can do this here:{' '}
          <Link href="https://devnet-wallet.elrond.com/">
            devnet-wallet.elrond.com
          </Link>
        </Paragraph>
        <Paragraph>
          2. You would also need some xEGLD to play with. Go to the{' '}
          <Link href="https://r3d4.fr/elrond/devnet">Elrond Devnet Faucet</Link>{' '}
          (I guess not an official tool, but it works well). You can also use an
          official one accessible from the devnet web wallet.
        </Paragraph>
        <Paragraph marginBottom={30}>
          3. With wallet address and some xEGLD you can start playing with Elven
          Tools
        </Paragraph>

        <Heading>What's next:</Heading>
        <Paragraph marginBottom={30}>
          I would like to have much more docs. Like detailed erdjs SDK
          documentation, going through many different docs and codebase burns a
          lot of time. Of course, I understand that everything takes time, and
          we will get those soon. I want to shape Elven Tools to be responsible
          for NFTs minting and sending using a Smart Contract responsible for
          that.
        </Paragraph>

        <Heading>Things I don't know yet:</Heading>
        <Paragraph>
          - It would be good to integrate some tooling for uploads,
          <a href="https://nft.storage/">NFT.storage</a> or{' '}
          <a href="https://web3.storage/">Web3 Storage</a> are nice, but every
          user should use a separate account. Bare IPFS is ok, but it needs
          pinning service anyway. I know that the Elrond team works on a
          solution and NFT marketplace, so I hope I will play with these soon.
        </Paragraph>
        <Paragraph marginBottom={30}>
          - I prefer to use only JavaScript SDK with custom React
          implementation, but now, I don't want to spend more time checking how
          much work is required to make all authentication providers work.
        </Paragraph>

        <Heading>If you want to contact me:</Heading>
        <Paragraph>julian.cwirko@gmail.com</Paragraph>
        <Paragraph>
          <Link href="https://twitter.com/JulianCwirko">
            twitter.com/juliancwirko
          </Link>
        </Paragraph>
        <Paragraph marginBottom={30}>
          <Link href="https://github.com/juliancwirko">
            github.com/juliancwirko
          </Link>
        </Paragraph>

        <Heading size={500} marginBottom={30}>
          Until I figure out and learn a couple of more things, there are no
          plans to make it a thing, but maybe it will become usable during my
          learning process
        </Heading>

        <Heading>
          Also, check out my other learning resources regarding Elrond
          blockchain:
        </Heading>

        <Paragraph>
          <Link href="https://www.julian.io/articles/elrond-smart-contracts.html">
            - Smart Contract for Elrond and Arwen
          </Link>
        </Paragraph>
        <Paragraph>
          <Link href="https://www.julian.io/articles/elrond-dapp-ui.html">
            - Simple user interface for Elrond Smart Contract
          </Link>
        </Paragraph>
        <Paragraph>
          <Link href="https://github.com/juliancwirko/elrond-simple-sc">
            - Simple Smart Contract GitHub repository
          </Link>
        </Paragraph>
        <Paragraph>
          <Link href="https://github.com/juliancwirko/elrond-simple-sc-frontend-app">
            - Frontend app utilizing simple Smart Contract
          </Link>
        </Paragraph>
        <Paragraph>
          <Link href="https://github.com/juliancwirko/cra-template-elrond-dapp">
            - Custom Elrond Dapp template for Create React App
          </Link>
        </Paragraph>
        <Paragraph>
          <Link href="https://youtu.be/mIsNI7ZxQRM">
            - Elrond Smart Contracts - interacting using erdpy - walkthrough
            video
          </Link>
        </Paragraph>
        <Paragraph>
          <Link href="https://youtu.be/Sjpj7Btasgs">
            - Elrond Smart Contract frontend app - walkthrough video
          </Link>
        </Paragraph>
      </Pane>
    </MainLayout>
  );
};

export default Home;
