import React, { Component } from 'react';
// import axios from 'axios';

class SmurfForm extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   smurf: {
  //   //     name: '',
  //   //     age: '',
  //   //     height: ''
  //   //   }

  //   // };
  // }

  // addSmurf = event => {
  //   event.preventDefault();
  //   // add code to create the smurf using the api
  //   axios.post(`${this.props.serverURL}`, this.state.smurf)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));

  //   // this.setState({
  //   //   name: '',
  //   //   age: '',
  //   //   height: ''
  //   // });
  // }

  // handleInputChange = e => {
  //   this.setState({ 
  //     smurf: {
  //       ...this.state.smurf,
  //       [e.target.name]: e.target.value
  //     } 
  //   });
  // };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.addSmurf}>
          <input
            onChange={this.props.handleInputChange}
            placeholder="name"
            value={this.props.smurf.name}
            name="name"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="age"
            value={this.props.smurf.age}
            name="age"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="height"
            value={this.props.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
