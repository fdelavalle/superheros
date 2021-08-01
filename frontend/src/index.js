import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './store/auth-context';
import { FilteredHerosContextProvider } from './store/filted-heros-context';

ReactDOM.render(
  <AuthContextProvider>
    <FilteredHerosContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilteredHerosContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);
