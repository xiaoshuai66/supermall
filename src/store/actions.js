import {ADD_COUNTER, ADD_TO_CART} from './mutation-types.js';

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let {state, commit} = context;
    let oldProduct = state.cartList.find(item => item.iid === payload.iid);

    if(oldProduct) {
      commit(ADD_COUNTER, oldProduct);
      resolve('商品数量+1')
    }else {
      commit(ADD_TO_CART, payload);
      resolve('商品添加成功')
    }
    })
  }
}