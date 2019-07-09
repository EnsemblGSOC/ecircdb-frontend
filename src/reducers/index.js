import { combineReducers } from 'redux'

import SpeciesList from './speciesList'
import SpeciesDetails from './speciesDetails'
import SpeciesStats from './speciesStats'
import SamplesList from './samplesList'
import SampleDetails from './sampleDetails'

const rootReducers = combineReducers({
  speciesList: SpeciesList,
  speciesDetails: SpeciesDetails,
  speciesStats: SpeciesStats,
  samplesList: SamplesList,
  sampleDetails: SampleDetails
})

export default rootReducers
