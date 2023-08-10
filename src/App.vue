<template>
  <!-- Animated Navbar -->
  <!-- <header
    class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center"
  >
    <a
      ><img
        src="./assets/images/logo-skyber-white.svg"
        class="w-32 shrink-0"
        alt=""
    /></a>

    <span
      @click="menuToggle"
      class="text-2xl cursor-pointer md:hidden absolute right-6 top-3"
      ><i :class="[open ? 'fa-solid fa-x' : 'fa-solid fa-bars']"></i
    ></span>

    <ul
      class="md:flex md:items-center gap-10 md:px-0 px-10 ms-0 md:py-0 py-5 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-400 ease-in"
      :class="[open ? 'leeft-0' : 'left-[-100%]']"
    >
      <li
        v-for="link in links"
        class="hover:font-medium hover:text-primary transition300 md:my-0 my-6"
      >
        <a :href="link.link">{{ link.name }}</a>
      </li>

      <div class="md:flex gap-0 md:items-center md:ms-15">
        <button class="btn btn-outline-primary me-3">Sign In</button>
        <button class="btn btn-primary">Register</button>
      </div>
    </ul>
  </header> -->

  <!-- NAVBAR & BANNER -->
  <section class="gradient">
    <!-- Navbar -->
    <header
      class="myContainer md:flex justify-between items-center py-3 space-y-3 md:space-y-0"
    >
      <!-- logo -->
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

    <!-- Banner -->
    <div class="myContainer h-80">
      <h1 class="mt-32 w-5/6 lg:w-1/2 font-bold text-6xl text-primary">
        Find the right
        <span class="font-light text-secondary">world class job </span>
      </h1>
      <p class="font-light text-slate-600 mt-5 md:w-1/2">
        Be a member of a family of more than one million job seekers and apply
        to any of the 3000+ live jobs
      </p>
    </div>
  </section>

  <!-- FILTER & JOB CARD -->
  <section class="myContainer py-10 grid grid-cols-3 lg:gap-10 sm:gap-3">
    <!-- Filter -->
    <div class="filter border py-6 lg:px-8 px-5 rounded-lg space-y-5 bg-white">
      <!-- Job Type -->
      <div class="">
        <h3 class="h6 font-semibold text-slate-700 mb-3">Job Type</h3>
        <div class="text-slate-600 font-light space-y-1">
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Full-time</label>
          </div>
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Part-time</label>
          </div>
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Internship</label>
          </div>
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Contract/Freelance</label>
          </div>
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Co-founder</label>
          </div>
        </div>
      </div>

      <!-- Job Type -->
      <div class="">
        <h3 class="h6 font-semibold text-slate-700 mb-3">Job Type</h3>
        <div class="text-slate-600 font-light space-y-1">
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Full-time</label>
          </div>
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Part-time</label>
          </div>
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Internship</label>
          </div>
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Contract/Freelance</label>
          </div>
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Co-founder</label>
          </div>
        </div>
      </div>

      <!-- Job Type -->
      <div class="">
        <h3 class="h6 font-semibold text-slate-700 mb-3">Job Type</h3>
        <div class="text-slate-600 font-light space-y-1">
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Full-time</label>
          </div>
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Part-time</label>
          </div>
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Internship</label>
          </div>
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Contract/Freelance</label>
          </div>
          <div class="form-check">
            <input class="mr-2" type="checkbox" id="fulltime" />
            <label class="" for="fulltime">Co-founder</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Job Card -->
    <div class="col-span-2 bg-slate-400">
      <div>
        <p>robinhood</p>
        <h4>Senior Site Reliability Engineer</h4>
      </div>
    </div>
  </section>
</template>

<!-- FUNCTIONALITY -->
<script>
export default {
  data() {
    return {
      links: [
        { name: "Home", link: "#" },
        { name: "Account", link: "#" },
        { name: "Contact", link: "#" },
        { name: "Blog", link: "#" },
      ],

      open: false,
    };
  },
  methods: {
    menuToggle() {
      return (this.open = !this.open);
    },
  },
};
</script>
