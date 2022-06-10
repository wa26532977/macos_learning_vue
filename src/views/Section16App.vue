<template>
  <the-header />
  <router-view />
</template>

<script>
import TheHeader from "@/components/section16/components/nav/TheHeader";
export default {
  name: "Section16App",
  components: {
    TheHeader
  }

}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>