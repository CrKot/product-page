<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import { useCartStore } from '@/stores/cart'
  import Switcher from '@/components/ui/Switcher.vue'
  import Button from '@/components/ui/Button.vue'

  import HeartIcon from '@/assets/icons/HeartIcon.vue'
  import CartIcon from '@/assets/icons/CartIcon.vue'

  import { localizeProductParams } from '@/utils/localize.js'
  import replaceNbsps from '@/utils/replacenbsp.js'
  import setValidProductQuantity from '@/utils/setValidProductQuantity.ts'

  const mockProduct = {
    id: 1,
    params: {
      code: 'ELC00696',
      raek: 'ELC00696',
      brand: 'Electric used',
      fabric: 'ELC0200000696',
      article: 'ELC0200000696',
      etm: 'ELC00696',
      series: 'ELC00696'
    }
  }

  const VALUE_IN_PACK = 12

  const cartStore = useCartStore()

  const quantity = ref(0)
  const inPackages = ref(false)

  watch(
    () => cartStore.cartItems,
    () => {
      const product = cartStore.cartItems.find(item => item.id === mockProduct.id)
      if (!product) return

      quantity.value = product.quantity
      inPackages.value = product.inPackages
    },
    { deep: true }
  )

  const addProductHandler = () => {
    cartStore.addProduct({
      id: mockProduct.id,
      inPackages: inPackages.value,
      quantity: inPackages.value ? VALUE_IN_PACK : 1
    })
  }

  const changeInputHandler = (e: Event) => {
    const value = +(e.target as HTMLInputElement).value

    {
      if (!inPackages.value) {
        quantity.value = value
        return
      } 

      if (value > quantity.value) {
        quantity.value = setValidProductQuantity(value, true, VALUE_IN_PACK)
        return
      }

      quantity.value = setValidProductQuantity(value, false, VALUE_IN_PACK)
    }
    
    if (!quantity.value) {
      cartStore.removeProduct(mockProduct.id)
    }
  }

  const changeValueHandler = (plus: boolean = false) => {
    const product = cartStore.cartItems.find(item => item.id === mockProduct.id)
    if (!product) return

    if (plus) {
      quantity.value++
      if (inPackages.value) {
        quantity.value = setValidProductQuantity(quantity.value++, true, VALUE_IN_PACK)
      }
    } else {
      quantity.value--
      if (inPackages.value) {
        quantity.value = setValidProductQuantity(quantity.value, false, VALUE_IN_PACK)
      }
    }

    if (quantity.value) return

    cartStore.removeProduct(mockProduct.id)
  }

  onMounted(() => {
    const cart = cartStore.cartItems.find(item => item.id === mockProduct.id)
    if (!cart) return

    quantity.value = cart.quantity
    inPackages.value = cart.inPackages
  })

</script>

<template>
  <section class="product-card">
    <h1>Кроссовки мужские Skechers Sunny Dale</h1>
    <div class="product-card__wrapper">
      <div class="product-card__carousel">
        карусель
      </div>
      <div class="product-card__main">
        <div class="product-card__price">
          <div>
            <div class="product-card__priceDiscont font-medium _l1">
              166 534.00 цена без скидки
            </div>
            <div class="product-card__priceInfo">
              <span
                class="font-bold _l3"
              >
                {{ replaceNbsps((122566).toLocaleString()) }} {{ '\u20bd' }}
              </span>
              <span class="font-bold _2">
                -15%
              </span>
            </div>
            <div class="product-card__priceSwitch">
              <div class="font-bold _l1">
                {{ VALUE_IN_PACK }} штук в уп.
              </div>
              <Switcher v-model="inPackages" />
              <div class="font-medium _l1">
                Заказ упаковкой
              </div>
            </div>
          </div>
          <div class="product-card__priceAction">
            <div>
              <ul>
                <li>
                  <div>Завтра</div>
                  <div>Доставка</div>
                </li>
                <li>
                  <div>7 шт.</div>
                  <div>Тарасовка</div>
                </li>
                <li>
                  <div>7 шт.</div>
                  <div>Тарасовка</div>
                </li>
              </ul>
              <div class="product-card__cartBlock">
                <Button
                  v-if="!quantity"
                  class="product-card__addButton"
                  @onClick="addProductHandler"
                >
                  <template v-slot:icon>
                    <CartIcon />
                    В корзину
                  </template>
                </Button>
                <div
                  v-else
                  class="product-card__changeBlock"
                >
                  <Button
                    class="product-card__minusButton"
                    @onClick="() => changeValueHandler()"
                  >
                    -
                  </Button>
                  <input
                    id="product-cart-counter"
                    :value="quantity"
                    type="number"
                    @input="changeInputHandler"
                  >
                  <Button
                    class="product-card__plusButton"
                    @onClick="() => changeValueHandler(true)"
                  >
                    +
                  </Button>
                </div>
                <Button
                  class="product-card__like"
                >
                  <template v-slot:icon>
                    <HeartIcon />
                  </template>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div class="product-card__params">
          <h2>Характеристики</h2>
          <ul>
            <li v-for="(value, key) in mockProduct.params">
              <div class="font-bold _l1">
                {{ value }}
              </div>
              <div class="font-book _l1">
                {{ localizeProductParams[key] }}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="product-card__description">
        <h2 class="font-medium _l3">
          Описание товара
        </h2>
        <p class="font-book _l3">
          Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на потребителя определяет возрастающий интеграл по поверхности, что известно даже школьникам. Отсюда естественно следует, что коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает экспериментальный скачок функции, таким образом сбылась мечта идиота - утверждение полностью доказано. Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .product-card {
    padding-bottom: 32px;

    h1 {
      @include fontMixin(32px, $font-pro, 32px);

      margin-bottom: 32px;
      text-transform: uppercase;
    }

    &__wrapper {
      display: grid;
      gap: 48px;
      grid-template-columns: 400px 1fr;
    }

    &__carousel {
      grid-row: 1 / 3;
    }

    &__main {
      display: grid;
      grid-template-columns: 372px 1fr;
    }

    &__price {
      padding-right: 48px;
      border-right: 1px solid var(--special-divider);
    }

    &__priceDiscont {
      color: var(--danger-primary);
      margin-bottom: 24px;
    }

    &__priceInfo {
      display: flex;
      gap: 16px;
      margin-bottom: 32px;

      & > span:first-child {
        @include fontMixin(32px, $font-bold, 32px);
      }

      & > span:last-child {
        padding: 5px 8px;
        height: fit-content;
        margin: auto 0;
        color: var(--white);
        border-radius: 4px;
        background: var(--danger-primary);
      }
    }

    &__priceSwitch {
      display: flex;
      align-items: center;
      padding-bottom: 32px;
      border-bottom: 1px solid var(--special-divider);

      & > div:first-child {
        padding: 8px;
        margin-right: 16px;
        border-radius: 8px;
        background: var(--black-ghost);
        color: var(--black-secondary);
      }

      & > div:last-child {
        @include fontMixin(14px, $font-medium, 16px);
        
        margin-left: 12px;
        color: var(--black-primary-dark);
      }
    }

    &__priceAction {
      padding-top: 32px;
    }

    &__priceAction ul {
      display: flex;
      gap: 16px;

      & > li {
        display: grid;
        grid-template-columns: 1fr;
        gap: 4px;
      }

      & > li > div:first-child {
        @include fontMixin(14px, $font-bold, 16px);

        height: 20px;
        color: var(--black-primary-dark)

      }

      & > li > div:last-child {
        @include fontMixin(12px, $font, 16px);

        color: var(--black-secondary);
      }
    }

    &__params {
      padding: 8px 0 8px 48px;

      & ul {
        display: flex;
        gap: 24px 32px;
        flex-wrap: wrap;
      }

      & li {
        page-break-inside: avoid;
        break-inside: avoid;
        width: calc(50% - 16px);

        & > div:last-child {
          color: var(--black-secondary);
          margin-top: 8px;
        }
      }

      & h2 {
        width: 100%;
        margin-bottom: 32px;
      }
    }

    &__cartBlock {
      display: flex;
      gap: 16px;
      margin-top: 32px;
    }

    &__addButton {
      flex: 1;
      background: var(--brand-primary);
      border-radius: 8px;
      padding: 12px 24px;
      color: var(--white);
      justify-content: center;

      @media (hover: hover) {
        &:hover {
          background: var(--brand-hover);
        }
      }
    }

    &__like {
      padding: 16px 25px;
      border-radius: 8px;
      background: var(--black-ghost);
      color: var(--brand-primary);
    }


    &__changeBlock {
      position: relative;

      & input {
        @include fontMixin(14px, $font-pro, 16px);

        width: 100%;
        height: 56px;
        padding: 8px 48px 8px 52px;
        border: 1px solid var(--input-border);
        border-radius: 8px;
        outline-color: var(--brand-primary);
        text-align: center;

        color: var(--black-primary);

        &::placeholder {
          color: var(--black-primary);
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        -moz-appearance: textfield;
      }
    }

    &__minusButton,
    &__plusButton {
      position: absolute;
      top: 0;
      transform: translateY(50%);
      height: 24px;
      width: 24px;
      font-size: 24px;
      font-weight: 500;
      place-content: center;
      align-items: baseline;
    }

    &__minusButton {
      left: 16px;
    }

    &__plusButton {
      right: 12px;
    }

    &__description {
      & > h2 {
        margin-bottom: 24px;
      }
    }
  }
</style>
