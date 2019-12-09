<template>
  <li :class="$style['card-item']">
    <div :class="cardClasses">
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
        :class="sideBClasses"
        @flip="flipCard" />
    </div>
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
  computed: {
    cardClasses() {
      const itemClass = this.$style['card'];
      const sideBActiveClass = this.$style['side-b-active'];
      return {
        [itemClass]: true,
        [sideBActiveClass]: this.activeFace === 'sideB',
      };
    },
    sideBClasses() {
      const faceClass = this.$style['card-face'];
      const sideBClass = this.$style['card-face--side-b'];
      return {
        [faceClass]: true,
        [sideBClass]: true,
      };
    }
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
    /* wrapper around card */
    position: relative;
    margin-bottom: 2em;
    perspective: 1000px;
    width: 12rem;
    height: 16rem;
  }

  .card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.3s ease-in-out;
  }

  .side-b-active {
    transform: rotateY(-180deg);
  }

  /* only card-face styles that have to do with its styling in relation to the parent */
  .card-face {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
  }

  .card-face--side-b {
    transform: rotateY(180deg);
  }
</style>
