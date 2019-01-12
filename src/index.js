import React, {Component} from "react";
import ReactDOM from "react-dom";
import Navigation from './components/Navigation/Navigation';
import GuideLines from './components/GuideLines/GuideLines';
import SlideShowBanner from './components/SlideshowBanner/SlideShowBanner';
import {FullScreenPanel} from './components/Helpers/FullscreenPanel.js';
import $ from 'jquery';
window.$ = $;
import Style from './index.scss';
import "./css/fontawesome.css";
import SmoothScrolling from './js/SmoothScroll';
import { Parallax, $$, isInView, percentageScrolled, scrollDetails, showHideInView } from "./js/Helpers";


class App extends Component {

  componentDidMount(){}

  render() {
    return (
      <div className="wrapper">
        <GuideLines></GuideLines>
        <Navigation></Navigation>
        <SlideShowBanner></SlideShowBanner>

        <main style={{position: 'relative'}}>
          <div className="container">
            <div className="container__cell animateIn test left">
              <h1>A little Bit About Us at <span data-depth="1.25" className="strokeThrough" style={{ position: 'relative' }}>Corcavian</span></h1>
            </div>
            <div className="container__cell animateIn right hide">
              <p>At Corcavian we are at the forefront of new technolgies and design techniques. We use a variety of new web technolgies such as React, SASS, CANVAS HTML5 and many frameworks such as Bootstrap and Wordpress.</p>
            </div>
            <div className="container__cell fullW">
              {/* <h1>Something Goes Here</h1> */}
            </div>
          </div>


          <div style={{height: '5000px', background: 'black'}}></div>

        </main>

      </div>
    );
  }
}

$(document).ready(()=>{
  SmoothScrolling(60, 12);
});

$(window).on('load scroll', function(){
  let scrollTop = window.pageYOffset;
  let scrollPerc = percentageScrolled(scrollTop);
  // let windowH = scrollDetails().pageHeight;
  // var screenSize = window.screen.height;

  Parallax(scrollTop);
  showHideInView('.animateIn', scrollTop, function(data){});
  // isInView('.test', scrollTop, 0, (data) => {});
});

$(window).on('load resize', function () {
  let scrollTop = window.pageYOffset;
  Parallax(scrollTop);
});


ReactDOM.render(
  <App />,
  document.getElementById('root')        
);