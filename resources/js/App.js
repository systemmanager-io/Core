import * as React from 'react';
import {Route, Switch} from "react-router-dom";


class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/system" component={System}/>
            </Switch>
        );
    }
}

export default App;