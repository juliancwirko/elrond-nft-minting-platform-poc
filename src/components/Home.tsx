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

        <Paragraph marginBottom={10}>Updates:</Paragraph>
        <Paragraph>
          <Heading marginBottom={10}>elven-tools-cli sneak peek:</Heading>{' '}
          <Pane marginBottom={30}>
            <Pane maxWidth={560} width="100%">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VKVy4Bx-WVQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Pane>
          </Pane>
        </Paragraph>
        <Paragraph>
          <Link href="https://www.julian.io/articles/elrond-erdjs.html">
            - Building NFT related CLI tool with Elrond's JavaScript SDK
          </Link>
        </Paragraph>
        <Paragraph marginBottom={30}>
          <Link href="https://www.julian.io/articles/elven-nft-tools.html">
            - Tools for automated NFT minting
          </Link>
        </Paragraph>

        <Paragraph fontWeight="bold">
          The first version of the Smart Contract is ready! Works like candy
          machine. The second version will have raffle elements, so better fair
          distribution.
        </Paragraph>
        <Paragraph marginBottom={30}>
          Check it out:{' '}
          <Link href="https://github.com/juliancwirko/elven-nft-minter-sc">
            elven-nft-minter-sc
          </Link>{' '}
          and there is also a CLI tool which will help with deployment and
          interactions{' '}
          <Link href="https://github.com/juliancwirko/elven-tools-cli">
            elven-tools-cli
          </Link>
        </Paragraph>
        <Paragraph marginBottom={30}>
          Also, check the{' '}
          <Link href="https://github.com/juliancwirko/nft-art-maker">
            nft-art-maker
          </Link>
          ,{' '}
          <Link href="https://github.com/juliancwirko/elven-mint">
            elven-mint
          </Link>{' '}
          and.
        </Paragraph>

        <Paragraph marginBottom={30}>
          Elven Tools is a replication of NFTs creation functionality only on
          the devnet. Using it, you can issue ESDT tokens for NFTs, create NFTs,
          displaying already created NFTs and transactions. All done using React
          tools from Elrond.
        </Paragraph>

        <Paragraph marginBottom={30}>
          You would need to have the devnet address. You can use a couple of
          different ways to unlock and sign transactions. For now, it was tested
          using web wallet and Maiar browser extension.
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
          <Link href="https://filecoin.io/">Filecoin</Link>. It should provide a
          pinning service as well.
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
        <Paragraph>
          3. With wallet address and some xEGLD you can start playing with Elven
          Tools
        </Paragraph>
        <Paragraph>
          4. Unlock it using web wallet json file and password or Maiar browser
          extension.
        </Paragraph>
        <Paragraph marginBottom={30}>
          5. Then you can start creating NFTs.
        </Paragraph>

        <Heading>Roadmap (for the devnet POC ;)):</Heading>
        <Paragraph>- Proper Smart Contract implementation</Paragraph>
        <Paragraph>
          - Possibility to mint single NFTs and Collection using a minter Smart
          Contract (probably separate tools)
        </Paragraph>
        <Paragraph>- Possibility to list it and sell</Paragraph>
        <Paragraph>
          - Possibility to list a collection - minted using other tooling, for
          example elrond-tools-cli
        </Paragraph>
        <Paragraph>- Much better UI/UX</Paragraph>
        <Paragraph>- Other improvements</Paragraph>
        <Paragraph marginBottom={30}>
          - If it will make sense, and if it will work well - deploy to the
          mainnet (??? probably not, to much devops work is required ;))
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
          learning process. Maybe someone could take something from that. It
          will probably shift more towards{' '}
          <Link href="https://github.com/juliancwirko/elven-tools-cli">
            elven-tools-cli
          </Link>{' '}
          + maybe the devnet marketplace POC later.
        </Heading>

        <Heading>
          Also, check out my other learning resources and tools regarding Elrond
          blockchain:
        </Heading>

        <Paragraph>
          <Link href="https://github.com/juliancwirko/elven-mint">
            - elven-mint tool
          </Link>
        </Paragraph>
        <Paragraph>
          <Link href="https://github.com/juliancwirko/nft-art-maker">
            - nft-art-maker tool
          </Link>
        </Paragraph>
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
