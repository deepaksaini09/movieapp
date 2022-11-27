import React, {Component} from 'react';

class Forms1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            country:null,
        };

    }
    changeHandler =(event)=>{
        console.log('old',this.state.name)
        const name = event.target.value;
        this.setState({name})
        console.log('new',this.state.name)
    }
    onSubmitForm = (event)=>{
        event.preventDefault();
        console.log(this.state);
        const name = event.target.name.value;
        const country = event.target.country.value;
        this.setState({country,name},()=>{
            console.log(this.state)
           event.target.name.value    = ''
           event.target.country.value = ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name"/>
                    </div>
                    <div>
                    <label>Country</label>
                        <select name={"country"}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </div>
                    <button type={"submit"}>Submit</button>
                </form>
                <input type={"text"} name={"user_name"} value={this.state.name} onChange={this.changeHandler}/>
            </div>
        );
    }
}

export default Forms1;