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
      // .get("/data/500-verbs.json")
      .then(response => {
        // console.log(response);
        const data = response.data;
        data.forEach((entry, i) => {
          entry.id = i;
        });
        this.$store.state.verbs = response.data;
      })
      .catch(error => {
        console.warn(error);
      });
  }
};
</script>

<style>
  :root {
    --color-grey-light: #ccc;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .in-russian {
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  .o-list--bare {
    list-style: none;
    padding-left: 0;
  }
</style>
