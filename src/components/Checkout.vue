<template>
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <div v-if="cart.length==0">
                  <h3 class="text-center text-danger">Your Cart is Empty !</h3>
              </div>
              <div v-else>
                  <table class="table striped ">
                    <thead>
                        <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">SubTotat</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cart" :key="item.id">
                            <td>{{ item.name }}</td>
                            <td>${{ item.price }}</td>
                            <td>{{ item.qty }}</td>
                            <td>${{ item.subtotal }}</td>
                            <td>
                                <button class="btn btn-sm btn-info mr-1" @click="action('min',item)">-</button>
                                <button class="btn btn-sm btn-danger mr-1" @click="action('clear',item)">Clear</button>
                                <button class="btn btn-sm btn-info mr-1" @click="action('add',item)">+</button>
                            </td>
                        </tr>
                    </tbody>
              </table>
                <h4>Total: ${{ total }}</h4> 
                <a href="#" class="btn btn-outline-primary">Checkout</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

    computed: {
         cart() {
             return this.$store.getters.getCart
         },
         total() {
             let som = 0;
              this.cart.map(item => {
                 som += item.subtotal
             });
             return som;
         }
    },
    methods: {
        action(event, item) {
            switch (event) {
                case 'add':
                    item.qty++;
                    item.subtotal = item.price*item.qty;
                    this.$store.commit('setQuantity', item);
                    this.$store.commit('setPrice', item);
                    localStorage.setItem('cart', JSON.stringify(this.cart));
                    break;
                case 'min':
                    item.qty--;
                    item.subtotal = item.price*item.qty;
                    this.$store.commit('setQuantity', item);
                    this.$store.commit('setPrice', item);
                    localStorage.setItem('cart', JSON.stringify(this.cart));
                    if(item.qty === 0) this.clearFromCart(item)
                    break;
                case 'clear':
                    this.clearFromCart(item)
                    break;
                default:
                    break;
            }
        },
        clearFromCart(product) {
            let item = this.cart.find(item => {
                return item.id === product.id
            });
            let index = this.cart.indexOf(item);
            this.cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }
    }
}
</script>

<style>

</style>
