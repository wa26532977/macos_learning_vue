<template>
  <!--  <AssignmentTwo />-->
  <!--  <AssignmentOne />-->
  <section class="container">
    <!--    <h3>{{ user.name }}</h3>-->
    <!--    <h3>{{fullName}}</h3>-->
    <!--    <h3>{{ user.age }}</h3>-->
    <user-data :first-name="firstName" :last-name="lastName" :age="user.age"/>
    <p>{{ user }}</p>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName"/>
      <input type="text" placeholder="Last Name" @input="setLastName($event)"/>
      <input type="text" placeholder="ref testing" ref="ref_testing">
      <!--      <h3>{{ref_testing}}</h3>-->
      <button @click="setRefTesting">set ref testing Name</button>
    </div>
  </section>
</template>

<script>
import {reactive, ref, computed, watch} from 'vue'
import UserData from "@/components/section19/UserData";
// import AssignmentOne from "@/components/section19/AssignmentOne";
// import AssignmentTwo from "@/components/section19/AssignmentTwo";

export default {
  name: "Section19App",
  components: {
    // AssignmentOne, AssignmentTwo
    UserData
  },
  setup() {
    // const uName = ref('peter')
    // const uAge = ref(0)
    const firstName = ref('')
    const lastName = ref('')
    const ref_testing = ref(null)
    const user = reactive({
      name: 'peter',
      age: 31
    })

    function setRefTesting() {
      // this wrong works
      // ref_testing.value = this.$refs.ref_testing.value
      lastName.value = ref_testing.value.value
    }

    // watch(lastName, function (newValue, oldValue) {
    //   console.log("old Name:" + oldValue)
    //   console.log('new name:' + newValue)
    // })

    watch([lastName, firstName], function (newValues, oldValues) {
      console.log("old values:" + oldValues)
      console.log('new values:' + newValues)
    })

    const fullName = computed(function () {
      return firstName.value + ' ' + lastName.value
    })

    function setNewAge() {
      user.age += 1
    }

    function setLastName(event) {
      lastName.value = event.target.value
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
    return {user: user, setAge: setNewAge, firstName, lastName, setLastName, fullName, setRefTesting, ref_testing}
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