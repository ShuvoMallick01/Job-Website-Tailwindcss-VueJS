<template>
  <div class="flex justify-between items-center mb-5 pb-4 border-b">
    <h2 class="sectionSubHeading uppercase">{{ subHeading.title }}</h2>

    <button v-if="subHeading.btnTitle" class="btn-text">
      <i class="align-baseline me-1" :class="subHeading.btnIcon"></i
      >{{ subHeading.btnTitle }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  subHeading: {
    type: Object,
    default: {},
    required: true,
  },
});
</script>
