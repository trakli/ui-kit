<script setup>
defineProps({
  size: {
    type: String,
    default: 'lg', // 'sm' | 'md' | 'lg' | 'xl' | 'full'
    validator: (v) => ['sm', 'md', 'lg', 'xl', 'full'].includes(v),
  },
  gutter: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="t-container" :class="[`t-container--${size}`, { 't-container--gutter': gutter }]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_vars.scss' as *;

.t-container {
  width: 100%;
  margin-inline: auto;

  &--sm { max-width: $breakpoint-sm; }
  &--md { max-width: $breakpoint-md; }
  &--lg { max-width: $breakpoint-lg; }
  &--xl { max-width: $breakpoint-xl; }
  &--full { max-width: none; }

  &--gutter {
    padding-inline: $spacing-6;

    @media (max-width: $breakpoint-md) {
      padding-inline: $spacing-4;
    }
  }
}
</style>
