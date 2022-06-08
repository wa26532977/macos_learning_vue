<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="changeSaved">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from "@/components/section13/users/UserItem";
export default {
  name: "UserList",
  components: {
    UserItem,
  },
  data() {
    return {
      changeSaved: false
    }
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      console.log("doing something then push history ")
      this.$router.push('/teams')
    },
    savedChange() {
      this.changeSaved = true
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('before route enter on user list')
    console.log(to, from)
    next()
  },
  beforeRouteLeave(to, from, next){
    console.log('before route leave')
    console.log(to, from)
    if (this.changeSaved) {
      next()
    } else {
      const userWantsLeave = confirm("Are you sure? You got unsaved change")
      next(userWantsLeave)
    }
  },
  unmounted() {
    console.log("unmounted")
    if (!this.changeSaved) {
      console.log('good')
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>