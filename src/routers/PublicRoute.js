import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PublicRoute = ({
    usAuthenticate,
    component: Component,
    ...rest

}) => {

    return (
        <Route {...rest}
        component={(props) =>(
            (!usAuthenticate)
                ? <Component {...props} />
                : <Redirect to ="/login" />
        )}

        ></Route>
    )
}


PublicRoute.prototypes = {
    usAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}