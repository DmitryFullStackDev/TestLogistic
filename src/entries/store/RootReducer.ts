import { combineReducers } from 'redux'
import { place } from '../location/slices'

export default combineReducers({
  place: place.reducer,
})
