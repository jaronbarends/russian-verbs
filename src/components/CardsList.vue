<template>
    <ul :class="$style['cards-list']" class="o-list-bare">
      <card-item v-for="(verb, idx) in verbs"
        v-if="idx === $store.state.progress.currIdx"
        :key="verb.id"
        :verb="verb" />
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
    display: flex;
    padding: 0;
    list-style-type: none;
  }
</style>
