import { Card, Pane, Button } from 'evergreen-ui';
import * as Dapp from '@elrondnetwork/dapp';
import MainLayout from './MainLayout';

const WalletConnect = () => {
  return (
    <MainLayout>
      <Pane
        display='flex'
        alignItems='center'
        justifyContent='center'
        marginTop='20vh'
      >
        <Card
          elevation={1}
          maxWidth={300}
          width='100%'
          padding={30}
          textAlign='center'
        >
          <Dapp.Pages.WalletConnect
            callbackRoute='/dashboard'
            logoutRoute='/'
            title='Maiar Login'
            lead='Scan the QR code using Maiar'
          />
          {/* TODO: there is something wrong with web wallet redirect, hard refresh required */}
          <Button
            onClick={() => {
              window.location.href = '/unlock';
            }}
          >
            Back
          </Button>
        </Card>
      </Pane>
    </MainLayout>
  );
};

export default WalletConnect;
