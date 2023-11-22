<template>
  <!-- Title -->
  <SubSectionHeading headingName="POST A NEW JOB" />

  <form class="space-y-6">
    <FormInput labelName="Job Title:" id="jobTitle" type="text" required />

    <!-- Job Description -->
    <Textarea
      labelName="Job Description:"
      id="jobDescription"
      type="text"
      required
      rows="4"
      placeholder="Type your description"
    />

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Email -->
      <FormInput labelName="Email Address:" id="email" type="email" required />

      <!-- website -->
      <FormInput labelName="Website:" id="website" type="text" required />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Job Type -->
      <FormSelect
        labelName="Job Type:"
        required
        id="jobtype"
        :optionList="formSelectList[0]"
      />

      <!-- Job Roles -->
      <FormSelect
        labelName="Job Roles:"
        id="jobrole"
        required
        :optionList="formSelectList[1]"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Offered Salary -->
      <FormInput
        labelName="Offered Salary:"
        id="offeredSalary"
        type="number"
        required
      />

      <!-- Remotely Only  -->
      <FormSelect
        labelName="Remotely Only:"
        id="remoteOnly"
        required
        :optionList="formSelectList[2]"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Company Name -->
      <FormInput
        labelName="Company Name:"
        id="companyName"
        type="text"
        required
      />

      <!-- Location  -->
      <FormSelect
        labelName="Location:"
        id="location"
        required
        :optionList="formSelectList[3]"
      />
    </div>

    <Button :title="'Post New Job'" wrapperClasses="px-10" type="submit" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import SubSectionHeading from "../../components/local-components/dashboard/SubSectionHeading.vue";
import Button from "../../components/global-components/Button/Button.vue";
import FormInput from "../../components/global-components/form/FormInput.vue";
import Textarea from "../../components/global-components/form/Textarea.vue";
import FormSelect from "../../components/global-components/form/FormSelect.vue";

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
</script>
