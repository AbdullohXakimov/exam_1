<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div>
    <Header class="fixed w-full z-20"/>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped></style>
