<template>
    <ul class="cards-list">
      <card-item v-for="verb in verbs" :key="verb.rank" :verb="verb" />
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
