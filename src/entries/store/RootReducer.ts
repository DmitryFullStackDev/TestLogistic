import { combineReducers } from 'redux'
import { place } from '../location/slices'
import { counter } from '../counter/slices'

export default combineReducers({
  place: place.reducer,
  counter: counter.reducer,
})
