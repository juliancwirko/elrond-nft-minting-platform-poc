import * as Dapp from '@elrondnetwork/dapp';
import { network, walletConnectBridge, walletConnectDeepLink } from './config';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './componetns/Dashboard/Dashboard';
import Unlock from './componetns/Unlock';
import WalletConnect from './componetns/WalletConnect';
import Ledger from './componetns/Ledger';
import Home from './componetns/Home';

function App() {
  return (
    <Dapp.Context
      config={{
        network,
        walletConnectBridge,
        walletConnectDeepLink,
      }}
    >
      <Router>
        <Switch>
          <Route path='/unlock' exact>
            <Unlock />
          </Route>
          <Route path='/ledger' exact>
            <Ledger />
          </Route>
          <Route path='/walletconnect' exact>
            <WalletConnect />
          </Route>
          <Route path='/dashboard' component={Dashboard} exact />
          <Route path='/' component={Home} exact />
        </Switch>
      </Router>
    </Dapp.Context>
  );
}

export default App;
