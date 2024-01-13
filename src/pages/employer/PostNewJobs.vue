<template>
  <!-- Title -->
  <SubSectionHeading headingName="POST A NEW JOB" />

  <form @submit.prevent="handleFormSubmit()" class="space-y-6">
    <FormInput
      v-model="formData.jobTitle"
      labelName="Job Title:"
      id="jobTitle"
      type="text"
      required
    />

    <!-- Job Description -->
    <Textarea
      v-model="formData.description"
      labelName="Job Description:"
      id="jobDescription"
      type="text"
      required
      rows="4"
      placeholder="Type your description"
    />

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Email -->
      <FormInput
        v-model="formData.email"
        labelName="Email Address:"
        id="email"
        type="email"
        required
      />

      <!-- website -->
      <FormInput
        v-model="formData.website"
        labelName="Website:"
        id="website"
        type="text"
        required
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Job Type -->
      <FormSelect
        v-model="formData.jobType"
        labelName="Job Type:"
        required
        id="jobtype"
        :optionList="formSelectList[0]"
      />

      <!-- Job Roles -->
      <FormSelect
        v-model="formData.jobRole"
        labelName="Job Roles:"
        id="jobrole"
        required
        :optionList="formSelectList[1]"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Offered Salary -->
      <FormInput
        v-model="formData.salary"
        labelName="Offered Salary:"
        id="offeredSalary"
        type="number"
        required
      />

      <!-- Remotely Only  -->
      <FormSelect
        v-model="formData.isRemote"
        labelName="Remotely Only:"
        id="remoteOnly"
        required
        :optionList="formSelectList[2]"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Company Name -->
      <FormInput
        v-model="formData.companyName"
        labelName="Company Name:"
        id="companyName"
        type="text"
        required
      />

      <!-- Location  -->
      <FormSelect
        v-model="formData.location"
        labelName="Location:"
        id="location"
        required
        :optionList="formSelectList[3]"
      />
    </div>

    <Button :title="'Post New Job'" wrapperClasses="px-10" type="submit" />
  </form>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import Button from "../../components/Button/Button.vue";
import FormInput from "../../components/form/FormInput.vue";
import Textarea from "../../components/form/Textarea.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import { useAuthsStore } from "../../stores/authStore";
import { useJobsStore } from "../../stores/jobStore";

// State
const authsStore = useAuthsStore();
const jobsStore = useJobsStore();
const formData = ref({
  companyName: "",
  description: "",
  jobTitle: "",
  jobType: "",
  jobRole: "",
  location: "",
  isRemote: "",
  createdAt: "",
  salary: "",
  email: "",
  website: "",
  jobApplyStatus: false,
  isFavorite: false,
  applicantsId: [],
  approvedApplicantsId: [],
  rejectedApplicantsId: [],
  isActice: true,
  employerId: authsStore.userState.user.id,
});
const formSelectList = ref([
  [
    { title: "Select Job Type", value: "" },
    { title: "Full-time", value: "fulltime" },
    { title: "Part-time", value: "partime" },
    { title: "Internship", value: "internship" },
    { title: "Contract/Freelance", value: "contract-freelance" },
    { title: "Co-founder", value: "cofounder" },
  ],
  [
    { title: "Select Job Roles", value: "" },
    { title: "Programming", value: "programming" },
    { title: "Design", value: "design" },
    { title: "Management / Finance", value: "management-finance" },
    { title: "Customer Support", value: "customerSupport" },
    { title: "Sales / Marketing", value: "sales-marketing" },
  ],
  [
    { title: "Select", value: "" },
    { title: "Yes", value: "yes" },
    { title: "No", value: "no" },
  ],
  [
    { title: "Choose a country", value: "" },
    { title: "Bangladesh", value: "bangladesh" },
    { title: "India", value: "india" },
    { title: "United State", value: "unitedstate" },
    { title: "Canada", value: "canada" },
    { title: "Europe", value: "europe" },
  ],
]);

// Methods
const handleFormSubmit = () => {
  console.log(formData.value);
};
</script>
