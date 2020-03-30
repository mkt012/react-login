import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './dashboard/index.jsx';
const ProtectedRoute = ({isEnabled, ...props}) => {
    return (isEnabled) ? <Route {...props} component={Dashboard}/> : <Redirect to="/" />;
};

export default ProtectedRoute;