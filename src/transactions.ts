import {
  Transaction,
  GasLimit,
  Address,
  TransactionPayload,
  Balance,
} from '@elrondnetwork/erdjs';
import { smartContract } from './config';
import { stringToHex } from './utils';

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
  attributes?: string;
}

export const issueNft = (data: IssueNFTData) =>
  new Transaction({
    receiver: new Address(smartContract),
    value: Balance.egld('0.05'),
    data: new TransactionPayload(
      `issueNonFungible@${stringToHex(data.tokenName)}@${stringToHex(
        data.tokenTicker
      )}`
    ),
    gasLimit: new GasLimit(60000000),
  });

export const assignRoles = (data: AssignRolesData) =>
  new Transaction({
    receiver: new Address(smartContract),
    value: Balance.egld('0'),
    data: new TransactionPayload(
      `setSpecialRole@${stringToHex(data.tokenIdentifier)}@${new Address(
        data.senderAddress
      ).hex()}@45534454526f6c654e4654437265617465`
    ),
    gasLimit: new GasLimit(60000000),
  });

// TODO: royalties
export const createNFT = (data: CreateNFTData) =>
  new Transaction({
    receiver: new Address(data.senderAddress),
    value: Balance.egld('0'),
    data: new TransactionPayload(
      `ESDTNFTCreate@${stringToHex(data.tokenIdentifier)}@01@${stringToHex(
        data.nftName
      )}@00@@${stringToHex(data.attributes || '')}@${stringToHex(data.uri)}`
    ),
    gasLimit: new GasLimit(60000000),
  });
