<template>
  <!-- Title -->
  <SubSectionHeading :subHeading="subHeadingList[0]" />

  <div>
    <div class="mb-5">
      <label for="countries" class="block mb-2 formLabel">Select Your CV</label>
      <FormSelect :optionList="CvVersionList" />
    </div>

    <div>
      <FormTextarea :formTextarea="formTextareaList" />
    </div>
  </div>

  <!-- Education -->
  <div class="mt-14">
    <SubSectionHeading :subHeading="subHeadingList[1]" />
    <ComboInfoCard :infoList="educationList" />
  </div>

  <!-- Work & Experience -->
  <div class="mt-14">
    <SubSectionHeading :subHeading="subHeadingList[2]" />
    <ComboInfoCard :infoList="experienceList" />
  </div>

  <!-- Skills -->
  <div class="mt-14">
    <SubSectionHeading :subHeading="subHeadingList[3]" />
    <FormInput :formInput="formInputList[0]" />
  </div>

  <button class="btn btn-primary px-16">Save</button>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, reactive } from "vue";
import FormSelect from "../../components/form/FormSelect.vue";
import FormTextarea from "../../components/form/FormTextarea.vue";
import ComboInfoCard from "../../components/dashboard/ComboInfoCard.vue";
import FormInput from "../../components/form/FormInput.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";

// State
const CvVersionList = ref([
  { title: "Choose your Update CV", value: "" },
  { title: "CV Version 1.0", value: "cv-version-1.0" },
  { title: "CV Version 2.0", value: "cv-version-2.0" },
  { title: "CV Version 3.0", value: "cv-version-3.0" },
]);

const formTextareaList = reactive({
  type: "text",
  title: "Description:",
  name: "description",
  value:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque officiis a totam obcaecati commodi quam hic molestiae, optio eos, reiciendis quae praesentium earum doloribus beatae deserunt quisquam ratione labore accusamus!",
  placeholder: "",
  required: true,
  rows: 4,
});

const educationList = ref([
  {
    title: "Bachelor of Science in CSE",
    institute: "University of Science & Technology",
    duration: "2017-2021",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus minima magni voluptatem rem.",
  },
  {
    title: "Diploma in Computer Technology",
    institute: "Islami Bank Institute of Technology",
    duration: "2013-2017",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus minima magni voluptatem rem.",
  },
]);

const experienceList = ref([
  {
    title: "Product Designer",
    institute: "Spotify Inc",
    duration: "2017-2021",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus minima magni voluptatem rem.",
  },
  {
    title: "Vue.js Developer",
    institute: "Bit Skyber",
    duration: "2021-2023",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus minima magni voluptatem rem.",
  },
]);

const formInputList = ref([
  {
    title: "",
    name: "skills",
    value: "Vue.js; React.js; Javascript; Html-css;",
    type: "text",
    placeholder: "",
    required: true,
  },
]);

const subHeadingList = ref([
  {
    title: "My Resume",
    btnTitle: "",
    btnIcon: "",
  },
  {
    title: "Education",
    btnTitle: "Add Education",
    btnIcon: "icon-plus",
  },
  {
    title: "Work & Experience",
    btnTitle: "Add Work",
    btnIcon: "icon-plus",
  },
  {
    title: "Skills",
    btnTitle: "",
    btnIcon: "",
  },
]);
</script>
