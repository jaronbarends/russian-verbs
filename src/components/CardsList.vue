<template>
    <ul :class="$style['cards-list']" class="o-list-bare">
      <card-item v-for="(verb, index) in verbs" v-if="index < 30" :key="verb.rank" :verb="verb" />
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import CardItem from "./CardItem.vue";

export default {
  components: {
    CardItem
  },
  computed: {
    ...mapGetters(['verbs']),
  },
};
</script>

<style module>

  .cards-list {
    padding: 0;
    list-style-type: none;
  }
</style>
