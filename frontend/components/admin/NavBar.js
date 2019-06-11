import React from 'react';
import {Button, CardFooter, Dropdown, DropdownMenu} from "reactstrap";
import DropdownToggle from "reactstrap/es/DropdownToggle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
            <nav className="navbar navbar-expand-lg bg-light border-bottom">
                <Button outline color="link" className="navbar-hamburger" id="menu-toggle"><FontAwesomeIcon
                    icon={faBars}/></Button>

                <ul className="navbar-nav ml-auto">
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
                </ul>
            </nav>
        );
    }
}

export default NavBar;
