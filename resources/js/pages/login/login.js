import React, {Component} from 'react';
import {Spinner, Row, Card, CardBody, Input, InputGroupAddon, InputGroup, Button} from "reactstrap";
import Toast from "../../components/Toast";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'


export default class Login extends Component {

    constructor(props) {
        super(props);
    };

    state = {
        password: false,
        waitingForToken: false
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="" style={{width: "420px"}}>
                            <Card>
                                <CardBody>
                                    <h2>SystemManager</h2>
                                    <Spinner color="success" type="grow" size="sm"/> System Operational
                                    <div hidden={this.state.waitingForToken}>
                                        <InputGroup id="usernameInput">
                                            <Input name="username" hidden={this.state.password} placeholder="Username"/>
                                        </InputGroup>
                                        <InputGroup id="passwordInput" hidden={!this.state.password}>
                                            <Input name="password" placeholder="Password"/>
                                        </InputGroup>
                                        <Button onClick={this.passwordForm.bind(this)} hidden={this.state.password.toString()}
                                                style={{width: "100%"}} color="primary">Next</Button>
                                        <Button onClick={this.submitLogin.bind(this)} s color="primary"
                                                hidden={!this.state.password.toString()} style={{width: "100%"}}>Login</Button>
                                    </div>
                                    <div hidden={!this.state.waitingForToken}>
                                        <Spinner color="dark" type="grow" style={{width: "5rem", height: "5rem"}}/>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    passwordForm() {
        console.log(this);
        this.setState({password: true});

    }

    submitLogin() {

        this.setState({waitingForToken: true});

    }
}

