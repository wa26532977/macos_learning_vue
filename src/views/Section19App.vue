<template>
  <section class="container">
    <h3>{{ user.name }}</h3>
    <h3>{{ user.age }}</h3>
    <p>{{ user }}</p>
    <button @click="setAge">Change Age</button>
  </section>
  <section class="container">
    <h2>My Course Goal</h2>
    <h3>OUTPUT COURSE GOAL</h3>
    <button>Toggle Goal</button>
  </section>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: "Section19App",
  setup() {
    // const uName = ref('peter')
    // const uAge = ref(0)
    const user = reactive({
      name: 'peter',
      age: 31
    })

    function setNewAge() {
      user.age += 1
    }

    // toRefs will ture all the properties into refs
    // const userRefs = toRefs(user)
    // const uName = 'peter'
    // console.log(isRef(uAge.value))
    // console.log(isRef(uAge))
    // console.log(isReactive(user))
    // console.log(isRef(user))
    // console.log(isRef(userRefs.name))

    // setTimeout(() => {
    //   // if user use ref need add value after user.value.name
    //   user.name = 'Max'
    //   user.age = 32
    //   uAge.value = 2
    // }, 2000)
    return {user: user, setAge: setNewAge}
  },
  methods: {
    changeAge() {
      this.user.age = 55
    }
  }
  // data() {
  //   return {
  //     userName: "peter",
  //   }
  // }
}
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 3rem;
  text-align: center;
}
</style>