import * as React from 'react';
import {Spinner, Toast, Row, ToastHeader, ToastBody, Card, CardBody, Table} from "reactstrap";
import CardDeck from "reactstrap/es/CardDeck";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faDesktop, faServer} from "@fortawesome/free-solid-svg-icons";

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
                                    <th><Spinner type="grow" size="sm" color="dark"/></th>
                                    <td>NL-AMS1-02</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>Git server</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <th><FontAwesomeIcon className="serverstatus info" icon={faCircle}/></th>
                                    <td>NL-AMS1-03</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>SystemManager Instance</td>
                                    <td>SMART Error</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <th><FontAwesomeIcon className="serverstatus online" icon={faCircle}/></th>
                                    <td>NL-AMS1-03</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>SystemManager Instance</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <th><FontAwesomeIcon className="serverstatus offline" icon={faCircle}/></th>
                                    <td>NL-AMS1-03</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>SystemManager Instance</td>
                                    <td>Server did not respond: HTTP Error 400</td>
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

