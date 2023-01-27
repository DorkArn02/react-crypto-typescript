import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './app/store'
import { Provider } from "react-redux"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from './theme';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoNews from './components/CryptoNews';
import CryptocurrencyDetails from './components/CryptocurrencyDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Sidebar />
    ),
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/cryptocurrencies', element: <Cryptocurrencies /> },
      { path: '/news', element: <CryptoNews /> },
      { path: '/coin/:id', element: <CryptocurrencyDetails /> }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
