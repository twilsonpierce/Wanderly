import React from 'react';
import ReactDOM from "react-dom";
import {browserHistory, IndexRoute, Router, Route} from 'react-router';
// import Map from './map/map'
import MarkerClustererExample from './map/sample-map'



let App = React.createClass({
  render() {
    const location = {
      lat: 21.32455847469097,
      lng: -157.92503356933594
    }

    return(
      <div>
        <h1>Welcome to Wanderly!</h1>
        <div style={{width: 500, height:300, background: 'red'}}>
          <MarkerClustererExample center={location}/>
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>,
  document.getElementById('root')
)
