import {createStore, combineReducers  } from 'redux'
import cakeReducer from './cake/cakeReducer'
import icecreamReducer from './icecream/icecreamReducer'

const rootReducers = combineReducers({
    cake : cakeReducer,
    icecream : icecreamReducer
})

const store = createStore(rootReducers)

export default store