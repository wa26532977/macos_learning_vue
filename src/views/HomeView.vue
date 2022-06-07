<template>
  <div class="home">
    <learning-survey></learning-survey>
    <user-experiences ></user-experiences>
    <!--    <TheForm />-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import TheForm from "@/components/section11/TheForm";
import LearningSurvey from "@/components/section12/survey/LearningSurvey";
import UserExperiences from "@/components/section12/survey/UserExperiences";

export default {
  name: 'HomeView',
  components: {
    // TheForm,
    LearningSurvey,
    UserExperiences
  },
  // data() {
  //   return {
  //     savedSurveyResults: [],
  //   };
  // },
  // methods: {
  //   storeSurvey(surveyData) {
  //     const surveyResult = {
  //       name: surveyData.userName,
  //       rating: surveyData.rating,
  //       id: new Date().toISOString(),
  //     };
  //     this.savedSurveyResults.push(surveyResult);
  //     console.log(surveyResult);
  //   },
  // },
}
</script>

<style>
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
