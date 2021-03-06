import React from 'react';
import './layout.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="header__image"></div>
            <Header />
            <div className='layout__content'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
