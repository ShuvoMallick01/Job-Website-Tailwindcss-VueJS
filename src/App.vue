<template>
  <header class="bg-slate-100">
    <nav
      class="md:flex justify-between items-center py-3 space-y-3 md:space-y-0"
    >
      <!-- logo -->
      <div
        class="flex items-center gap-8 lg:space-y-0 justify-between md:justify-start"
      >
        <img
          src="./assets/images/logo-skyber.svg"
          class="w-28 shrink-0"
          alt=""
        />
        <!-- icon -->
        <!-- <span class="text-3xl cursor-pointer md:hidden block"
          ><ion-icon name="menu-outline" onclick="menu(this)"></ion-icon
        ></span> -->

        <!-- <ul
          class="md:flex gap-4 font-light flex-wrap z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7  top-[-400px] transition300"
        > -->

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
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    // nav:{
    //   menu(e) {
    //     e.name === "menu" (e.name = (e.name="close",list.classList.add('top-[80px]'), list.classList.add('opacity-100')):(e.name="menu", list.classList.remove('top-[80px]'),list.classList.remove('opacity-100')));
    //   }
    // }
  },
};
</script>
