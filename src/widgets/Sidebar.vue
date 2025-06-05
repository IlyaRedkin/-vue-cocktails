<template>
  <div class="sidebar-container">
    <!-- Бургер-меню для мобильных устройств -->
    <button
      class="burger-menu"
      @click="isOpen = !isOpen"
      :class="{ 'is-open': isOpen }"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Сайдбар -->
    <aside class="sidebar" :class="{ 'is-open': isOpen }">
      <slot />
    </aside>

    <!-- Затемнение фона при открытом меню на мобильных -->
    <div v-if="isOpen" class="sidebar-overlay" @click="isOpen = false"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped lang="scss">
@use '../shared/config/variables' as variables;

.sidebar-container {
  position: relative;
}

.sidebar {
  width: var(--sidebar-width);
  min-width: var(--sidebar-min-width);
  height: 100vh;
  background: var(--color-background);
  border-right: 1px solid var(--color-border);
  padding: 24px 0;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}

.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;
}

.burger-menu span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  transition: all 0.3s ease;
}

.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

@media (max-width: variables.$breakpoint-mobile) {
  .burger-menu {
    display: flex;
    position: fixed;
    top: 20px;
    left: 20px;
  }

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 999;
    width: 280px;
    min-width: 280px;
    border-right: none;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  }

  .sidebar.is-open {
    transform: translateX(0);
  }

  .sidebar-overlay {
    display: block;
  }

  .burger-menu.is-open span:nth-child(1) {
    transform: translateY(11px) rotate(45deg);
  }

  .burger-menu.is-open span:nth-child(2) {
    opacity: 0;
  }

  .burger-menu.is-open span:nth-child(3) {
    transform: translateY(-11px) rotate(-45deg);
  }
}
</style>
