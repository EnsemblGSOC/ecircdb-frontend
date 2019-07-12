import { combineReducers } from 'redux'

import SpeciesList from './speciesList'
import SpeciesDetails from './speciesDetails'
import SpeciesStats from './speciesStats'
import SamplesList from './samplesList'
import SampleDetails from './sampleDetails'
import LocationStats from './locationStats'

const rootReducers = combineReducers({
  speciesList: SpeciesList,
  speciesDetails: SpeciesDetails,
  speciesStats: SpeciesStats,
  samplesList: SamplesList,
  sampleDetails: SampleDetails,
  locationStats: LocationStats
})

export default rootReducers
