<template>
  <section>
    <base-card>
      <header>
        <h2>Requested Received</h2>
      </header>
      <ul v-if="hasRequests">
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

export default {
  name: "RequestedReceived",
  components: {BaseCard, RequestedItem},
  computed: {
    requests() {
      return this.$store.getters['request/getRequests']
    },
    hasRequests() {
      return this.$store.getters['request/getHasRequests']
    }
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