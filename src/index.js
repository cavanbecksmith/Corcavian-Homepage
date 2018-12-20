import React, {Component} from "react";
import ReactDOM from "react-dom";
import Navigation from './components/Navigation/Navigation';
import GuideLines from './components/GuideLines/GuideLines';
import SlideShowBanner from './components/SlideshowBanner/SlideShowBanner';
import {FullScreenPanel} from './components/Helpers/FullscreenPanel.js';
import $ from 'jquery';
import './index.scss';
import "./css/fontawesome.css";
import SmoothScrolling from './js/SmoothScroll';
import {Parallax, $$} from "./js/Helpers";

class App extends Component {

  componentDidMount(){}

  render() {
    return (
      <div className="wrapper">
        <GuideLines></GuideLines>
        <Navigation></Navigation>
        <SlideShowBanner></SlideShowBanner>

        <main>
          <div className="container">
            <div className="container__cell left">
              <h1 className="strokeThrough">A little Bit About Us at Corcavian</h1>
            </div>
            <div className="container__cell right">
              <p>Corcavian is a new Business venture in which myself Cavan Becksmith has created to be able to share my creative know how and expertise to clients wanting a fast reliable premium service</p>
            </div>
            <div className="container__cell fullW">
              {/* <h1>Something Goes Here</h1> */}
            </div>
          </div>
        </main>

      </div>
    );
  }
}

$(document).ready(()=>{
  SmoothScrolling(60, 12);
});

$(window).on('load scroll', function(){
  var scrollTop = window.pageYOffset;
  Parallax(scrollTop);
});

ReactDOM.render(
  <App />,
  document.getElementById('root')        
);