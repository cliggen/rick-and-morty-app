import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './Preloader.css';
class Preloader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    render() {
        return (
            <div className="Preloader">
                <ClipLoader size={150} color={'grey'} loading={this.state.loading} />
            </div>
        );
    }
}
export default Preloader;
