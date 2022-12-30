import React from "react";
import {Navigate, Route, Routes,useLocation} from "react-router-dom";
import About from "./reactComponent/About";
import Contact from "./reactComponent/Contact";
import Post from "./reactComponent/Post";
import Login from "./Login";
import DashBoard from "./DashBoard";
import Error from "./reactComponent/Error";
import Menu from "./Menu";
import Home from './Entertainment/Home'
import MovType from "./Entertainment/MovType";
import {useSelector} from "react-redux";
import FilterMovies from "./FilterMovies";
import MovieDescriptionPage from "./MovieDescriptionPage";
import {setActorName, setComingMovies} from "./reduxAction/upDown";
import SearchMovies from "./SearchMovies";
import AboutMetaVerse from "./AboutMetaVerse";
import PeopleDetailPage from "./PeopleDetailPage";

function App(){
    let isLogged =false;
    let data ={st:"user not logged in"}
    console.log('Router Page ---------------------------**********************')
   const type = useSelector((stat)=> stat.changeMovieType);
   const genresType =useSelector((state)=>state.changeGenresType);
   const yearsType = useSelector((state)=>state.changeYearsType);
   const rating = useSelector((state)=>state.setTopRated)
   const coming = useSelector((state)=>state.setComingMovies)
   const searchMovie = useSelector((state)=>state.setSearchMovie)
    const actorName = useSelector((state)=>state.setActorName)
    return(
        <div>
            <Menu searchM={searchMovie}></Menu>
            {/*<h1>{type},{genresType},{yearsType},{rating},coming:{coming},actor:{actorName}</h1>*/}
            {/*<span><FilterMovies type={type}></FilterMovies></span>*/}
                <Routes>
                    <Route path={'/'} element={<About></About>}></Route>
                    <Route path={'/about'} element={<AboutMetaVerse></AboutMetaVerse>}></Route>
                    <Route path={'/contact'} element={<Contact></Contact>}></Route>
                    <Route path={'/post/:category/:id'} element={<Post></Post>}/>
                    <Route path={'/Login'} element={<Login/>}/>
                    <Route path={'/DashBoard'} element={isLogged?<DashBoard/>:<Navigate to={'/Login'} state={data} />}/>
                    <Route path={"/movies/"} element={<Home type={type} genre={genresType} year={yearsType} top={rating} coming={coming} ></Home>}></Route>
                    <Route path={'/movies/:category'} element={<MovieDescriptionPage></MovieDescriptionPage>}></Route>
                    <Route path={"/tv"} element={<h1>Welcome to TV Shows Page</h1>}></Route>
                    <Route path={"/people/:type"} element={<PeopleDetailPage></PeopleDetailPage>}></Route>
                    <Route path={'/movieType/:type'} element={<MovType></MovType>}></Route>
                    <Route path={'/movies/search'} element={<SearchMovies></SearchMovies>} ></Route>
                    <Route path={"*"}  element={<Error></Error>}/>
                </Routes>

        </div>
    )
}

export default App;
















// import React, {useCallback, useEffect, useState} from "react";
// import Movies from "./component/Movies"
// import Student from "./component/Student";
// import {FaStar} from "react-icons/fa";
// import RatePopUpWindow from "./component/RatePopUpWindow";
// import RouterPath from "./RouterPath";
// import FilterMovies from "./FilterMovies";
// import {useSelector} from "react-redux";
// import {Provider} from "react-redux";
// import store from "./storeReducer";
// import NavigationB from "./NavigationB";
//
// function App(){
//     // const {type,initData} = useSelector((stat)=> stat.changeMovieType);
//     const [data,setData] = useState([]);
//     const [isLoaded,setLoaded] =useState(false);
//     const [page,setPage] = useState(0);
//     const API = `http://127.0.0.1:8000/path?limit=10&page=${page}&type=all`
//     // console.log(type,'type ******************************8')
//
//     console.log(data,'data')
//     const fetchAPI = async ()=>{
//         try{
//           const res =await fetch(API);
//           const jsonData = await res.json();
//           setData(data.concat(jsonData))
//             setLoaded(true)
//             console.log(jsonData,"clicjogoijo")
//         }catch (error){
//           console.log(error);
//         }
//     };
//
//
//     useEffect(()=>{
//         fetchAPI()
//     },[page]);
//
//     const fetchMoreData = useCallback(() => {
//         setPage(page + 1);
//     },[data])
//
//     setTimeout(()=>{
//
//     },5000);
//
//     return (
//         <div>
//             {/*<NavigationB></NavigationB>*/}
//             <RouterPath></RouterPath>
//
//             <div className={' container me-17'}>
//                 <Provider store={store}>
//                      <FilterMovies></FilterMovies>
//                 </Provider>
//
//             </div>
//
//             {isLoaded? <Movies moviesData={data} fetchMoreData={fetchMoreData}></Movies>:<h1>Loading.....</h1>}
//              {/*<FaStarT.js keyPoints={1} ></FaStarT.js>*/}
//             {/*<Student> </Student>*/}
//         </div>
//     )
// }
// export default App;
// //
//
//
// //
//
//
// // import React, {useState} from "react";
// //
// // import {DialogContent,Dialog,DialogTitle,DialogActions} from "@mui/material";
// // import Star from "./component/Star";
// // import ReactPlayer from "react-player";
// // function App(){
// //     const [showDialog,setShowDialog] = useState(false);
// //     const openDialog =()=>{
// //         setShowDialog(true);
// //     }
// //     const closeDialog =()=>{
// //         setShowDialog(false);
// //     }
// //     return(
// //
// //         <div>
// //            <ReactPlayer url='https://yesmovies.at/movie/selena-gomez-my-mind-me-mjlk8/1-full' />
// //             <button type={'button'} onClick={openDialog}> open dialog</button>
// //             <Dialog open={showDialog} onClose={closeDialog}>
// //
// //                 <DialogTitle style={{textAlign:"center"}}>Rating</DialogTitle>
// //                 <DialogContent>
// //                     <Star></Star>
// //                 </DialogContent>
// //                 <DialogActions>
// //                     <button type={'submit'} onClick={closeDialog}> Cancel</button>
// //                 </DialogActions>
// //             </Dialog>
// //         </div>
// //
// //
// // )
// // }
// //
// // export default App;
// // import React, {useCallback, useState} from "react";
// // import MemoFun from "./component/MemoFun";
// // function App(){
// //     const [count,setCount] = useState(0);
// //     const [count2,setCount2] = useState(10);
// //     const handle =()=>{
// //         setCount(count+1);
// //     }
// //     const handle2=()=>{
// //         setCount2(count2+1);
// //     }
// //     const fu=useCallback(()=>{
// //       console.log('jj');
// //     },[count2]);
// //     return (
// //         <div>
// //             hi Deepak Saini
// //             <h1>{count}</h1>
// //             <button type={'button'} onClick={handle}>click me</button>
// //             <h1>{count2}</h1>
// //             <button type={'button'} onClick={handle2}> click count2</button>
// //             <MemoFun fun={fu} count={count2}></MemoFun>
// //         </div>
// //     )
// // }
// // export  default App;
//
// // import React, {useMemo, useState} from "react";
// //
// // function App(){
// //     const [count,setCount] = useState(0);
// //     const [count2,setCount2] = useState(10);
// //     const handle = ()=>{
// //         setCount(count+1);
// //         console.log('1')
// //     }
// //
// //     const value = useMemo(()=>{
// //         console.log('cliked');
// //         return count2*10;
// //     },[count2]);
// //     const handle2= ()=>{
// //         console.log('2')
// //         setCount2(count2+1);
// //     }
// //     return(
// //         <div>
// //             <h2>{value}</h2>
// //             <h1>{count}</h1>
// //             <button type={'button'} onClick={handle}> click me</button>
// //             <h2>{count2}</h2>
// //             <button type={"button"} onClick={handle2}> click me</button>
// //         </div>
// //     )
// // }
// // export default App;
// //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import React from "react";
// // import About from "./reactComponent/About";
// // import Home from "./reactComponent/Home";
// // import Contact from "./reactComponent/Contact";
// // import Navbar from "./reactComponent/navbar";
// // import Error from "./reactComponent/Error";
// // import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
// // import Post from "./reactComponent/Post";
// // import Login from "./Login";
// // import DashBoard from "./DashBoard";
// // import NavigationB from "./NavigationB";
// //
// // function App(){
// //     let isLogged =false;
// //     let data ={st:"user not logged in"}
// //     return (
// //         <div>
// //
// //             <Router>
// //                  <NavigationB></NavigationB>
// //
// //                 <Routes>
// //                 <Route path={'/'} element={<Home></Home>}/>
// //                 <Route path={'/about'} element={<About></About>}/>
// //                 <Route path={'/contact'} element={<Contact></Contact>}/>
// //                 <Route  path={'/post/:category/:id'} element={<Post></Post>}/>
// //                 <Route path={'/Login'} element={<Login/>}/>
// //                 <Route path={'/DashBoard'} element={isLogged?<DashBoard/>:<Navigate to={'/Login'} state={data} />}/>
// //                 <Route path={"/movies"} element={<h1>Welcome to Movies Page</h1>}></Route>
// //                 <Route path={"/tv"} element={<h1>Welcome to TV Shows Page</h1>}></Route>
// //                 <Route path={"/people"} element={<h1>Welcome to People Page</h1>}></Route>
// //                 <Route path={"*"}  element={<Error></Error>}/>
// //                 </Routes>
// //
// //             </Router>
// //         </div>
// //     )
// // }
// // export default App;
// //
// //
// //
// //
//
//
//
//
//
//
// // import React from "react";
// // import {useSelector,useDispatch} from "react-redux";
// // import {incNumber, decNumber, entertainmentType} from "./actions/index";
// // function App(){
// //     const myState = useSelector((stat)=> stat.changeNumber);
// //     const {type,movieType} = useSelector((stat)=> stat.changeMovieType);
// //
// //     const count = 0;
// //     const dispatch =useDispatch()
// //     return (
// //
// //
// //         <div className={"container"}>
// //             <h1>increment and decrement operation </h1>
// //             <h1> movie TYpe {type}</h1>
// //             <p className={"ms-4"}>{myState}</p>
// //             <button type={"button"} className={"me-2"} onClick={()=> dispatch(incNumber(5))}> + </button>
// //             <button type={"button"} onClick={()=> dispatch(decNumber(5))}> - </button>
// //             <button type={'button'} onClick={()=>dispatch(entertainmentType('kabhi'))}> click </button>
// //
// //         </div>
// //     )
// // }
// //
// // export default App;
//
// // import React,{useEffect,useState} from "react";
// // import Movies from "./component/Movies"
// // import Student from "./component/Student";
// // import {FaStarT.js} from "react-icons/fa";
// // const API = "https://www.watchnow.com/redesign/json/browse_results.php?type=show&index=1&limit=1"
// //
// //
// // function App(){
// //     const [data,setData] = useState(null);
// //     const [isLoaded,setLoaded] =useState(false);
// //     const fetchAPI = async (url)=>{
// //         try{
// //           const res =await fetch(url);
// //           const data = await res.json();
// //           setData(data)
// //             setLoaded(true);
// //           console.log(data);
// //         }catch (error){
// //           console.log(error);
// //         }
// //     };
// //
// //
// //     useEffect(()=>{
// //         fetchAPI(API)
// //     },[]);
// //     return (
// //         <div>
// //             {isLoaded? <Movies moviesData={data}></Movies>:<h1>Loading.....</h1>}
// //              <FavStar></FavStar>
// //             {/*<Student> </Student>*/}
// //         </div>
// //     )
// // }
// // export default App;
//
//
//
//
//
//
//
// // import React,{useState} from "react";
// // import User from "./component/User";
// // export const MyContext = React.createContext(undefined);
// //
// // function App(){
// //     const [userDetails,setUserData] = useState({name:"Deepak Saini",roll:11})
// //    const handlerClick = ()=>{
// //         setUserData(prevState => {
// //             return {...prevState,roll:userDetairoll+1}
// //         });
// //     };
// //     const contextValue ={
// //         data:userDetails,
// //         handle:handlerClick,
// //     }
// //     return (
// //        <MyContext.Provider value={contextValue}>
// //            <User></User>
// //        </MyContext.Provider>
// //     )
// //
// // }
// // export default App;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import React,{useState} from "react";
// // import User from "./component/User"
// // function App(){
// //     const [userDetails,setUserDetails] = useState({name:"Deepak Saini",Roll:12})
// //     return (
// //         <div>
// //             <User userData = {userDetails}></User>
// //         </div>
// //     )
// // }
// //
// // export default App;
// //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import React, {useEffect, useState} from "react";
// //
// // function App(){
// //     const [name, setName] =useState(0);
// //     const [count, setDown] =useState(45);
// //
// //     const countHandler = ()=>{
// //         setName(name+1);
// //     }
// //
// //     const countHandlerDown = ()=>{
// //         setDown(count-1);
// //     }
// //
// //    useEffect(()=>{
// //        console.log("use effect called");
// //    },[name])
// //     return (
// //         <div>kl
// //             <h1> {name}</h1>
// //             <h1>{count}</h1>
// //             <button type ={"button"} onClick={countHandler}>click me</button>
// //             <button type={"button"} onClick={countHandlerDown}> click down</button>
// //         </div>
// //     )
// // }
// //
// // export default App;
//
//
//
//
//
//
//
//
//
//
//
//
// // import React,{useState} from "react";
// //
// // function App(){
// //     const [name,setName] = useState({name:"deepak Saini",Roll_number:101,email:"dk899097@gmail.com"})
// //     const nameChangeHandler =()=>{
// //         console.log(name.name);
// //         setName(prevState => {
// //             return {...prevState,name:"choi in ha"};
// //         });
// //
// //     }
// //     return(
// //         <div>
// //             <h1>{name.name}</h1>
// //             <button type={"button"} onClick={nameChangeHandler}> click me </button>
// //             <button type={"button"} onClick={nameChangeHandler}> clik me 1</button>
// //         </div>
// //     )
// // }
// //
// //
// // export default App;
//
//
//
//
//
//
//
//
//
//
//
// // import React, {Component} from 'react';
// // import "./App.css"
// // import Registration from "./component/Registration";
// // import Greet from "./component/greet";
// // class App extends Component {
// //      constructor(props) {
// //          super(props);
// //
// //           this.state= {
// //             isRegistered:false,
// //             name:null,
// //             email:null,
// //             password:null,
// //             isState:true,
// //         };
// //      }
// //      clickMethod = ()=>{
// //          console.log(this.state.isSate,"hj")
// //          this.setState({isState:!this.state.isState},()=>{
// //              console.log(this.state.isState)
// //          });
// //
// //      }
// //      submitHandler = (event)=>{
// //
// //          console.log('ji');
// //          event.preventDefault();
// //          const name =event.target.name.value;
// //          const email =event.target.email.value;
// //          const password = event.target.password.value;
// //          this.setState({name,email,password,isRegistered:true},()=>{
// //          });
// //          setTimeout(()=>{
// //              console.log(this.state);
// //          },5000);
// //
// //
// //      }
// //     render() {
// //         return (
// //             <div>
// //                 {this.state.isRegistered?<Greet name={this.state.name} email={this.state.email}></Greet>:<Registration submit={this.submitHandler} showpass={this.state.isState} click={this.clickMethod} ></Registration>}
// //             </div>
// //         );
// //     }
// // }
// //
// // export default App;
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import logo from './logo.svg';
// // import './App.css';
// // import Person from "./component/Person";
// // import Student from "./component/Student"
// // import person from "./component/Person";
// // import Forms from "./component/Forms";
// // import Forms_1 from "./component/Forms_1";
// // function App() {
// //     const state = {
// //         persons:[
// //             {id:1,name: "Deepak Saini", age: 23},
// //             {id: 2,name: "Kaju", age: 24},
// //             {id:3,name: "Sanu", age:34},
// //         ],
// //       isShow:true,
// //
// //     };
// //     const removeHandler = (p,index)=>{
// //         console.log(p)
// //         alert(p.age+""+p.name);
// //     }
// //     let newarr;
// //     newarr = state.persons.map((p,index)=>{
// //         return <Person key={index} name ={p.name} age={p.age} remove = {()=> removeHandler(p,index)}></Person>
// //     })
// //
// //   return  (
// //         <div>
// //             {newarr}
// //             <Forms></Forms>
// //             <Forms_1></Forms_1>
// //         </div>
// //
// //   )
// //
// // }
// //
// // export default App;
