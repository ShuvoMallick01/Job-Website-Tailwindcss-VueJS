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
    <div class="myContainer py-32">
      <h1 class="w-5/6 lg:w-1/2 font-bold md:text-6xl text-5xl text-primary">
        Find the right
        <span class="font-light text-secondary">world class job </span>
      </h1>
      <p class="font-light text-slate-600 mt-5 md:w-1/2">
        Be a member of a family of more than one million job seekers and apply
        to any of the 3000+ live jobs
      </p>
    </div>
  </section>

  <!-- NAVBAR & BANNER -->
  <!-- <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="https://flowbite.com/" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Flowbite</span
        >
      </a>
      <div class="flex md:order-2">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get started
        </button>
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
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
        id="navbar-cta"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav> -->

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
        <div class="md:flex justify-between border-b pb-5 mb-5 items-center">
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
        <div class="md:flex justify-between border-b pb-5 mb-5 items-center">
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
        <div class="md:flex justify-between border-b pb-5 mb-5 items-center">
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
        <div class="md:flex justify-between border-b pb-5 mb-5 items-center">
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
