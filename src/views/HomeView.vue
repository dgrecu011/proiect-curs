<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6"
  >
    <h1 class="text-4xl font-extrabold text-blue-600 mb-4">Bine ai venit!</h1>
    <p class="text-lg text-gray-700 mb-6 text-center">
      Acesta este Home - pagina principală a aplicației noastre. Aici vei găsi
      cele mai noi și interesante produse.
    </p>
    <router-link
      to="/produse"
      class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
    >
      Vezi Produse
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped></style>
