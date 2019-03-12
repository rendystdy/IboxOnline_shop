import axios from "axios";

export const getOrders = () => {
  return {
    type: 'GET_ORDERS',
    payload: axios.get('http://192.168.0.23:3333/orders/').catch((error) => {
      console.log("Api call error")
      alert(error.message)
    }
    )
  }
}

export const createOrders = (body) => {
  // alert(JSON.stringify(body))
  return {
    type: 'CREATE_ORDERS',
    payload: axios({
      method: 'post',
      url: 'http://192.168.0.23:3333/orders/',
      data: body
    })
  }
}

export const incrementQtyOrder = (body, id) => {
  // alert(JSON.stringify(body, id))
  return {
    type: 'INCREMENT_QTY',
    payload: axios({
      method: 'patch',
      url: `http://192.168.0.23:3333/orders/${id}`,
      data: body
    })
  }
}

export const decrementQtyOrder = (body, id) => {
  // alert(JSON.stringify(body, id))
  return {
    type: 'DECREMENT_QTY',
    payload: axios({
      method: 'patch',
      url: `http://192.168.0.23:3333/orders/${id}`,
      data: body
    })
  }
}

export const deleteOrder = (id) => {
  // alert(JSON.stringify(id))
  return {
    type: 'DELETE_ORDER',
    payload: axios({
      method: 'delete',
      url: `http://192.168.0.23:3333/orders/${id}`,
    })
  }
}