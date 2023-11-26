<template>
  <div class="flex items-center">
    <input
      type="checkbox"
      v-bind="$attrs"
      :class="{
        'checkbox-primary': checkColor === 'primary',
        'checkbox-disabled': checkColor === 'disabled',
        'checkbox-gray': checkColor === 'gray',
        'checkbox-green': checkColor === 'green',
      }"
    />
    <slot v-if="$slots.default"></slot>

    <label
      v-else
      class="ms-2"
      :class="{
        'form-label-gray': labelColor === 'gray',
        'form-label-secondary': labelColor === 'secondary',
        'form-label-disabled': labelColor === 'disabled',
        [labelClass]: true,
      }"
      :for="$attrs.id"
      >{{ labelName }}</label
    >
  </div>
</template>

<!-- SCRIPT -->
<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  checkColor: {
    type: String,
    default: "primary",
  },

  labelName: String,
  labelClass: String,
  labelColor: {
    type: String,
    default: "gray",
  },
});
</script>
