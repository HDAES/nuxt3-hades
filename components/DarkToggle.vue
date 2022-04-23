<script setup lang="ts">
const color = useColorMode();
function toggleDark() {
  console.log(color.value == "light");

  color.value = color.value == "dark" ? "light" : "dark";
  //color.value = "light";
  //color.preference = color.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <button @click="toggleDark">click</button>
</template>
