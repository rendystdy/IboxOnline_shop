import axios from "axios";

export const getProducts = () => {
  return {
    type: 'GET_PRODUCT',
    payload: axios.get('http://192.168.0.23:3333/products').catch((error)=>{
      console.log("Api call error")
      alert(error.message)
    }
    )
  }
}

export const getProductDetail = (id) => {
  return {
    type: 'GET_PRODUCT_DETAIL',
    payload: axios.get(`http://192.168.0.23:3333/products/${id}`)
  }
}