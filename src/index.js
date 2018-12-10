import React, {Component} from "react";
import ReactDOM from "react-dom";
import Navigation from './components/Navigation';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="PageWrapper">
        <Navigation></Navigation>
        {/* Banner background */}
      </div>
    );
  }
}


ReactDOM.render(     
  <App />,
  document.getElementById('root')        
);