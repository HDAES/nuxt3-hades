<template>
  <div class="charge-container">
    <div class="charge-number">{{ level }}</div>
    <div class="charge-state">{{ isCharge ? "充电中" : "未充电" }}</div>
    <div class="charge-contrast">
      <div class="charge-circle"></div>
      <ul class="charge-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
let level = ref("0");
let isCharge = ref(false);

onMounted(() => {
  navigator.getBattery().then(function (battery: any) {
    console.log(battery.charging, "是否在充电");
    console.log(battery.level * 100 + "%", "当前电量");
    console.log("还有多久充满 " + battery.chargingTime / 60 / 60);
    console.log("还可以用多久: " + battery.dischargingTime / 60 / 60, "小时");

    level.value = battery.level * 100 + "%";
    isCharge.value = battery.charging;

    battery.addEventListener("chargingchange", function () {
      console.log(battery.charging, "是否在充电");
    });
    battery.addEventListener("levelchange", function () {
      console.log(battery.level * 100 + "%", "当前电量");
    });
    battery.addEventListener("chargingtimechange", function () {
      console.log("还有多久充满 " + battery.chargingTime / 60 / 60);
    });
    battery.addEventListener("dischargingtimechange", function () {
      console.log("还可以用多久: " + battery.dischargingTime / 60 / 60, "小时");
    });
  });
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
