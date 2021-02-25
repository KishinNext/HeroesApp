import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";

import { DahsboardRoutes } from "./DahsboardRoutes";
import { PrivetRoute } from "./PrivetRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

    const {user} = useContext(AuthContext)

    return (
        <Router>
            <div>
                {/* <Navbar></Navbar> */}

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <PublicRoute path="/login" usAuthenticate={user.logged} component={LoginScreen}></PublicRoute>
                    <PrivetRoute path="/" usAuthenticate={user.logged} component={DahsboardRoutes}></PrivetRoute>
                </Switch>
            </div>
        </Router>
    )
}
