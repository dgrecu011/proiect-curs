<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-4xl font-bold text-blue-800 mb-8 text-center">
      Coș de Cumpărături
    </h1>

    <div
      v-if="cart.length"
      class="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div class="divide-y divide-gray-300">
        <div
          v-for="item in cart"
          :key="item.id"
          class="flex items-center p-4 space-x-6"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="w-24 h-24 object-cover rounded-md border border-gray-300"
          />

          <div class="flex-1 flex flex-col">
            <h2 class="text-2xl font-semibold text-gray-800">
              {{ item.name }}
            </h2>
            <p class="text-lg text-gray-600 mb-2">
              {{ formatPrice(item.price) }} RON
            </p>
            <div class="flex items-center space-x-2 mt-auto">
              <button
                @click="decrementQuantity(item.id)"
                class="bg-gray-300 text-gray-800 px-3 py-1 rounded-lg shadow hover:bg-gray-400 transition duration-300"
                :disabled="item.quantity <= 1"
              >
                -
              </button>
              <span class="text-lg font-bold">{{
                displayQuantity(item.quantity)
              }}</span>
              <button
                @click="incrementQuantity(item.id)"
                class="bg-gray-300 text-gray-800 px-3 py-1 rounded-lg shadow hover:bg-gray-400 transition duration-300"
              >
                +
              </button>
              <button
                @click="removeFromCart(item.id)"
                class="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
              >
                Elimină
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="p-6 bg-gray-50 border-t border-gray-300">
        <div
          class="flex justify-between text-xl font-semibold text-gray-900 mb-4"
        >
          <span>Total:</span>
          <span>{{ formatPrice(totalPrice) }} RON</span>
        </div>
        <button
          @click="finalizeOrder"
          class="w-full bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300"
        >
          Finalizează Comanda
        </button>
      </div>
    </div>

    <div v-else class="text-center text-gray-600 mt-8">
      <p>Coșul este gol. Adaugă produse pentru a finaliza comanda.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartView",
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart
        .reduce((total, item) => {
          const price = parseFloat(item.price) || 0;
          const quantity = parseInt(item.quantity) || 0;
          return total + price * quantity;
        }, 0)
        .toFixed(2);
    },
  },
  methods: {
    formatPrice(value) {
      return parseFloat(value).toFixed(2);
    },
    displayQuantity(quantity) {
      return quantity === 1 ? "x1" : `x${quantity}`;
    },
    incrementQuantity(id) {
      const item = this.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = (item.quantity || 0) + 1;
        this.updateCart();
      }
    },
    decrementQuantity(id) {
      const item = this.cart.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity = (item.quantity || 0) - 1;
        this.updateCart();
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
      this.updateCart();
    },
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    finalizeOrder() {
      alert("Comanda a fost finalizată!");
      this.cart = [];
      this.updateCart();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
