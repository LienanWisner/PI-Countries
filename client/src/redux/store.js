import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk"
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//La linea de arriba es para conectar la app con la extension de google, nada mas.

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    );


export default store;