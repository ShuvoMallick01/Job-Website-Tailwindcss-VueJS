<template>
  <!-- Title -->
  <SubSectionHeading :subHeading="subHeadingList[0]" />

  <!-- file Upload -->
  <div class="border text-center py-20 mb-10">
    <form action="">
      <h5 class="font heading-paragraph mb-2">Drop files here to upload</h5>
      <p class="text-gray-500 font-light text-xs mb-5">
        To upload file size is (Max 5Mb) and allowed file types are (.doc,
        .docx, .pdf)
      </p>

      <BtnFileUpload :title="'Upload Resume'" />
    </form>
  </div>

  <!-- Title -->
  <SubSectionHeading :subHeading="subHeadingList[1]" />

  <div class="flex justify-between">
    <p class="description-text">
      <i class="icon-file me-2"></i>Shuvo Mallick Resume
    </p>
    <BtnText title="Download" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BtnFileUpload from "../../components/buttons/BtnFileUpload.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import BtnText from "../../components/buttons/BtnText.vue";

const subHeadingList = ref([
  {
    title: "CV MANAGER",
    btnTitle: "",
    btnIcon: "",
  },
  {
    title: "UPLOADED RESUME",
    btnTitle: "",
    btnIcon: "",
  },
]);
</script>
