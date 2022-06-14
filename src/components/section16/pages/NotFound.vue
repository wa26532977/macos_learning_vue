<template>
  <section>
    <base-card>
      <h2>Page not found</h2>
      <p>Should check out <router-link to="/coaches">coaches</router-link> list</p>
    </base-card>
  </section>

</template>

<script>
import BaseCard from "@/components/section16/components/UI/BaseCard";
export default {
  name: "NotFound",
  components: {BaseCard}

}
</script>

<style scoped>

</style>