export * from './hooks'
export { store } from './store'
export {
  addEntity,
  deleteEntity,
  getPlaceSearch,
  setPlaceSearch,
  setErrorPlaceSearch,
} from './location/slices'
export { setCountError } from './counter/slices'
export { getDistance } from './distance/slices'
