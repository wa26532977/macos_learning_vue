<template>
  <button @click="addOne">Add one</button>
  <br />
  <input type="number" v-model="userInputValue">
  <button @click="gettingUser">add {{userInputValue}} and {{userInputValue+1}}</button>
</template>

<script>
export default {
  name: "ChangeCounter",
  data() {
    return {
      userInputValue: 0
    }
  },
  methods: {
    addOne() {
      this.$store.commit('counterModule/addOne')
    },
    addValue() {
      // this.$store.commit('increaseCounter', {value: this.userInputValue})
      this.$store.commit({
        type: "counterModule/increaseCounter",
        value: this.userInputValue,
        value_2: this.userInputValue+1
      })
    },
    gettingUser() {
      this.$store.dispatch({
        type: "counterModule/gettingUser",
        value: this.userInputValue,
        value_2: this.userInputValue+1
      })
    }
  }
}
</script>

<style scoped>

</style>