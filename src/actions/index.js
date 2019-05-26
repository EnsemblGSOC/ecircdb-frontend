import axios from 'axios'

import { urlSpeciesList } from '../urls'

export const setSpeciesList = (search = '') => {
  return dispatch => {
    dispatch({
      type: 'SET_SPECIES_LIST_LOADING',
      data: true
    })
    axios
      .get(urlSpeciesList(), { params: { search } })
      .then(res => {
        dispatch({
          type: 'SET_SPECIES_LIST',
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: 'SET_SPECIES_LIST_LOADING',
          data: false
        })
      })
  }
}
