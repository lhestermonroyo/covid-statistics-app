import { COUNTRIES_BEGIN, COUNTRIES_END, COUNTRIES_SUCCESS, COUNTRIES_SHOW_ALERT, COUNTRIES_HIDE_ALERT, CLEAR_COUNTRIES_STATES } from '../constants/contriesConstants';

const initialState = {
  loading: false,
  alert: {
    isOpen: false,
    message: '',
    type: null
  },
  countries: [],
  countryDetails: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case COUNTRIES_END:
      return {
        ...state,
        loading: false,
      }
    case COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload
      }
    case COUNTRIES_SHOW_ALERT:
      return {
        ...state,
        alert: {
          isOpen: true,
          message: action.payload.message,
          type: action.payload.type,
        }
      }
    case COUNTRIES_HIDE_ALERT:
      return {
        ...state,
        alert: {
          isOpen: false,
          message: '',
          type: null,
        }
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer;