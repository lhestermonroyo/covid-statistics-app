import { OVERVIEW_BEGIN, OVERVIEW_END, OVERVIEW_SUCCESS, OVERVIEW_SHOW_ALERT, OVERVIEW_HIDE_ALERT, CLEAR_OVERVIEW_STATES } from '../constants/overviewConstants';

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
    case OVERVIEW_SHOW_ALERT:
      return {
        ...state,
        alert: {
          isOpen: true,
          message: action.payload.message,
          type: action.payload.type,
        }
      }
    case OVERVIEW_HIDE_ALERT:
      return {
        ...state,
        alert: {
          isOpen: false,
          message: '',
          type: null,
        }
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