<script setup lang="ts">
  const path = [
    'Каталог',
    'Обувь',
    'Кроссовки',
    'Беговые'
  ]
</script>
<template>
  <section class="breadcrumbs">
    <div v-for="(item, index) in path" class="breadcrumbs__item font-book _l1">
      <div v-if="index > 0">
        /
      </div>
      {{ item }}
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .breadcrumbs {
    display: flex;
    gap: 4px;
    padding: 32px 0 24px;

    &__item {
      display: flex;
      gap: 4px;
      color: var(--black-secondary);
    }
  }
</style>
