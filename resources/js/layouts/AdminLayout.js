import React, {Component} from 'react';
import Footer from "../components/admin/Footer";
import Sidebar from "../components/admin/Sidebar";
import NavBar from "../components/admin/NavBar";
import Header from "../components/admin/Header";

import { Container } from "reactstrap";

export default class AdminLayout extends Component {
    render() {
        return (
            <div>
                <Sidebar
                    {...this.props}
                    logo={{
                        innerLink: "/dashboard",
                        imgSrc: "https://demos.creative-tim.com/argon-dashboard-react/static/media/argon-react.f38ddea9.png",
                        imgAlt: "Yeet"
                    }}
                />
                <div className="main-content" ref="mainContent">
                    <NavBar/>
                    <Header/>
                    {this.props.children}
                    <Container fluid>
                        <Footer/>
                    </Container>
                </div>
            </div>
        );
    }
}

