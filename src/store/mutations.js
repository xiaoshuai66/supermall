import {ADD_COUNTER, ADD_TO_CART, ALTER_CHECK, SELECT_ALL} from './mutation-types.js';

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    payload.count = 1;
    payload.checked = true;
    state.cartList.push(payload);
  },
  [ALTER_CHECK](state, payload) {
    let oldProduct = state.cartList.find(item => item.iid === payload.iid);
    oldProduct.checked = !oldProduct.checked
  },
  [SELECT_ALL](state, payload) {
    state.cartList.forEach(item => item.checked = payload);
  }
}