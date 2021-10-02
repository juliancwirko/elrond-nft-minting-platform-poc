import React, { useEffect, useState, useRef } from 'react';
import * as Dapp from '@elrondnetwork/dapp';
import { Pane, Heading, Spinner, Text } from 'evergreen-ui';
import { useMediaQuery } from 'react-responsive';
import { getNfts } from '../../apiEndpoints';

const NftListTab = () => {
  const { address } = Dapp.useContext();
  const [nfts, setNftsList] = useState([]);
  const [pending, setPending] = useState(false);

  const smallRes = useMediaQuery({
    query: '(max-width: 860px)',
  });

  const mounted = useRef(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setPending(true);
    const fetchNfts = async () => {
      const response = await fetch(getNfts(address), { signal });
      const data = await response.json();
      if (mounted.current) {
        setNftsList(data);
        setPending(false);
      }
    };
    if (address) {
      fetchNfts();
    }
    return () => {
      mounted.current = false;
    };
  }, [address]);

  return (
    <Pane marginBottom={25}>
      <Pane marginBottom={30} marginTop={30}>
        <Heading size={700}>Your NFTs:</Heading>
      </Pane>
      <Pane display="flex" flexWrap="wrap">
        {pending ? (
          <Spinner marginX="auto" marginY="auto" />
        ) : (
          nfts.map((nft: any, index: number) => (
            <Pane
              backgroundColor="white"
              width={smallRes ? 'calc(50% - 20px)' : 'calc(25% - 20px)'}
              margin={10}
              padding={20}
              elevation={1}
              key={index}
            >
              <Heading>{nft.name}</Heading>
              <Pane>
                <Text fontSize={12}>Collection: {nft.collection}</Text>
              </Pane>
              <Pane marginBottom={10}>
                <Text fontSize={12}>Id: {nft.identifier}</Text>
              </Pane>
              <Pane is="a" href={atob(nft.uris[0])}>
                <Pane
                  is="img"
                  src={atob(nft.uris[0])}
                  maxWidth="100%"
                  width="auto"
                />
              </Pane>
            </Pane>
          ))
        )}
        {!pending && nfts.length === 0 && <Text>There are no NFTs yet.</Text>}
      </Pane>
    </Pane>
  );
};

export default NftListTab;
