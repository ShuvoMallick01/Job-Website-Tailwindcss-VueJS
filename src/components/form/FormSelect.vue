<template>
  <div class="mb-6">
    <select id="location" class="inputPrimary" required>
      <!-- <option value="" selected disabled>Select</option> -->
      <option
        v-for="(item, index) in optionList"
        :key="index"
        :value="item.value"
        :selected="!item.value"
      >
        {{ item.title }}
      </option>
    </select>
  </div>
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
