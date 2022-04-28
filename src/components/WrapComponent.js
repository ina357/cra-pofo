import React, { Component } from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import SideMenuComponent from './wrap/SideMenuComponent';
import TopComponent from './wrap/HeaderComponent';

class WrapComponent extends Component {
    render() {
        return (
            <div id="wrap">
                <HeaderComponent />
                <MainComponent />
                <FooterComponent />
                <SideMenuComponent />
                <TopComponent />
            </div>
        );
    }
}

export default WrapComponent;