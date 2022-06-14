<template>
  <section>
    <base-card>
      <h2>Register as coach now</h2>
      <coach-form @save-data="saveData"/>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "@/components/section16/components/coaches/CoachForm";
import BaseCard from "@/components/section16/components/UI/BaseCard";

export default {
  name: "CoachRegistration",
  components: {CoachForm, BaseCard},
  methods: {
    saveData(formData) {
      // console.log(formData)
      this.$store.dispatch('registerCoach', formData)
      this.$router.push('/coaches')
    }
  }
}
</script>

<style scoped>

</style>