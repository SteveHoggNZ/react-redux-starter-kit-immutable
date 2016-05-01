import { combineReducers } from 'redux-immutable'
import router from './modules/immutablerouter'
import counter from './modules/counter'

export default combineReducers({
  counter,
  router
})
