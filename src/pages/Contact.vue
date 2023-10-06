<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mb-16 mt-20">
    <div class="py-8 text-center">
      <h1 class="sectionHeading">CONTACT</h1>
    </div>

    <div class="mb-24 lg:px-32 lg:mx-32 2xl:px-52 2xl:mx-52">
      <form>
        <div class="mb-6">
          <label for="email" class="block mb-2 formLabel">Your email</label>
          <input
            type="email"
            id="email"
            class="inputPrimary dark:focus:ring-none dark:focus:border-slate-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <label for="message" class="block mb-2 formLabel">Your message</label>
        <textarea
          id="message"
          rows="4"
          class="inputPrimary dark:focus:ring-none dark:focus:border-slate-500"
          placeholder="Leave a comment..."
        ></textarea>

        <div class="flex items-start mb-6 mt-6">
          <div class="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="terms"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >I agree with the
            <a
              href="#"
              class="text-secondary hover:underline dark:text-secondaryLight"
              >terms and conditions</a
            ></label
          >
        </div>
        <button type="submit" class="btn btn-primary px-10">Send</button>
      </form>
    </div>
  </section>
</template>

<script setup></script>
