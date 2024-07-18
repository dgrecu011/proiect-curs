<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <router-link
      to="/produse"
      class="text-blue-500 hover:underline mb-4 inline-block"
    >
      &lt; Înapoi la Produse
    </router-link>
    <div
      v-if="product"
      class="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img :src="product.image" :alt="product.name" class="object-cover" />
      <div class="p-4">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">
          {{ product.name }}
        </h1>
        <p class="text-lg text-gray-600 mb-4">{{ product.description }}</p>
        <p class="text-xl font-bold text-gray-900">{{ product.price }} RON</p>
      </div>
    </div>
    <div v-else class="text-center text-gray-600">
      <p>Produsul nu a fost găsit.</p>
    </div>
  </div>
</template>

<script>
import products from "../data/products";

export default {
  name: "ProductDetail",
  data() {
    return {
      product: products.find((p) => p.id === parseInt(this.$route.params.id)),
    };
  },
};
</script>

<style scoped></style>
