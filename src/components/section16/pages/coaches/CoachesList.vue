<template>
  <section>
    <coach-filter @change-filter="setFilter"/>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register" v-if="!isCoach">Register as coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas='coach.areas'
        />
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "@/components/section16/components/UI/BaseCard";
import BaseButton from "@/components/section16/components/UI/BaseButton";
import CoachItem from "@/components/section16/components/coaches/CoachItem";
import CoachFilter from "@/components/section16/components/coaches/CoachFilter";

export default {
  name: "CoachesList",
  components: {CoachItem, BaseCard, BaseButton, CoachFilter},
  data() {
    return {
      activeFilter: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters.getCoaches
      return coaches.filter(coach => {
        if (this.activeFilter.frontend && coach.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilter.backend && coach.areas.includes('backend')) {
          return true
        }
        return this.activeFilter.career && coach.areas.includes('career');
      })

    },
    hasCoaches() {
      return this.$store.getters.getHasCoaches
    },
    isCoach() {
      return this.$store.getters.getIsCoach
    }
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilter = updatedFilters
    }
  }

}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>