import React, { useState, useRef, useEffect } from 'react';
import { Ui } from '@elrondnetwork/dapp-utils';
import {
  Pane,
  Heading,
  Paragraph,
  Link,
  Text,
  Spinner,
  Table,
  Strong,
} from 'evergreen-ui';
import { useMediaQuery } from 'react-responsive';
import * as Dapp from '@elrondnetwork/dapp';
import { getTransactions } from '../../apiEndpoints';

const AccountTab = () => {
  const { account, address, explorerAddress } = Dapp.useContext();
  const [pending, setPending] = useState(false);
  const [transactionsList, setTransactionsList] = useState([]);
  const smallRes = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const mounted = useRef(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setPending(true);
    const fetchTransactions = async () => {
      try {
        const response = await fetch(getTransactions(address), { signal });
        const data = await response.json();
        if (mounted.current) {
          setTransactionsList(data);
        }
      } catch {
      } finally {
        setPending(false);
      }
    };
    if (address) {
      fetchTransactions();
    }
    return () => {
      mounted.current = false;
    };
  }, [address]);

  console.log(transactionsList);

  return (
    <>
      <Pane display="flex" flexDirection={smallRes ? 'column' : 'row'}>
        <Pane
          width={smallRes ? '100%' : '50%'}
          marginRight={smallRes ? 0 : 10}
          marginBottom={25}
          padding={30}
          elevation={1}
          backgroundColor="white"
        >
          <Heading size={700} marginBottom={10}>
            Your wallet address:
          </Heading>
          <Paragraph>
            <Link href={`${explorerAddress}accounts/${address}`}>
              <Text wordWrap="break-word">{address}</Text>
            </Link>
          </Paragraph>
        </Pane>

        <Pane
          width={smallRes ? '100%' : '50%'}
          marginLeft={smallRes ? 0 : 10}
          marginBottom={25}
          padding={30}
          elevation={1}
          backgroundColor="white"
        >
          <Heading size={700} marginBottom={10}>
            Your wallet balance:
          </Heading>
          <Paragraph>
            <Ui.Denominate value={account.balance} erdLabel="xEGLD" />
          </Paragraph>
        </Pane>
      </Pane>

      <Pane
        backgroundColor="white"
        marginBottom={25}
        padding={30}
        elevation={1}
      >
        <Pane>
          <Heading size={700} marginBottom={10}>
            Last 5 transactions
          </Heading>
          <Pane marginBottom={20}>
            <Text>
              For more check the{' '}
              <Link href={`${explorerAddress}address/${address}`}>
                Explorer
              </Link>
            </Text>
          </Pane>

          <Pane>
            {pending ? (
              <Spinner marginX="auto" marginY="auto" />
            ) : (
              <Table>
                <Table.Head padding={0}>
                  <Table.TextHeaderCell>Date</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Value</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Fee</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Status</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Actions</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body>
                  {transactionsList.map((transaction: any, index: number) => (
                    <Pane key={index}>
                      <Table.Row background="tint1">
                        <Table.TextCell>
                          {new Date(
                            transaction.timestamp * 1000
                          ).toLocaleDateString()}
                        </Table.TextCell>
                        <Table.TextCell>
                          <Ui.Denominate
                            value={transaction.value}
                            erdLabel="xEGLD"
                          />
                        </Table.TextCell>
                        <Table.TextCell>
                          <Ui.Denominate
                            value={transaction.fee}
                            erdLabel="xEGLD"
                          />
                        </Table.TextCell>
                        <Table.TextCell>{transaction.status}</Table.TextCell>
                        <Table.TextCell>
                          <Link
                            href={`${explorerAddress}transactions/${transaction.txHash}`}
                          >
                            Check in explorer
                          </Link>
                        </Table.TextCell>
                      </Table.Row>
                      <Table.Row paddingY={50} paddingX={20} height="auto">
                        <Table.TextCell>
                          <Pane marginBottom={10}>
                            <Text>
                              <Strong>From:</Strong> {transaction.sender}
                            </Text>
                          </Pane>
                          <Pane marginBottom={10}>
                            <Text>
                              <Strong>To:</Strong> {transaction.receiver}
                            </Text>
                          </Pane>
                          <Pane marginBottom={10}>
                            <Text>
                              <Strong>Transaction hash:</Strong>{' '}
                              {transaction.txHash}
                            </Text>
                          </Pane>
                          <Pane marginBottom={10}>
                            <Text>
                              <Strong>Transaction data:</Strong>
                            </Text>
                          </Pane>
                          <Pane
                            maxWidth="100%"
                            padding={20}
                            marginBottom={10}
                            background="gray100"
                            wordWrap="break-word"
                            whiteSpace="normal"
                          >
                            <Text>
                              {transaction.data
                                ? atob(transaction.data)
                                : 'N/A'}
                            </Text>
                          </Pane>
                          <Pane marginBottom={10}>
                            <Text>
                              <Strong>Smart Contract data:</Strong>
                            </Text>
                          </Pane>
                          <Pane>
                            {transaction.scResults?.map(
                              (sc: any, index: number) => (
                                <Pane
                                  key={index}
                                  maxWidth="100%"
                                  padding={20}
                                  marginBottom={10}
                                  background="gray100"
                                  wordWrap="break-word"
                                  whiteSpace="normal"
                                >
                                  {sc.data ? atob(sc.data) : null}
                                </Pane>
                              )
                            )}
                          </Pane>
                        </Table.TextCell>
                      </Table.Row>
                    </Pane>
                  ))}
                </Table.Body>
              </Table>
            )}
          </Pane>
        </Pane>
      </Pane>
    </>
  );
};

export default AccountTab;
