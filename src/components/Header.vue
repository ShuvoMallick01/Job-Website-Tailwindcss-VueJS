<template>
  <nav
    class="bg-[#F6EBE6] dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
    ref="closeNavbar"
  >
    <div class="myContainer mx-auto flex items-center justify-between p-4">
      <Image
        v-if="isDark"
        src="../../src/assets/images/logo-skyber-white.svg"
        class="h-8 mr-3 shrink-1"
        alt="Skyber Logo"
        href="/"
      />

      <Image
        v-else
        src="../../src/assets/images/logo-skyber.svg"
        class="h-8 mr-3 shrink-1"
        alt="Skyber Logo"
        href="/"
      />

      <div class="flex md:order-2 md:gap-2 gap-1 items-center">
        <IconButton @click="toggleDark()" wrapperClasses="mx-2" color="primary">
          <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
          <i v-if="isDark" class="fa-regular fa-sun"></i>
          <i v-else class="fa-solid fa-moon"></i>
        </IconButton>

        <div class="flex gap-2">
          <Button
            title="Sign In"
            variant="outline"
            size="medium"
            href="/login"
          />

          <Button
            title="Register"
            variant="filled"
            size="medium"
            href="/registration"
          />
        </div>

        <button
          @click="navHidden = !navHidden"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div
        ref="target"
        :class="navHidden ? 'hidden' : ''"
        class="items-center justify-between w-full absolute md:relative top-14 md:top-0 md:flex md:w-auto md:order-1 mx-3"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row sm:space-x-2 md:space-x-4 lg:space-x-6 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li v-for="menuItem in menu" :key="menuItem" class="">
            <router-link
              :to="menuItem.path"
              class="block py-2 pl-3 whitespace-nowrap pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondaryDark md:p-0 md:dark:hover:text-secondary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              :class="
                activeNav === menuItem.path ? 'text text-secondaryDark' : ''
              "
              aria-current="page"
              >{{ menuItem.title }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { initCollapses, initFlowbite } from "flowbite";
import {
  useDark,
  useToggle,
  useElementHover,
  onClickOutside,
} from "@vueuse/core";

import Image from "./Image.vue";
import Button from "./Button/Button.vue";
import IconButton from "./Button/IconButton.vue";

// STATE
const route = useRoute();
const menu = ref([
  {
    title: "Home",
    path: "/",
    private: false,
  },
  {
    title: "Job Seekers",
    path: "/jobseeker-profile",
    private: true,
  },
  {
    title: "Employers",
    path: "/employer-profile",
    private: true,
  },
  {
    title: "Contact",
    path: "/contact",
    private: false,
  },
]);
const isDark = useDark();
const toggleDark = useToggle(isDark);
const closeNavbar = ref(null);
const navHidden = ref(true);
const target = ref(null);

// METHODS
const activeNav = computed(() => {
  return route.path;
});

onClickOutside(target, (event) => {
  navHidden.value = true;
});
</script>
