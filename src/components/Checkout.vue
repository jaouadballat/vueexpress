<template>
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <table class="table striped ">
                    <thead>
                        <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cart" :key="item.id">
                            <td>{{ item.name }}</td>
                            <td>{{ item.price }}</td>
                            <td>{{ item.qty }}</td>
                            <td>
                                <button class="btn btn-sm btn-info mr-1" @click="action('min',item)">-</button>
                                <button class="btn btn-sm btn-danger mr-1" @click="action('clear',item)">Clear</button>
                                <button class="btn btn-sm btn-info mr-1" @click="action('add',item)">+</button>
                            </td>
                        </tr>
                    </tbody>
              </table>
        <h4>Total:</h4> 
        <a href="#" class="btn btn-outline-primary">Checkout</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    created() {
        console.log(this.cart);
    },
    computed: {
         cart() {
             return this.$store.getters.getCart
         }
    },
    methods: {
        action(event, item) {
            let price = item.price;
            switch (event) {
                case 'add':
                    item.qty++
                    break;
                case 'min':
                    item.qty--
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
            this.cart.splice(item, 1);
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }
    }
}
</script>

<style>

</style>
