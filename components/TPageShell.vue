<script setup>
defineProps({
  // Width of the sidebar column on wide viewports.
  sidebarWidth: {
    type: String,
    default: '18rem',
  },
});
</script>

<template>
  <div class="t-page-shell" :style="{ '--t-shell-sidebar': sidebarWidth }">
    <aside v-if="$slots.sidebar" class="t-page-shell__sidebar">
      <slot name="sidebar" />
    </aside>
    <div class="t-page-shell__body">
      <header v-if="$slots.header" class="t-page-shell__header">
        <slot name="header" />
      </header>
      <main class="t-page-shell__main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_vars.scss' as *;

.t-page-shell {
  display: flex;
  align-items: stretch;
  width: 100%;
  min-height: 100%;
}

.t-page-shell__sidebar {
  flex: 0 0 var(--t-shell-sidebar);
  max-width: 100%;
  border-right: 1px solid $border-color;
  background: $bg-white;
}

.t-page-shell__body {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.t-page-shell__header {
  border-bottom: 1px solid $border-color;
  background: $bg-white;
}

.t-page-shell__main {
  flex: 1 1 auto;
  min-width: 0;
}

@media (max-width: $breakpoint-md) {
  .t-page-shell {
    flex-direction: column;
  }
  .t-page-shell__sidebar {
    flex-basis: auto;
    width: 100%;
    border-right: 0;
    border-bottom: 1px solid $border-color;
  }
}
</style>
