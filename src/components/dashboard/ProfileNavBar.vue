<template>
  <div
    class="border h-fit col-span-3 md:col-span-1 py-7 px-5 lg:px-8 rounded-lg bg-white truncate dark:bg-gray-900 dark:border-slate-700"
  >
    <!-- Picture -->
    <div class="text-center border-0 p-4 shadow-md mb-5">
      <div
        class="shrink-0 h-20 w-20 bg-primary rounded-full overflow-hidden mx-auto mb-3 border-2 border-secondary"
      >
        <ImageV1
          :imgUrl="profileInfo.image"
          alt="Job Seeker Profile"
          href="/jobseeker-profile"
        />
      </div>

      <h3>
        {{ profileInfo.name ? profileInfo.name : "User Name" }}
      </h3>
      <p class="small-text">
        {{
          profileInfo.profession ? profileInfo.profession : "Profession Name"
        }}
      </p>
    </div>

    <!-- Navbar -->
    <div>
      <ul class="medium-text">
        <li
          class="w-full py-3 pe-2 border-s-white border-b hover:bg-slate-100 border-s-2 hover:border-s-2 hover:border-s-primary cursor-pointer transition300 dark:border-s-transparent dark:border-b-slate-600 dark:hover:bg-gray-800 dark:hover:border-s-slate-400"
          v-for="nav in profileNavList"
          :key="nav.id"
          :class="
            activeNav === nav.path
              ? 'bg-slate-200/70 border-s-2 !border-s-primary dark:border-s-slate-400 dark:bg-gray-800'
              : ''
          "
        >
          <span v-if="nav.path">
            <router-link :to="nav.path" class="px-2 py-3 pe-80">
              <i class="me-2 self-baseline" :class="nav.icon"></i
              >{{ nav.title }}
            </router-link>
          </span>

          <a v-else class="px-2 py-3 pe-80">
            <i class="me-2 self-baseline" :class="nav.icon"></i>{{ nav.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Image from "../small-components/Image.vue";
import ImageV1 from "../small-components/Image-v1.vue";

defineProps({
  profileInfo: {
    type: Object,
    default: {},
    required: true,
  },

  profileNavList: {
    type: Array,
    default: [],
    required: true,
  },

  activeNav: {
    type: String,
    required: true,
  },
});
</script>
