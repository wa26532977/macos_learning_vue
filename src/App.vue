<!--<template>-->
<!--&lt;!&ndash;    <nav>&ndash;&gt;-->
<!--&lt;!&ndash;      <router-link to="/">Home</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;      <router-link to="/about">About</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;      <router-link to="/teams">Teams</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;      <router-link to="/users">Users</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;    </nav>&ndash;&gt;-->
<!--&lt;!&ndash;    <router-view/>&ndash;&gt;-->
<!--    <the-navigation></the-navigation>-->
<!--    <main>-->
<!--      <router-view>-->

<!--      </router-view>-->
<!--    </main>-->
<!--  <footer>-->
<!--    <router-view name="footer"/>-->
<!--  </footer>-->
<!--</template>-->

<!--<script>-->
<!--import TheNavigation from "@/components/section13/nav/TheNavigation";-->
<!--// import TeamList from "@/components/section13/teams/TeamList";-->
<!--// import UserList from "@/components/section13/users/UserList";-->

<!--export default {-->
<!--  components: {-->
<!--    TheNavigation,-->
<!--    // TeamList,-->
<!--    // UserList,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      activePage: 'team-list',-->
<!--      teams: [-->
<!--        {id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2']},-->
<!--        {id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3']},-->
<!--        {id: 't3', name: 'Client Consulting', members: ['u4', 'u5']},-->
<!--      ],-->
<!--      users: [-->
<!--        {id: 'u1', fullName: 'Max Schwarz', role: 'Engineer'},-->
<!--        {id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer'},-->
<!--        {id: 'u3', fullName: 'Julie Jones', role: 'Engineer'},-->
<!--        {id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant'},-->
<!--        {id: 'u5', fullName: 'Marie Smith', role: 'Consultant'},-->
<!--      ],-->
<!--    }-->
<!--  },-->
<!--  provide() {-->
<!--    return {-->
<!--      teams: this.teams,-->
<!--      users: this.users,-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style>-->
<!--* {-->
<!--  box-sizing: border-box;-->
<!--}-->

<!--html {-->
<!--  font-family: sans-serif;-->
<!--}-->

<!--body {-->
<!--  margin: 0;-->
<!--}-->
<!--</style>-->


<template>
  <the-header/>
  <router-view/>
</template>

<script>
import TheHeader from "@/components/section15Challenge/components/nav/TheHeader";

export default {
  name: "Section15ChallengeApp",
  components: {TheHeader},
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>