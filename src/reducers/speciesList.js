const initialState = {
  isLoading: false,
  data: []
}

const speciesList = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SPECIES_LIST_LOADING':
      return {
        ...state,
        isLoading: action.data
      }
    case 'SET_SPECIES_LIST':
      return {
        isLoading: false,
        data: action.data
      }
    default:
      return state
  }
}

export default speciesList
