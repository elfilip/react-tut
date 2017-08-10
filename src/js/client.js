import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Filip from "./pages/Filip";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="archives(/:article)" name="archives" component={Archives}></Route>
            <Route path="settings" name="settings" component={Settings}></Route>
            <Route path="filip" add="Buy now !!!" name="filipek" component={Filip}></Route>
        </Route>
    </Router>,
    app);