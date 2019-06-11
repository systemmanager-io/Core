import React, {Component} from 'react';
import {Spinner, Row, Card, CardBody, Input, InputGroupAddon, InputGroup, Button} from "reactstrap";
import LoginLayout from "../../layouts/LoginLayout";

export default class Login extends Component {

    constructor(props) {
        super(props);
    };

    state = {
        passwordForm: false,
        waitingForToken: false,
        username: undefined,
        password: undefined
    };

    style = {}

    render() {
        return (
            <LoginLayout>
                <div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="" style={{width: "400px", top: "50%"}}>
                                <Card>
                                    <CardBody>
                                        <h2 className="">SystemManager</h2>
                                        <div>
                                            <br/>
                                            <InputGroup id="usernameInput">
                                                <Input onChange={this.setFormState} name="username"
                                                       placeholder="Username"/>
                                            </InputGroup>
                                            <br/>
                                            <InputGroup id="passwordInput">
                                                <Input type='password' onChange={this.setFormState} name="password"
                                                       placeholder="Password"/>
                                            </InputGroup>
                                            <br/>
                                            <Button onClick={this.submitLogin.bind(this)} color="primary"
                                                    style={{width: "100%"}}><Spinner
                                                hidden={!this.state.waitingForToken}
                                                size="sm"/> <a
                                                hidden={this.state.waitingForToken}>Login</a></Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </LoginLayout>
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
        fetch(process.env.MIX_APP_URL + "/api/auth/login", {
                mode: "cors",
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.username,
                    password: this.state.password
                }),
            }
        ).catch(error => console.error(error))
            .then(res => res.json()
                .then(res => {
                    if (res.error === "invalid_credentials" || res.error === "could_not_create_token") {
                        console.log("test");
                        // this.setState({waitingForToken: false});
                        // this.setState({passwordForm: false});
                        this.setState({statusForToken: "danger"});
                    } else if (res.token !== undefined) {
                        console.log(res.token);
                        this.setState({statusForToken: "success"});
                        this.props.history.push('/dashboard')
                    }
                }));

    }
}

