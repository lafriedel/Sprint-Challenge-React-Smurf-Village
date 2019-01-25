import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

const serverURL = "http://localhost:3333/smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  componentDidMount() {
    axios.get(serverURL)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    this.setState({ 
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      } 
    });
  };

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post(serverURL, this.state.smurf)
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data,
          smurf: {
            name: "",
            age: "",
            height: ""
          }
        })
      })
      .catch(err => console.log(err));

    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <NavBar />
      <Route path="/smurf-form" render={props => 
        <SmurfForm
          {...props}
          serverURL={serverURL}
          addSmurf={this.addSmurf}
          handleInputChange={this.handleInputChange}
          smurf={this.state.smurf}  
        />} 
      />
        <Route path="/" render={props => 
          <Smurfs 
            {...props}
            smurfs={this.state.smurfs}
          />}
        />
      </div>
    );
  }
}

export default App;
