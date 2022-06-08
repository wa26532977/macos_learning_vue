<template>
<!--  <div class="home">-->
<!--    &lt;!&ndash;    <learning-survey></learning-survey>&ndash;&gt;-->
<!--    &lt;!&ndash;    <user-experiences ></user-experiences>&ndash;&gt;-->
<!--    &lt;!&ndash;    <TheForm />&ndash;&gt;-->
<!--    <div class="container">-->
<!--      <div class="block" :class="{animate: animatedBlock}"></div>-->
<!--      <button @click="moveLeft">Animate</button>-->
<!--    </div>-->
<!--    <div class="container">-->
<!--      <transition>-->
<!--        <p v-if="paraVisible">This is some toggle</p>-->
<!--      </transition>-->
<!--      <button @click="paraToggle">Toggle paragraph</button>-->
<!--    </div>-->
<!--    <base-modal @close="hideDialog" v-if="dialogIsVisible">-->
<!--      <p>This is a test dialog!</p>-->
<!--      <button @click="hideDialog">Close it!</button>-->
<!--    </base-modal>-->
<!--    <div class="container">-->
<!--      <button @click="showDialog">Show Dialog</button>-->
<!--    </div>-->
<!--  </div>-->
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <button @click="addOne">Add 1</button>
  </base-container>
  <the-counter />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import TheForm from "@/components/section11/TheForm";
// import LearningSurvey from "@/components/section12/survey/LearningSurvey";
// import UserExperiences from "@/components/section12/survey/UserExperiences";
// import BaseModal from "@/components/section14/BaseModal";
import BaseContainer from "@/components/section15/BaseContainer";
import TheCounter from "@/components/section15/TheCounter";

export default {
  name: 'HomeView',
  components: {
    // TheForm,
    // LearningSurvey,
    // UserExperiences
    // BaseModal
    BaseContainer,
    TheCounter
  },
  data() {
    return {
      // dialogIsVisible: false,
      // animatedBlock: false,
      // paraVisible: false
    };
  },
  methods: {
    addOne() {
      this.$store.state.counter++
    },
    // showDialog() {
    //   this.dialogIsVisible = true;
    // },
    // hideDialog() {
    //   this.dialogIsVisible = false;
    // },
    // moveLeft() {
    //   this.animatedBlock = !this.animatedBlock
    // },
    // paraToggle() {
    //   this.paraVisible = !this.paraVisible
    // }
  },
  computed: {
    counter() {
      return this.$store.state.counter
    }
  }
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
.v-enter-from {
  /*opacity: 0;*/
  /*transform: translateY(-30px);*/
}
.v-enter-active {
  /*transition: all 0.3s ease-out;*/
    animation: slide-fade 0.5s ease-out;

}
.v-enter-to {
  /*opacity: 1;*/
  /*transform: translateY(0);*/
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0px);

}
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.v-leave-active {
  transition: all 0.2s ease-in;
}
.animate {
  /*transform: translateX(-250px);*/
  animation: slide-fade 0.5s ease-out forwards;
}

* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 0.3s ease-out;*/

}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
