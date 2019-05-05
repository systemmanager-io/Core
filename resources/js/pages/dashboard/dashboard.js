import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Card from "../../components/Card";
import Example from "../../components/Example";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card cardTitle={"test"}/>
                <Example/>
            </div>
        );
    }
}

