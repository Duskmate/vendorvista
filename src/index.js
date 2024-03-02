import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="1001435626696-9fstnj9hdm02f9gl02c5k5stuahth3m7.apps.googleusercontent.com" >
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);