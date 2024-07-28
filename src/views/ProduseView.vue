<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <h1 class="text-3xl font-bold mb-6 text-blue-700 text-center">
      Produse iPhone
    </h1>
    <div class="my-12 mx-auto flex flex-wrap justify-center gap-12">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs text-center transform transition-transform duration-300 hover:scale-110"
      >
        <router-link :to="`/produse/${product.id}`">
          <img
            :src="
              product.image ||
              'https://via.placeholder.com/400x300?text=Image+Not+Available'
            "
            :alt="product.model"
            class="w-full h-auto object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              {{ product.model }}
            </h2>
            <p class="text-gray-600 mb-4">
              {{ product.description || "No description available" }}
            </p>
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
import axios from "axios";

export default {
  name: "ProduseView",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/iphones");
        this.products = response.data;
      } catch (error) {
        console.error("There was an error fetching the products:", error);
      }
    },
  },
};
</script>

<style scoped></style>
