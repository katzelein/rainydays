import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  entries: require('./entries').default,
  newEntry: require('./newEntry').default
})

export default rootReducer
