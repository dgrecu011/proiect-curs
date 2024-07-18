<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <nav class="bg-blue-600 p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-white text-2xl font-bold"
          >Iphone Store</router-link
        >
        <div class="space-x-4">
          <router-link to="/" class="text-white hover:text-blue-200"
            >Home</router-link
          >
          <router-link to="/produse" class="text-white hover:text-blue-200"
            >Produse</router-link
          >
        </div>
      </div>
    </nav>

    <main class="flex-1 p-4">
      <router-view />
    </main>

    <footer class="bg-blue-600 p-4 text-center text-white">
      <p>&copy; 2024 Iphone Store. Toate drepturile rezervate.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped></style>
