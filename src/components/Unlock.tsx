import { Pane } from 'evergreen-ui';
import * as Dapp from '@elrondnetwork/dapp';
import MainLayout from './MainLayout';

const Unlock = () => {
  return (
    <MainLayout>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="20vh"
      >
        <Pane
          backgroundColor="white"
          elevation={1}
          maxWidth={400}
          width="100%"
          padding={30}
        >
          <Dapp.Pages.Unlock
            callbackRoute="/dashboard"
            lead="Please select your login method:"
            ledgerRoute="/ledger"
            walletConnectRoute="/walletconnect"
          />
        </Pane>
      </Pane>
    </MainLayout>
  );
};

export default Unlock;
