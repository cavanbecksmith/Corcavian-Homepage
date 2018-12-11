import React, { Component } from "react";
import ReactDOM from "react-dom";
import './nav.scss';
let LogoBlack = require('./LogoBlack.png');

export default class Navigation extends Component {

    render(){
        return (
            <div className="Nav">

                <div className="Nav__logo">
                    <img src={LogoBlack} />
                </div>
                <div className="Nav__links">
                    <ul>
                        <li>Home</li>
                        <li>About me :P</li>
                        <li>Services</li>
                        <li>Tools</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="Nav__burger"></div>
            </div>
        );
    }

}