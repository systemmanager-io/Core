import React, {Component} from 'react';
import {Spinner, Row} from "reactstrap";
import Toast from "../../components/Toast";

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                <Spinner size="sm" color="success" type="grow"/>Server Online!
                                <Spinner size="sm" color="danger" type="grow"/>Server Offline!
                                <Spinner size="sm" color="warning" type="grow"/>Server Pinging!
                            </div>


                        </div>
                    </div>
                    <Toast/>
                    {/*<Toast>*/}
                    {/*    <ToastHeader icon={<Spinner size="sm" type="grow" color="danger"/>}>*/}
                    {/*        Server Offline*/}
                    {/*    </ToastHeader>*/}
                    {/*    <ToastBody>*/}
                    {/*        (ServerName) has gone offline!*/}
                    {/*    </ToastBody>*/}
                    {/*</Toast>*/}
                    {/*<Toast>*/}
                    {/*    <ToastHeader icon={<Spinner size="sm" type="grow" color="success"/>}>*/}
                    {/*        Server Online*/}
                    {/*    </ToastHeader>*/}
                    {/*    <ToastBody>*/}
                    {/*        (ServerName) has come online!*/}
                    {/*    </ToastBody>*/}
                    {/*</Toast>*/}
                    {/*<Toast>*/}
                    {/*    <ToastHeader icon={<Spinner size="sm" type="grow" color="primary"/>}>*/}
                    {/*        Connection Issues*/}
                    {/*    </ToastHeader>*/}
                    {/*    <ToastBody>*/}
                    {/*        Panel has some problems connecting to the backend! Expect issues with the panel!*/}
                    {/*    </ToastBody>*/}
                    {/*</Toast>*/}
                    {/*<Toast>*/}
                    {/*    <ToastHeader icon={<Spinner size="sm" type="grow" color="warning"/>}>*/}
                    {/*        Pinging*/}
                    {/*    </ToastHeader>*/}
                    {/*    <ToastBody>*/}
                    {/*        Started Pinging manually!*/}
                    {/*    </ToastBody>*/}
                    {/*</Toast>*/}
                </div>
            </div>
        );
    }
}

