import * as React from 'react';
import {Spinner, Toast, Row, ToastHeader, ToastBody} from "reactstrap";
import InfoBox from "../../components/InfoBox";
// import Toast from "../../components/Toast";

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="container">
                <InfoBox />
                {/*<div className="row justify-content-center">*/}
                <div class="row">
                    <div className="col-md-4">
                        <div className="card">
                            {/*<div className="card-header">Example Component</div>*/}

                            <div className="card-body">
                                <Spinner size="sm" color="success" type="grow"/>Server Online!
                                <Spinner size="sm" color="danger" type="grow"/>Server Offline!
                                <Spinner size="sm" color="warning" type="grow"/>Server Pinging!
                            </div>


                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                <a><Spinner size="sm" color="success" type="grow"/>Server Online!</a>
                                <Spinner size="sm" color="danger" type="grow"/>Server Offline!
                                <Spinner size="sm" color="warning" type="grow"/>Server Pinging!
                            </div>


                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                <Spinner size="sm" color="success" type="grow"/>Server Online!
                                <Spinner size="sm" color="danger" type="grow"/>Server Offline!
                                <Spinner size="sm" color="warning" type="grow"/>Server Pinging!
                            </div>


                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                <Spinner size="sm" color="success" type="grow"/>Server Online!
                                <Spinner size="sm" color="danger" type="grow"/>Server Offline!
                                <Spinner size="sm" color="warning" type="grow"/>Server Pinging!
                            </div>


                        </div>
                    </div>
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
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

