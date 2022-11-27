import {useLocation} from "react-router-dom";

function Login(){
    let location = useLocation();
    console.log(location);
    return (
        <div>
            Login :{location.state.st}
        </div>
    )
}

export default Login;