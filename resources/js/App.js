import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";


import AdminLayout from "./layouts/AdminLayout";
import {Spinner} from "reactstrap";

class App extends React.Component {
    render() {
        return (
            <AdminLayout>
                <Switch>
                    <Route path="/dashboard" component={Dashboard}/>
                    {/*<Route path="/status" component={Status}/>*/}
                    {/*<Route path="/management" component={Management}/>*/}
                </Switch>
            </AdminLayout>
        );
    }
}

export default App;