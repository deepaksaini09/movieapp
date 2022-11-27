import React ,{Component} from "react";
import PersonStyle from "./Person.module.css"
class Person extends Component{
    constructor(props) {
        super(props);
        this.state ={
            persons:[
                {name:"Deepak Saini",age:23},
                {name:"Raju Tyagi",age:24},
                {name:"Rana Chauchan",age:21},
                {name:"Kaju",age:20},
            ],
        };
    }
    //  nameChangeHandler(){
    //     // console.log(this.state)
    //     this.setState({name:"Saini"})
    //
    // }
    render() {


        return (

        <div>
            <h1 className={PersonStyle.personLabel} onClick={this.props.remove}>{this.props.name} and {this.props.age} </h1>
            {/*<h1 className={PersonStyle.personLabel}>hi</h1>*/}
            {/*<h1 className={PersonStyle.personLabel}> {this.state.persons[0].name}, and age {this.state.persons[0].age}</h1>*/}
            {/*<h1 className={PersonStyle.personLabel}> {this.state.persons[1].name}, and age {this.state.persons[1].age}</h1>*/}

            {/*<h1 className={PersonStyle.personLabel}> {this.state.persons[2].name}, and age {this.state.persons[2].age}</h1>*/}

           {/*<h1 className={PersonStyle.personLabel}> <label style={{color:"cyan"}}>Name </label> : {this.state.name} and age {this.state.age} is  as</h1>*/}
            {/*<h1> Age :23</h1>*/}
            {/*<br/>*/}
             {/*<button className="textAl" onClick={this.nameChangeHandler.bind(this)}> click me  </button>*/}

        </div>
        );
    }
}

export default Person