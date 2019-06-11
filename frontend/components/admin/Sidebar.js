import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {faCogs, faDesktop, faList, faServer} from "@fortawesome/free-solid-svg-icons";
import {Tooltip} from "reactstrap";

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    state = {
        tooltipOpen: false
    };

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <div className="bg-light border-right">
                <div className="sidebar-heading"><a id="systemmanagerVersionHover">SystemManager</a></div>
                <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="systemmanagerVersionHover"
                         toggle={this.toggle}>
                    v0.1
                </Tooltip>
                <div className="list-group list-group-flush">
                    <Link to="/dashboard" className="list-group-item list-group-item-action bg-light"><FontAwesomeIcon
                        icon={faDesktop}/> Dashboard</Link>
                    <Link to="/servers" className="list-group-item list-group-item-action bg-light"><FontAwesomeIcon
                        icon={faServer}/> Servers</Link>
                    <Link to="/log" className="list-group-item list-group-item-action bg-light"><FontAwesomeIcon
                        icon={faList}/> Log</Link>
                    <Link to="/settings"
                          className="list-group list-group-item list-group-item-action bg-light"><FontAwesomeIcon
                        icon={faCogs}/> Settings
                    </Link>
                    <Link to="/settings/servers"
                          className="list-group-item list-group-item-action bg-light">Servfers</Link>
                </div>
            </div>
        );
    }
}

export default Sidebar;
