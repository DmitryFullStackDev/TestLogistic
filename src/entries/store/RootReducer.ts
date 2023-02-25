import { combineReducers } from 'redux'
import placeReducer from '../location/slices'

export default combineReducers({
  place: placeReducer,
})
