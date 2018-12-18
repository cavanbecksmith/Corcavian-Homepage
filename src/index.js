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
      <div className="wrapper" style={{backgroundColor: 'black'}}>
        <span className="fas fa-igloo" style={{ color: 'white', fontSize: "72px" }}></span>

        <GuideLines></GuideLines>
        <FullScreenPanel bk="#fff" banner="true">
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