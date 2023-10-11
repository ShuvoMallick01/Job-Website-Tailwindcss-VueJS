<template>
  <select id="location" class="inputPrimary" required>
    <!-- <option value="" selected disabled>Select</option> -->
    <option
      v-for="(item, index) in optionList"
      :key="index"
      :v-model="item.value"
      :selected="!item.value"
    >
      {{ item.title }}
    </option>
  </select>
</template>

<script setup>
defineProps({
  optionList: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>
