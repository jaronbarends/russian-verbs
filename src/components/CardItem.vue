<template>
  <li class="card-item">
    {{ verb.imperfective }}
  </li>
</template>

<script>
export default {
  props: {
    verb: {
      type: Object,
      default: () => ({}),
    },
  }
};
</script>
