<template>
  <div class="card-face">
    
    <div  v-if="faceConfig.imperfective">
      <h3 class="verb-property">imperfective</h3>
      <h2 class="verb-card__title in-russian">{{ verb.imperfective }}</h2>
    </div>

    <div  v-if="faceConfig.perfective">
      <h3 class="verb-property">perfective</h3>
      <h2 class="verb-card__title in-russian">{{ verb.perfective }}</h2>
    </div>

    <div  v-if="faceConfig.translation">
      <h3 class="verb-property">translation</h3>
      <h2 class="verb-card__translation">{{ verb.translation }}</h2>
    </div>

    <div  v-if="faceConfig.rank">
      <div class="verb-card__rank">frequency ranking: {{ verb.rank }}</div>
    </div>

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
    face: {
      type: String,
      default: 'front',
    },
  },
  computed: {
    ...mapGetters(['cardConfig']),
    faceConfig() {
      return this.cardConfig[this.face];
    },
  },
}
</script>

<style scoped>
.card-face {
  border: 1px solid;
}
</style>
