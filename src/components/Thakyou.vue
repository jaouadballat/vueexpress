<template>
  <div>
      <p>Tank you</p>
  </div>
</template>

<script>
export default {
    created() {
        console.log(this.$store.getters.getCharge);
    }
}
</script>

<style>

</style>
