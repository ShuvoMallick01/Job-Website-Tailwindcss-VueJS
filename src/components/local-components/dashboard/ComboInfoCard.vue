<template>
  <div v-for="(item, index) in infoList" :key="index" class="flex gap-6 mb-8">
    <!-- <Badge
      :title="item.title[0]"
      size="circle-large"
      color="secondary"
      variation="filled"
      shape="circle"
    /> -->

    <div>
      <div class="mb-4 flex gap-3 items-start">
        <div>
          <h4>{{ item.title }}</h4>
          <p class="small-text text-primary">
            {{ item.institute }}
          </p>
        </div>
        <!-- <Badge :title="item.duration" color="gray"></Badge> -->

        <ButtonV1
          prefixIcon="icon-edit"
          variant="filled"
          size="circle-medium"
          shape="circle"
          color="secondary-light"
          target="_blank"
          @click="editEducation"
        />

        <ButtonV1
          prefixIcon="icon-trash"
          variant="filled"
          size="circle-medium"
          shape="circle"
          color="secondary-light"
          target="_blank"
          @click="editEducation"
        />
      </div>

      <p class="extrasmall-text">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import Button from "../buttons/Button.vue";
import ButtonV1 from "../buttons/Button-v1.vue";
import Badge from "../../global-components/Badge/Badge.vue";

defineProps({
  infoList: {
    type: Array,
    default: [],
    required: true,
  },
  modelValue: {},
});
</script>
