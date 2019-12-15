<template>
    <ul :class="$style['cards-list']" class="o-list-bare">
      <transition name="fade" mode="out-in">
        <card-item v-for="(verb, idx) in verbs"
          v-if="idx === $store.state.progress.currIdx"
          :key="verb.id"
          :verb="verb" />
      </transition>
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
    margin: 2em auto;
    padding: 0;
    width: 32rem;
    height: 50rem;
    list-style-type: none;
  }
</style>

<style scoped>
.fade-enter-to,
.fade-leave-to {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
