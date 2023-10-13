<template>
  <!-- Card -->
  <div class="flex justify-between border p-5 xl:p-6 rounded-lg cols-1 gap-2">
    <div class="flex gap-4">
      <div
        class="rounded-full h-16 w-16 bg-slate-400 border-primary overflow-hidden flex-shrink-0"
      >
        <img src="../../assets/images/user-profile-pic-1.jpg" alt="" />
      </div>

      <div class="">
        <h4 class="heading-regular mb-1">{{ applicant.name }}</h4>
        <div class="flex description-sm-text gap-x-3 mb-2 flex-wrap">
          <IconText :icon="'icon-briefcase'" :title="applicant.profession" />
          <IconText :icon="'icon-map'" :title="applicant.location" />
          <IconText
            :icon="'icon-cash-money'"
            :title="applicant.expectedSalary + ' /Month'"
          />
        </div>
        <div class="flex gap-2 flex-wrap">
          <BtnExtraSmall
            v-for="(item, index) in applicant.skills"
            :title="item"
            :key="index"
          />
        </div>
      </div>
    </div>

    <div class="flex gap-2">
      <BtnIcon :icon="'icon-eye-on'" />
      <BtnIcon :icon="'icon-edit'" />
      <BtnIcon :icon="'icon-trash'" />
    </div>
  </div>
</template>

<script setup>
import IconText from "../icons/IconText.vue";
import BtnExtraSmall from "../buttons/BtnExtraSmall.vue";
import BtnIcon from "../buttons/BtnIcon.vue";

defineProps({
  applicant: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
