export const stringToHex = (str: string) => {
  if (str) {
    const arr1 = [];
    for (let n = 0, l = str.length; n < l; n++) {
      const hex = Number(str.charCodeAt(n)).toString(16);
      arr1.push(hex);
    }
    return arr1.join('');
  }
  return '';
};

export const hexToString = (strVal: string) => {
  if (strVal) {
    const hex = strVal.toString();
    let str = '';
    for (let n = 0; n < hex.length; n += 2) {
      str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
  }
  return '';
};

export const shortenWalletAddress = (address: string, charsAmount = 6) => {
  const firstPart = address.substring(0, charsAmount);
  const lastPart = address.substring(
    address.length - charsAmount,
    address.length
  );
  return `${firstPart}...${lastPart}`;
};

export const providerIdMap: { [key: string]: string } = {
  local: 'local-testnet',
  testnet: 'elrond-testnet',
  devnet: 'elrond-devnet',
  mainnet: 'elrond-mainnet',
};
