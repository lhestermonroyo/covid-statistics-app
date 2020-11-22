import { OVERVIEW_BEGIN, OVERVIEW_END, OVERVIEW_SUCCESS, OVERVIEW_FAILED, CLEAR_OVERVIEW_STATES } from '../constants/overviewConstants';

const initialState = {
  loading: false,
  alert: {
    message: '',
    isOpen: false,
    type: null
  },
  overviewData: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OVERVIEW_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case OVERVIEW_END:
      return {
        ...state,
        loading: false,
      }
    case OVERVIEW_SUCCESS:
      return {
        ...state,
        overviewData: action.payload
      }
    case CLEAR_OVERVIEW_STATES:
      return {
        ...state,
        loading: false,
        alert: {
          message: '',
          isOpen: false,
          type: null
        },
        overviewData: [],
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer;