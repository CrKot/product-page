<script setup lang="ts">
  import Header from '@/components/Header'
  import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
  import ProductCard from '@/components/ProductCard'
  import Feedback from '@/components/Feedback.vue'
  import CategoryList from '@/components/CategoryList.vue'
  import Footer from '@/components/Footer'
</script>

<template>
  <Header />
  <main>
    <Breadcrumbs />
    <ProductCard />
    <Feedback />
    <CategoryList />
  </main>
  <Footer />
</template>

<style lang="scss">
</style>
