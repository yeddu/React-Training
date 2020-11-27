import {createStore, combineReducers  } from 'redux'
import cakeReducer from './cake/cakeReducer'
import icecreamReducer from './icecream/icecreamReducer'
import crudReducer from './crud/crudReducer'

const rootReducers = combineReducers({
    cake : cakeReducer,
    icecream : icecreamReducer,
    crud: crudReducer
})

const store = createStore(rootReducers)

export default store