import * as React from 'react';

export default class Card extends React.Component {
    render() {

        let cardTitle = "";
        let cardDescription = "";

        return (
            <div className="card">
                <div className="card-header">{cardTitle} </div>

                <div className="card-body">
                    {cardDescription}
                </div>
            </div>
        );
    }
}


