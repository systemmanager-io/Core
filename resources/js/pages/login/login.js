import React, {Component} from 'react';
import {Spinner, Row, Card, CardBody, Input, InputGroupAddon, InputGroup, Button} from "reactstrap";
import Toast from "../../components/Toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <Card>
                                <CardBody>
                                    <h2>SystemManager</h2>
                                    <InputGroup>
                                        <Input placeholder="username" />
                                    </InputGroup>
                                    <Button color="primary">Next</Button>
                                    <Button color="primary">Login</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

