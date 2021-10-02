import React, { useState } from 'react';
import { Pane, Heading, Paragraph, TextInputField, Button } from 'evergreen-ui';
import { useMediaQuery } from 'react-responsive';
import { issueNft, createNFT } from '../../transactions';
import * as Dapp from '@elrondnetwork/dapp';

const CreateNftTab = () => {
  const { address } = Dapp.useContext();
  const sendTransaction = Dapp.useSendTransaction();
  const [ipfsImageUri, setIpfsImage] = useState('');
  const [tokenName, setName] = useState('');
  const [tokenTicker, setTicker] = useState('');
  const [tokenIdentifier, setTokenIdentifier] = useState('');
  const [nftName, setNftName] = useState('');

  const smallRes = useMediaQuery({
    query: '(max-width: 860px)',
  });

  const issueNFTToken = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (tokenName && tokenTicker) {
      const tx = issueNft({
        tokenName,
        tokenTicker,
      });
      sendTransaction({
        transaction: tx,
        callbackRoute: '/dashboard',
      });
    }
  };

  const createNFTToken = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (address && ipfsImageUri && tokenIdentifier && nftName) {
      const tx = createNFT({
        senderAddress: address,
        tokenIdentifier,
        nftName,
        uri: ipfsImageUri,
      });
      sendTransaction({
        transaction: tx,
        callbackRoute: '/dashboard',
      });
    }
  };

  return (
    <Pane
      display="flex"
      marginBottom={80}
      flexDirection={smallRes ? 'column' : 'row'}
    >
      <Pane
        width={smallRes ? '100%' : '50%'}
        backgroundColor="white"
        marginRight={smallRes ? 0 : 10}
        padding={30}
        elevation={1}
      >
        <Pane marginBottom={30}>
          <Heading size={600} marginBottom={5}>
            1. Issue ESDT Token for NFT usage
          </Heading>
          <Paragraph>
            You would need to mint an ESDT token to create NFTs on top of that.
            If you already have one, you can omit this step and use it in step
            2.
          </Paragraph>
        </Pane>
        <Pane marginBottom={50} maxWidth={400} width="100%">
          <TextInputField
            name="name"
            placeholder="example: TokenName"
            label="Name"
            required
            description="Name for your token"
            value={tokenName}
            hint="Must be between 3 - 20 characters long. Alphanumeric characters only"
            onChange={(e: any) => setName(e.target.value)}
          />
          <TextInputField
            name="ticker"
            placeholder="example: TOKN"
            label="Ticker"
            required
            description="Ticker for your token"
            value={tokenTicker}
            hint="Must be between 3 - 10 characters long. Alphanumeric characters only"
            onChange={(e: any) => setTicker(e.target.value.toUpperCase())}
          />
          <Button onClick={issueNFTToken}>Issue NFT token</Button>
        </Pane>
      </Pane>
      <Pane
        width={smallRes ? '100%' : '50%'}
        backgroundColor="white"
        marginLeft={smallRes ? 0 : 10}
        padding={30}
        elevation={1}
      >
        <Pane marginBottom={30}>
          <Heading size={600} marginBottom={5}>
            2. Create NFT Token
          </Heading>
          <Paragraph>
            You will need to have ESDT NFT token identifier from the previous
            step to create a new NFT token. You can create multiple NFT's based
            on one identifier, so if you already have one, start here.
          </Paragraph>
        </Pane>
        <Pane marginBottom={50} maxWidth={400} width="100%">
          {/* TODO: add all inputs: multiple Uri, Hash, Royalties, Attributes */}
          <TextInputField
            name="tokenIdentifier"
            placeholder="example: TOKE-34562"
            label="Token identifier"
            required
            description="Identifier of your ESDT token for this NFT"
            value={tokenIdentifier}
            hint="Must be between 3 - 10 characters long. Alphanumeric characters only"
            onChange={(e: any) => setTokenIdentifier(e.target.value)}
          />
          <TextInputField
            name="nftName"
            placeholder="example: MyNFTName"
            label="NFT name"
            required
            description="Name of your NFT"
            value={nftName}
            hint="Alphanumeric characters only"
            onChange={(e: any) => setNftName(e.target.value)}
          />

          <TextInputField
            name="ipfsImageUri"
            placeholder="example: https://ipfs.io/ipfs/{CID}"
            label="Image URL"
            required
            description="Name of your NFT"
            value={ipfsImageUri}
            hint="The best would be to use decentralized storage, like IPFS or even better NFT.storage"
            onChange={(e: any) => setIpfsImage(e.target.value)}
          />
        </Pane>
        <Pane display="flex" justifyContent="center" marginBottom={20}>
          <Pane maxWidth={300} textAlign="center">
            <Pane is="img" src={ipfsImageUri} alt="" maxWidth="100%" />
          </Pane>
        </Pane>
        <Button
          onClick={createNFTToken}
          disabled={Boolean(
            !address || !ipfsImageUri || !tokenIdentifier || !nftName
          )}
        >
          Create NFT token
        </Button>
      </Pane>
    </Pane>
  );
};

export default CreateNftTab;
