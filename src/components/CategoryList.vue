<script setup lang="ts">
  const categoryList = [
    {
      title: 'Женщинам',
      href: '',
      list: [
        { title: 'Одежда', href: '' },
        { title: 'Обувь', href: '' },
        { title: 'Аксессуары', href: '' },
        { title: 'Белье', href: '' },
        { title: 'Bra fitting', href: '' },
      ]
    },
    {
      title: 'Мужчинам',
      href: '',
      list: [
        { title: 'Одежда', href: '' },
        { title: 'Обувь', href: '' },
        { title: 'Аксессуары', href: '' },
        { title: 'Белье', href: '' }
      ]
    },
    {
      title: 'Детям',
      href: '',
      list: [
        { title: 'Одежда', href: '' },
        { title: 'Обувь', href: '' },
        { title: 'Аксессуары', href: '' },
        { title: 'Белье', href: '' },
        { title: 'Игрушки', href: '' },
        { title: 'Малыши', href: '' }
      ]
    },
    {
      title: 'Виды спорта',
      href: '',
      list: [
        {  title: 'Велоспорт', href: '' },
        {  title: 'Туризм', href: '' },
        {  title: 'Тренажеры и фитнес', href: '' },
        {  title: 'Командные виды спорта', href: '' },
        {  title: 'Самокаты', href: '' }
      ]
    }
  ]
</script>

<template>
  <section class="category-list top-divider">
    <div v-for="category in categoryList">
      <RouterLink
        :to="category.href"
        class="category-list__headLink font-medium _l2"
      >
        {{ category.title }}
      </RouterLink>
      <div class="category-list__child ">
        <RouterLink
          v-for="childLink in category.list"
          :to="childLink.href"
          class="category-list__childLink font-book _l2"
        >
          {{ childLink.title }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .category-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding-bottom: $paddingXlg;

    &__headLink {
      display: block;
      margin-bottom: 24px;

      &:not(:hover) {
        color: var(--black-primary);
      }
    }

    &__child {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }

    &__childLink {
      &:not(:hover) {
        color: var(--black-primary);
      }
    }
  }
</style>
