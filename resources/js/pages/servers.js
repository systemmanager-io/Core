import * as React from 'react';
import {Spinner, Toast, Row, ToastHeader, ToastBody, Card, CardBody, Table} from "reactstrap";
import CardDeck from "reactstrap/es/CardDeck";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faCircle, faClock,
    faDesktop,
    faExclamationCircle,
    faExclamationTriangle,
    faServer
} from "@fortawesome/free-solid-svg-icons";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";

export default class Servers extends React.Component {
    render() {
        return (
            <div>
                <h2>Servers</h2>
                <hr/>
                <div className="row">
                    <div className="col-md-12">
                        <Card>
                            <Table responsive hover>
                                <thead>
                                <tr>
                                    <th style={{width: "25px"}}>#</th>
                                    <th style={{width: "25px"}}></th>
                                    <th style={{minWidth: "200px"}}>Name</th>
                                    <th style={{minWidth: "100px"}}>IP</th>
                                    <th style={{minWidth: "100px"}} >Description</th>
                                    <th style={{minWidth: "100px"}}>System Message</th>
                                    {/*<th>Cluster</th>*/}

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <th><FontAwesomeIcon className="serverstatus warning" icon={faExclamationTriangle}/></th>
                                    <td>NL-AMS1-01</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>Instance with Warning</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <th><FontAwesomeIcon className="serverstatus danger" icon={faExclamationTriangle}/></th>
                                    <td>NL-AMS1-02</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>Instance with Critical error</td>
                                    <td>SMART Error</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <th><FontAwesomeIcon className="serverstatus online" icon={faCheckCircle}/></th>
                                    <td>NL-AMS1-03</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>Online Instance</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <th><FontAwesomeIcon className="serverstatus info" icon={faClock}/></th>
                                    <td>NL-AMS1-04</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>Pinging Instance</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <th><FontAwesomeIcon className="serverstatus offline" icon={faTimesCircle}/></th>
                                    <td>NL-AMS1-05</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>Offline Instance</td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

