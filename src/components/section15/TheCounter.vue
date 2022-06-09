<template>
  <h3>from TheCounter</h3>
  <h3>{{ counter }}</h3>
  <button @click="gettingUser({value: 1, value_2: 2})">getting user</button>
</template>

<script>
// import {useGetters} from 'vuex-composition-helpers'
import {mapActions} from 'vuex'

export default {
  name: "TheCounter",
  methods: {
    ...mapActions('counterModule',['gettingUser'])
  },
  computed: {
    counter() {
      return this.$store.getters.finalCounter
      // const {counter} = useGetters({normalizedCounter})
      // return counter
    },
  }
}
</script>

<style scoped>

</style>