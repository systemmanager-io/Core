import React, {Component} from 'react';
import {Spinner, Row, Card, CardBody, Input, InputGroupAddon, InputGroup, Button} from "reactstrap";

export default class Login extends Component {

    constructor(props) {
        super(props);
    };

    state = {
        passwordForm: false,
        waitingForToken: false,
        username: null,
        password: null
    };

    render() {
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
                                            <Input onChange={this.setFormState} name="username"
                                                   hidden={this.state.passwordForm} placeholder="Username"/>
                                        </InputGroup>

                                        <InputGroup id="passwordInput" hidden={!this.state.passwordForm}>
                                            <Input type='password' onChange={this.setFormState} name="password"
                                                   placeholder="Password"/>
                                        </InputGroup>

                                        <Button onClick={this.passwordForm.bind(this)}
                                                hidden={this.state.passwordForm}
                                                value={this.state.inputValue}
                                                style={{width: "100%"}} color="primary">Next</Button>

                                        <Button onClick={this.submitLogin.bind(this)} color="primary"
                                                hidden={!this.state.passwordForm} style={{width: "100%"}}>Login</Button>
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

    setFormState = evt => {

        this.setState({
            [evt.target.name]: evt.target.value
        });

    };

    passwordForm() {
        this.setState({passwordForm: true});
    };

    submitLogin() {

        this.setState({waitingForToken: true});


        const bodyData = [];
        bodyData['email'] = this.state.username;
        bodyData['password'] = this.state.password;
        console.log(process.env.MIX_APP_URL + "/api/frontend/auth/login");
        fetch(process.env.MIX_APP_URL + "/api/frontend/auth/login", {
                mode: "cors",
                method: 'post',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.username,
                    password: this.state.password
                }),
            }
        ).catch(error => console.error(error)).then(test => console.log("success", test));

    }
}

