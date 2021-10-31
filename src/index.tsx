import React from 'react';
import ReactDOM from 'react-dom';
import { NetworkConfig, chooseProvider } from '@elrondnetwork/erdjs';
import App from './App';
import { providerIdMap } from './utils';
import { network } from './config';
import reportWebVitals from './reportWebVitals';
import './main.css';

// Sync Elrond provider
const chainType = chooseProvider(providerIdMap[network.id]);
NetworkConfig.getDefault().sync(chainType);

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
