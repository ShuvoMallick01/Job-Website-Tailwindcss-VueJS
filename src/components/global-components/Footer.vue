<template>
  <!-- FOOTER -->
  <footer class="gradient rounded-t-lg shadow dark:bg-gray-900">
    <div class="container mx-auto p-4 py-8">
      <div class="flex justify-between">
        <span class="flex items-center mb-4 sm:mb-0">
          <Image
            href="/"
            src="../../src//assets/images/logo-skyber.svg"
            class="h-8 mr-3"
            alt="Skyber Logo"
          />
        </span>

        <!-- Follow Us -->
        <div class="flex gap-3 justify-center mt-0 items-center">
          Follow us:
          <IconButton
            v-for="social in store.socialMediaList"
            color="primary-light"
          >
            <template #prefix>
              <i :class="social"></i>
            </template>
          </IconButton>
        </div>
      </div>
      <hr class="my-3 border-gray-300 sm:mx-auto dark:border-gray-400" />
      <span class="block text-sm text-gray-500 text-center"
        >© 2023 Shuvo Mallick. All Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import Image from "../global-components/Image.vue";
import IconButton from "../global-components/Button/IconButton.vue";

// State
const logoUrl = ref("../src/assets/images/logo-skyber.svg");
const store = useJobsStore();
</script>
