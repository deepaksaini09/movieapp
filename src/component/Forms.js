import React, {Component} from 'react';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            country:null,
        };

    }
    nameChangeHandler = (event)=>{
        console.log(event.target.value);

    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" onKeyUp={this.nameChangeHandler}/>
                    </div>
                    <div>
                    <label>Country</label>
                        <select onChange={this.nameChangeHandler}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}

export default Forms;