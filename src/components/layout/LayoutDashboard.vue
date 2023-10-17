<template>
  <section class="myContainerFuild mb-16 mt-20">
    <div class="py-8 text-center">
      <!-- Title -->
      <h1 class="sectionHeading">{{ pageTitle }}</h1>
    </div>

    <div class="grid grid-cols-3 gap-3 md:gap-6 lg:gap-10">
      <!-- LEFT -->
      <ProfileNavBar
        :profileInfo="userInfo"
        :profileNavList="navList"
        :activeNav="activeNav"
      ></ProfileNavBar>

      <!-- RIGHT -->
      <div
        class="col-span-3 md:col-span-2 border py-7 px-8 lg:px-8 xl:px-10 rounded-lg bg-white dark:bg-gray-900 dark:border-slate-700"
      >
        <slot></slot>
      </div>
    </div>
  </section>
</template>
<!-- Left -->

<!-- Right -->
<script setup>
import ProfileNavBar from "../dashboard/ProfileNavBar.vue";

defineProps(["pageTitle", "navList", "userInfo", "activeNav"]);
</script>
