<script setup>
defineProps({
  orientation: {
    type: String,
    default: 'horizontal', // 'horizontal' | 'vertical'
    validator: (v) => ['horizontal', 'vertical'].includes(v),
  },
});
</script>

<template>
  <div
    class="t-divider"
    :class="`t-divider--${orientation}`"
    role="separator"
    :aria-orientation="orientation"
  />
</template>

<style lang="scss" scoped>
@use '../assets/scss/_vars.scss' as *;

.t-divider {
  border: 0;
  background: $border-color;
  flex-shrink: 0;

  &--horizontal {
    width: 100%;
    height: 1px;
  }

  &--vertical {
    align-self: stretch;
    width: 1px;
    min-height: 1rem;
  }
}
</style>
