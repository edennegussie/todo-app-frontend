import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_AUTH0_DOMAIN; // Replace with your Auth0 domain
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID; // Replace with your Auth0 client ID

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    {/* <App /> */}
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
console.log("API_HOST:", process.env.REACT_APP_API_PORT);

const API_URL = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;
// console.log("Full API URL:", REACT_APP_API_PORT);
reportWebVitals();
