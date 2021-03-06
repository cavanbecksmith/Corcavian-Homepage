import React, { Component } from "react";
import ReactDOM from "react-dom";
import './nav.scss';

let LogoBlack = require('assets/LogoBlack.png');
let LogoWhite = require('assets/LogoWhite.png');

export default class Navigation extends Component {

    constructor(props){
        super(props);
        this.state = {
            burgerMenu: 'closed'
        };
        this.openBurger = this.openBurger.bind(this);
    }

    openBurger(){
        console.log(this.state);
        if(this.state.burgerMenu === 'closed'){
            this.setState({burgerMenu: 'open'})
        }
        else{
            this.setState({burgerMenu: 'closed'})
        }
    }

    logoSelect(){
        if(this.props.bgColor === 'white'){
            return (<img src={LogoWhite} />);
        }else if(this.props.bgColor === 'black'){
           return (<img src={LogoBlack} />);
        }else{
            return;
        }
    }

    render(){
        return (
            <div className="Nav">

                <div className="Nav__logo">
                    {this.logoSelect()}
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
                <div className="Nav__burger">

                    <div className={`Nav__burger__icon ${this.state.burgerMenu}`} onClick={this.openBurger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </div>
        );
    }

}
