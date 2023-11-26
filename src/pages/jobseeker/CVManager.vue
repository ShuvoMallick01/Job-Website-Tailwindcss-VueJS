<template>
  <!-- CV Manager -->
  <SubSectionHeading headingName="CV Manager" />

  <!-- file Upload -->
  <div class="border text-center py-20 mb-10">
    <form action="">
      <h4 class="mb-2">Drop files here to upload</h4>
      <p class="small-text mb-5">
        To upload file size is (Max 5Mb) and allowed file types are (.doc,
        .docx, .pdf)
      </p>

      <Button title="Upload Resume" wrapperClasses="relative overflow-hidden">
        <template #prefix>
          <input
            class="absolute cursor-pointer left-0 top-0 opacity-0"
            id="resumeupload"
            type="file"
          />
        </template>
      </Button>
    </form>
  </div>

  <!-- Title -->
  <SubSectionHeading headingName="Uploaded Resume" />

  <div class="flex justify-between">
    <p class="medium-text">
      <i class="icon-file me-2"></i>Shuvo Mallick Resume
      <span>| Version 1.0</span>
    </p>
    <Button title="Download"></Button>
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import Button from "../../components/Button/Button.vue";
</script>
