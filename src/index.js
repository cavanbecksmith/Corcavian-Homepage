import React, {Component} from "react";
import ReactDOM from "react-dom";
import Navigation from './components/Navigation/Navigation';
import GuideLines from './components/GuideLines/GuideLines';
import SlideShowBanner from './components/SlideshowBanner/SlideShowBanner';
import {FullScreenPanel} from './components/Helpers/FullscreenPanel.js';
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <GuideLines></GuideLines>
        <FullScreenPanel bk="#000">
          <Navigation></Navigation>
          <SlideShowBanner></SlideShowBanner>
        </FullScreenPanel>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')        
);