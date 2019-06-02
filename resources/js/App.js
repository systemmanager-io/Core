import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";

import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/login/login";
import LoginLayout from "./layouts/LoginLayout";

class App extends React.Component {

    state = {
        isLoggedIn: false,
        user: {}
    };

    render() {
        return (
            <Switch>
                <Route path="/login" exact component={Login}/>
                <AdminLayout>
                    <Route path="/dashboard" exact component={Dashboard}/>
                    {/*<Route path="/status" exact component={Status}/>*/}
                    {/*<Route path="/management" exact component={Management}/>*/}
                </AdminLayout>
            </Switch>
        );
    }
}

export default App;
