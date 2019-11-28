<template>
  <li class="card-item">
    <card-face :verb="verb" :face="front"></card-face>
    <card-face :verb="verb" :face="back"></card-face>
  </li>
</template>

<script>
import CardFace from './CardFace.vue';

export default {
  data() {
    return {
      front: 'front',
      back: 'back',
    };
  },
  props: {
    verb: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    CardFace,
  }
};
</script>
