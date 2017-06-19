import React, { Component } from 'react';
import HealthContainer from '../containers/HealthContainer'
// import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>HypochondReact</h2>
        </div>

        <HealthContainer />
        
      </div>
    );
  }
}

export default App;

// <NavBar title="HypochondReact" style='inverse'/>
