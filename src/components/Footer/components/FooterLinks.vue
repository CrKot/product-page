<script setup lang="ts">
  import doc from '@/assets/icons/DocIcon.vue'
  import camera from '@/assets/icons/CameraIcon.vue'
  import warn from '@/assets/icons/WarnIcon.vue'
  import youtube from '@/assets/icons/YoutubeIcon.vue'

  const linkList = [
    { title: 'PDF  презентация', href: '', icon: doc },
    { title: 'Видео инструкция ', href: '', icon: camera },
    { title: 'FAQ', href: '', icon: warn },
    { title: 'Мы на YouTube', href: '', icon: youtube, secondary: true},
    { title: 'Политика конфиденциальности ', href: '', icon: '' },
    { title: 'Лицензионное соглашение', href: '', icon: '' }
  ]
</script>

<template>
  <section class="footer-links">
    <RouterLink
      v-for="link in linkList"
      :to="link.href"
      :class="[
        'font-medium _l1',
        'footer-links__link',
        link.secondary ? '_secondary' : ''
      ]"
    >
      <component :is="link.icon" v-if="link.icon" />
      {{ link.title }}
    </RouterLink>
  </section>
</template>

<style lang="scss" scoped>
  .footer-links {
    display: flex;
    gap: 28px;
    margin: auto;

    &__link {
      display: flex;
      gap: 8px;

      & > svg {
        width: 16px;
        height: 16px;
      }

      &._secondary:not(:hover) {
        color: var(--brand-primary);
      }
      // color: var(--black-secondary);
    }
  }
</style>
