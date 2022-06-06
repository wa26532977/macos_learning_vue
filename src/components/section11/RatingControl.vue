<template>
<ul>
  <li :class="{active: activeOption === 'poor'}"><button type="button" @click="activeOption('poor')">poor</button></li>
  <li :class="{active: activeOption === 'average'}"><button type="button" @click="activeOption('average')">Average</button></li>
  <li :class="{active: activeOption === 'great'}"><button type="button" @click="activeOption('great')">Great</button></li>
</ul>
</template>

<script>
export default {
  name: "RatingControl",
  data() {
    return {
      activeOption: null
    }
  },
  methods: {
    active(option) {
      this.activeOption = option
    }
  }
}
</script>

<style scoped>
.active {
  border-color: purple;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>