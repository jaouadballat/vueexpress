<template>
  <Cards :products="products" />
</template>

<script>
import Cards from './Cards';

import axios from 'axios';
export default {
    components: {
        Cards
    },
    data() {
        return {
            products: []
        }
    },
    created() {
        axios.get('http://localhost:3000/products')
            .then(response => {
                this.products = response.data;
            });
    }
}
</script>

<style scoped>
    
</style>
