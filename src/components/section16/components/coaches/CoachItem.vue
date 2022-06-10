<template>
  <li>
    <h3>{{fullName}}</h3>
    <h4>${{rate}}/hour</h4>
    <div>
<!--      <span v-for="area in areas" :key="area">{{area}}</span>-->
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"/>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="coachContactLink">contact</base-button>
      <base-button link :to="coachDetailsLink">View Detail</base-button>
    </div>
  </li>
</template>

<script>
import BaseButton from "@/components/section16/components/UI/BaseButton";
import BaseBadge from "@/components/section16/components/UI/BaseBadge";
export default {
  name: "CoachItem",
  components: {BaseButton, BaseBadge},
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    coachContactLink() {
      return `${this.$route.path}/${this.id}/contact`
    },
    coachDetailsLink() {
      return `${this.$route.path}/${this.id}`
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>