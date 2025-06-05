<script setup lang="ts">
interface Props {
  drink: Record<string, any>
}
const props = defineProps<Props>()

// Собираем ингредиенты и меры
const ingredients = []
for (let i = 1; i <= 15; i++) {
  const ingredient = props.drink[`strIngredient${i}`]
  const measure = props.drink[`strMeasure${i}`]
  if (ingredient) {
    ingredients.push({ ingredient, measure })
  }
}
</script>
<template>
  <div class="cocktail-card">
    <div class="card-header">
      <h3>{{ props.drink.strDrink }}</h3>
      <img
        v-if="props.drink.strDrinkThumb"
        :src="props.drink.strDrinkThumb"
        :alt="props.drink.strDrink"
        loading="lazy"
        class="cocktail-img"
      />
    </div>
    <div class="card-info">
      <div><b>Категория:</b> {{ props.drink.strCategory }}</div>
      <div><b>Тип:</b> {{ props.drink.strAlcoholic }}</div>
      <div><b>Бокал:</b> {{ props.drink.strGlass }}</div>
      <div><b>Инструкция:</b> {{ props.drink.strInstructions }}</div>
      <div><b>Ингредиенты:</b>
        <ul>
          <li v-for="(item, idx) in ingredients" :key="idx">
            {{ item.measure || '' }} {{ item.ingredient }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.cocktail-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  background: #fafafa;
  color: #222;
}
.card-header {
  display: flex;
  align-items: center;
  gap: 24px;
  h3 {
    margin: 0;
    font-size: 1.3em;
  }
}
.cocktail-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}
.card-info {
  font-size: 1em;
  ul {
    margin: 0;
    padding-left: 18px;
  }
}
</style> 