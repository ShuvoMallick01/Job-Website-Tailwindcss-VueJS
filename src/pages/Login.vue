<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mt-32">
    <div class="mb-24 lg:px-32 lg:mx-32 2xl:px-52 2xl:mx-52">
      <div class="py-6 text-center">
        <h1 class="sectionHeading mb-2">Welcome Back</h1>
        <p class="paragraph-primary">
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
          <p class="text-gray-500 font-light text-sm px-5 dark:text-gray-400">
            or sign in with
          </p>

          <hr class="border flex-grow" />
        </div>
      </div>

      <!-- Form -->
      <form>
        <!-- <div class="flex my-8 gap-4 items-center">
          <label for="email" class="block mb-2 formLabel"
            >Sign In Role:<span class="text-red-600">*</span></label
          >

          <button class="btn btn-primary">
            <i class="icon-check-people me-2"></i>Admin
          </button>

          <button class="btn btn-primary">
            <i class="icon-default-user me-2"></i>Job Seeker
          </button>
        </div> -->

        <div class="mb-6">
          <label for="countries" class="block mb-2 formLabel"
            >Role <span class="text-red-600">*</span></label
          >
          <select
            id="signinrole"
            class="inputPrimary dark:focus:ring-none dark:focus:border-slate-500"
          >
            <option selected disabled value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="jobseeker">Job Seeker</option>
          </select>
        </div>

        <div class="mb-6">
          <label for="email" class="block mb-2 formLabel"
            >Email <span class="text-red-600">*</span></label
          >
          <input
            type="email"
            id="email"
            class="inputPrimary dark:focus:ring-none dark:focus:border-slate-500"
            placeholder="email@email.com"
            required
          />
        </div>

        <div class="mb-12">
          <div class="flex justify-between">
            <label for="password" class="block mb-2 formLabel"
              >Password <span class="text-red-600">*</span></label
            >
            <p
              class="underline text-gray-500 font-light text-sm dark:text-slate-400"
            >
              Forgot password?
            </p>
          </div>
          <input
            type="password"
            id="password"
            class="inputPrimary dark:focus:ring-none dark:focus:border-slate-500"
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
