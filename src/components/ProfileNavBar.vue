<template>
  <div
    class="border col-span-3 md:col-span-1 py-6 px-5 lg:px-8 rounded-lg bg-white truncate dark:bg-gray-900 dark:border-slate-700"
  >
    <!-- Picture -->
    <div class="text-center border-0 p-4 shadow-md mb-5">
      <div
        class="shrink-0 h-20 w-20 bg-primary rounded-full overflow-hidden mx-auto mb-3 border-2 border-secondary"
      >
        <img
          class=""
          src="../assets/images/user-profile-pic-1.jpg"
          alt="User Profile"
        />
      </div>
      <h3 class="sectionSubHeading mb-0 pb-0">David Matin</h3>
      <p class="text-xs font-light">Web Developer</p>
    </div>

    <!-- Navbar -->
    <div>
      <ul class="description-text">
        <li
          class="px-2 py-2.5 border-s-2 border-s-white hover:bg-slate-100 hover:border-s-2 hover:border-s-primary cursor-pointer border-b transition300 dark:border-s-transparent dark:border-b-slate-600 dark:hover:bg-gray-800 dark:hover:border-s-slate-400"
          v-for="nav in profileNavList"
          :key="nav.id"
        >
          <router-link :to="nav.path">
            <i class="me-2 self-baseline" :class="nav.icon"></i
            >{{ nav.title }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  profileNavList: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>
