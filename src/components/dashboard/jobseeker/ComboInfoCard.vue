<template>
  <div v-for="(item, index) in infoList" :key="index" class="flex gap-6 mb-8">
    <CircleBadge size="large" color="secondary">
      {{ item.title[0] }}
    </CircleBadge>

    <div>
      <div class="mb-4 flex gap-3 items-start">
        <div>
          <h4>{{ item.title }}</h4>
          <p class="small-text text-primary">
            {{ item.institute }}
          </p>
        </div>

        <IconButton variant="translucent" color="secondary" target="_blank">
          <i class="icon-edit"></i>
        </IconButton>

        <IconButton variant="translucent" color="secondary" target="_blank">
          <i class="icon-trash"></i>
        </IconButton>
      </div>

      <p class="extrasmall-text">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import IconButton from "../../Button/IconButton.vue";
import CircleBadge from "../../Badge/CircleBadge.vue";

defineProps({
  infoList: {
    type: Array,
    default: [],
    required: true,
  },
  modelValue: {},
});
</script>
