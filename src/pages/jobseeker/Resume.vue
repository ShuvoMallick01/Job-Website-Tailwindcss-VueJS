<template>
  <div class="space-y-6">
    <!-- Title -->
    <SubSectionHeading headingName="MY RESUME" />

    <!-- Updated CV Version List -->
    <FormSelect
      labelName="Select Your CV"
      id="cvSelect"
      :optionList="CvVersionList"
      v-model="resume.cvVersion"
    />

    <!-- Description -->
    <Textarea
      labelName="Description:"
      id="description"
      type="text"
      required
      rows="4"
      placeholder="Type your description"
      v-model="getUserResumeData.description"
    />

    <!-- Education -->
    <div>
      <SubSectionHeading headingName="EDUCATION">
        <Button title="Add Work" variant="text">
          <template #prefix>
            <i class="icon-plus align-baseline"></i>
          </template>
        </Button>
      </SubSectionHeading>

      <ComboInfoCard :infoList="getUserResumeData.education" />
    </div>

    <!-- Work & Experience -->
    <div>
      <SubSectionHeading headingName="WORK & EXPERIENCE">
        <Button title="Add Work" variant="text">
          <template #prefix>
            <i class="icon-plus align-baseline"></i>
          </template>
        </Button>
      </SubSectionHeading>

      <ComboInfoCard :infoList="getUserResumeData.workExperience" />
    </div>

    <!-- Skills -->
    <div>
      <SubSectionHeading headingName="SKILLS"> </SubSectionHeading>
      <FormInput
        id="language"
        type="text"
        required
        placeholder="Type your Language"
        v-model="getUserResumeData.skills"
      />
    </div>

    <Button title="Save" wrapperClasses="px-10 " />
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, reactive, computed } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import { useAuthsStore } from "../../stores/authStore";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import FormInput from "../../components/form/FormInput.vue";
import Textarea from "../../components/form/Textarea.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import Button from "../../components/Button/Button.vue";
import ComboInfoCard from "../../components/dashboard/jobseeker/ComboInfoCard.vue";

// State
const jobseekerStore = useJobseekersStore();
const authStore = useAuthsStore();
const resume = jobseekerStore.resumeList[0];
const CvVersionList = ref([
  { title: "Choose your Update CV", value: null },
  { title: "CV Version 1.0", value: "CV Version 1.0" },
  { title: "CV Version 2.0", value: "CV Version 2.0" },
  { title: "CV Version 3.0", value: "CV Version 3.0" },
]);

const getUserResumeData = computed(() => {
  return jobseekerStore.resumeList.find(
    (item) => item.jobseekerId === authStore.userState.user.id
  );
});

// console.log(getUserResumeData.value.skills);
</script>
