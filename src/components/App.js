import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HealthContainer from '../containers/HealthContainer'
// import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <div  >
          <Link to="/"><h2 className="ribbon">HypochondReact</h2></Link>
        </div>

        <HealthContainer />

      </div>
    );
  }
}

export default App;

// <NavBar title="HypochondReact" style='inverse'/>
