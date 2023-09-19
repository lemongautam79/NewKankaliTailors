import React from 'react'
import { useRoutes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ContactPage from './pages/ContactPage';

export default function Routes() {
    const routes = useRoutes([

        //! Homepage 
        {
            path:'/',
            element:<Homepage/>
        },
        {
            path:'/contactus',
            element:<ContactPage/>
        }
    ]);
    return routes;
}