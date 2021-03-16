import React from 'react';
import './CardHeader.css';

class CardHeader extends React.Component {
    render() {
        return <div className="CardHeader">{this.props.title}</div>;
    }
}

export default CardHeader;
