<template>
  <div class="card" style="width: 100%; height:100%;">
    <div class="card-body">
        <a href="">
            <img class="card-img-top" :src="product.image" :alt="product.name">
        </a>
        <h5 class="card-title text-info">{{ product.name }}</h5>
        <p><span class="font-weight-bold">Category</span>: {{ product.category }}</p>
        <p class="card-text">{{ product.description.substring(0, 50) }}</p>
        <p class="card-text text-danger">${{ product.price }}</p>
        <router-link tag="a" class="btn btn-outline-primary mr-2" :to="{ name: 'product', params: { id: product._id }}">Desciption</router-link>
        <button class="btn btn-primary" @click="checkout(product)">Buy Now</button>
    </div>
</div>
</template>

<script>
export default {
    props: ['product'],
    methods: {
        checkout(product) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            if(cart.length === 0){
                console.log('cart empty');
                cart.push({
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    qty: 1
                });

            localStorage.setItem('cart', JSON.stringify(cart));

            }else {
                let item = cart.find(item => {
                    return item.id === product._id;
                });
                if(item) { // check if is not new item
                    item.qty++;
                    localStorage.setItem('cart', JSON.stringify(cart));
                }else {
                    cart.push({
                        id: product._id,
                        name: product.name,
                        price: product.price,
                        qty: 1
                    });
                    localStorage.setItem('cart', JSON.stringify(cart));
                }

            }
            
        }
    }
}
</script>

<style scoped>
.card-title {
        cursor: pointer;
    }
</style>
