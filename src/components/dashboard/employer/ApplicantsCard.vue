<template>
  <!-- Card -->
  <div class="flex justify-between border p-5 xl:p-6 rounded-lg cols-1 gap-2">
    <div class="flex gap-4">
      <div
        class="rounded-full h-16 w-16 bg-slate-400 border-primary overflow-hidden flex-shrink-0"
      >
        <Image
          src="../../../src/assets/images/user-profile-pic-1.jpg"
          alt="Applicants Image"
        />
      </div>

      <div class="">
        <h4 class="mb-1" v-if="authStore.userData">
          {{ authStore.userData.name }}
        </h4>
        <div class="flex description-sm-text gap-x-3 mb-2 flex-wrap">
          <IconText :title="authStore.userData.profession">
            <template #prefix>
              <i class="icon-briefcase"></i>
            </template>
          </IconText>

          <IconText :title="applicant.country">
            <template #prefix>
              <i class="icon-map"></i>
            </template>
          </IconText>

          <IconText :title="applicant.expectedSalary + ' /Month'">
            <template #prefix>
              <i class="icon-cash-money"></i>
            </template>
          </IconText>
        </div>

        <!-- <div class="flex gap-2 flex-wrap">
          <Badge v-for="item in resume.skills" :title="item" color="gray" />
        </div> -->
      </div>
    </div>

    <div class="flex gap-2">
      <IconButton
        v-for="icon in actions"
        variant="translucent"
        color="secondary"
      >
        <i :class="icon"></i>
      </IconButton>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, onMounted, watchEffect, computed } from "vue";
import IconButton from "../../Button/IconButton.vue";
import Image from "../../Image.vue";
import Badge from "../../Badge/Badge.vue";
import IconText from "../../IconText.vue";
import { useAuthsStore } from "../../../stores/authStore";

// State
const authStore = useAuthsStore();
const actions = ref(["icon-eye-on", "icon-check", "icon-cross"]);

const props = defineProps({
  applicant: {
    type: Object,
    required: true,
    default: {},
  },
  applicantId: { type: Number, default: null },
});

onMounted(() => {
  authStore.getUser(props.applicantId);
});

// const getApplicantData = computed(async () => {
//   await authStore.getUser(props.applicantId);
//   console.log(authStore.userData);
//   return authStore.userData;
// });

// console.log(getApplicantData.value);

// watchEffect(() => {
//   authStore.getUser(props.applicant.jobseekerId);
//   console.log(props.applicant.jobseekerId);
//   console.log(authStore.userData);

//   // console.log(props.applicantId);
//   // console.log(authStore.userData);
// });
</script>
