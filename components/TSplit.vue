<script setup>
import { computed } from 'vue';

const props = defineProps({
  // Width of the aside column on wide viewports.
  asideWidth: {
    type: String,
    default: '20rem',
  },
  // Place the aside before the main content.
  asideFirst: {
    type: Boolean,
    default: false,
  },
  gap: {
    type: [Number, String],
    default: 8, // spacing step or CSS length
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
    class="t-split"
    :class="{ 't-split--aside-first': asideFirst }"
    :style="{ gap: resolvedGap, '--t-split-aside': asideWidth }"
  >
    <main class="t-split__main">
      <slot />
    </main>
    <aside v-if="$slots.aside" class="t-split__aside">
      <slot name="aside" />
    </aside>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_vars.scss' as *;

.t-split {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.t-split__main {
  flex: 1 1 auto;
  min-width: 0;
}

.t-split__aside {
  flex: 0 0 var(--t-split-aside);
  max-width: 100%;
}

.t-split--aside-first {
  flex-direction: row-reverse;
}

@media (max-width: $breakpoint-md) {
  .t-split {
    flex-direction: column;
  }
  .t-split--aside-first {
    flex-direction: column;
  }
  .t-split__aside {
    flex-basis: auto;
    width: 100%;
  }
}
</style>
