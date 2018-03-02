import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        cart: JSON.parse(localStorage.getItem('cart'))
    },
    mutations:{
        setCart: (state, payload) => {
            state.cart.push(payload);
        },
        setQuantity(state, payload) {
            let item = state.cart.find(product => {
                return product.id === payload.id
            });
            item.qty = payload.qty;
        }
    },
    getters: {
        getCart: state => state.cart
    }
});