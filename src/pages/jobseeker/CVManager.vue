<template>
  <!-- CV Manager -->
  <SubSectionHeading headingName="CV Manager" />

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
  <SubSecHeading
    headingTitle="Uploaded Resume"
    divClassName="mb-8 pb-3 border-b"
  />

  <div class="flex justify-between">
    <p class="description-text">
      <i class="icon-file me-2"></i>Shuvo Mallick Resume
      <span>| Version 1.0</span>
    </p>
    <Button isButton="true" title="Download" className="btn-text"></Button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BtnFileUpload from "../../components/buttons/BtnFileUpload.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import Button from "../../components/buttons/Button.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
</script>
