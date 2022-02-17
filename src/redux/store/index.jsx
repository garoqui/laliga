import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import  reducer  from "../reducers";
import { watchLogin } from "../sagas/auth.saga";
import  rootSaga from "../sagas/root.saga"
const { composeWithDevTools } = require('redux-devtools-extension');

const sagaMiddleWare = createSagaMiddleware()



const store = createStore(reducer,  composeWithDevTools(applyMiddleware(sagaMiddleWare)) );
sagaMiddleWare.run(rootSaga)



export default store;
