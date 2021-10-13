import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AuthContextProvider } from './store/auth.context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const client = new QueryClient();

ReactDOM.render(
    <AuthContextProvider>
      <QueryClientProvider client={client}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
        </BrowserRouter>
      </QueryClientProvider>
    </AuthContextProvider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
