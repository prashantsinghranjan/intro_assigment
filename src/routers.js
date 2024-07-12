import React from 'react'
import { useRoutes } from 'react-router-dom';
import Container from "./pages/container/Container"
import Transaction from './pages/transaction/Transaction';
import Reward from './pages/reward/Reward';
import Error from './pages/error/Error'
export const AppRouter=()=> {
    const elements = useRoutes([
        {
          path: '/',
          element:<Container/>,
          children:[
            {
              path:'app/transaction',
              element:<Transaction/> 
            },
            {
              path: 'app/reward',
              element:<Reward />
             },  
          ]
        },
        {
          path: '*',
          element: <Error />
        }
    
      ]);
    
      return elements;
}

