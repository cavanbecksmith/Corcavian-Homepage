import React, {Component} from "react";
import ReactDOM from "react-dom";
import Navigation from './components/Navigation';
import GuideLines from './components/GuideLines';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="PageWrapper">
        <Navigation></Navigation>
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