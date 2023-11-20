<template>
  <!-- Card -->
  <div class="flex justify-between border p-5 xl:p-6 rounded-lg cols-1 gap-2">
    <div class="flex gap-4">
      <div
        class="rounded-full h-16 w-16 bg-slate-400 border-primary overflow-hidden flex-shrink-0"
      >
        <Image
          :isRoute="false"
          imgUrl="../../../src/assets/images/user-profile-pic-1.jpg"
          alt="Applicants Image"
        />
      </div>

      <div class="">
        <h4 class="heading-regular mb-1">{{ applicant.name }}</h4>
        <div class="flex description-sm-text gap-x-3 mb-2 flex-wrap">
          <Button
            :isButton="true"
            :beforeIcon="'icon-briefcase'"
            :title="applicant.profession"
          />
          <Button
            :isButton="true"
            :beforeIcon="'icon-map'"
            :title="applicant.country"
          />
          <Button
            :isButton="true"
            :beforeIcon="'icon-cash-money'"
            :title="applicant.expectedSalary + ' /Month'"
          />
        </div>

        <div class="flex gap-2 flex-wrap">
          <Button
            is-button="true"
            v-for="item in resume.skills"
            className="btn-sm-text"
            :title="item"
          />
        </div>
      </div>
    </div>

    <div class="flex gap-2">
      <Button
        is-button="true"
        v-for="icon in actions"
        :beforeIcon="icon"
        className="btn-icon"
      />
    </div>
  </div>
</template>

<script setup>
import Button from "../buttons/Button.vue";
import Image from "../small-components/Image.vue";
import { ref } from "vue";

// State
const actions = ref(["icon-eye-on", "icon-check", "icon-cross"]);
// Props
defineProps({
  applicant: {
    type: Object,
    required: true,
    default: {},
  },
  resume: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
