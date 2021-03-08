import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import  {composeWithDevTools} from 'redux-devtools-extension' 
import reducer from './reducers'

const initialState = {}
const middlewares = [thunk]

export default createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))