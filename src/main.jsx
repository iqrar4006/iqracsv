import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import UserContextProvider from './context/UserContextProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qh6xqrasaf41px8s.us.auth0.com"
      clientId="mk0GQ2n7Wvz2rGKY5v23csJmKgKKl1ts"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <UserContextProvider >
        <App />
      </UserContextProvider>

    </Auth0Provider>
  </React.StrictMode>,
)
