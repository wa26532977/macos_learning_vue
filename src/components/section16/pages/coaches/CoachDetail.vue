<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Contact info</h2>
        <base-button link :to="contactLink">Show Coach Contact</base-button>
      </header>
      <router-view/>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in this.selectedCoach.areas" :key="area" :type="area" :title="area"></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "@/components/section16/components/UI/BaseCard";
import BaseButton from "@/components/section16/components/UI/BaseButton";
import BaseBadge from "@/components/section16/components/UI/BaseBadge";

export default {
  name: "CoachDetail",
  components: {BaseBadge, BaseCard, BaseButton},
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    }
  },
  created() {
    this.selectedCoach = this.$store.getters.getCoaches.find(coach => coach.id === this.id)
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName
    },
    rate() {
      return this.selectedCoach.hourlyRate
    },
    description() {
      return this.selectedCoach.description
    },
    contactLink() {
      if (this.$route.path.includes('/contact')) {
        return this.$route.path
      } else {
        return `${this.$route.path}/contact`
      }
    }
  }
}
</script>

<style scoped>

</style>