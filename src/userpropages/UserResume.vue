<template>
  <!-- Title -->
  <h2 class="heading-paragraph mb-5 border-b pb-4 uppercase">RESUME</h2>

  <form>
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      for="user_avatar"
      >Upload Resume</label
    >
    <input
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      aria-describedby="user_avatar_help"
      id="user_avatar"
      type="file"
    />
    <div
      class="mt-1 text-sm text-gray-500 dark:text-gray-300"
      id="user_avatar_help"
    >
      File Format: doc, docx, pdf, jpg
    </div>
  </form>

  <!-- Title -->
  <h2 class="heading-paragraph mb-5 mt-10 border-b pb-4 uppercase">
    UPLOADED RESUME
  </h2>

  <div class="flex justify-between">
    <p class="description-text">
      <i class="icon-file me-2"></i>Shuvo Mallick Resume
    </p>
    <button class="btn-text">Download</button>
  </div>
</template>

<script setup></script>
