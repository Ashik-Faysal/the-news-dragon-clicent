import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
            <h1>This is Private Route</h1>
        </div>
    );
};

export default PrivateRoute;