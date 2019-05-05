import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";

import "../../node_modules/argon-dashboard-react/src/assets/vendor/nucleo/css/nucleo.css";
import "../../node_modules/argon-dashboard-react/src/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "../../node_modules/argon-dashboard-react/src/assets/css/argon-dashboard-react.css";

import AdminLayout from "./layouts/AdminLayout";

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