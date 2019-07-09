import { combineReducers } from 'redux'

import SpeciesList from './speciesList'
import SpeciesDetails from './speciesDetails'

const rootReducers = combineReducers({
  speciesList: SpeciesList,
  speciesDetails: SpeciesDetails
})

export default rootReducers
