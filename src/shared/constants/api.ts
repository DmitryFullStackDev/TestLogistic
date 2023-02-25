import { request, urls } from '../'

export const API = {
  getListOfCities: str => request.get(urls.getListOfCities + '?string=' + str),
  calcDistance: data => request.post(urls.calcDistance, data),
}
