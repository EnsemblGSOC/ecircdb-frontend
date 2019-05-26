import { combineReducers } from 'redux'
import SpeciesList from './speciesList'

const rootReducers = combineReducers({
  speciesList: SpeciesList
})

export default rootReducers
