import * as React from 'react';
import {Spinner, Toast, Row, ToastHeader, ToastBody, Card, CardBody, Table} from "reactstrap";
import CardDeck from "reactstrap/es/CardDeck";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faDesktop, faServer} from "@fortawesome/free-solid-svg-icons";
// import Toast from "../../components/Toast";

/*

@TODO REMOVE SPINNER THINGIES MAKE IT STATIC. KEEP SPINNERS FOR LOADING

 */

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
                                    <th style={{width: "50px"}}>Status</th>
                                    <th style={{width: "200px"}}>Name</th>
                                    <th style={{width: "100px"}}>IP</th>
                                    <th>Description</th>
                                    <th>System Message</th>
                                    {/*<th>Cluster</th>*/}

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <th><FontAwesomeIcon style={{color: "red"}} icon={faCircle}/></th>
                                    <td>NL-AMS1-01</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>Web server</td>
                                    <td></td>
                                </tr>
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

