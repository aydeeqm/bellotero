// Actions
const FETCH_INFORMATION = 'modules/customers/FETCH_INFORMATION'
const FETCH_INFORMATION_SUCCESS = 'modules/customers/FETCH_INFORMATION_SUCCESS'
const FETCH_INFORMATION_ERROR = 'modules/customers/FETCH_INFORMATION_ERROR'

const initialState = {
  loading: false,
  info: {}
}

export const getCustomers = () => async dispatch => {
  dispatch({
    type: FETCH_INFORMATION
  })
  try {
    let response = await window.fetch('https://express-now.aydeeqm.now.sh/page/1')
    response = await response.json()
    dispatch({
      type: FETCH_INFORMATION_SUCCESS,
      payload: response.slider
    })
  } catch (error) {
    dispatch({
      type: FETCH_INFORMATION_ERROR
    })
  }
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_INFORMATION:
      return { ...state, loading: true }
    case FETCH_INFORMATION_SUCCESS:
      return {
        ...state,
        info: action.payload,
        loading: false
      }
    case FETCH_INFORMATION_ERROR:
      return { ...state, loading: false }

    default:
      return { ...state }
  }
}
