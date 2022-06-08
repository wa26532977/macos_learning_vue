<template>
  <router-view />
  <ul>
    <team-item
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></team-item>
  </ul>
</template>

<script>
import TeamItem from "@/components/section13/teams/TeamItem";
export default {
  name: "TeamList",
  components: {
    TeamItem,
  },
  inject: ['teams'],
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>