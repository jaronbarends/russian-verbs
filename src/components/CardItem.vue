<template>
  <li :class="$style['card-item']">
    <div :class="cardClasses">
      <card-face
        :verb="verb"
        side="sideA"
        ref="sideA"
        :isActive="activeFace === 'sideA'"
        :class="$style['card-face']"
        @turnCard="turnCard"
        @nextCard="nextCard"
        @prevCard="prevCard" />
      <card-face
        :verb="verb"
        side="sideB"
        ref="sideB"
        :isActive="activeFace === 'sideB'"
        :class="sideBClasses"
        @turnCard="turnCard"
        @nextCard="nextCard"
        @prevCard="prevCard" />
    </div>
  </li>
</template>
<script>
import { mapGetters } from 'vuex';
import CardFace from './CardFace.vue';

export default {
  data() {
    return {
      activeFace: 'sideA',
    };
  },
  computed: {
    ...mapGetters(['verbs']),
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
    turnCard() {
      this.activeFace = this.activeFace === 'sideA' ? 'sideB' : 'sideA';
    },
    nextCard() {
      let newIdx = this.$store.state.progress.currIdx + 1;
      if (newIdx >= this.verbs.length) {
        newIdx = 0;
      }
      this.$store.state.progress.currIdx = newIdx;
    },
    prevCard() {
      let newIdx = this.$store.state.progress.currIdx - 1;
      if (newIdx < 0) {
        newIdx = this.verbs.length - 1;
      }
      this.$store.state.progress.currIdx = newIdx;
    }
  }
};
</script>

<style module>
  .card-item {
    /* wrapper around card */
    flex: 0 0 auto;
    position: relative;
    margin-bottom: 2em;
    perspective: 1000px;
    width: 100%;
    height: 100%;
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
    width: 100%;
    height: 100%;
  }

  .card-face--side-b {
    transform: rotateY(180deg);
  }
</style>
