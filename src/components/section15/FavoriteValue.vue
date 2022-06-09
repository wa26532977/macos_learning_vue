<template>
  <h3>From favorite value</h3>
  <h3>{{counter}}</h3>
</template>

<script>
export default {
  name: "FavoriteValue",
  computed: {
    counter() {
      console.log(this.$store.getters['counterModule/normalizedCounter'])
      return this.$store.getters['counterModule/normalizedCounter']
    }
  }
}
</script>

<style scoped>

</style>