import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

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
    axios.post(serverURL, this.state.smurf)
      .then(res => {
        this.setState({
          smurfs: res.data,
          smurf: {
            name: "",
            age: "",
            height: ""
          }
        });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

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
