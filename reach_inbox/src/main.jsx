import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
  domain="dev-iavqdh2ut2wpea85.us.auth0.com"
  clientId="cKLzAdkagxcmguMibqj41f0fh9iVtnGS"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
    <App />
  </Auth0Provider>,
  
)
