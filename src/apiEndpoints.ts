import { network } from './config';

export const getTransactionByHash = (txHash: string) =>
  `${network.apiAddress}/transactions/${txHash}`;

export const getTransactions = (
  senderAddress: string,
  from: number = 0,
  size: number = 5
) =>
  `${network.apiAddress}/transactions?sender=${senderAddress}&receiver=${senderAddress}&condition=should&from=${from}&size=${size}`;

export const getNfts = (walletAddress: string) =>
  `${network.apiAddress}/accounts/${walletAddress}/nfts`;
