<template>
  <div v-for="(item, index) in infoList" :key="index" class="flex gap-6 mb-8">
    <Button
      isButton="true"
      :title="item.title[0]"
      className="singleTextCircle"
    />

    <div>
      <div class="mb-4 flex gap-3 items-start">
        <div>
          <h4 class="heading-regular">{{ item.title }}</h4>
          <p class="description-text text-primary">
            {{ item.institute }}
          </p>
        </div>
        <p class="btn-sm-text">{{ item.duration }}</p>

        <Button isButton="true" beforeIcon="icon-edit" className="btn-icon" />
        <Button isButton="true" beforeIcon="icon-trash" className="btn-icon" />
      </div>

      <p class="description-sm-text">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import Button from "../buttons/Button.vue";

defineProps({
  infoList: {
    type: Array,
    default: [],
    required: true,
  },
  modelValue: {},
});
</script>
