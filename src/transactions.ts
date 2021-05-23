import { stringToHex } from './utils';
import {
  Transaction,
  GasLimit,
  Address,
  TransactionPayload,
  Balance,
} from '@elrondnetwork/erdjs';

export interface IssueNFTData {
  tokenName: string;
  tokenTicker: string;
}

export interface AssignRolesData {
  tokenIdentifier: string;
  senderAddress: string;
}

export interface CreateNFTData {
  senderAddress: string;
  tokenIdentifier: string;
  nftName: string;
  uri: string;
}

export interface TransferNFTData {
  senderAddress: string;
  tokenIdentifier: string;
  nonce: string;
}

export const issueNft = (data: IssueNFTData) =>
  new Transaction({
    receiver: new Address(
      'erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzllls8a5w6u'
    ),
    value: Balance.egld('5'),
    data: new TransactionPayload(
      `issueNonFungible@${stringToHex(data.tokenName)}@${stringToHex(
        data.tokenTicker
      )}`
    ),
    gasLimit: new GasLimit(60000000),
  });

export const assignRoles = (data: AssignRolesData) =>
  new Transaction({
    receiver: new Address(
      'erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzllls8a5w6u'
    ),
    value: Balance.egld('0'),
    data: new TransactionPayload(
      `setSpecialRole@${stringToHex(data.tokenIdentifier)}@${new Address(
        data.senderAddress
      ).hex()}@45534454526f6c654e4654437265617465`
    ),
    gasLimit: new GasLimit(60000000),
  });

// TODO: multiple Uri, Hash, Royalties, Attributes
export const createNFT = (data: CreateNFTData) =>
  new Transaction({
    receiver: new Address(data.senderAddress),
    value: Balance.egld('0'),
    data: new TransactionPayload(
      `ESDTNFTCreate@${stringToHex(data.tokenIdentifier)}@01@${stringToHex(
        data.nftName
      )}@00@@@${stringToHex(data.uri)}`
    ),
    gasLimit: new GasLimit(60000000),
  });

export const transferNFT = (data: TransferNFTData) =>
  new Transaction({
    receiver: new Address(data.senderAddress),
    value: Balance.egld('0'),
    data: new TransactionPayload(
      `ESDTNFTCreate@${stringToHex(data.tokenIdentifier)}@${stringToHex(
        data.nonce
      )}@${stringToHex('1')}@${new Address(data.senderAddress).hex()}`
    ),
    gasLimit: new GasLimit(1000500),
  });
