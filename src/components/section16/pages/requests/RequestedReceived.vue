<template>
  <base-dialog :show="!!error" title="An error occurred" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Requested Received</h2>
      </header>
      <base-spinner v-if="isLoading"/>
      <ul v-else-if="hasRequests">
        <RequestedItem v-for="request in requests" :key="request.id" :email="request.userEmail"
                       :coachId="request.coachId" :message="request.message"/>
      </ul>
      <h3 v-else>You haven't received any requested yet!</h3>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "@/components/section16/components/UI/BaseCard";
import RequestedItem from "@/components/section16/components/requests/RequestedItem";
import BaseSpinner from "@/components/section16/components/UI/BaseSpinner";
import BaseDialog from "@/components/section16/components/UI/BaseDialog";

export default {
  name: "RequestedReceived",
  components: {BaseDialog, BaseCard, RequestedItem, BaseSpinner},
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  computed: {
    requests() {
      return this.$store.getters['request/getRequests']
    },
    hasRequests() {
      return this.$store.getters['request/getHasRequests']
    }
  },
  methods: {
    async loadRequests() {
      this.isLoading = true
      try {
        await this.$store.dispatch("request/fetchRequests")
      } catch (error) {
        this.error = error.message || "Something went wrong when try to load requests"
      }
      this.isLoading = false
    },
    handleError() {
      this.error = null
    }
  },
  mounted() {
    this.loadRequests()
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>