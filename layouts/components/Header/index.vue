<template>
  <div class="default-layout-header">
    <div
      class="flex justify-between h-full container !max-w-screen-2xl mx-auto px-2 md:px-6"
    >
      <div class="flex items-center flex-1 lg:flex-none">
        <div class="inline-flex items-center text-3xl lg:text-3xl font-damion">
          <img
            class="inline-flex mr-1 lg:mr-3 h-8 lg:h-10"
            :src="logo"
            alt="logo"
          />
          xl686.com
        </div>

        <div class="nav <md:hidden flex flex-row px-6 h-full">
          <div class="nav-item flex items-center h-full px-4 font-bold">
            <NuxtLink to="/">首页</NuxtLink>
          </div>
          <div class="nav-item flex items-center h-full h-full px-4 font-bold">
            <NuxtLink to="/">归档</NuxtLink>
          </div>
          <div class="nav-item flex items-center h-full h-full px-4 font-bold">
            <NuxtLink to="/">关于</NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex items-center lg:space-x-3 lg:pl-3 xl:pl-6">
        <div class="iconfont icon-git text-2xl pr-3 cursor-pointer" />

        <div
          :class="isDark ? 'icon-taiyang-copy' : 'icon-yejianmoshi'"
          class="iconfont text-2xl cursor-pointer"
          @click="toggleDark()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import logo from "@/assets/image/logo.png";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();

const toggleDark = useToggle(isDark);
</script>
