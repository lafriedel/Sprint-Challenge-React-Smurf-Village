import React from 'react';
// import { Link } from 'react-router-dom';

class SmurfProfile extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         thisSmurf: {}
    //     }
    // }

    // componentDidMount() {
    //     console.log(this.props)
    //     const singleSmurf = this.props.smurfs.find(smurf => this.props.match.params.id === `${smurf.id}`);

    //     console.log(singleSmurf);
    //     this.setState({
    //         thisSmurf: singleSmurf
    //     })
    // }

   
    render() {
        // console.log(this.state.thisSmurf);
        console.log(this.props.smurf.id);
        return (
            <div>
                {/* <p>{this.state.thisSmurf.name}</p> */}
                <p>{this.props.smurf.age} smurf years old</p>
                <p>{this.props.smurf.height} tall</p>
                <button onClick={e => this.props.deleteSmurf(e, this.props.smurf.id)}>Delete</button>
                <button onClick={e => this.props.showUpdateForm(e, this.props.smurf.id)}>Update</button>
            </div>
        )
    }

}

export default SmurfProfile;