const initialState = {
  isLoading: false,
  data: {}
}

const speciesDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SPECIES_DETAILS_LOADING':
      return {
        ...state,
        isLoading: action.data
      }
    case 'SET_SPECIES_DETAILS':
      return {
        isLoading: false,
        data: action.data
      }
    default:
      return state
  }
}

export default speciesDetails
