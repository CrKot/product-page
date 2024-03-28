import { ref } from 'vue'
import { defineStore } from 'pinia'

interface IProduct {
  id: number
  inPackages: boolean
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<IProduct[]>([])

  const addProduct = (product: IProduct) => {
    const currentProduct = cartItems.value.find((item) => item.id === product.id)

    if (!currentProduct) {
      cartItems.value.push({ ...product })
      return
    }

    if (!product.quantity) {
      removeProduct(product.id)
      return
    }

    currentProduct.quantity = product.quantity
  }

  const removeProduct = (id: number) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== id)
  }

  return {
    cartItems,
    addProduct,
    removeProduct
  }
})
