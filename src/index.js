import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Person from "./component/Person";
import UseREducers from "./component/UseREducers";
import Movies from "./component/Movies";
import Image from "./component/Image";
import store from "./storeReducer";
import {Provider} from "react-redux";
import Star from "./component/Star";
import PracticeExample from "./component/PracticeExample";
import UseRr from "./component/UseRr";
import Dialogue from "./component/Dialogue";
import Student from "./component/Student";
import FaStarT from "./component/FaStarT";
import NavigationB from './NavigationB'
import RouterPath from "./RouterPath";
import {BrowserRouter} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div>
                   {/*<Student> </Student>*/}
       {/*<FaStarT></FaStarT>*/}
      {/*<NavigationB></NavigationB>*/}
       {/*<PracticeExample></PracticeExample>*/}
       {/*<Star></Star>*/}
       {/*/!*<Image/>*!/*/}
       <BrowserRouter>
       <Provider store={store}>
           <App></App>
       </Provider>
       </BrowserRouter>
       {/*<NavigationB></NavigationB>*/}
       {/*<Dialogue></Dialogue>*/}
       {/*<UseRr/>*/}
      {/*<App></App>*/}
      {/* /!*<Person/>*!/*/}
      {/* /!*<UseREducers/>*!/*/}
      {/* <Movies/>*/}
   </div>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
