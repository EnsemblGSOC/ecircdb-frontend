import { combineReducers } from 'redux'

import SpeciesList from './speciesList'
import SpeciesDetails from './speciesDetails'
import SpeciesStats from './speciesStats'

const rootReducers = combineReducers({
  speciesList: SpeciesList,
  speciesDetails: SpeciesDetails,
  speciesStats: SpeciesStats
})

export default rootReducers
