import React, {Component} from "react";
import ReactDOM from "react-dom";
import Navigation from './components/Navigation/Navigation';
import GuideLines from './components/GuideLines/GuideLines';
import SlideShowBanner from './components/SlideshowBanner/SlideShowBanner';
import {FullScreenPanel} from './components/HelperElements/FullscreenPanel.js';
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="PageWrapper">
        <SlideShowBanner></SlideShowBanner>
        <GuideLines></GuideLines>
        <FullScreenPanel>
          <Navigation></Navigation>
        </FullScreenPanel>
        {/* Banner background */}
      </div>
    );
  }
}


ReactDOM.render(     
  <App />,
  document.getElementById('root')        
);