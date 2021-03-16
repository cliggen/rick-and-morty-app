import React, { useState, useEffect } from 'react';
import Preloader from '../components/Preloader/Preloader';
const withPreloader = (WrappedComponent) => (props) => {
    const DELAY = 300;
    const [isLoadingState, isLoadingSetState] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            isLoadingSetState(true);
        }, DELAY);
    }, []);
    return isLoadingState ? <WrappedComponent {...props} /> : <Preloader />;
};

export default withPreloader;
