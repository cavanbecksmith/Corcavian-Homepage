import React, { Component } from "react";
import ReactDOM from "react-dom";
import './GuideLines.scss';

export default class GuideLines extends Component {

    render(){
        return (
            <div className="GuideLines">
                <div className="GuideLines__left GuideLines__line"></div>
                <div className="GuideLines__center GuideLines__line"></div>
                <div className="GuideLines__right GuideLines__line"></div>
            </div>
        );
    }

}