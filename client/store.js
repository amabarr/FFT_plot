import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './store/index'

export default createStore(rootReducer)
