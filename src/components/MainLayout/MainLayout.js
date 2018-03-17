import React, { Component } from 'react';
import { Slot } from 'react-page-layout';


import './style.scss';

class MainLayout extends Component {
    render() {
        return (
            <div className="backgroundStyle"  >
                <header>
                    <img height="80px" width="75px" src={require('../../images/ci-logo.png')} style={ { float:'left', padding:'0px'}}/>
                    <div className="slds-page-header">
                    <div className="slds-media">
                        <div className="slds-media__figure">

                        </div>
                        <div className="slds-media__body">
                            <h1 style={{float: 'left'}} className="slds-page-header__title slds-truncate slds-align-middle" title="Rohde Corp - 80,000 Widgets">Customer Intelligence Business Outcome</h1>
                            <div style={{float: 'right'}}><span style={{marginLeft: '10px'}}><i className="fa fa-home" aria-hidden="true"></i><a href='/' className=".slds-button"> Home</a></span>
                            <span style={{marginLeft: '10px'}}><a href='/salesforceci'  className=".slds-button"> About CI Team</a></span></div>
                        </div>
                    </div>
                </div></header>
                <Slot name="main" />
            </div>
        );
    }
}

export default MainLayout;