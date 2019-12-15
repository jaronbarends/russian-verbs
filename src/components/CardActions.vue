<template>
  <div :class="$style['card-actions']">
      <button @click="prev" :class="[$style['btn'], $style['btn--secondary']]">←</button>
      <button @click="turn" :class="[$style['btn'], $style['btn--secondary']]">↻</button>
      <button @click="next" :class="[$style['btn'], $style['btn--primary']]">→</button>
  </div>
</template>

<script>
  export default {
    methods: {
      turn() {
        this.$emit('turnCard');
      },
      next() {
        this.$emit('nextCard');
      },
      prev() {
        this.$emit('prevCard');
      }
    }
  }
</script>

<style module>
.card-actions {
  display: flex;
  justify-content: center;
}

.btn {
  padding: 0.25em 0.5em;
  font-size: 3rem;
}
</style>
