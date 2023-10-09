<template>
  <div
    v-for="(item, index) in educationList"
    :key="index"
    class="flex gap-6 mb-8"
  >
    <SingleTextCircle :title="item.degree" />

    <div>
      <div class="mb-4 flex gap-3 items-start">
        <div>
          <h4 class="heading-regular">{{ item.degree }}</h4>
          <p class="description-text text-primary">
            {{ item.university }}
          </p>
        </div>
        <p class="btn-sm-text">{{ item.duration }}</p>

        <BtnIcon :icon="'icon-edit'" />
        <BtnIcon :icon="'icon-trash'" />
      </div>

      <p class="description-sm-text">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import SingleTextCircle from "../icons/SingleTextCircle.vue";
import BtnIcon from "../buttons/BtnIcon.vue";

defineProps({
  educationList: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>
