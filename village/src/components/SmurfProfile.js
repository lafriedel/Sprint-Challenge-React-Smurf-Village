import React from 'react';

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
                <p>{this.props.age}</p>
                <p>{this.props.height}</p>
                <button onClick={e => this.props.deleteSmurf(e, this.props.smurf.id)}>Delete</button>
            </div>
        )
    }

}

export default SmurfProfile;