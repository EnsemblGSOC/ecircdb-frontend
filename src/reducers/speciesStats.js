const initialState = {
  isLoading: false,
  data: {}
}

const speciesStats = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SPECIES_STATS_LOADING':
      return {
        ...state,
        isLoading: action.data
      }
    case 'SET_SPECIES_STATS':
      return {
        isLoading: false,
        data: action.data
      }
    default:
      return state
  }
}

export default speciesStats
