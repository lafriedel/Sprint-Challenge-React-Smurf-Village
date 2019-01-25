import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
// import SmurfProfile from './components/SmurfProfile';
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
      },
      update: false
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

  addSmurf = () => {
    axios.post(serverURL, this.state.smurf)
      .then(res => {
        this.setState({
          smurfs: res.data,
          smurf: {
            name: "",
            age: "",
            height: ""
          },
          update: false
        });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  deleteSmurf = (event, id) => {
    event.preventDefault();
    axios.delete(`${serverURL}/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  showUpdateForm = (event, id) => {
    event.preventDefault();
    this.setState({
      update: true,
      smurf: this.state.smurfs.find(smurf => smurf.id === id)
    });
    this.props.history.push("/smurf-form");
  }

  updateSmurfInfo = () => {
    axios.put(`${serverURL}/${this.state.smurf.id}`, this.state.smurf)
      .then(res => {
        this.setState({
          smurfs: res.data,
          smurf: {
            name: "",
            age: "",
            height: ""
          },
          update: false
        })
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
          update={this.state.update}
          updateSmurfInfo={this.updateSmurfInfo}
        />} 
      />
        <Route path="/" render={props => 
          <Smurfs 
            {...props}
            smurfs={this.state.smurfs}
            deleteSmurf={this.deleteSmurf}
            update={this.state.update}
            showUpdateForm={this.showUpdateForm}
          />}
        />
        {/* <Route path="/smurf/:id" render={props => 
          <SmurfProfile 
            smurfs={this.state.smurfs}
            {...props}

          />} 
        /> */}
      </div>
    );
  }
}

export default App;
