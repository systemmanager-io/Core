import * as React from 'react';
import {Spinner, Toast, Row, ToastHeader, ToastBody, Card, CardBody, Table} from "reactstrap";
import CardDeck from "reactstrap/es/CardDeck";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDesktop, faServer} from "@fortawesome/free-solid-svg-icons";
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
                                    {/*<th>Cluster</th>*/}

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <th scope="row"><Spinner color="success" type="grow" size="sm"></Spinner></th>
                                    <td>NL-AMS1-01</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>Web server</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <th scope="row"><Spinner color="warning" type="grow" size="sm"></Spinner></th>
                                    <td>NL-AMS1-02</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>Git server</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <th scope="row"><Spinner color="danger" type="grow" size="sm"></Spinner></th>
                                    <td>NL-AMS1-03</td>
                                    <td>xxx.xxx.xxx.xxx</td>
                                    <td>SystemManager Instance</td>
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

