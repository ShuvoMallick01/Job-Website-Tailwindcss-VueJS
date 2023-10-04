<template>
  <nav
    class="bg-[#F6EBE6] dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div
      class="myContainer mx-auto flex flex-wrap items-center justify-between p-4"
    >
      <router-link to="/" class="flex items-center">
        <img
          v-if="isDark"
          src="../assets/images/logo-skyber-white.svg"
          class="h-8 mr-3"
          alt="Skyber Logo"
        />
        <img
          v-else
          src="../assets/images/logo-skyber.svg"
          class="h-8 mr-3"
          alt="Skyber Logo"
        />
      </router-link>

      <div class="flex md:order-2 md:gap-2 gap-1">
        <button @click="toggleDark()" class="">
          <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
          <i
            v-if="isDark"
            class="fa-regular fa-sun hover:bg-slate-800 text-slate-100 px-4 py-3 rounded-md"
          ></i>
          <i
            v-else
            class="fa-solid fa-moon text-lg hover:bg-slate-100 px-4 py-2 rounded-md"
          ></i>
        </button>

        <div class="flex gap-2">
          <router-link to="/login"
            ><button class="btn btn-outline-primary">
              Sign In
            </button></router-link
          >
          <router-link to="/registration">
            <button class="btn btn-primary">Register</button></router-link
          >
        </div>

        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
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
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li v-for="menuItem in menu" :key="menuItem">
            <router-link
              :to="menuItem.path"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondaryDark md:p-0 md:dark:hover:text-secondary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { initCollapses, initFlowbite } from "flowbite";
import { useDark, useToggle, useElementHover } from "@vueuse/core";

const route = useRoute();
const router = useRouter();

// State
const menu = ref([
  {
    title: "Home",
    path: "/",
    private: false,
  },

  {
    title: "User",
    path: "/userprofile",
    private: false,
  },
  {
    title: "Admin",
    path: "/admin-profile",
    private: false,
  },
  {
    title: "Contact",
    path: "/contact",
    private: false,
  },
]);
const isDark = useDark();
const toggleDark = useToggle(isDark);

// Methods
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

const activeNav = computed(() => {
  return route.path;
});

// console.log(route.fullPath);
// // Methods
// const handleActiveNavbar = computed(() => {
//   activeNav = route.fullPath;
// });
// console.log(activeNav.value);
</script>
