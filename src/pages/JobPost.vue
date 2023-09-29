<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mb-5 mt-20">
    <div class="py-14 text-center">
      <h1 class="sectionHeading mb-2">Job Post</h1>
      <p class="description-text">Lorem ipsum dolor, sit amet consectetur</p>
    </div>

    <!-- Form -->
    <div class="mb-24 lg:px-32 lg:mx-22 2xl:px-52 2xl:mx-32">
      <form>
        <h4 class="formSubHeading">1. Your company</h4>

        <div class="mb-6">
          <label for="email" class="block mb-2 formLabel"
            >Company Name <span class="text-red-600">*</span></label
          >
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="E.g. Google Inc"
            required
          />
        </div>

        <div class="mb-6">
          <label for="email" class="block formLabel mb-2"
            >Contact Email <span class="text-red-600">*</span></label
          >
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="example@com"
            required
          />
        </div>

        <div class="mb-6 flex items-center space-x-6 border-b-2 pb-6">
          <div class="shrink-0">
            <img
              class="h-16 w-16 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt="Current profile photo"
            />
          </div>
          <label class="block">
            <span class="sr-only">Choose profile photo</span>
            <input
              type="file"
              class="block formLabel w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
          </label>
        </div>

        <!-- The Role -->
        <h4 class="formSubHeading">2. The role</h4>

        <div class="mb-6">
          <label for="email" class="block mb-2 formLabel"
            >Position Name <span class="text-red-600">*</span></label
          >
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="E.g., Senior Software Engineer "
            required
          />
        </div>

        <div class="mb-6">
          <label for="email" class="block mb-2 formLabel"
            >Role <span class="text-red-600">*</span></label
          >
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:outline-0 block w-full p-2.5"
          >
            <option>Programming</option>
            <option>Management</option>
            <option>HR</option>
            <option>Accounts</option>
          </select>
        </div>

        <div class="mb-6">
          <label for="email" class="block mb-2 formLabel"
            >Commitment <span class="text-red-600">*</span></label
          >
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:outline-0 block w-full p-2.5"
          >
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
        </div>

        <div class="mb-6">
          <label for="email" class="block mb-2 formLabel"
            >Job Description <span class="text-red-600">*</span></label
          >
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <div class="mb-6">
          <label for="email" class="block mb-2 formLabel"
            >Salary <span class="text-slate-400">(optional)</span></label
          >
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="E.g., Senior Software Engineer "
            required
          />
          <span class="text-slate-400 font-light text-xs"
            >Example: "$1000 USD - $70,000 USD"</span
          >
        </div>

        <button type="submit" class="btn btn-primary w-full">Post Job</button>
      </form>
    </div>
  </section>
</template>

<script></script>
