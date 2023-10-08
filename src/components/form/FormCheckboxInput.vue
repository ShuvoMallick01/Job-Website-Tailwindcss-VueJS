<template>
  <label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer" checked />
    <div
      class="w-10 h-5 bg-gray-300 rounded-full peer peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.2 after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-800 peer-checked:bg-secondary"
    ></div>
    <span class="formLabel ml-2">Off</span>
  </label>
</template>

<script setup>
defineProps({
  checkList: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>
