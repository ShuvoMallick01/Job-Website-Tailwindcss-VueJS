<template>
  <div class="space-y-1">
    <div class="form-check" v-for="(item, index) in checkList" :key="index">
      <input class="mr-2 focus:ring-0" type="checkbox" :id="item.name" />
      <label class="formLabel" :for="item.name">{{ item.title }}</label>
    </div>
  </div>
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
