import {
  Transaction,
  GasLimit,
  Address,
  TransactionPayload,
  Balance,
  ContractFunction,
  BytesValue,
  AddressValue,
  TokenIdentifierValue,
  BigUIntValue,
  U64Value,
} from '@elrondnetwork/erdjs';
import BigNumber from "bignumber.js";
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

export const issueNft = (data: IssueNFTData): Transaction => {
  let payload = TransactionPayload.contractCall()
    .setFunction(new ContractFunction("issueSemiFungible"))
    .addArg(BytesValue.fromUTF8(data.tokenName))
    .addArg(BytesValue.fromUTF8(data.tokenTicker))
    .build()
    .valueOf().toString()

  return new Transaction({
    receiver: new Address(smartContract),
    value: Balance.egld('0.05'),
    data: new TransactionPayload(payload),
    gasLimit: new GasLimit(60000000),
  });
}

export const assignRoles = (data: AssignRolesData): Transaction => {
  let payload = TransactionPayload.contractCall()
    .setFunction(new ContractFunction("setSpecialRole"))
    .addArg(BytesValue.fromUTF8(data.tokenIdentifier))
    .addArg(new AddressValue(new Address(data.senderAddress)))
    .addArg(BytesValue.fromUTF8("ESDTRoleNFTCreate"))
    .build()
    .valueOf().toString()

  return new Transaction({
    receiver: new Address(smartContract),
    value: Balance.egld('0'),
    data: new TransactionPayload(payload),
    gasLimit: new GasLimit(60000000),
  });
}
// TODO: royalties
export const createNFT = (data: CreateNFTData): Transaction => {
  let payload = TransactionPayload.contractCall()
    .setFunction(new ContractFunction("ESDTNFTCreate"))
    .addArg(new TokenIdentifierValue(Buffer.from(data.tokenIdentifier, "utf-8")))
    .addArg(new BigUIntValue(new BigNumber(1)))
    .addArg(BytesValue.fromUTF8(data.nftName))
    .addArg(new BigUIntValue(new BigNumber(0)))
    .addArg(new U64Value(new BigNumber(0)))
    .addArg(BytesValue.fromUTF8(data.attributes || ''))
    .addArg(BytesValue.fromUTF8(data.uri))
    .build()
    .valueOf().toString()

  return new Transaction({
    receiver: new Address(data.senderAddress),
    value: Balance.egld('0'),
    data: new TransactionPayload(payload),
    gasLimit: new GasLimit(60000000),
  });
}