import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        cart: JSON.parse(localStorage.getItem('cart')) || []
    },
    mutations:{
        setCart: (state, payload) => {
            state.cart.push(payload);
        }
    },
    getters: {
        getCart: state => state.cart
    }
});