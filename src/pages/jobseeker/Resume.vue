<template>
  <!-- Title -->
  <SubSecHeading headingTitle="MY RESUME" divClassName="mb-8 pb-3 border-b" />

  <div>
    <!-- Updated CV Version List -->
    <FormSelect
      :optionList="CvVersionList"
      :labelName="'Select Your CV'"
      className="mb-5"
      v-model="resume.cvVersion"
    />
    <!-- Description -->
    <Textarea
      labelName="Description"
      name="description"
      required="true"
      v-model="resume.description"
    />
  </div>

  <!-- Education -->
  <div class="mt-14">
    <div class="mb-8 pb-3 border-b flex justify-between">
      <SubSecHeading headingTitle="EDUCATION" />
      <Button
        isButton="true"
        beforeIcon="icon-plus align-baseline"
        title="Add Education"
        className="btn-text"
      />
    </div>
    <ComboInfoCard :infoList="resume.education" />
  </div>

  <!-- Work & Experience -->
  <div class="mt-14">
    <div class="mb-8 pb-3 border-b flex justify-between">
      <SubSecHeading headingTitle="WORK & EXPERIENCE" />

      <Button
        isButton="true"
        beforeIcon="icon-plus align-baseline"
        title="Add Work"
        className="btn-text"
      />
    </div>

    <ComboInfoCard :infoList="resume.workExperience" />
  </div>

  <!-- Skills -->
  <div class="mt-14">
    <SubSecHeading headingTitle="SKILLS" divClassName="mb-8 pb-3 border-b" />
    <FormInput :formInput="formInputList" v-model="resume.skills" />
  </div>

  <Button isButton="true" title="Save" className="btn btn-primary px-14" />
</template>

<!-- SCRIPT -->
<script setup>
import { ref, reactive } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import FormSelect from "../../components/form/FormSelect.vue";
import Textarea from "../../components/form/Textarea.vue";
import ComboInfoCard from "../../components/dashboard/ComboInfoCard.vue";
import FormInput from "../../components/form/FormInput.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import Button from "../../components/buttons/Button.vue";

// State
const store = useJobseekersStore();
const resume = store.resumeList[0];

const CvVersionList = ref([
  { title: "Choose your Update CV", value: null },
  { title: "CV Version 1.0", value: "CV Version 1.0" },
  { title: "CV Version 2.0", value: "CV Version 2.0" },
  { title: "CV Version 3.0", value: "CV Version 3.0" },
]);

const formInputList = ref([
  {
    title: "",
    name: "skills",
    type: "text",
    placeholder: "",
    required: true,
  },
]);
</script>
