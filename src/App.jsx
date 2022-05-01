import React from 'react';
import { Header } from './components/Header';
import  AppRoutes from './routes';
import AppContextProvider from './context/AppContext'

import GlobalStyle from './styles/globalStyles';

export function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Header />
        <AppRoutes />
        <GlobalStyle />
      </div>
    </AppContextProvider>
  );
}