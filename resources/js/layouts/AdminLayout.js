import React, {Component} from 'react';

export default class AdminLayout extends Component {
    render() {
        return (
            <div>
                <a>aaa</a>
                {/*<Header />*/}
                {/*<NavBar/>*/}
                {/*<Sidebar/>*/}
                {this.props.children}
                {/*<Footer/>*/}
            </div>
        );
    }
}

