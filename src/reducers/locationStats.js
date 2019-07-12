const initialState = {
  isLoading: false,
  data: {}
}

const locationStats = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCATION_STATS_LOADING':
      return {
        ...state,
        isLoading: action.data
      }
    case 'SET_LOCATION_STATS':
      return {
        isLoading: false,
        data: action.data
      }
    default:
      return state
  }
}

export default locationStats
