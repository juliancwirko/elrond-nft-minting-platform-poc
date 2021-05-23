import * as Dapp from '@elrondnetwork/dapp';
import { useHistory } from 'react-router-dom';
import {
  Pane,
  Heading,
  majorScale,
  StatusIndicator,
  Popover,
  Menu,
  Position,
  Strong,
} from 'evergreen-ui';
import { useMediaQuery } from 'react-responsive';
import { shortenWalletAddress } from '../utils';
import { routes } from '../routes';
import { ChainID } from '../types';

const MainLayout: React.FC = ({ children }) => {
  const { address, chainId } = Dapp.useContext();
  const dispatch = Dapp.useDispatch();
  const history = useHistory();

  const smallRes = useMediaQuery({
    query: '(max-width: 600px)'
  });

  const getChainName = (chainID: ChainID) => {
    if (chainID === ChainID.TESTNET) return 'Elrond Testnet';
    if (chainID === ChainID.DEVNET) return 'Elrond Devnet';
    if (chainID === ChainID.MAINNET) return 'Elrond Mainnet';
    return '';
  };

  return (
    <Pane>
      <Dapp.Authenticate routes={routes} unlockRoute='/unlock'>
        <Pane background='white' marginBottom={30} border='default'>
          <Pane
            maxWidth={1200}
            paddingX={30}
            marginX='auto'
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            height={majorScale(8)}
          >
            <Pane display='flex'>
              <Heading
                size={800}
                onClick={() => history.push('/')}
                cursor='pointer'
                display='flex'
                alignItems='center'
              >
                Elven Tools
              </Heading>
              {!smallRes && (
                <StatusIndicator color='success' marginLeft={20}>
                  {getChainName(chainId.valueOf() as ChainID)}
                </StatusIndicator>
              )}
            </Pane>
            {address ? (
              <Pane display='flex' alignItems='center'>
                <Heading
                  onClick={() => history.push('/dashboard')}
                  cursor='pointer'
                  marginRight={15}
                >
                  Dashboard
                </Heading>
                <Popover
                  position={Position.BOTTOM_RIGHT}
                  content={
                    <Menu>
                      <Menu.Group>
                        <Menu.Item
                          onSelect={() => dispatch({ type: 'logout' })}
                        >
                          Logout
                        </Menu.Item>
                      </Menu.Group>
                    </Menu>
                  }
                >
                  <StatusIndicator
                    color='success'
                    title={address}
                    cursor='pointer'
                  >
                    {shortenWalletAddress(address)}
                  </StatusIndicator>
                </Popover>
              </Pane>
            ) : (
              <Pane>
                <Strong
                  onClick={() => history.push('/unlock')}
                  cursor='pointer'
                >
                  Login
                </Strong>
              </Pane>
            )}
          </Pane>
        </Pane>
        <Pane
          maxWidth={1200}
          paddingX={30}
          marginX='auto'
          width='100%'
          paddingBottom={40}
        >
          {children}
        </Pane>
      </Dapp.Authenticate>
    </Pane>
  );
};

export default MainLayout;
