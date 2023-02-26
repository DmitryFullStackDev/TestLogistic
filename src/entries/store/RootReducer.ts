import { combineReducers } from 'redux'
import { place } from '../location/slices'
import { counter } from '../counter/slices'
import { distance } from '../distance/slices'

export default combineReducers({
  place: place.reducer,
  counter: counter.reducer,
  distance: distance.reducer,
})
