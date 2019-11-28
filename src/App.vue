<template>
  <div>
    <card-configurator />
    <card-list />
  </div>
</template>

<script>
import axios from "axios";
import types from './store/types';
import CardConfigurator from "./components/CardConfigurator.vue";
import CardList from "./components/CardsList.vue";

export default {
  components: {
    CardConfigurator,
    CardList,
  },
  mounted() {
    axios
      .get("/data/some-verbs.json")
      .then(response => {
        console.log(response);
        // this.$store.getters.verbs = response.data;
        this.$store.state.verbs = response.data;
      })
      .catch(error => {
        console.warn(error);
      });
  }
};
</script>

<style>
</style>
