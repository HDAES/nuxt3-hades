<template>
  <div class="default-layout">
    <Header />
    <AppMain />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import "./default.scss";
import Header from "./components/Header";
import AppMain from "./components/AppMain/index.vue";
</script>
