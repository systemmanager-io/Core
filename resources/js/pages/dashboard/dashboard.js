import * as React from 'react';
import {Spinner, Toast, Row, ToastHeader, ToastBody, Card, CardBody} from "reactstrap";
import InfoBox from "../../components/InfoBox";
import CardDeck from "reactstrap/es/CardDeck";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDesktop, faServer} from "@fortawesome/free-solid-svg-icons";
// import Toast from "../../components/Toast";

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        {/*



                        On successful the card will turn green and display a cool message
                        On error the card will turn red and report te server that has errored

                        */}
                        <Card inverse color="success">
                            <div className="row no-gutters">
                                <div className="col-md-3 col-lg-3 col-sm-3 col-3">
                                    <CardBody>
                                        <FontAwesomeIcon className="infobox-icon" icon={faServer}/>
                                    </CardBody>
                                </div>
                                <div className="col-md-9 col-lg-9 col-sm-9 col-9">
                                    <CardBody>
                                        <h4>Server status</h4>
                                        <h5>All Systems Operational</h5>
                                    </CardBody>
                                </div>
                            </div>
                        </Card>
                        <br/>
                    </div>
                    <div className="col-md-3">
                        <Card inverse color="success">
                            <div className="row no-gutters">
                                <div className="col-md-3">
                                    <CardBody>
                                        <FontAwesomeIcon icon="desktop"/>
                                    </CardBody>
                                </div>
                                <div className="col-md-9">
                                    <CardBody>
                                        <h4>Server status</h4>
                                        <h5>1 Online | 1 Offline</h5>
                                    </CardBody>
                                </div>
                            </div>
                        </Card>
                        <br/>
                    </div>
                    <div className="col-md-3">
                        <Card inverse color="success">
                            <div className="row no-gutters">
                                <div className="col-md-3">
                                    <CardBody>
                                        <FontAwesomeIcon icon={faDesktop}/>
                                    </CardBody>
                                </div>
                                <div className="col-md-9">
                                    <CardBody>
                                        <h4>Server status</h4>
                                        <h5>1 Online | 1 Offline</h5>
                                    </CardBody>
                                </div>
                            </div>
                        </Card>
                        <br/>
                    </div>
                    <div className="col-md-3">
                        <Card inverse color="success">
                            <div className="row no-gutters">
                                <div className="col-md-3">
                                    <CardBody>
                                        <FontAwesomeIcon icon="desktop"/>
                                    </CardBody>
                                </div>
                                <div className="col-md-9">
                                    <CardBody>
                                        <h4>Server status</h4>
                                        <h5>1 Online | 1 Offline</h5>
                                    </CardBody>
                                </div>
                            </div>
                        </Card>
                        <br/>
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

