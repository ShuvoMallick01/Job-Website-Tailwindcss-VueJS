<template>
  <div class="space-y-6">
    <!-- Title -->
    <SubSectionHeading headingName="MY RESUME" />

    <!-- Updated CV Version List -->
    <FormSelectV1
      labelName="Select Your CV"
      id="cvSelect"
      :optionList="CvVersionList"
      v-model="resume.cvVersion"
    />

    <!-- Description -->
    <FormInputV1
      :textarea="true"
      labelName="Description:"
      id="description"
      type="text"
      :required="true"
      rows="4"
      placeholder="Type your description"
      v-model="resume.description"
    />

    <!-- Education -->
    <div>
      <SubSectionHeading headingName="EDUCATION">
        <ButtonV1
          title="Add Work"
          variant="onlyText"
          prefixIcon="icon-plus align-baseline"
          @click="unknwon"
        />
      </SubSectionHeading>

      <ComboInfoCard :infoList="resume.education" />
    </div>

    <!-- Work & Experience -->
    <div>
      <SubSectionHeading headingName="WORK & EXPERIENCE">
        <ButtonV1
          title="Add Work"
          variant="onlyText"
          prefixIcon="icon-plus align-baseline"
          @click="unknwon"
        />
      </SubSectionHeading>

      <ComboInfoCard :infoList="resume.workExperience" />
    </div>

    <!-- Skills -->
    <div>
      <SubSectionHeading headingName="SKILLS"> </SubSectionHeading>
      <FormInputV1
        id="language"
        type="text"
        :required="true"
        placeholder="Type your Language"
        v-model="resume.skills"
      />
    </div>

    <ButtonV1 title="Save" wrapperClasses="px-10 " />
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, reactive } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import FormSelect from "../../components/form/FormSelect.vue";
import ComboInfoCard from "../../components/dashboard/ComboInfoCard.vue";
import FormInput from "../../components/form/FormInput.vue";
import Button from "../../components/buttons/Button.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import FormSelectV1 from "../../components/form/FormSelect-v1.vue";
import ButtonV1 from "../../components/buttons/Button-v1.vue";
import FormInputV1 from "../../components/form/FormInput-V1.vue";

// State
const store = useJobseekersStore();
const resume = store.resumeList[0];

const CvVersionList = ref([
  { title: "Choose your Update CV", value: null },
  { title: "CV Version 1.0", value: "CV Version 1.0" },
  { title: "CV Version 2.0", value: "CV Version 2.0" },
  { title: "CV Version 3.0", value: "CV Version 3.0" },
]);
</script>
