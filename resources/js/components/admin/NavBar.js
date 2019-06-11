import React from 'react';
import {Button, Card, CardFooter, Dropdown, DropdownItem, DropdownMenu} from "reactstrap";
import DropdownToggle from "reactstrap/es/DropdownToggle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faLock, faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import CardBody from "reactstrap/es/CardBody";


class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            accountIsOpen: false
        };
    }

    toggle() {
        this.setState({
            accountIsOpen: !this.state.accountIsOpen  // navbar collapse
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <Button outline color="primary" id="menu-toggle"><FontAwesomeIcon icon={faBars}/></Button>

                {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                {/*        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                {/*        aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*    <span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <Dropdown isOpen={this.state.accountIsOpen} toggle={this.toggle}>
                            <DropdownToggle><FontAwesomeIcon icon={faUser}/></DropdownToggle>
                            <DropdownMenu right>
                                <div className="profilecard">
                                    <CardBody>
                                        <Button><FontAwesomeIcon icon={faUser}/> Profile</Button>
                                    </CardBody>
                                    <CardFooter>
                                    <Button><FontAwesomeIcon icon={faLock}/> Lock</Button>
                                    <Button style={{textAlign: "right"}}><FontAwesomeIcon icon={faSignOutAlt}/> Sign Out</Button>
                                    </CardFooter>
                                </div>
                            </DropdownMenu>
                        </Dropdown>
                        {/*<li className="nav-item active">*/}
                        {/*    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">Link</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item dropdown">*/}
                        {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
                        {/*       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                        {/*        Dropdown*/}
                        {/*    </a>*/}
                        {/*    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">*/}
                        {/*        <a className="dropdown-item" href="#">Action</a>*/}
                        {/*        <a className="dropdown-item" href="#">Another action</a>*/}
                        {/*        <div className="dropdown-divider"></div>*/}
                        {/*        <a className="dropdown-item" href="#">Something else here</a>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
