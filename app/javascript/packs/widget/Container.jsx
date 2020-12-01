import React from 'react';
import GeoFindMe from "./GeoFindMe";

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="card bg-dark text-white">
          <div className="card-header">
            <h1>Herriman, UT Weather</h1>
            <div>as of 7:40 pm MST</div>
          </div>
        </div>
        <div className="card-body border">
          <div className="text-center">
            <span className="display-1">39°</span>
            <span className="h4">Clear</span>
          </div>
        </div>
        <div className="card-foote bg-dark">
         <GeoFindMe/>
        </div>
      </div>
    );
  }
}

export default Container;
