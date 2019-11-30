<template>
  <li :class="$style['card-item']">
    <card-face
      :verb="verb"
      side="sideA"
      ref="sideA"
      :isActive="activeFace === 'sideA'"
      :class="$style['card-face']"
      @flip="flipCard" />
    <card-face
      :verb="verb"
      side="sideB"
      ref="sideB"
      :isActive="activeFace === 'sideB'"
      :class="$style['card-face']"
      @flip="flipCard" />
  </li>
</template>
<script>
import CardFace from './CardFace.vue';

export default {
  data() {
    return {
      activeFace: 'sideA',
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
  },
  methods: {
    flipCard() {
      this.activeFace = this.activeFace === 'sideA' ? 'sideB' : 'sideA';
    }
  }
};
</script>

<style module>
  .card-item {
    margin-bottom: 2em;
  }

  .card-face {
    display: inline-block;
    vertical-align: bottom;
  }
</style>
