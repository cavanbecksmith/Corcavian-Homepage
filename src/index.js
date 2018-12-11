import React, {Component} from "react";
import ReactDOM from "react-dom";
import Navigation from './components/Navigation/Navigation';
import GuideLines from './components/GuideLines/GuideLines';
import SlideShowBanner from './components/SlideshowBanner/SlideShowBanner';
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="PageWrapper">
        <Navigation></Navigation>
        <SlideShowBanner></SlideShowBanner>
        <GuideLines></GuideLines>
        {/* Banner background */}
      </div>
    );
  }
}


ReactDOM.render(     
  <App />,
  document.getElementById('root')        
);