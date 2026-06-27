<script setup>
defineProps({
  // Inner padding: spacing step or CSS length.
  padding: {
    type: [Number, String],
    default: 6,
  },
  // Elevation: 'flat' draws a border only, 'raised' adds a shadow.
  variant: {
    type: String,
    default: 'raised', // 'raised' | 'flat'
    validator: (v) => ['raised', 'flat'].includes(v),
  },
});

const STEP_TO_REM = { 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem', 5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem' };
function resolvePad(p) {
  if (typeof p === 'number') return STEP_TO_REM[p] ?? `${p * 0.25}rem`;
  return STEP_TO_REM[p] ?? p;
}
</script>

<template>
  <section class="t-panel" :class="`t-panel--${variant}`" :style="{ padding: resolvePad(padding) }">
    <header v-if="$slots.header" class="t-panel__header">
      <slot name="header" />
    </header>
    <slot />
    <footer v-if="$slots.footer" class="t-panel__footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_vars.scss' as *;

.t-panel {
  width: 100%;
  box-sizing: border-box;
  background: $bg-white;
  border: 1px solid $border-color;
  border-radius: $radius-xl;
  display: flex;
  flex-direction: column;

  &--raised {
    box-shadow: $shadow-md;
  }

  @media (max-width: $breakpoint-sm) {
    border-radius: $radius-lg;
  }
}

.t-panel__header {
  margin-bottom: $spacing-4;
  font-size: $font-size-lg;
  font-weight: $font-semibold;
  color: $text-primary;
}

.t-panel__footer {
  margin-top: $spacing-4;
  padding-top: $spacing-4;
  border-top: 1px solid $border-color;
}
</style>
