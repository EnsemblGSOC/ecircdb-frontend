import axios from 'axios'

export function axiosRequest (method, url) {
  return axios({ method, url })
}
