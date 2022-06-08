<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
          v-for="member in members"
          :key="member.id"
          :name="member.fullName"
          :role="member.role"
      ></user-item>
    </ul>
    <button @click="toPageTwo">Go to teams 2</button>
  </section>
</template>

<script>
import UserItem from "@/components/section13/users/UserItem";

export default {
  name: "TeamMembers",
  components: {
    UserItem
  },
  inject: ['users', 'teams'],
  props: ['id'],
  data() {
    return {
      teamName: 'Test',
      members: [],
    };
  },
  methods: {
    toPageTwo() {
      this.$router.push('/teams/t2')
    },
    loadTeamMember(id) {
      this.members = []
      // console.log(this.$route.path, this.$route.params.id)
      // const selectedTeam = this.teams.find(team => team.id === route.params.id)
      const selectedTeam = this.teams.find(team => team.id === id)
      if (!selectedTeam) return
      this.teamName = selectedTeam.name
      // console.log(selectedTeam)
      selectedTeam.members.forEach(member => {
        // console.log(member)
        const user = this.users.find(user => user.id === member)
        this.members.push(user)
      })
      // console.log(this.members)
    }
  },
  created() {
    // this.loadTeamMember(this.$route)
    console.log(this.id)
    this.loadTeamMember(this.id)
    console.log(this.$route.query)
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from)
    // this.loadTeamMember(to.params.id)
    next()
  },
  watch: {
    id(newId) {
      this.loadTeamMember(newId)
    }
  },
  // beforeRouteUpdate(to) {
  //   this.loadTeamMember(to.params.id)
  // }
}
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>