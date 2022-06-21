<template>
<!--  <h2>{{userName}}</h2>-->
  <h3>{{userName}}</h3>
  <h3>{{age}}</h3>
</template>

<script>
import {computed} from 'vue'
export default {
  name: "UserData",
  props: ['firstName', 'lastName', 'age'],
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName
  //   }
  // }
  setup(props) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName
    })
    return {userName}
  }

}
</script>

<style scoped>

</style>