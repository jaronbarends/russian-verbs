<template>
  <div>
    <div v-for="prop, key in verbs[0]" :key="key">
      {{ key }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['verbs']),
  },
}
</script>
