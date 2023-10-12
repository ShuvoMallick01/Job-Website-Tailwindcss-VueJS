<template>
  <div class="mb-5 border-b pb-4 flex justify-between items-center gap-4">
    <h2 class="heading-paragraph uppercase">POST A NEW JOB</h2>
    <div class="flex gap-2">
      <FormSelect :optionList="formSelectList[0]" />
      <FormSelect :optionList="formSelectList[1]" />
    </div>
  </div>

  <div
    class="flex gap-2 flex-shrink-0 pt-3 pb-6 whitespace-nowrap items-center justify-between"
  >
    <h4 class="heading-regular">Senior Product Designer</h4>
    <div class="flex gap-2 description-sm-text flex-wrap justify-end">
      <BtnExtraSmall
        v-for="(item, index) in status"
        :title="item + ' : ' + 5"
        :key="index"
      />
    </div>
  </div>

  <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
    <ApplicantsCard
      v-for="item in applicants"
      :applicant="item"
      :key="item.applicantId"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ApplicantsCard from "../../components/dashboard/ApplicantsCard.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import BtnExtraSmall from "../../components/buttons/BtnExtraSmall.vue";

// State
const formSelectList = ref([
  [
    { title: "Select Jobs", value: "" },
    { title: "Last 3 Months", value: 3 },
    { title: "Last 6 Months", value: 6 },
    { title: "Last 9 Months", value: 9 },
    { title: "Last 12 Months", value: 12 },
  ],
  [
    { title: "All Status", value: "" },
    { title: "Total", value: "total" },
    { title: "Approved", value: "approved" },
    { title: "Rejected", value: "rejected" },
  ],
]);
const status = ref(["Total(s)", "Approved", "Rejected(s)"]);
const applicants = ref([
  {
    applicantId: 1,
    name: "Shuvo Mallick",
    image: "../../assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    location: "Bangladesh",
    expectedSalary: 2000,
    skills: ["Javascript", "Vuejs", "React"],
  },
  {
    applicantId: 2,
    name: "Nabed Khan",
    image: "../../assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    location: "Bangladesh",
    expectedSalary: 2000,
    skills: ["Javascript", "Vuejs", "React"],
  },
  {
    applicantId: 1,
    name: "Pranto Mallick",
    image: "../../assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    location: "Bangladesh",
    expectedSalary: 2000,
    skills: ["Javascript", "Vuejs", "React"],
  },
  {
    applicantId: 1,
    name: "Shuvo Mallick",
    image: "../../assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    location: "Bangladesh",
    expectedSalary: 2000,
    skills: ["Javascript", "Vuejs", "React"],
  },
  {
    applicantId: 2,
    name: "Nabed Khan",
    image: "../../assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    location: "Bangladesh",
    expectedSalary: 2000,
    skills: ["Javascript", "Vuejs", "React"],
  },
  {
    applicantId: 1,
    name: "Pranto Mallick",
    image: "../../assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    location: "Bangladesh",
    expectedSalary: 2000,
    skills: ["Javascript", "Vuejs", "React"],
  },
]);
</script>
