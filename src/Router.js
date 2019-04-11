import React from 'react';
import { Redirect, Route, Switch, BrowserRouter} from 'react-router-dom';
import {ReactToasts} from "./react-toasts";
import {VReactModal} from "./v-react-modal";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact component={ReactToasts} path="/react-toasts"/>
                <Route exact component={VReactModal} path="/v-react-modal"/>
                <Redirect from="*" to="/react-toasts"/>
            </Switch>
        </BrowserRouter>
    )
}
