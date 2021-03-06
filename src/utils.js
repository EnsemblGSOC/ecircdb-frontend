import axios from 'axios'

export function axiosRequest(method, url) {
  return axios({ method, url })
}

export function findGetParameter(parameterName) {
  var result = null,
    tmp = []
  var items = window.location.search.substr(1).split('&')
  for (var index = 0; index < items.length; index++) {
    tmp = items[index].split('=')
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1])
  }
  return result
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
