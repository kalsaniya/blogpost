import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = legacy_createStore(reducer, applyMiddleware(thunk));

export default store;
