import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from './components/Profile';
import { CartProvider } from './contexts/CartContext';
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
      <Auth0Provider
  domain="dev-hgglmipgygf5ikzv.us.auth0.com"
  clientId="ddgHUCB8KtseTGDis7YZ9DKFGeWZxDRS"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
    <ApolloProvider client={client}>
    <CartProvider>
       <App />
    </CartProvider>
    </ApolloProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

