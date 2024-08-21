import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain='dev-klpldjkxsq63rpc8.us.auth0.com'
      clientId='PrgtGx8fzfwRHvBAS8uKx3EbcXRrvlrB'
      cacheLocation='localstorage'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <UserProvider>
        <App />
      </UserProvider>
    </Auth0Provider>
  </StrictMode>
);
