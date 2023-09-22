<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mt-16">
    <!-- Form -->
    <div class="mb-24 lg:px-32 lg:mx-32 2xl:px-52 2xl:mx-52">
      <div class="py-6 text-center">
        <h1 class="text-4xl font-bold text-primary mb-2">Welcome Back</h1>
        <p class="text-gray-500 font-light text-sm">
          Don't have an account yet?
          <router-link to="/registration" class="underline"
            >Get started for free</router-link
          >
        </p>

        <div class="flex justify-center my-8 gap-4">
          <button class="btn btn-outline-primary">
            <i class="fa-brands fa-google me-2"></i>Sign in with Google
          </button>

          <button class="btn btn-outline-primary">
            <i class="fa-brands fa-apple me-2"></i>Sign in with Apple
          </button>
        </div>

        <div class="flex justify-between items-center">
          <hr class="border flex-grow" />
          <p class="text-gray-500 font-light text-sm px-5">or sign in with</p>

          <hr class="border flex-grow" />
        </div>
      </div>

      <form>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-normal text-gray-600"
            >Email <span class="text-red-600">*</span></label
          >
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="email@email.com"
            required
          />
        </div>

        <div class="mb-12">
          <div class="flex justify-between">
            <label
              for="email"
              class="block mb-2 text-sm font-normal text-slate-800"
              >Password <span class="text-red-600">*</span></label
            >
            <p class="underline text-gray-500 font-light text-sm">
              Forgot password?
            </p>
          </div>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="Password (min. 6 characters)"
            required
          />
        </div>

        <button type="submit" class="w-full btn btn-primary">Sign in</button>
      </form>
    </div>
  </section>
</template>

<script></script>
