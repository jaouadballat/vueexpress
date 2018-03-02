<template>
  <Cards :products="products" />
</template>

<script>
import Cards from './Cards';
import Api from '@/config/Api'

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
        Api().get('/products')
            .then(response => {
                this.products = response.data;
            });
    }
}
</script>

<style scoped>
    
</style>
