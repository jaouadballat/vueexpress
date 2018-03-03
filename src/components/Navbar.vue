<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
    <div class="container">
        <router-link tag="a" :to = "{name: 'home'}" class="navbar-brand">Shopping Cart</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav  ml-auto">
                <li class="nav-item active" v-for="category in categories" :key="category._id">
                    <router-link tag="a" :to = "{name: 'category', params: {category: category.title}}" class="nav-link">{{ category.title }}</router-link>
                </li>
                <router-link tag="a" :to = "{name: 'checkout'}" class="nav-link">Cart(<span class="badge badge-light">{{ cart.length }}</span>)</router-link>
                
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import Api from '@/config/Api'
export default {
    data() {
        return {
            categories: []
        }
    },
    created() {
        Api().get('/categories')
            .then(response => {
                this.categories = response.data;
            });
            
    }, 
    computed: {
        cart() {
            return this.$store.getters.getCart
        }
    }
}
</script>

<style>

</style>
