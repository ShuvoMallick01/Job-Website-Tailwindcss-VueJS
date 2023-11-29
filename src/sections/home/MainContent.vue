<template>
  <section class="myContainer mb-16">
    <!-- Header -->
    <SectionHeading
      title="FIND YOUR JOB"
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit"
    />

    <div class="grid grid-cols-3 gap-1 lg:gap-10 sm:gap-3">
      <!-- FILTER & JOB CARD -->
      <div class="col-span-2 lg:col-span-1 hidden lg:block">
        <Sidebar
          wrapperClass="h-full xl:px-10 px-8 py-6 overflow-y-auto bg-white border rounded-lg dark:border-slate-700 dark:bg-gray-900"
        />
      </div>

      <!-- Drawer -->
      <SidebarDrawer />

      <!-- RIGHT SIDE -->
      <JobList />
    </div>
  </section>
</template>

<!-- SCRIPT -->
<script setup>
import { initFlowbite } from "flowbite";
import Sidebar from "../../components/Sidebar.vue";
import JobList from "./JobList.vue";
import SidebarDrawer from "../../sections/home/SidebarDrawer.vue";
import SectionHeading from "../../components/SectionHeading.vue";
</script>
