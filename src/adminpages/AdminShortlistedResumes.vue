<template>
  <div class="mb-5 border-b pb-4 flex justify-between items-center gap-4">
    <h2 class="heading-paragraph uppercase">Shortlisted Resumes</h2>
    <div class="flex gap-2">
      <select
        id="countries"
        class="bg-gray-50 border description-text border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>Select Jobs</option>
        <option>Last 3 Months</option>
        <option>Last 6 Months</option>
        <option>Last 9 Months</option>
        <option>Last 12 Months</option>
      </select>

      <select
        id="countries"
        class="bg-gray-50 border description-text border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>All Status</option>
        <option>Last 3 Months</option>
        <option>Last 6 Months</option>
        <option>Last 9 Months</option>
        <option>Last 12 Months</option>
      </select>
    </div>
  </div>

  <div
    class="flex gap-2 flex-shrink-0 pt-3 pb-6 whitespace-nowrap items-center justify-between"
  >
    <h4 class="heading-regular">Senior Product Designer</h4>
    <div class="flex gap-2 description-sm-text flex-wrap justify-end">
      <span class="text btn-sm-text">Total(s): 6</span>
      <span class="text btn-sm-text">Approved: 2</span>
      <span class="text btn-sm-text">Rejected(s): 4</span>
    </div>
  </div>

  <div class="grid grid-cols-1 1xl:grid-cols-2 gap-4">
    <!-- Card -->
    <div class="flex justify-between border p-5 xl:p-6 rounded-lg cols-1 gap-2">
      <div class="flex gap-4">
        <div
          class="rounded-full h-16 w-16 bg-slate-400 border-primary overflow-hidden flex-shrink-0"
        >
          <img src="../assets/images/user-profile-pic-1.jpg" alt="" />
        </div>

        <div class="">
          <h4 class="heading-regular mb-1">Darlene Robertson</h4>
          <div class="flex description-sm-text gap-x-3 mb-2 flex-wrap">
            <p class="description-sm-text whitespace-nowrap">
              <i class="icon-briefcase me-1"></i>Ui Designer
            </p>
            <span class="whitespace-nowrap"
              ><i class="icon-map me-1"></i>London, Uk</span
            >
            <span class="whitespace-nowrap"
              ><i class="icon-cash-money me-1"></i>$2000 / month</span
            >
          </div>
          <div class="flex gap-2 flex-wrap">
            <p class="btn-sm-text description-sm-text">App</p>
            <p class="btn-sm-text description-sm-text">Design</p>
            <p class="btn-sm-text description-sm-text">Digital</p>
          </div>
        </div>
      </div>

      <div class="flex gap-2">
        <a href="#" class="btn-icon"><i class="icon-eye-on"></i></a>
        <a href="#" class="btn-icon"><i class="icon-edit"></i></a>
        <a href="#" class="btn-icon"><i class="icon-trash"></i></a>
      </div>
    </div>

    <!-- Card -->
    <div class="flex justify-between border p-5 xl:p-6 rounded-lg cols-1 gap-2">
      <div class="flex gap-4">
        <div
          class="rounded-full h-16 w-16 bg-slate-400 border-primary overflow-hidden flex-shrink-0"
        >
          <img src="../assets/images/user-profile-pic-1.jpg" alt="" />
        </div>
        <div class="">
          <h4 class="heading-regular mb-1">Darlene Robertson</h4>
          <div class="flex description-sm-text gap-x-3 mb-2 flex-wrap">
            <p class="description-sm-text whitespace-nowrap">
              <i class="icon-briefcase me-1"></i>Ui Designer
            </p>
            <span class="whitespace-nowrap"
              ><i class="icon-map me-1"></i>London, Uk</span
            >
            <span class="whitespace-nowrap"
              ><i class="icon-cash-money me-1"></i>$2000 / month</span
            >
          </div>
          <div class="flex gap-2 flex-wrap">
            <p class="btn-sm-text description-sm-text">App</p>
            <p class="btn-sm-text description-sm-text">Design</p>
            <p class="btn-sm-text description-sm-text">Digital</p>
          </div>
        </div>
      </div>

      <div class="flex gap-2">
        <a href="#" class="btn-icon"><i class="icon-eye-on"></i></a>
        <a href="#" class="btn-icon"><i class="icon-edit"></i></a>
        <a href="#" class="btn-icon"><i class="icon-trash"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup></script>
