import React, { Component } from "react";
import ReactDOM from "react-dom";
import './nav.scss';

let LogoBlack = require('assets/LogoBlack.png');
let LogoWhite = require('assets/LogoWhite.png');

export default class Navigation extends Component {

    render(){
        return (
            <div className="Nav">

                <div className="Nav__logo">
                    <img src={LogoWhite} />
                </div>
                <div className="Nav__links">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>What we offer</li>
                        <li>Showcase</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="Nav__burger"></div>
            </div>
        );
    }

}