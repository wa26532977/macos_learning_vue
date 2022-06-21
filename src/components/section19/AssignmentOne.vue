<template>
  <h2>My Course Goal: {{showGoals}}</h2>
<!--  <section v-if="showGoals">-->
<!--    <h3>OUTPUT Course Goal</h3>-->
<!--    <h3>Goal 1</h3>-->
<!--    <h3>Goal 2</h3>-->
<!--  </section>-->
<!--  <section v-if="courseData.goalVisibility">-->
<!--    <h3>OUTPUT Course Goal</h3>-->
<!--    <h3>Goal 1</h3>-->
<!--    <h3>Goal 2</h3>-->
<!--    <h3>{{courseData.goal}}</h3>-->
<!--  </section>-->
<!--  <section v-if="reactData.goalVisibility">-->
<!--    <h3>OUTPUT Course Goal</h3>-->
<!--    <h3>Goal 1</h3>-->
<!--    <h3>Goal 2</h3>-->
<!--    <h3>{{reactData.goal}}</h3>-->
<!--  </section>-->
    <section v-if="o_goalVisibility">
    <h3>OUTPUT Course Goal</h3>
    <h3>Goal 1</h3>
    <h3>Goal 2</h3>
    <h3>{{o_goal}}</h3>
  </section>
  <button @click="toggleO_goalVisibility">Toggle Goal</button>
</template>

<script>
import {ref, reactive} from "vue";

export default {
  name: "AssignmentOne",
  data() {
    return {
      o_goal: 'Finish the course!',
      o_goalVisibility: false
    }
  },
  methods: {
    toggleO_goalVisibility() {
      this.o_goalVisibility = !this.o_goalVisibility
    }
  },
  setup() {
    const showGoals = ref(true)

    const courseData = ref({
      goal: "finish the course!",
      goalVisibility: false
    })

    const reactData = reactive({
      goal: 'finish the course~',
      goalVisibility: false
    })

    function toggleShowGoals() {
      // showGoals.value = !showGoals.value
      // console.log(showGoals)
      // courseData.value.goalVisibility = !courseData.value.goalVisibility
      reactData.goalVisibility = !reactData.goalVisibility
    }

    return {showGoals, toggleShowGoals, courseData, reactData}
  }
}
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 3rem;
  text-align: center;
}
</style>