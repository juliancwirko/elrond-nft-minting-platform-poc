import MainLayout from './MainLayout';
import { useHistory } from 'react-router-dom';
import { Pane, Button, Paragraph, Heading, Link } from 'evergreen-ui';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <MainLayout>
      <Pane backgroundColor='white' elevation={1} padding={30}>
        <Paragraph marginBottom={30}>
          This app is a result of learning and playing with{' '}
          <Link href='https://elrond.com/'>Elrond</Link> blockchain and its{' '}
          <Link href='https://github.com/ElrondNetwork'>tooling</Link>.
        </Paragraph>

        <Paragraph marginBottom={30}>
          <Button onClick={() => history.push('/unlock')}>
            Unlock Elven Tools
          </Button>
          <Link marginLeft={10} href='https://github.com/juliancwirko'>
            Github
          </Link>
        </Paragraph>

        <Paragraph marginBottom={30}>
          Elven Tools is a replication of NFTs creation functionality only on
          the testnet. Using it, you can issue ESDT tokens for NFTs, create
          NFTs, displaying already created NFTs and transactions. All done using
          React tools from Elrond, which are in the early stage, but I am
          impressed that I could build a lot.
        </Paragraph>

        <Pane marginBottom={30}>
          <Pane maxWidth={560} width="100%">
            <iframe
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/EyND_L37Pac'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </Pane>
        </Pane>

        <Heading>Tooling:</Heading>
        <Paragraph>
          1. Elrond tooling. Mainly{' '}
          <Link href='https://www.npmjs.com/package/@elrondnetwork/dapp'>
            React tools
          </Link>
          , and{' '}
          <Link href='https://www.npmjs.com/package/@elrondnetwork/erdjs'>
            JavaScript SDK
          </Link>
          .
        </Paragraph>
        <Paragraph marginBottom={30}>
          2. IPFS based tooling - The app takes any URL for the asset. The best
          is to use <Link href='https://nft.storage/'>NFT.storage</Link> free,
          decentralized storage, and bandwidth for NFTs on{' '}
          <Link href='https://ipfs.io/'>IPFS</Link> and{' '}
          <Link href='https://filecoin.io/'>Filecoin</Link>. Let's store NFTs
          files in a decentralized way. It should provide a pinning service as
          well.
        </Paragraph>

        <Heading>What you need to play with it:</Heading>
        <Paragraph>
          1. Create your wallet address using the testnet. You can do this here:{' '}
          <Link href='https://testnet-wallet.elrond.com/'>
            testnet-wallet.elrond.com
          </Link>
        </Paragraph>
        <Paragraph>
          2. You would also need some xEGLD to play with. Go to the{' '}
          <Link href='https://r3d4.fr/elrond/testnet'>
            Elrond Testnet Faucet
          </Link>{' '}
          (I guess not an official tool, but it works well). Take as much as you
          can because there are limitations for one address. You can always
          create another one.
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
          for NFTs minting and sending. It would be good to hide the ESDT token
          issuance. I want to make it work with different user accounts. The UX
          should be more straightforward and better looking. There are also too
          many transaction confirmations, and probably we can do something with
          that. There will be a couple of bugs for sure. It may also lack some
          error handling in some places, so some work is needed here too.
        </Paragraph>

        <Heading>Things I don't know yet:</Heading>
        <Paragraph>
          - It would be good to integrate some tooling for uploads, NFT.storage
          is nice, but every user should use a separate account. Bare IPFS needs
          pinning service anyway.
        </Paragraph>
        <Paragraph marginBottom={30}>
          - Preferably, I would like to use only JavaScript SDK, with custom
          React implementation, but at this moment, I didn't want to spend more
          time checking how much work is required
        </Paragraph>
        <Paragraph>
          There is a lot of questions, and documentation is lacking some
          information about especially JavaScript SDK
        </Paragraph>
        <Heading>If you want to contact me:</Heading>
        <Paragraph>julian.cwirko@gmail.com</Paragraph>
        <Paragraph>
          <Link href='https://twitter.com/JulianCwirko'>
            twitter.com/juliancwirko
          </Link>
        </Paragraph>
        <Paragraph marginBottom={30}>
          <Link href='https://github.com/juliancwirko'>
            github.com/juliancwirko
          </Link>
        </Paragraph>

        <Heading size={500}>
          Until I figure out and learn a couple of more things, there are no
          plans to run it on the mainnet, but who knows, maybe in the future.
        </Heading>
      </Pane>
    </MainLayout>
  );
};

export default Home;
