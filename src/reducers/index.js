import { combineReducers } from "redux"

import SpeciesList from "./speciesList"
import SpeciesDetails from "./speciesDetails"
import SpeciesStats from "./speciesStats"
import SamplesList from "./samplesList"

const rootReducers = combineReducers({
  speciesList: SpeciesList,
  speciesDetails: SpeciesDetails,
  speciesStats: SpeciesStats,
  samplesList: SamplesList
})

export default rootReducers
