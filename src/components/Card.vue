<template>
  <div class="card" style="width: 100%; height:100%;">
    <div class="card-body">
        <a href="">
            <img class="card-img-top" :src="product.image" :alt="product.name">
        </a>
        <h5 class="card-title text-info">{{ product.name }}</h5>
        <p class="card-text">{{ product.description.substring(0, 50) }}</p>
        <p class="card-text text-danger">${{ product.price }}</p>
        <a href="#" class="btn btn-outline-primary">Buy Now</a>
    </div>
</div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style scoped>
.card-title {
        cursor: pointer;
    }
</style>
