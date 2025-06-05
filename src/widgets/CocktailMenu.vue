<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { cocktails } from '../shared/config/cocktails'
const items = cocktails
const route = useRoute()
const router = useRouter()
function goTo(code: string) {
  router.push({ name: code })
}
</script>
<template>
  <nav class="cocktail-menu">
    <ul>
      <li
        v-for="item in items"
        :key="item.code"
        :class="{ active: route.name === item.code }"
        @click="goTo(item.code)"
      >
        {{ item.name }}
      </li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
.cocktail-menu {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
    padding: 10px 24px;
    color: #222;
    border-radius: 4px;
    margin-bottom: 4px;
    transition: background 0.2s;
    &.active {
      background: #e0e0e0;
      font-weight: bold;
    }
    &:hover {
      background: #f0f0f0;
    }
  }
}
</style>
