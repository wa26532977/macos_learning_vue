<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>Error: {{error}}</p>
  </base-dialog>
  <section>
    <coach-filter @change-filter="setFilter"/>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="refreshCoaches(true)">Refresh</base-button>
        <base-button link to="/auth?redirect=register" v-if="!isLogin">Login to Register as coach</base-button>
        <base-button link to="/register" v-else-if="!isCoach && !isLoading">Register as coach</base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner />
      </div>
      <ul v-else-if="hasCoaches">
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
import BaseSpinner from "@/components/section16/components/UI/BaseSpinner";
import BaseDialog from "@/components/section16/components/UI/BaseDialog";

export default {
  name: "CoachesList",
  components: {BaseSpinner, CoachItem, BaseCard, BaseButton, CoachFilter, BaseDialog },
  data() {
    return {
      activeFilter: {
        frontend: true,
        backend: true,
        career: true
      },
      isLoading: false,
      error: null
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
    isLogin() {
      return this.$store.getters.getIsLogin
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
    },
    handleError() {
      this.error = null
    },
    async refreshCoaches(force = false) {
      this.isLoading = true
      try {
        await this.$store.dispatch('loadCoaches', {refresh: force})
      } catch (error) {
        console.log(error)
        this.error = error.message || "Something Went Wrong"
      }
      // await this.$store.dispatch('loadCoaches')
      this.isLoading = false
    }
  },
  mounted() {
    this.refreshCoaches()
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