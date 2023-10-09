<template>
  <!-- Title -->
  <h2 class="heading-paragraph mb-5 border-b pb-4 uppercase">My RESUME</h2>

  <div>
    <div class="mb-5">
      <label for="countries" class="block mb-2 formLabel">Select Your CV</label>
      <FormSelect :optionList="locationList" />
    </div>

    <div>
      <FormTextarea :formTextarea="formTextareaList" />
    </div>
  </div>

  <!-- Education -->
  <div class="mt-14">
    <div class="flex justify-between items-center mb-5 pb-4 border-b">
      <h2 class="sectionSubHeading uppercase">Education</h2>
      <button class="btn-text">
        <i class="icon-plus align-middle"></i> Add aducation
      </button>
    </div>

    <Education :educationList="educationList" />
  </div>

  <!-- Work & Experience -->
  <div class="mt-14">
    <div class="flex justify-between items-center mb-5 pb-4 border-b">
      <h2 class="heading-paragraph uppercase">Work & Experience</h2>
      <button class="btn-text">
        <i class="icon-plus align-middle"></i> Add work
      </button>
    </div>

    <div class="flex gap-6 mb-8">
      <div class="btn-circle-icon flex-shrink-0">
        <p>S</p>
      </div>

      <div>
        <div class="mb-4 flex gap-3 items-start">
          <div>
            <h4 class="heading-regular">Product Designer</h4>
            <p class="description-text text-primary">Spotify Inc</p>
          </div>
          <p class="btn-sm-text">2017-2021</p>
          <button class="btn-icon"><i class="icon-edit"></i></button>
          <button class="btn-icon"><i class="icon-trash"></i></button>
        </div>

        <p class="description-sm-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum
          tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </div>

    <div class="flex gap-6 mb-8">
      <div class="btn-circle-icon flex-shrink-0">
        <p>D</p>
      </div>

      <div>
        <div class="mb-4 flex gap-3 items-start">
          <div>
            <h4 class="heading-regular">Sr UX Engineer</h4>
            <p class="description-text text-primary">Dropbox Inc.</p>
          </div>
          <p class="btn-sm-text">2012 - 2014</p>
          <button class="btn-icon"><i class="icon-edit"></i></button>
          <button class="btn-icon"><i class="icon-trash"></i></button>
        </div>

        <p class="description-sm-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum
          tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </div>
  </div>

  <!-- Skills -->
  <div class="mt-14">
    <h2 class="heading-paragraph uppercase mb-5 pb-4 border-b">Skills</h2>

    <div class="mb-6">
      <input
        type="text"
        id="skill"
        class="inputPrimary"
        placeholder="skills "
        required
      />
    </div>
  </div>

  <button class="btn btn-primary px-16">Save</button>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, reactive } from "vue";
import FormSelect from "../../components/form/FormSelect.vue";
import FormTextarea from "../../components/form/FormTextarea.vue";
import Education from "../../components/dashboard/Education.vue";

// State
const locationList = ref([
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
    degree: "Bachelor of Science in CSE",
    university: "University of Science & Technology",
    duration: "2017-2021",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus minima magni voluptatem rem.",
  },
  {
    degree: "Diploma in Computer Technology",
    university: "Islami Bank Institute of Technology",
    duration: "2013-2017",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus minima magni voluptatem rem.",
  },
]);
</script>
