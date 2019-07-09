const initialState = {
  isLoading: false,
  data: {}
}

const sampleDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SAMPLE_DETAILS_LOADING':
      return {
        ...state,
        isLoading: action.data
      }
    case 'SET_SAMPLE_DETAILS':
      return {
        isLoading: false,
        data: action.data
      }
    default:
      return state
  }
}

export default sampleDetails
