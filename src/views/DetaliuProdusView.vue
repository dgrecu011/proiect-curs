<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <router-link
      to="/produse"
      class="text-blue-600 hover:underline mb-6 inline-block"
    >
      &lt; Înapoi la Produse
    </router-link>
    <div
      v-if="product"
      class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
    >
      <!-- Imaginea produsului -->
      <div class="w-full md:w-1/2 flex justify-center items-center">
        <img
          :src="
            product.image ||
            'https://via.placeholder.com/500x400?text=Image+Not+Available'
          "
          :alt="product.model"
          class="w-full h-auto max-h-96 object-cover rounded-lg shadow-md"
        />
      </div>
      <!-- Detalii produsului -->
      <div class="w-full md:w-1/2 p-8 flex flex-col justify-between">
        <div>
          <h1 class="text-4xl font-bold text-gray-800 mb-4">
            {{ product.model }}
          </h1>
          <p class="text-xl text-gray-600 mb-6">
            {{ product.description || "No description available" }}
          </p>
          <p class="text-3xl font-semibold text-gray-900 mb-6">
            {{ product.price }} RON
          </p>
        </div>
        <button
          @click="addToCart"
          class="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-xl"
        >
          Adaugă în Coș
        </button>
      </div>
    </div>
    <div v-else class="text-center text-gray-600 mt-8">
      <p>Produsul nu a fost găsit.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetaliuProdusView",
  data() {
    return {
      product: null,
    };
  },
  async created() {
    await this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        const productId = parseInt(this.$route.params.id, 10);
        if (isNaN(productId)) {
          console.error("Invalid product ID");
          return;
        }

        const response = await axios.get("http://localhost:3000/iphones");
        console.log("API Response:", response.data); // Verifică răspunsul API

        const products = response.data;
        this.product = products.find((p) => p.id === productId);

        if (!this.product) {
          console.error("Product not found in response data");
        }
      } catch (error) {
        console.error("There was an error fetching the product:", error);
      }
    },
    addToCart() {
      if (!this.product) return;

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const productInCart = cart.find((item) => item.id === this.product.id);

      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        cart.push({ ...this.product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Produsul a fost adăugat în coș!");
    },
  },
};
</script>

<style scoped></style>
