import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import PublicRoutes from "./public";
import PrivateRoutes from "./private";
import { LoginContext } from '../contexts';

const CustomRoutes = () => {
    const {login} = React.useContext(LoginContext);

    return <BrowserRouter>
    {
        login ? <PrivateRoutes />
        : <PublicRoutes />
    }
    </BrowserRouter> 
}

export default CustomRoutes;