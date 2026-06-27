<script setup>
import { computed } from 'vue';

const props = defineProps({
  // Auto-responsive: each column is at least `minItemWidth`, filling the row.
  minItemWidth: {
    type: String,
    default: '16rem',
  },
  // Fixed column count. When set, overrides minItemWidth.
  cols: {
    type: Number,
    default: null,
  },
  gap: {
    type: [Number, String],
    default: 4, // spacing step or any CSS length
  },
});

const STEP_TO_REM = { 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem', 5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem' };

const resolvedGap = computed(() => {
  if (typeof props.gap === 'number') return STEP_TO_REM[props.gap] ?? `${props.gap * 0.25}rem`;
  return STEP_TO_REM[props.gap] ?? props.gap;
});

const templateColumns = computed(() =>
  props.cols
    ? `repeat(${props.cols}, minmax(0, 1fr))`
    : `repeat(auto-fill, minmax(min(${props.minItemWidth}, 100%), 1fr))`
);
</script>

<template>
  <div class="t-grid" :style="{ gap: resolvedGap, gridTemplateColumns: templateColumns }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.t-grid {
  display: grid;
  width: 100%;
}
</style>
