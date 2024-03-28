<script setup lang="ts">
  import LogoIcon from '@/assets/icons/LogoIcon.vue'

  const list = [
    { title: 'Вакансии', href: '' },
    { title: 'Блог', href: '' },
    { title: 'Акции', href: '' },
    { title: 'Предложить  идею', href: '', secondary: true },
  ]

</script>

<template>
  <section class="feedback top-divider">
    <div class="feedback__leftSection">
      <LogoIcon />
      <div class="feedback__support">
        <span class="font-bold _l2">8 800 841-95-95</span>
        <span class="font-book _l1">Служба поддержки</span>
      </div>
      <div class="feedback__support">
        <span class="font-bold _l2">support@sport.ru</span>
        <span class="font-book _l1">Служба поддержки</span>
      </div>
    </div>
    <div class="feedback__rightSection">
      <RouterLink
        v-for="link in list"
        :to="link.href"
        :class="[
          'feedback__link',
          link.secondary ? '_secondary' : ''
        ]"
      >
        {{ link.title }}
      </RouterLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .feedback {
    display: flex;
    justify-content: space-between;
    padding-bottom: $paddingXlg;

    &__leftSection {
      display: flex;
      gap: 48px;

      & svg {
        margin-right: 8px;
        width: 206px;
        height: 40px;
      }
    }

    &__rightSection {
      display: flex;
      gap: 32px;
    }

    &__support {
      display: grid;
      gap: 16px;
    }

    &__link {
      margin: auto;
    }

    &__link:not(._secondary) {
      &:not(:hover) {
        color: var(--black-primary-dark);
      }
    }

    &__link._secondary {
      background: var(--brand-ghost);
      border-radius: 8px;
      padding: 19px 24px;
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
    }
  }
</style>
