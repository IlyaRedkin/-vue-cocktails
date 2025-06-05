<template>
  <div class="app-layout">
    <Sidebar>
      <slot name="sidebar" />
    </Sidebar>
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
@use '../shared/config/variables' as variables;

.app-layout {
  display: flex;
  justify-content: center;
  max-width: var(--layout-max-width);
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}
.sidebar {
  width: var(--sidebar-width);
  min-width: var(--sidebar-min-width);
  background: var(--color-background);
  border-right: 1px solid var(--color-border);
  padding: 24px 0 24px 0;
  box-sizing: border-box;
}
.main-content {
  flex: 1;
  padding: 32px 24px;
  overflow-y: auto;
  background: var(--color-background);
  width: var(--content-width);
  min-height: var(--content-min-height);
}
@media (max-width: variables.$breakpoint-mobile) {
  .app-layout {
    flex-direction: column;
  }
  .sidebar {
    width: 100vw;
    min-width: 100vw;
    border-right: none;
    border-bottom: 1px solid var(--color-border);
    padding: 12px 0;
  }
  .main-content {
    padding: 16px 8px;
    width: 100%;
  }
}
</style>
<script setup>
import Sidebar from '../widgets/Sidebar.vue'
</script>
