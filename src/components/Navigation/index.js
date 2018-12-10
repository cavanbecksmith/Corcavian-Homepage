import React, { Component } from "react";
import ReactDOM from "react-dom";
import './nav.scss';

export default class Navigation extends Component {

    render(){
        return (
            <div className="Nav">
                <div className="Nav__logo"></div>
                <div className="Nav__links"></div>
                <div className="Nav__burger"></div>
            </div>
        );
    }

}