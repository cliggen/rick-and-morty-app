import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './Layout.css';

const Layout = () => {
    return (
        <div className="Layout">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Layout;
