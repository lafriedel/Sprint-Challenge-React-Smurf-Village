import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


import Smurf from './Smurf';
import SmurfProfile from './SmurfProfile';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
              <Link to={`/${smurf.id}`}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
              </Link>

              <Route path={`/${smurf.id}`} render={properties => <SmurfProfile {...properties} smurf={smurf} deleteSmurf={this.props.deleteSmurf} />}/>
              </div>

            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
