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
import { Parallax, $$, isInView, percentageScrolled, scrollDetails, showHideInView, getHSizeAsPercentage } from "./js/Helpers";


let logoColorSlidesArr = [];
let currentLogo = null;
let color = 'white';

class App extends Component {

  constructor(props){
    super(props);
    this.currentBGColor = 'white';
    console.log(this);
  }

  componentDidMount(){
    // this.checkSlideColor();
  }



  render() {
    return (
      <div className="wrapper">
        <GuideLines></GuideLines>
        <Navigation bgColor={color}></Navigation>
        <SlideShowBanner></SlideShowBanner>

        <main style={{position: 'relative', padding: '0px'}}>
          <div className="container padding__large __slide" data-slide="black">
            <div className="container__cell animateIn test left">
              <h1>A little Bit about <span data-depth="1.25" className="strokeThrough" style={{ position: 'relative' }}>Corcavian</span></h1>
            </div>
            <div className="container__cell animateIn right hide">

              <div className=""></div>

              <p>Corcavian is a Web Design and Development company with precision in mind and apply's only the best in design practices in each project ensuring your product is fit for purpose.</p>
            </div>
            <div className="container__cell fullW">
              {/* <h1>Something Goes Here</h1> */}
            </div>
          </div>


          <div style={{
            minHeight: '800px',
            background: '#5c5cd6',
            padding: '30px'
          }} className="__slide" data-slide="white">
            <div className="container padding__large" style={{height: '500px'}}>
              <div className="container__cell animateIn left hide">
                <h1 style={{color: 'white'}}>
                  Some of our services
                </h1>
                <p style={{color: 'white'}}>
                  We offer a range of services with the upmost support to keep you updated with the latest trends and teqniques in development
                </p>
              </div>
              <div className="container__cell animateIn right hide">

              </div>
            </div>
          </div>

          <div style={{
            minHeight: '800px',
            background: '#FFF',
            padding: '30px'
          }} className="__slide" data-slide="black">
            <div className="container" style={{ height: '500px' }}>
              <div className="container__cell animateIn left hide">
                <h1 style={{ color: 'black' }}>
                  Some of our services
                </h1>
                <p style={{ color: 'black' }}>
                  We offer a range of services with the upmost support to keep you updated with the latest trends and teqniques in development
                </p>
              </div>
              <div className="container__cell animateIn right hide">

              </div>
            </div>
          </div>

          <div style={{
            minHeight: '800px',
            background: '#000',
            padding: '30px'
          }} className="__slide" data-slide="white">
            <div className="container" style={{ height: '500px' }}>
              <div className="container__cell animateIn left hide">
                <h1 style={{ color: 'white' }}>
                  Some of our services
                </h1>
                <p style={{ color: 'white' }}>
                  We offer a range of services with the upmost support to keep you updated with the latest trends and teqniques in development
                </p>
              </div>
              <div className="container__cell animateIn right hide">

              </div>
            </div>
          </div>
        </main>

      </div>
    );
  }
}

function checkSlideColorInit(){
  $('.__slide').each(function (i) {

    let active = false;
    if(i === 0){
      active = true;
    }

    let obj = {
      id: i,
      yPos: percentageScrolled($(this).offset().top),
      color: $(this).attr('data-slide'),
      active: active
    };

    if(i === 0){
      currentLogo = obj;
    }

    logoColorSlidesArr.push(obj);
  });
}


function updateLogoColor(){
  let currentColor = null;
  let scrollPerc = percentageScrolled(window.pageYOffset);
  getNextLogoColor(scrollPerc);
}


function getNextLogoColor(scrollPos){

  	let currentColor = 'white';
    let current = currentLogo;
		let next = logoColorSlidesArr[current.id+1] || logoColorSlidesArr.length;
    let prev = logoColorSlidesArr[current.id-1] || 0;
    // Padding = 2%
    let padding = 2;

    if(scrollPos >= (next.yPos - padding)){
      current.active = false;
      next.active = true;
      currentLogo = next;
      color = next.color;
    } else if (scrollPos <= (current.yPos - padding)) {
      current.active = false;
      prev.active = true;
      currentLogo = prev;
      color = prev.color;
    }

    let src;

    if(current.color === 'black'){
      src = require('assets/LogoBlack.png')
    } else {
      src = require('assets/LogoWhite.png')
    }

    $('.Nav__logo img').attr('src', src);
}


$(document).ready(()=>{
  setTimeout(function(){
    checkSlideColorInit();
  }, 0)
});

$(window).on('load scroll', function(){
  let scrollTop = window.pageYOffset;
  let scrollPerc = percentageScrolled(scrollTop);

  // Updates logo color when scroll position changed
  let running = false;
  updateLogoColor();

  Parallax(scrollTop);
  showHideInView('.animateIn', scrollTop, function(data){});
});

$(window).on('load resize', function () {
  let scrollTop = window.pageYOffset;
  Parallax(scrollTop);
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
