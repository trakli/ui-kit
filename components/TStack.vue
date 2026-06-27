<script setup>
import { computed } from 'vue';

const props = defineProps({
  direction: {
    type: String,
    default: 'vertical', // 'vertical' | 'horizontal'
    validator: (v) => ['vertical', 'horizontal'].includes(v),
  },
  gap: {
    type: [Number, String],
    default: 4, // spacing step (1,2,3,4,5,6,8,10,12) or any CSS length
  },
  align: {
    type: String,
    default: 'stretch', // flex align-items
  },
  justify: {
    type: String,
    default: 'flex-start', // flex justify-content
  },
  wrap: {
    type: Boolean,
    default: false,
  },
});

const STEP_TO_REM = { 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem', 5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem' };

const resolvedGap = computed(() => {
  if (typeof props.gap === 'number') return STEP_TO_REM[props.gap] ?? `${props.gap * 0.25}rem`;
  return STEP_TO_REM[props.gap] ?? props.gap;
});
</script>

<template>
  <div
    class="t-stack"
    :class="`t-stack--${direction}`"
    :style="{
      gap: resolvedGap,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap ? 'wrap' : 'nowrap',
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.t-stack {
  display: flex;
  min-width: 0;

  &--vertical { flex-direction: column; }
  &--horizontal { flex-direction: row; }
}
</style>
