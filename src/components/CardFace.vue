<template>
  <div :class="cssClasses.face">
    
    <div  v-if="faceConfig.imperfective">
      <h3 :class="$style['verb-property']">imperfective</h3>
      <h2 :class="$style['verb-card__title']" class="in-russian">{{ verb.imperfective }}</h2>
    </div>

    <div  v-if="faceConfig.perfective">
      <h3 :class="$style['verb-property']">perfective</h3>
      <h2 :class="$style['verb-card__title']" class="in-russian">{{ verb.perfective }}</h2>
    </div>

    <div  v-if="faceConfig.translation">
      <h3 :class="$style['verb-property']">translation</h3>
      <h2 :class="$style['verb-card__translation']">{{ verb.translation }}</h2>
    </div>

    <div  v-if="faceConfig.rank">
      <div :class="$style['verb-card__rank']">frequency ranking: {{ verb.rank }}</div>
    </div>


    <div
      v-if="this.side === cardConfig.questionSide"
      class="card-actions">
      <button @click="$emit('flip');" class="btn btn--primary">Turn</button>
    </div>
    <div
      v-else
      class="card-actions">
      <button @click="$emit('flip');" class="btn btn--secondary">Turn</button>
      <button @click="$emit('flip');" class="btn btn--primary">Next</button>
    </div>

    <!-- <div  -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    verb: {
      type: Object,
      default: () => ({}),
    },
    side: {
      type: String,
      default: 'sideA',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(['cardConfig']),
    faceConfig() {
      return this.cardConfig[this.side];
    },
    cssClasses() {
      const cardFace = this.$style['card-face'];
      const faceHidden = this.$style['card-face--is-hidden'];
      return {
        face: {
          [cardFace]: true, 
          [faceHidden]: !this.isActive,
        },
      };
    }
  },
}
</script>

<style module>
  .card-face {
    border: 1px solid var(--color-grey-light);
    padding: 1rem;
    width: 12rem;
    height: 16rem;
    text-align: center;
  }

  .card-face--is-hidden {
    opacity: 0.5;
  }

  h2 {
    margin: 0 0 1em;
  }

  .verb-property {
    margin: 0;
    font-weight: normal;
    font-size: 0.75rem;
  }
</style>
