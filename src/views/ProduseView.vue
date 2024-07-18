<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <h1 class="text-3xl font-bold mb-6 text-blue-700 text-center">
      Produse iPhone
    </h1>
    <div class="my-12 mx-auto flex flex-wrap justify-center gap-12">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs text-center"
      >
        <router-link :to="`/produse/${product.id}`">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-auto object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              {{ product.name }}
            </h2>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
            <p class="text-lg font-bold text-gray-900">
              {{ product.price }} RON
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import products from "../data/products";

export default {
  name: "ProduseView",
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped></style>
