const initialState = {
  data: [],
  isLoading: false,
  detail: {}
}

export default products = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_PRODUCT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data
      }
    case 'GET_PRODUCT_DETAIL_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_PRODUCT_DETAIL_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_PRODUCT_DETAIL_FULFILLED':
      return {
        ...state,
        isLoading: false,
        detail: action.payload.data.data
      }

    default:
      return state;
  }
}