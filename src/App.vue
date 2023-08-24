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
      <h1
        class="mt-32 w-5/6 lg:w-1/2 font-bold md:text-6xl text-5xl text-primary"
      >
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
  <section class="myContainer mb-5">
    <div class="py-14 text-center">
      <h1 class="text-4xl font-bold text-primary mb-2">FIND YOUR JOB</h1>
      <p class="font-light text-slate-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </p>
    </div>

    <div class="grid grid-cols-3 gap-1 lg:gap-10 sm:gap-3">
      <!-- Filter -->
      <div
        class="filter border py-6 lg:px-8 px-5 rounded-lg space-y-5 bg-white truncate"
      >
        <!-- Job Type -->
        <div class="">
          <h3 class="h6 font-medium text-slate-700 mb-3">Job Type</h3>
          <div class="text-slate-500 font-light space-y-1.5 text-sm">
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="fulltime" />
              <label class="" for="fulltime">Full-time</label>
            </div>
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="parttime" />
              <label class="" for="parttime">Part-time</label>
            </div>
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="internship" />
              <label class="" for="internship">Internship</label>
            </div>
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="contract" />
              <label class="" for="contract">Contract/Freelance</label>
            </div>
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="cofounder" />
              <label class="" for="cofounder">Co-founder</label>
            </div>
          </div>
        </div>

        <!-- Job Type -->
        <div class="">
          <h3 class="h6 font-medium text-slate-700 mb-3">Job Type</h3>
          <div class="text-slate-500 font-light space-y-1.5 text-sm">
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="fulltime" />
              <label class="" for="fulltime">Full-time</label>
            </div>
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="parttime" />
              <label class="" for="parttime">Part-time</label>
            </div>
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="internship" />
              <label class="" for="internship">Internship</label>
            </div>
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="contract" />
              <label class="" for="contract">Contract/Freelance</label>
            </div>
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="cofounder" />
              <label class="" for="cofounder">Co-founder</label>
            </div>
          </div>
        </div>

        <!-- Remote Only -->
        <div class="">
          <h3 class="h6 font-medium text-slate-700 mb-3">Remote Only</h3>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-10 h-5 bg-gray-300 rounded-full peer peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.2 after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-800 peer-checked:bg-secondary"
            ></div>
            <span
              class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Off</span
            >
          </label>
        </div>

        <!-- Job Type -->
        <div class="">
          <h3 class="h6 font-medium text-slate-700 mb-3">Salary Range</h3>
          <div class="text-slate-500 font-light space-y-1.5 text-sm">
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="20kto50k" />
              <label class="" for="20kto50k">$20k-$50k</label>
            </div>
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="50kto100k" />
              <label class="" for="50kto100k">$50k-$100k</label>
            </div>
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="100kup" />
              <label class="" for="100kup">>$100k</label>
            </div>
            <div class="form-check">
              <input class="mr-2" type="checkbox" id="drawingpainting" />
              <label class="" for="drawingpainting">Drawing / Painting</label>
            </div>
          </div>
        </div>

        <!-- Location -->
        <div class="">
          <h3 class="font-medium text-slate-700 mb-3">Location</h3>
          <select
            id="countrys"
            name="countrys"
            class="w-full border px-1 py-1 font-light text-slate-500 focus:outline-none text-sm"
          >
            <option value="volvo" class="disable disable:text-slate-400">
              Anywhere
            </option>
            <option value="saab">Bangladesh</option>
            <option value="fiat">United State</option>
            <option value="audi">India</option>
          </select>
        </div>
      </div>

      <!-- Job Card -->
      <div class="col-span-2 border py-6 lg:px-10 px-5 rounded-lg bg-white">
        <!-- card -->
        <div class="md:flex justify-between border-b pb-8 mb-8 items-center">
          <div class="flex items-center gap-4">
            <div
              class="bg-secondary w-8 h-8 md:w-10 md:h-10 text-slate-100 text-base md:text-xl rounded-full flex justify-center relative items-center"
            >
              <p class="absolute">P</p>
            </div>

            <div class="">
              <p class="text-slate-500 text-xs md:text-sm mb-1">robinhood</p>
              <h4 class="font-semibold text-slate-600 mb-2 md:text-lg text-sm">
                Senior Site Reliability Engineer
              </h4>

              <div class="flex gap-2">
                <button
                  class="text-xs bg-slate-200 text-slate-500 py-1 px-1 rounded"
                >
                  Full Time
                </button>
                <button
                  class="text-xs bg-slate-200 text-slate-500 py-1 px-1 rounded"
                >
                  Remote
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 ms-14 md:ms-0 md:mt-0 mt-4">
            <button class="btn-sm">Apply Now</button>

            <p class="text-xs text-slate-400">3hr</p>
          </div>
        </div>

        <!-- card -->
        <div class="md:flex justify-between border-b pb-8 mb-8 items-center">
          <div class="flex items-center gap-4">
            <div
              class="bg-secondary w-8 h-8 md:w-10 md:h-10 text-slate-100 text-base md:text-xl rounded-full flex justify-center relative items-center"
            >
              <p class="absolute">P</p>
            </div>

            <div class="">
              <p class="text-slate-500 text-xs md:text-sm mb-1">robinhood</p>
              <h4 class="font-semibold text-slate-600 mb-2 md:text-lg text-sm">
                Senior Site Reliability Engineer
              </h4>

              <div class="flex gap-2">
                <button
                  class="text-xs bg-slate-200 text-slate-500 py-1 px-1 rounded"
                >
                  Full Time
                </button>
                <button
                  class="text-xs bg-slate-200 text-slate-500 py-1 px-1 rounded"
                >
                  Remote
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 ms-14 md:ms-0 md:mt-0 mt-4">
            <button class="btn-sm">Apply Now</button>

            <p class="text-xs text-slate-400">3hr</p>
          </div>
        </div>

        <!-- card -->
        <div class="md:flex justify-between border-b pb-8 mb-8 items-center">
          <div class="flex items-center gap-4">
            <div
              class="bg-secondary w-8 h-8 md:w-10 md:h-10 text-slate-100 text-base md:text-xl rounded-full flex justify-center relative items-center"
            >
              <p class="absolute">P</p>
            </div>

            <div class="">
              <p class="text-slate-500 text-xs md:text-sm mb-1">robinhood</p>
              <h4 class="font-semibold text-slate-600 mb-2 md:text-lg text-sm">
                Senior Site Reliability Engineer
              </h4>

              <div class="flex gap-2">
                <button
                  class="text-xs bg-slate-200 text-slate-500 py-1 px-1 rounded"
                >
                  Full Time
                </button>
                <button
                  class="text-xs bg-slate-200 text-slate-500 py-1 px-1 rounded"
                >
                  Remote
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 ms-14 md:ms-0 md:mt-0 mt-4">
            <button class="btn-sm">Apply Now</button>

            <p class="text-xs text-slate-400">3hr</p>
          </div>
        </div>

        <!-- card -->
        <div class="md:flex justify-between border-b pb-8 mb-8 items-center">
          <div class="flex items-center gap-4">
            <div
              class="bg-secondary w-8 h-8 md:w-10 md:h-10 text-slate-100 text-base md:text-xl rounded-full flex justify-center relative items-center"
            >
              <p class="absolute">P</p>
            </div>

            <div class="">
              <p class="text-slate-500 text-xs md:text-sm mb-1">robinhood</p>
              <h4 class="font-semibold text-slate-600 mb-2 md:text-lg text-sm">
                Senior Site Reliability Engineer
              </h4>

              <div class="flex gap-2">
                <button
                  class="text-xs bg-slate-200 text-slate-500 py-1 px-1 rounded"
                >
                  Full Time
                </button>
                <button
                  class="text-xs bg-slate-200 text-slate-500 py-1 px-1 rounded"
                >
                  Remote
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 ms-14 md:ms-0 md:mt-0 mt-4">
            <button class="btn-sm">Apply Now</button>

            <p class="text-xs text-slate-400">3hr</p>
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
