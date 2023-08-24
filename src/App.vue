<template>
  <!-- NAVBAR & BANNER -->
  <section class="gradient">
    <header
      class="myContainer md:flex justify-between items-center py-3 space-y-3 md:space-y-0"
    >
      <div
        class="flex items-center gap-8 lg:space-y-0 justify-between md:justify-start"
      >
        <img
          src="./assets/images/logo-skyber.svg"
          class="w-32 shrink-0"
          alt=""
        />

        <ul class="flex gap-6">
          <a href="#"
            ><li class="hover:font-medium hover:text-primary transition300">
              Home
            </li></a
          >

          <a href="#"
            ><li class="hover:font-medium hover:text-primary transition300">
              My Account
            </li></a
          >
          <a href="#"
            ><li class="hover:font-medium hover:text-primary transition300">
              Contact
            </li></a
          >
        </ul>
      </div>

      <div class="flex gap-4 flex-wrap hidden md:block">
        <button class="btn btn-outline-primary me-3">Sign In</button>
        <button class="btn btn-primary">Register</button>
      </div>
    </header>
  </section>

  <!-- FILTER & JOB CARD -->
  <section class="myContainer my-5 pt-5">
    <a href="#" class="btn-text"
      ><i class="fa-solid fa-arrow-left me-2"></i>All Jobs</a
    >

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:gap-8 lg:gap-16"
    >
      <div
        class="col-span-1 md:col-span-1 lg:col-span-2 order-2 md:order-1 mt-10 md:mt-0"
      >
        <h1 class="heading">Engineering Management Delopment Experience</h1>

        <h4 class="pb-2 mt-6 heading-paragraph">The Role</h4>
        <p class="text-sm text-justify text-slate-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis
          atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores
          iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis
          magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat
          vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur?
          Ducimus.
        </p>

        <h4 class="pb-2 mt-6 heading-paragraph">The Role</h4>
        <p class="text-sm text-justify text-slate-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis
          atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores
          iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis
          magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat
          vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur?
          Ducimus.
        </p>

        <h4 class="pb-2 mt-6 heading-paragraph">The Role</h4>
        <p class="text-sm text-justify text-slate-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis
          atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores
          iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis
          magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat
          vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur?
          Ducimus.
        </p>
      </div>

      <!-- card -->
      <div class="order-1 md:order-2">
        <div class="bg-gray-200/50 border border-slate-300 p-6 rounded-lg">
          <div class="text-center">
            <div
              class="mx-auto bg-secondary w-16 h-16 text-slate-100 text-base md:text-xl rounded-full flex justify-center relative items-center"
            >
              <p class="absolute">P</p>
            </div>
            <h2 class="heading mt-2">Medium Inc</h2>
          </div>

          <div class="space-y-2 mt-6 text-slate-600 mb-10">
            <p>
              <i class="fa-regular fa-calendar-days me-2"></i>24 August, 2024
            </p>
            <p>
              <i class="fa-solid fa-location-dot me-2"></i>Landon, Uk / Remote
              Friendly
            </p>
            <p><i class="fa-solid fa-money-bill me-2"></i>$75k-$100k</p>
          </div>

          <div class="flex flex-col text-center gap-4">
            <a class="btn btn-primary">Apply Now</a>
            <a class="btn btn-outline-primary">Visit Website</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-primary py-6 text-slate-200 font-light mt-16">
    <div
      class="myContainer flex-col text-center space-y-3 lg:space-y-3 lg:flex-row lg:justify-between lg:items-center"
    >
      <p>@ Shuvo Mallick | All rights Reserved</p>

      <div class="flex gap-2 justify-center">
        Follow us:
        <div class="social-icon">
          <p class="absolute text-sm">
            <i class="fa-brands fa-twitter"></i>
          </p>
        </div>

        <div class="social-icon">
          <p class="absolute text-sm">
            <i class="fa-brands fa-facebook"></i>
          </p>
        </div>

        <div class="social-icon">
          <p class="absolute text-sm">
            <i class="fa-brands fa-youtube"></i>
          </p>
        </div>

        <div class="social-icon">
          <p class="absolute text-sm">
            <i class="fa-brands fa-linkedin"></i>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<!-- FUNCTIONALITY -->
<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>
