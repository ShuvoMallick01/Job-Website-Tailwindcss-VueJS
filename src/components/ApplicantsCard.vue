<template>
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
</template>

<script setup></script>
