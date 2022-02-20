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
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginBottom={40}
        >
          <Paragraph marginBottom={30}>
            This app is a result of learning and playing with{' '}
            <Link href="https://elrond.com/">Elrond</Link> blockchain and its{' '}
            <Link href="https://github.com/ElrondNetwork">tooling</Link>.
          </Paragraph>

          <Paragraph marginBottom={30}>
            <Link href="https://github.com/juliancwirko/elrond-nft-minting-platform-poc">
              Github
            </Link>
            <Button marginLeft={20} onClick={unlock}>
              Unlock Elrond NFT POC
            </Button>
          </Paragraph>
        </Pane>

        <Paragraph>
          <Heading
            marginBottom={10}
            textAlign="center"
            maxWidth={800}
            marginLeft="auto"
            marginRight="auto"
            width="100%"
          >
            'How to run NFT collection on the Elrond blockchain' - from
            preparing the assets through Smart Contract deployment to buying and
            minting with the CLI tool.
          </Heading>{' '}
          <Pane marginBottom={30}>
            <Pane
              maxWidth={800}
              marginTop={40}
              marginLeft="auto"
              marginRight="auto"
              width="100%"
            >
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/resGP6a7_34"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Pane>
          </Pane>
        </Paragraph>
        <Paragraph marginTop={40}>
          <Heading marginBottom={10}>More articles and tools:</Heading>
        </Paragraph>
        <Paragraph>
          <Link href="https://www.elven.tools/docs/tips-on-buying-nfts-on-the-elrond-blockchain.html">
            - Tips on buying NFTs on the Elrond blockchain
          </Link>
        </Paragraph>
        <Paragraph>
          <Link href="https://www.elven.tools/docs/elven-tools-workflows.html">
            - Elven Tools Workflows
          </Link>
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
        </Paragraph>

        <Heading>
          What you need to play with the website on which you are:
        </Heading>
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

        <Heading>
          Also, check out my other learning resources and tools regarding Elrond
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
