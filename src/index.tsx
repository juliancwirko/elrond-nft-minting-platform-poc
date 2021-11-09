import React from 'react';
import ReactDOM from 'react-dom';
import { NetworkConfig, ProxyProvider } from '@elrondnetwork/erdjs';
import App from './App';
import { network } from './config';
import reportWebVitals from './reportWebVitals';
import './main.css';

// Sync Elrond provider
if (network.gatewayAddress) {
  const proxyProvider = new ProxyProvider(network.gatewayAddress, {
    timeout: 5000,
  });
  NetworkConfig.getDefault().sync(proxyProvider);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
