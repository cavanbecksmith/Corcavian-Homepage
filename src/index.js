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
      <div className="wrapper" style={{ backgroundColor: 'black' }}>
        <GuideLines></GuideLines>
        <Navigation></Navigation>
        <SlideShowBanner></SlideShowBanner>
        {/* <SlideShowBanner></SlideShowBanner> */}
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