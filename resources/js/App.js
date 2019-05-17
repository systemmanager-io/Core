import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";


import AdminLayout from "./layouts/AdminLayout";
import {Spinner} from "reactstrap";
import Login from "./pages/login/login";
import LoginLayout from "./layouts/LoginLayout";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <LoginLayout>
                    <Route path="/login" exact component={Login}/>
                </LoginLayout>
                <AdminLayout>
                    <Route path="/dashboard" component={Dashboard}/>
                    {/*<Route path="/status" component={Status}/>*/}
                    {/*<Route path="/management" component={Management}/>*/}
                </AdminLayout>
            </Switch>
        );
    }
}

export default App;