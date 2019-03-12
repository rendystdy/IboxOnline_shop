const initialState = {
  data: [],
  isLoading: false,
}

export default orders = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ORDERS_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_ORDERS_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'GET_ORDERS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      }
    case 'CREATE_ORDERS_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'CREATE_ORDERS_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'CREATE_ORDERS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      }

    case 'CREATE_ORDERS_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'CREATE_ORDERS_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'CREATE_ORDERS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      }

    case 'INCREMENT_QTY_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'INCREMENT_QTY_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'INCREMENT_QTY_FULFILLED':
      let product = state.data.find((item) => {
        return item.id === action.payload.data.data.id
      })
      product.quantity = action.payload.data.data.quantity
      product.price_order = action.payload.data.data.price_order
      // alert(JSON.stringify(product))
      return {
        ...state,
        isLoading: false,
        data: [...state.data, product]
      }

    case 'DECREMENT_QTY_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'DECREMENT_QTY_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'DECREMENT_QTY_FULFILLED':
      // let product = state.data.find((item) => {
      //   return item.id === action.payload.data.data.id
      // })
      // product.quantity = action.payload.data.data.quantity
      // product.price_order = action.payload.data.data.price_order
      // alert(JSON.stringify(product))
      return {
        ...state,
        isLoading: false,
        data: [...state.data, product]
      }

    case 'DELETE_ORDER_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'DELETE_ORDER_REJECTED':
      return {
        ...state,
        isLoading: false
      }

    case 'DELETE_ORDER_FULFILLED':

      product = state.data.filter(item => item.id !== action.payload.data.data.id)
      // product.quantity = action.payload.data.data.quantity
      // product.price_order = action.payload.data.data.price_order
      // alert(JSON.stringify(action.payload.data.data.id))

      return {
        ...state,
        isLoading: false,
        data: [...product]
      }

    default:
      return state;
  }
}