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


let logoColorSlidesArr = [];
let currentLogo = null;

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
        <Navigation bgColor="white"></Navigation>
        <SlideShowBanner></SlideShowBanner>

        <main style={{position: 'relative'}}>
          <div className="container __slide" data-slide="black">
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


          <div style={{
            minHeight: '800px',
            background: '#5c5cd6',
            padding: '30px'
          }} className="__slide" data-slide="white">
            <div className="container" style={{height: '500px'}}>
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
        </main>

      </div>
    );
  }
}

function checkSlideColorInit(){
  $('.__slide').each(function (i) {

    // console.log($(this));

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
    
    if(scrollPos >= next.yPos){
      current.active = false;
      next.active = true;
      currentLogo = next;
    } else if (scrollPos <= current.yPos) {
      current.active = false;
      prev.active = true;
      currentLogo = prev;
    }
}

// function recursivePositionCheck (scrollPos, i) {
// 	let next = logoColorSlidesArr[i+1] || logoColorSlidesArr.length;
// 	let prev = logoColorSlidesArr[i-1] || 0;
// 	let current = logoColorSlidesArr[i];
//
// 	console.log(i);
//
// 	if(logoColorSlidesArr[i].active === true){
//
// 		console.log('Hey there', current.id);
//
// 		if(scrollPos >= (next.yPos - 30)){
// 			current.active = false;
// 			next.active = true;
// 			return next;
// 			// break;
// 		} else if (scrollPos <= (prev.yPos + 30)) {
// 			current.active = false;
// 			prev.active = true;
// 			return prev;
// 			// break;
// 		} else if (scrollPos <= next.yPos && scrollPos >= prev.yPos) {
// 			// console.log('Broken the loop');
// 			// break;
// 			return current;
// 		}
// 	} else {
// 		return recursivePositionCheck(scrollPos, i++);
// 	}
//
// }

$(document).ready(()=>{
  // SmoothScrolling(60, 12);
  setTimeout(function(){
    checkSlideColorInit();
  }, 0)
});

$(window).on('load scroll', function(){
  let scrollTop = window.pageYOffset;
  let scrollPerc = percentageScrolled(scrollTop);

  // Updates logo color when scroll position changed
  let running = false;
  // setTimeout(function(){
	  // if(running = false
		  updateLogoColor();
	  // }
  // }, 500);

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
