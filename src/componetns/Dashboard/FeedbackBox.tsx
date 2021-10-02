import React, { useEffect, useState, useCallback } from 'react';
import { Pane, Text, Link, Button, Strong } from 'evergreen-ui';
import * as Dapp from '@elrondnetwork/dapp';
import { TransactionType } from '../../types';
import { assignRoles } from '../../transactions';
import { getTransactionByHash } from '../../apiEndpoints';
import { hexToString } from '../../utils';

interface FeedbackBoxProps {
  setTabSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

const FeedbackBox: React.FC<FeedbackBoxProps> = ({ setTabSelectedIndex }) => {
  const [transactionHash, setTransactionHash] = useState('');
  const [tokenIdentifier, setTokenIdentifier] = useState('');
  const [transactionType, setTransactionType] = useState<
    TransactionType | undefined
  >();

  const { address, explorerAddress } = Dapp.useContext();
  const sendTransaction = Dapp.useSendTransaction();

  const parseScResponses = useCallback(
    (scResults: any) => {
      if (scResults?.length > 1) {
        const setRoleObj = scResults.find((item: any) =>
          atob(item.data).includes('ESDTSetRole')
        );
        return {
          esdtSetRoleToken: hexToString(atob(setRoleObj.data).split('@')?.[1]),
          issuanceTypeToken: '',
        };
      }
      const scData = atob(scResults?.[0]?.data);
      const scDataSplit = scData.split('@');
      if (
        hexToString(scDataSplit?.[1]) === 'ok' &&
        Number.isNaN(Number(scDataSplit?.[2]))
      ) {
        return {
          esdtSetRoleToken: '',
          issuanceTypeToken: hexToString(scDataSplit?.[2]),
        };
      }
      if (
        hexToString(scDataSplit?.[1]) === 'ok' &&
        !Number.isNaN(Number(scDataSplit?.[2]))
      ) {
        setTransactionHash('');
        setTabSelectedIndex(2);
      }

      return {
        esdtSetRoleToken: '',
        issuanceTypeToken: '',
      };
    },
    [setTabSelectedIndex]
  );

  useEffect(() => {
    // TODO: errors handling
    const fetchTransactionData = async (txHash: string) => {
      const response = await fetch(getTransactionByHash(txHash));
      const data = await response.json();

      // TODO: refactor this logic using tools from SDK
      if (data?.results?.length > 0) {
        const tokenFromIssuance = parseScResponses(
          data.results
        ).issuanceTypeToken;
        const tokenFromRoleType = parseScResponses(
          data.results
        ).esdtSetRoleToken;

        if (tokenFromRoleType) {
          setTokenIdentifier(tokenFromRoleType);
          setTransactionType(TransactionType.ROLES);
        }

        if (tokenFromIssuance) {
          setTokenIdentifier(tokenFromIssuance);
          setTransactionType(TransactionType.ISSUANCE);
        }
      }
    };

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const status = urlParams.get('status');
    const txHash = urlParams.get('txHash');

    if (txHash && status === 'success') {
      fetchTransactionData(txHash);
    }

    if (txHash && status !== 'success') {
      setTransactionType(TransactionType.ERROR);
    }

    if (txHash) {
      setTabSelectedIndex(1);
      setTransactionHash(txHash);
    }

    window.history.replaceState(
      {},
      document.title,
      window.location.href.split(/[?#]/)[0]
    );
  }, [setTabSelectedIndex, parseScResponses]);

  const assignCreateRole = () => {
    if (tokenIdentifier) {
      const tx = assignRoles({
        tokenIdentifier,
        senderAddress: address,
      });
      sendTransaction({
        transaction: tx,
        callbackRoute: '/dashboard',
      });
    }
  };

  const getSection = () => {
    if (transactionType === TransactionType.ISSUANCE) {
      return (
        <>
          <Pane>
            <Text fontSize={15}>
              Your token is ready: <Strong>{tokenIdentifier}</Strong>.
            </Text>
            <Text>Now assign proper roles to be able to create NFTs.</Text>
          </Pane>
          <Pane marginTop={10}>
            <Button appearance="primary" onClick={assignCreateRole}>
              Assign proper roles now!
            </Button>
          </Pane>
        </>
      );
    }
    if (transactionType === TransactionType.ROLES) {
      return (
        <>
          <Text fontSize={15}>
            Your issued token <Strong>{tokenIdentifier}</Strong> got proper
            roles. Use this token identifier when creating your first NFT.
          </Text>
          <Text>
            You can note it down, or you can find it in transactions history
            later.
          </Text>
        </>
      );
    }
    if (transactionType === TransactionType.ERROR) {
      return (
        <Text>Something went wrong. Check Elrond Explorer for details.</Text>
      );
    }
  };

  return transactionHash ? (
    <Pane elevation={1} backgroundColor="white" padding={30} marginBottom={32}>
      <Pane>{getSection()}</Pane>
      <Pane marginTop={15}>
        <Pane>
          <Text>Transaction in Elrond Explorer:</Text>
        </Pane>
        <Link href={`${explorerAddress}transactions/${transactionHash}`}>
          <Text color="blue400" wordWrap="break-word">
            {`${explorerAddress}transactions/${transactionHash}`}
          </Text>
        </Link>
      </Pane>
    </Pane>
  ) : null;
};

export default FeedbackBox;
