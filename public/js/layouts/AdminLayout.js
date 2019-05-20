import React, {Component} from 'react';
import Footer from "../components/admin/Footer";
import Sidebar from "../components/admin/Sidebar";
import NavBar from "../components/admin/NavBar";
import Header from "../components/admin/Header";

import {Container} from "reactstrap";

export default class AdminLayout extends Component {
    render() {
        return (
            <div>
                {/*<Header />*/}
                {/*<NavBar/>*/}
                {/*<Sidebar/>*/}
                {this.props.children}
                {/*<Footer/>*/}

            </div>
        );
    }
}

