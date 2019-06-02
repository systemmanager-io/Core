import * as React from 'react';
import Sidebar from "../components/admin/Sidebar";
import NavBar from "../components/admin/NavBar";

export default class AdminLayout extends React.Component {
    render() {
        return (
            <div>
                {/*<Header />*/}

                <div className="d-flex" id="wrapper">
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <NavBar/>
                        <div className="container-fluid">
                            <br />
                            {this.props.children}
                        </div>
                        {/*<Footer/>*/}
                    </div>
                </div>

            </div>
        );
    }
}

