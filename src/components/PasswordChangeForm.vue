<template>
  <form>
    <div class="mb-6">
      <label for="oldpassword" class="block mb-2 formLabel"
        >Your old password</label
      >
      <input
        type="password"
        id="oldpassword"
        class="inputPrimary dark:focus:ring-none dark:focus:border-slate-500"
        required
      />
    </div>

    <div class="mb-6">
      <label for="password" class="block mb-2 formLabel">Your password</label>
      <input
        type="password"
        id="password"
        class="inputPrimary dark:focus:ring-none dark:focus:border-slate-500"
        required
      />
    </div>

    <div class="mb-6">
      <label for="repeat-password" class="block mb-2 formLabel"
        >Repeat password</label
      >
      <input
        type="password"
        id="repeat-password"
        class="inputPrimary dark:focus:ring-none dark:focus:border-slate-500"
        required
      />
    </div>
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input
          id="terms"
          type="checkbox"
          value=""
          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          required
        />
      </div>
      <label for="terms" class="ml-2 formLabel"
        >I agree with the
        <a
          href="#"
          class="text-secondary hover:underline dark:text-secondaryDark"
          >terms and conditions</a
        ></label
      >
    </div>

    <button type="submit" class="btn btn-primary mt-5">Confirm</button>
  </form>
</template>

<!-- Functionality -->
<script setup></script>
