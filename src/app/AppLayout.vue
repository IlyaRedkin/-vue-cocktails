<template>
  <div class="app-layout">
    <aside class="sidebar">
      <slot name="sidebar" />
    </aside>
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
@import './_variables.scss';

.app-layout {
  display: flex;
  justify-content: center;
  min-width: $layout-min-width;
  max-width: $layout-max-width;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}
.sidebar {
  width: $sidebar-width;
  min-width: $sidebar-min-width;
  background: $color-bg;
  border-right: 1px solid $color-border;
  padding: 24px 0 24px 0;
  box-sizing: border-box;
}
.main-content {
  flex: 1;
  padding: 32px 24px;
  overflow-y: auto;
  background: $color-main-bg;
}
@media (max-width: $breakpoint-mobile) {
  .app-layout {
    flex-direction: column;
    min-width: 100vw;
    max-width: 100vw;
  }
  .sidebar {
    width: 100vw;
    min-width: 100vw;
    border-right: none;
    border-bottom: 1px solid $color-border;
    padding: 12px 0;
  }
  .main-content {
    padding: 16px 8px;
  }
}
</style> 