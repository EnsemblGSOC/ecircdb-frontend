const initialState = {
  isLoading: false,
  data: {},
  sample: {}
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
        data: action.data,
        sample: action.sample
      }
    default:
      return state
  }
}

export default sampleDetails
