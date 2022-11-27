// import React from "react";
// import About from "./reactComponent/About";
// // import Home from "./reactComponent/Home";
// import Contact from "./reactComponent/Contact";
// // import Navbar from "./reactComponent/navbar";
// import Error from "./reactComponent/Error";
// import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
// import Post from "./reactComponent/Post";
// import Login from "./Login";
// import DashBoard from "./DashBoard";
// import NavigationB from "./NavigationB";
// // import NavigationB from "./NavigationB";
// // import Home from './Entertainment/Home'
// function RouterPath(){
//     let isLogged =false;
//     let data ={st:"user not logged in"}
//     return (
//         <div>
//                <NavigationB></NavigationB>
//                 <Routes>
//                 <Route path={'/'} element={<About></About>}/>
//                 <Route path={'/about'} element={<h1>h</h1>}/>
//                 <Route path={'/contact'} element={<Contact></Contact>}/>
//                 <Route  path={'/post/:category/:id'} element={<Post></Post>}/>
//                 <Route path={'/Login'} element={<Login/>}/>
//                 <Route path={'/DashBoard'} element={isLogged?<DashBoard/>:<Navigate to={'/Login'} state={data} />}/>
//                 <Route path={"/movies"} element={<h1>Welcome to Movies Page</h1>}></Route>
//                 <Route path={"/tv"} element={<h1>Welcome to TV Shows Page</h1>}></Route>
//                 <Route path={"/people"} element={<h1>Welcome to People Page</h1>}></Route>
//                 <Route path={"*"}  element={<Error></Error>}/>
//                 </Routes>
//
//         </div>
//     )
// }
// export default RouterPath;
//
