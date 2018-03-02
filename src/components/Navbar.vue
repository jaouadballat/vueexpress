<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
    <div class="container">
        <a class="navbar-brand" href="#">Shopping Cart</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav  ml-auto">
                <li class="nav-item active" v-for="category in categories" :key="category._id">
                    <router-link tag="a" :to = "{name: 'category', params: {category: category.title}}" class="nav-link">{{ category.title }}</router-link>
                </li>
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
    }
}
</script>

<style>

</style>
