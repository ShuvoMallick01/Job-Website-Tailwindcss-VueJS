<template>
  <SubSecHeading headingTitle="Messages" divClassName="mb-8 pb-3 border-b" />

  <!-- Message -->
  <div class="grid grid-cols-3 gap-4 xl:gap-8">
    <!-- LEFT -->
    <div class="hidden xl:block bg-slate-100 rounded-lg">
      <form class="p-4">
        <!-- Search -->
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full md:w-40 xl:w-full py-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
      </form>

      <div class="bg-slate-100 shadow-md">
        <!-- Message People -->
        <MessagePeopleCard />
        <MessagePeopleCard />
        <MessagePeopleCard />
        <MessagePeopleCard />
        <MessagePeopleCard />
      </div>
    </div>

    <!-- RIGHT -->
    <div class="col-span-3 xl:col-span-2 bg-slate-50 shadow-md rounded-lg">
      <div
        class="flex items-center justify-between py-4 border-b cursor-pointer hover:bg-slate-200 px-4 xl:px-7"
      >
        <div class="flex gap-3 items-center">
          <div
            class="shrink-0 h-12 w-12 bg-primary rounded-full overflow-hidden border border-secondary"
          >
            <img
              class=""
              src="../../../src/assets/images/user-profile-pic-1.jpg"
              alt="User Profile"
            />
          </div>

          <div>
            <h5 class="heading-message">Darlene Robertson</h5>
            <p class="description-sm-text">Head of Development</p>
          </div>
        </div>
        <p class="description-sm-text">4hr</p>
      </div>

      <!-- Messages -->
      <div>
        <Message />
        <Message />
        <Message />
      </div>

      <form class="flex gap-3 px-4 xl:px-7 py-6">
        <input
          type="text"
          id="base-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import MessagePeopleCard from "../../components/dashboard/MessagePeopleCard.vue";
import Message from "../../components/dashboard/Message.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
</script>
