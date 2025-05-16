import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
})

request.interceptors.request.use(
  config => config,
  err => Promise.reject(err),
)

request.interceptors.response.use(
  res => res,
  error => Promise.reject(error.response),
)

export { request }
