<script setup lang="ts">
  import MessageIcon from '@/assets/icons/MessageIcon.vue'
  import ProcentIcon from '@/assets/icons/ProcentIcon.vue'

  const listLeft = [
    { title: 'Мои заказы', href: '' },
    { title: 'Сотрудники', href: '' },
    { title: 'Шаблоны заказов', href: '' },
    { title: 'Обращения', href: '',  },
  ]

  const listRight = [
    { title: 'Ваш менеджер', href: '', icon: MessageIcon, secondary: true },
    { title: 'Акции', href: '', icon: ProcentIcon },
    { title: 'Блог', href: '' }
  ]

</script>

<template>
  <nav class="menunav">
    <div class="menunav__leftSection">
      <RouterLink
        v-for="link in listLeft"
        :to="link.href"
        :class="[
          'menunav__link',
          link.secondary ? '_secondary' : ''
        ]"
      >
        {{ link.title }}
      </RouterLink>
    </div>
    <div class="menunav__rightSection">
      <RouterLink
        v-for="link in listRight"
        :to="link.href"
        :class="[
          'menunav__link',
          link.secondary ? '_secondary' : ''
        ]"
      >
        <component :is="link.icon" v-if="link.icon" />
        {{ link.title }}
      </RouterLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .menunav {
    display: flex;
    justify-content: space-between;
    padding: 11px 0;
    border-top: 1px solid var(--special-divider);
    border-bottom: 1px solid var(--special-divider);

    &__leftSection,
    &__rightSection {
      @include fontMixin(14px, $font-pro, 16px);
  
      display: flex;
      gap: 24px;

      & svg {
        margin-right: 16px;
        width: 16px;
        height: 16px;
      }
    }

    &__leftSection &__link {
      &:not(:hover) {
        color: var(--black-primary-dark);
      }
    }

    &__rightSection &__link {
      &:not(:hover) {
        color: var(--brand-primary);
      }
    }


    &__link {
      display: flex;
      align-items: center;
    }

    &__link._secondary {
      background: var(--brand-ghost);
      border-radius: 8px;
      padding: 8px 12px;
      transition: background $transitionDuration ease;

      &:not(:hover) {
        color: var(--brand-primary);
      }

      @media (hover: hover) {
        &:hover {
          background: var(--brand-hover);
          color: var(--white)
        }
      };

      & svg {
        margin-right: 8px;
      }
    }
  }
</style>

