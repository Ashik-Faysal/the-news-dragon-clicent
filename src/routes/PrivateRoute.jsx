import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const { user , loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <Spinner animation="border" variant="primary" />;
    }
    
    if (user) {
        return children;
    }
    return (
       <Navigate state={{from:location}} to="/login" replace/>
    );
};

export default PrivateRoute;


/**
 * Steps------------------
 * 
 * 1.Check User is logged in or not ,
 * 2.if user is logged in then allow them to visit the routes,
 * 3. else redirect the user to the login page;
 * 4. Setup the private router
*/