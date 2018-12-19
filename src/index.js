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

// require('./js/TweenMaxSmoothScroll');
// require('./js/SmoothScroll');
// console.log(SmoothScroll);

// import "./js/jQueryScrollspeed.js";

class App extends Component {

  componentDidMount(){}

  render() {
    return (
      <div className="wrapper" style={{ backgroundColor: 'black' }}>
        <GuideLines></GuideLines>
        <Navigation></Navigation>
        <SlideShowBanner></SlideShowBanner>
      </div>
    );
  }
}

$(document).ready(()=>{
  SmoothScrolling(60, 12);
});

ReactDOM.render(
  <App />,
  document.getElementById('root')        
);