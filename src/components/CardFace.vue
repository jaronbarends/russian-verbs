<template>
  <div :class="cssClasses.face">
    <div :class="$style['card-body']">
      <div v-if="faceConfig.rank">
        <div :class="$style['verb-card__rank']">{{ verb.rank }}</div>
      </div>

      <div v-if="verbObj">
        <h3 :class="verbTypeClasses">{{ verbObj.verbType }}</h3>
        <h2 :class="$style['verb-card__title']" class="in-russian">{{ verbObj.verb }}</h2>
      </div>

      <div v-if="faceConfig.translation">
        <h3 :class="$style['verb-property']">translation</h3>
        <h2 :class="$style['verb-card__translation']">{{ verb.translation }}</h2>
      </div>
    </div>

    <card-actions :class="$style['card-actions']"
      @turnCard="$emit('turnCard');"
      @nextCard="$emit('nextCard');"
      @prevCard="$emit('prevCard');" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardActions from './CardActions.vue';
export default {
  components: {
    CardActions,
  },
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
    verbObj() {
      if (!this.verb.isPair) {
        return {
          verb: this.verb.verb,
          verbType: 'no pair',
          verbTypeClassSuffix: 'no-pair',
        };
      }

      const showPerfective = ( this.faceConfig.mainVerb && this.verb.perfective === this.verb.verb ) || ( !this.faceConfig.mainVerb && this.verb.perfective !== this.verb.verb);

      const showImperfective = ( this.faceConfig.mainVerb && this.verb.imperfective === this.verb.verb ) || ( !this.faceConfig.mainVerb && this.verb.imperfective !== this.verb.verb);

      if (showPerfective) {
        return {
          verb: this.verb.perfective,
          verbType: 'perfective',
          verbTypeClassSuffix: 'perfective',
        }
      }

      if (showImperfective) {
        return {
          verb: this.verb.imperfective,
          verbType: 'imperfective',
          verbTypeClassSuffix: 'imperfective',
        }
      }
    },
    cssClasses() {
      const cardFace = this.$style['card-face'];
      const faceHidden = this.$style['card-face--is-hidden'];
      const cardFaceA = this.$style['card-face--side-a'];
      const cardFaceB = this.$style['card-face--side-b'];
      return {
        face: {
          [cardFace]: true, 
          [faceHidden]: !this.isActive,
          [cardFaceA]: this.side === 'sideA',
          [cardFaceB]: this.side === 'sideB',
        },
      };
    },
    verbTypeClasses() {
      const propertyClass = this.$style['verb-property'];
      const verbTypeClass = this.$style['verb-type'];
      const verbTypeClassSuffix = this.$style[`verb-type--${this.verbObj.verbTypeClassSuffix}`];

      console.log('ver');

      return {
        [propertyClass]: true,
        iets: true,
        [verbTypeClass]: true,
        [verbTypeClassSuffix]: true,
      }
    },
  },
}
</script>

<style module>
  .card-face {
    display: flex;
    flex-direction: column;
    border: 2px solid var(--color-grey-light-tr);
    border-radius: 5px;
    padding: 3rem;
    text-align: center;
    background: white;
  }

  .card-face--side-a {
    background: var(--color-blue-xlight);
  }

  .card-face--side-b {
    background: var(--color-yellow-xlight);
  }

  .card-face--is-hidden {
    pointer-events: none;
  }

  .card-body {
    flex: 1 1 auto;
  }

  .card-actions {
    flex: 0 0 auto;
    margin-top: auto;
  }

  .verb-card__title {
    margin: 0 0 1em;
    font-size: 3.2rem;
  }

  .verb-property {
    margin: 0 0 1em;
    font-weight: normal;
    font-size: 1.6rem;
  }

  .verb-type {
    display: inline-block;
    border-radius: 1em;
    padding: 0.5em 1em;
    background: white;
  }

  .verb-type--no-pair {
    color: var(--color-grey-light);
  }

  .verb-type--perfective {
    color: var(--color-dark-green);
  }

  .verb-type--imperfective {
    color: var(--color-dark-red);
  }
  
  .verb-card__rank {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    font-size: 2em;
    /* background: white; */
    color: var(--color-blue-xlight);
    color: white;
    color: rgba(0,0,0, 0.2);
    font-weight: bold;
  }
</style>
