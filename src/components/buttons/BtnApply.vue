<template>
  <router-link
    to="/job-apply-form"
    disabled
    class="bg-secondary whitespace-nowrap text-slate-200 text-sm py-2 ps-3 pe-6 rounded-full border transition300 hover:bg-slate-100 hover:border-secondaryDark hover:text-secondaryDark group/apply invisible group-hover/item:visible transition300 relative order-2 md:order-1"
    >{{ title }}
    <span
      class="group-hover/apply:translate-x-1 absolute right-0 ps-2 mx-2 transition300"
      ><i class="icon-arrow-single-right align-middle"></i
    ></span>
  </router-link>
</template>

<script setup>
defineProps(["title"]);
</script>
