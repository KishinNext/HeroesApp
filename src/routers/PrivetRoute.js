import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
export const PrivetRoute = ({
    usAuthenticate,
    component: Component,
    ...rest

}) => {
    
    localStorage.setItem('lastpath', rest.location.pathname)
    return (
        <Route {...rest}
        component={(props) =>(
            (usAuthenticate)
                ? <Component {...props} />
                : <Redirect to ="/login" />
        )}

        ></Route>
    )
}


PrivetRoute.prototypes = {
    usAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}