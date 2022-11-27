import rootReducer from "./reduxAction/index";
import {createStore} from "redux";

const store = createStore(rootReducer)


export default store;