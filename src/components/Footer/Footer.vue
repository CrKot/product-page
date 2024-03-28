<script setup lang="ts">
    import LogoIcon from '@/assets/icons/LogoIcon.vue'
  import FooterLinks from './components/FooterLinks.vue'
</script>

<template>
  <footer class="footer top-divider">
    <FooterLinks />
    <p class="font-book _l1">
      Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией Российской Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации, информационных технологиях и о защите информации"
    </p>
    <div class="footer__logo">
      <LogoIcon secondary />
      <span class="font-bold _l1">Разработка платформы</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    display: flex;
    flex-direction: column;
    gap: 40px;

    & > p {
    text-align: center;
    color: var(--black-secondary);
    }

    &__logo {
      display: flex;
      place-content: center;

      & > svg {
        width: 124px;
        height: 24px;
      }

      & > span {
        align-self: center;
        margin-left: 24px;
        color: var(--general-secondary);
        pointer-events: none;
      }
    }
  }
</style>
