import React from 'react';
// import { Link } from 'react-router-dom';

// ---------------------------------

//Note: I was trying to set up the Router Stretch problem (early on, which was a mistake) but I was having trouble with the async API calls -- at least I think that's what was the issue.

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