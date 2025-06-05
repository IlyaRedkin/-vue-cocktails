<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useCocktailStore } from '../entities/cocktail/model/cocktailStore'
import CocktailCard from '../entities/cocktail/ui/CocktailCard.vue'
const props = defineProps<{ code: string }>()

const store = useCocktailStore()

onMounted(() => {
  store.fetchCocktails(props.code)
})

watch(() => props.code, (newCode) => {
  store.fetchCocktails(newCode)
})
</script>
<template>
  <div>
    <h2>Коктейли: {{ props.code }}</h2>
    <div v-if="store.loading[props.code]">Загрузка...</div>
    <div v-else-if="store.error[props.code]" style="color:red">Ошибка: {{ store.error[props.code] }}</div>
    <div v-else>
      <CocktailCard v-for="drink in store.cocktails[props.code]" :key="drink.idDrink" :drink="drink" />
      <div v-if="!store.cocktails[props.code]?.length">Нет данных</div>
    </div>
  </div>
</template> 