const initialState = {
  isLoading: false,
  data: []
}

const samplesList = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SAMPLES_LIST_LOADING":
      return {
        ...state,
        isLoading: action.data
      }
    case "SET_SAMPLES_LIST":
      return {
        isLoading: false,
        data: action.data
      }
    default:
      return state
  }
}

export default samplesList
