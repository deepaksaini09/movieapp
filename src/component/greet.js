import React, {Component} from 'react';

class Greet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"container card mt-3 text-center"}>
                <h1>thanks for registration {this.props.name} and <br/>verification cade sent on your mail{this.props.email}</h1>
            </div>
        );
    }
}

export default Greet;