import React from 'react';

class SmurfProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thisSmurf: {}
        }
    }

    componentDidMount() {
        console.log(this.props)
        const singleSmurf = this.props.smurfs.find(smurf => this.props.match.params.id === `${smurf.id}`);

        console.log(singleSmurf);
        this.setState({
            thisSmurf: singleSmurf
        })
    }

   
    render() {
        console.log(this.state.thisSmurf);
        return (
            <div>
                {this.state.thisSmurf.name}
            </div>
        )
    }

}

export default SmurfProfile;