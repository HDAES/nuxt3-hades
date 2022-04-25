<template>
  <div class="default-layout">
    <Header />
    <AppMain />
    <Live2d />
    <Voice />
    <div class="container mx-auto"><slot /></div>
  </div>
</template>

<script lang="ts" setup>
import "./default.scss";
import Header from "./components/Header/index.vue";
import AppMain from "./components/AppMain/index.vue";
import Live2d from "./components/Live2d";
import Voice from "./components/Voice";
</script>
