<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import Button from '@/components/ui/Button.vue'

  import LogoIcon from '@/assets/icons/LogoIcon.vue'
  import BurgerIcon from '@/assets/icons/BurgerIcon.vue'
  import SearchIcon from '@/assets/icons/SearchIcon.vue'
  import CloseIcon from '@/assets/icons/CloseIcon.vue'
  import BellIcon from '@/assets/icons/BellIcon.vue'
  import HeartIcon from '@/assets/icons/HeartIcon.vue'
  import CartIcon from '@/assets/icons/CartIcon.vue'
  import ArrowIcon from '@/assets/icons/ArrowIcon.vue'

  import replaceNbsps from '@/utils/replacenbsp.js'
  import HeaderNav from './components/HeaderNav.vue'

  const inputRef = ref<HTMLInputElement | null>(null)
  const searchValue = ref('')


  const showMenuHandler = () => {
    console.log('showMenuHandler')
  }

  const onSearch = () => {
    console.log('onSearch')
  }

  const searchValueHandler = (e: Event) => {
    const target = (e.target as HTMLInputElement)
    searchValue.value = target.value
    if (!inputRef.value) return

    sessionStorage.setItem(inputRef.value?.name, target.value)
  }

  const resetInputHandler = () => {
    if (!inputRef.value) return

    inputRef.value.focus()
    sessionStorage.removeItem(inputRef.value.name)
  }

  onMounted(() => {
    if (!inputRef.value) return

    const inputValue = sessionStorage.getItem(inputRef.value.name) || ''
    searchValue.value = inputValue
  })
</script>

<template>
  <header class="header">
    <section class="header__top">
      <LogoIcon />
      <Button
        filled
        class="header__menuButton"
        @on-click="showMenuHandler"
      >
        <template v-slot:icon>
          <BurgerIcon />
        </template>
        Меню
      </Button>
      <form
        class="search-form"
        @reset="resetInputHandler"
        @submit.prevent="onSearch"
      >
        <input
          ref="inputRef"
          :value="searchValue"
          name="search-input"
          class=""
          placeholder="Название запроса"
          @input="searchValueHandler"
        >
        <Button
          v-if="searchValue"
          class="search-form__reset"
          type="reset"
        >
          <template v-slot:icon>
            <CloseIcon />
          </template>
        </Button>
        <Button
          v-if="searchValue"
          class="search-form__submit"
          type="submit"
        >
          <template v-slot:icon>
            <SearchIcon />
          </template>
        </Button>
      </form>
      <Button
        class="header__bell"
        icon-size="32"
      >
        <template v-slot:icon>
          <BellIcon />
        </template>
      </Button>
      <div class="header__divider" />
      <Button
        class="header__like"
        icon-size="32"
      >
        <template v-slot:icon>
          <HeartIcon />
        </template>
      </Button>
      <Button
        class="header__cart"
      >
        <template v-slot:icon>
          <CartIcon />
          {{ replaceNbsps((144235).toLocaleString()) }} {{ '\u20bd' }}
        </template>
      </Button>
      <div class="accordion">
        <img class="accordion__image" src="/Avatar.png" />
        <span class="accordion__name">
          Ермаков Е.
        </span>
        <ArrowIcon class="accordion__icon" />
      </div>
    </section>
    <HeaderNav />
  </header>
</template>

<style lang="scss" scoped>
  .header {
    display: block;

    &__top {
      display: flex;
      gap: 24px;
      align-items: center;
      padding: 16px 0;

      & > svg {
        width: 144px;
        height: 28px;
      }
    }

    &__menuButton {
      & > svg {
        padding: 6px 3px;
      }
    }

    &__divider {
      width: 0;
      max-width: 0;
      min-height: 100%;
      border-left: 1px solid var(--special-divider);
      height: 48px;
    }

    &__bell,
    &__like {
      @media (hover: hover) {
        &:hover {
          color: var(--brand-hover);
        }
      }
    }

    &__bell {
      color: var(--brand-primary);
    }

    &__like {
      color: var(--heart-icon);
    }

    &__cart {
      @include fontMixin(14px, $font-bold, 16px);

      font-weight: 700;
      color: var(--brand-primary);
    }

    &__cart {
      background: var(--brand-ghost);
      border-radius: 8px;
      padding: 12px 24px;

      @media (hover: hover) {
        &:hover {
          color: var(--white);
          background: var(--brand-hover);
        }
      }
    }
  }

  .search-form {
    position: relative;
    flex: 1 0 auto;

    & > input {
      @include fontMixin(14px, $font-pro, 16px);

      width: 100%;
      padding: 15px 84px 15px 16px;
      border: 1px solid var(--input-border);
      border-radius: 8px;
      outline-color: var(--brand-primary);

      color: var(--black-primary);
  
      &::placeholder {
        color: var(--black-primary);
      }
    }

    &__reset,
    &__submit {
      top: 0;
      transform: translateY(50%);

      @media(hover: hover) {
        &:hover {
          color: var(--brand-hover)
        }
      }
    }

    &__reset {
      position: absolute;
      right: 36px;
    }

    &__submit {
      position: absolute;
      right: 0;
    }
  }

  .accordion {
    display: flex;
    gap: 16px;
    align-items: center;

    &__image {
      width: 32px;
      height: 32px
    }

    &__name {
      @include fontMixin(14px, $font-pro, 16px);
    }

    &__icon {
      width: 24px;
      height: 24px;
      padding: 8px 7px;
      color: var(--brand-primary);
    }
  }
</style>
