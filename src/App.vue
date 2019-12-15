<template>
  <div>
    <!-- <card-configurator /> -->
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
    const path = window.location.href.indexOf('localhost') > 1 ? '' : '/playground/russian-verbs';
    axios
      // .get("${path}/data/some-verbs.json")
      .get(`${path}/data/500-verbs.json`)
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
    --color-grey-light-tr: rgba(0, 0, 0, 0.2);
    --color-blue-xlight: hsl(210, 100%, 97%);
    --color-yellow-xlight: hsl(60, 100%, 97%);
    --color-dark-green: hsl(120, 100%, 20%);
    --color-dark-red: hsl(0, 100%, 20%);
  }

  html {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
  }

  button {
    margin: 0 0.2em;
    border: 1px solid var(--color-grey-light-tr);
    border-radius: 2px;
    padding: 0.5em;
    background: white;
    cursor: pointer;
  }

  .in-russian {
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 0.05em;
  }

  .o-list--bare {
    list-style: none;
    padding-left: 0;
  }
</style>
