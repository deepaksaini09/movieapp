import React, {Component} from 'react';
import Styled from "styled-components";

class Registration extends Component {
    constructor(props) {
        super(props);


    }


    render() {
       const  StyleDiv = Styled.div`
       background-color:red;
       width:100%;
       height:300px;
       `
       const  StyledButton =Styled.button `
        color:white;
        display:${(props) =>(props.flag?"inline-block":"block")};
        padding:10px 5px;
        background-color:${(props) => props.color};
        border:none;
        width:${(props)=>(props.flag==="1" ? "45%":"100%")};
        margin:5px;
        `;

       const btnStyle ={
        backgroundColor:"green",
        color:"white",
        text:"show password",
        password:"text"  ,

    };
       console.log('hii',this.props.showpass)
        if(this.props.showpass===false){
            btnStyle.backgroundColor='red';
            btnStyle.text = "hide password";
            btnStyle.password = "password";
        }

        const StyleregisterDiv = Styled.div`
         width: 600px;
         &:hover{
         box-shadow:0px 0px 5px grey;}
         @media(min-width:0px) and (max-width-600px){
          width:300px;
         }
         `
        return (
            <StyleregisterDiv className={'container card p-3 mt-2'}>
                <h1 className={"text-center"}>Registration Form</h1>
                <form onSubmit={this.props.submit}>
                    <div className={"form-group"}>
                        <label htmlFor={""}>Name:</label>
                        <input type={"Text"} name={"name"} className={"form-control"}/>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor={""}>Email:</label>
                        <input type={"Text"} name={"email"} className={"form-control"}/>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor={""}>Password:</label>
                        <input type={btnStyle.password} name={"password"} className={"form-control"}/>
                    </div>
                    <button type={"submit"} className={"btn btn-primary mt-2"} >Register</button>
                    <button type={"button"} className={"btn ms-2 mt-2"} style={btnStyle} onClick={this.props.click}> {btnStyle.text} </button>
                    <br/>
                    <StyledButton type={'button'} flag="1" color="red" > Login </StyledButton>
                     <StyledButton type={'button'}flag="1" color="green"> Login with google </StyledButton>
                    <StyledButton type={"button"} flag={"0"} color={"cyan"}>Login with Facebook</StyledButton>
                </form>
            </StyleregisterDiv>
        );
    }
}

export default Registration;