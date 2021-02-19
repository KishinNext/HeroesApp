import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";
import { DahsboardRoutes } from "./DahsboardRoutes";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* <Navbar></Navbar> */}

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/login" component={LoginScreen}></Route>
                    <Route path="/" component={DahsboardRoutes}></Route>
                </Switch>
            </div>
        </Router>
    )
}
