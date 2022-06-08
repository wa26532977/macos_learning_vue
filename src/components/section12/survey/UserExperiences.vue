<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperience">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Data is loading!!!</p>
      <p v-else-if="errorMessage !== ''">{{errorMessage}}</p>
      <p v-else-if="results.length === 0">There is no review yet.</p>
      <ul v-else>
        <survey-result
            v-for="result in results"
            :key="result.id"
            :name="result.name"
            :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "@/components/section12/UI/BaseCard";
import BaseButton from "@/components/section12/UI/BaseButton";
import SurveyResult from "@/components/section12/survey/SurveyResult";
import axios from 'axios'

export default {
  name: "UserExperiences",
  components: {BaseCard, BaseButton, SurveyResult},
  data() {
    return {
      results: [],
      isLoading: false,
      errorMessage: ''
    }
  },
  methods: {
    loadExperience() {
      this.isLoading = true
      axios.get("https://vue-https-876f4-default-rtdb.firebaseio.com/surveys.json").then(
          (response) => {
            this.isLoading = false
            if (response.statusText === 'OK') {
              Object.keys(response.data).forEach((key) => {
              if (!this.results.some(e => e.id === key)){
                this.results.push({id: key, name: response.data[key].name, rating: response.data[key].rating})
              }
            })
            } else {
              throw new Error("Could not save data!")
            }
          }
      ).catch((error) => {
        this.isLoading = false
        console.log(error)
        this.errorMessage = error.message
      })
    }
  },
  mounted() {
    this.loadExperience()
  },


}
</script>

<style scoped>

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>