import * as React from 'react';
import {Button, CardBody, CardFooter, Dropdown, DropdownMenu, DropdownToggle} from "reactstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faDesktop, faList, faLock, faServer, faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";

import '../css/navbar.scss'
import '../css/sidebar.scss'
import DropdownItem from "reactstrap/es/DropdownItem";

export default class AdminLayout extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        accountIsOpen: false,
        sidebarToggled: false,
        sidebarSettings: true,
    };

    toggle = toToggle => () => {
        switch (toToggle) {
            case('account'):
                this.setState({accountIsOpen: !this.state.accountIsOpen});
                break;
            case('sidebar'):
                this.setState({sidebarToggled: !this.state.sidebarToggled});
                break;
            case('sidebarSettings'):
                this.setState({sidebarSettings: !this.state.sidebarSettings});
                break;
        }
    }


    render() {
        return (
            <div>
                {/*<Header />*/}

                <div className={`d-flex ${this.state.sidebarToggled ? `toggled` : null}`} id="wrapper">

                    <div className="bg-light border-right" id="sidebar-wrapper">
                        <div className="sidebar-heading">SystemManager</div>
                        <div className="list-group list-group-flush toggled">
                            <Link to="/dashboard"
                                  className="list-group-item list-group-item-action bg-light"><FontAwesomeIcon
                                icon={faDesktop}/> Dashboard</Link>
                            <Link to="/servers"
                                  className="list-group-item list-group-item-action bg-light"><FontAwesomeIcon
                                icon={faServer}/> Servers</Link>
                            <Link to="/log" className="list-group-item list-group-item-action bg-light"><FontAwesomeIcon
                                icon={faList}/> Log</Link>
                            <Dropdown isOpen={this.state.sidebarSettings}
                                      toggle={this.toggle("sidebarSettings").bind(this)}>
                                <DropdownToggle
                                    className="list-group-item list-group-item-action bg-light"><FontAwesomeIcon
                                    icon={faCogs}/> Settings</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Settings</DropdownItem>
                                    <Link to="/settings"><DropdownItem>General</DropdownItem></Link>
                                    <Link to="/settings/servers"><DropdownItem>Servers</DropdownItem></Link>
                                    <Link to="/settings/users"><DropdownItem>Users</DropdownItem></Link>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>

                    <div id="page-content-wrapper">

                        <nav className="navbar navbar-expand-lg bg-light border-bottom">
                            <Button outline color="link" className="navbar-hamburger"
                                    onClick={this.toggle("sidebar").bind(this)} id="menu-toggle"><FontAwesomeIcon
                                icon={faBars}/></Button>

                            <ul className="navbar-nav ml-auto">
                                <Dropdown isOpen={this.state.accountIsOpen} toggle={this.toggle("account").bind(this)}>
                                    <DropdownToggle><FontAwesomeIcon icon={faUser}/></DropdownToggle>
                                    <DropdownMenu right>
                                        <div className="profilecard">
                                            <CardBody>
                                                <Button><FontAwesomeIcon icon={faUser}/> Profile</Button>
                                            </CardBody>
                                            <CardFooter>
                                                <Button><FontAwesomeIcon icon={faLock}/> Lock</Button>
                                                <Button style={{textAlign: "right"}}><FontAwesomeIcon
                                                    icon={faSignOutAlt}/> Sign Out</Button>
                                            </CardFooter>
                                        </div>
                                    </DropdownMenu>
                                </Dropdown>
                            </ul>
                        </nav>

                        <div className="container-fluid">

                            <br/>
                            {this.props.children}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

