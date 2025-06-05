<script setup lang="ts">
const props = defineProps<{ code: string }>()
</script>
<template>
  <div>
    <h2>Коктейль: {{ props.code }}</h2>
    <!-- Здесь будет контент коктейля -->
  </div>
</template> 