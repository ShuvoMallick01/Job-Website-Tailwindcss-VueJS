<template>
  <!-- Title -->
  <h2 class="heading-paragraph mb-5 border-b pb-4 uppercase">My RESUME</h2>

  <div>
    <div class="mb-5">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select Your CV</label
      >
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>My CV Version 01</option>
        <option>My CV Version 02</option>
        <option>My CV Version 03</option>
      </select>
    </div>

    <div>
      <label
        for="description"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Description</label
      >
      <textarea
        id="description"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a comment..."
      ></textarea>
    </div>
  </div>

  <!-- Education -->
  <div class="mt-14">
    <div class="flex justify-between items-center mb-5 pb-4 border-b">
      <h2 class="heading-paragraph uppercase">Education</h2>
      <button class="btn-text">
        <i class="icon-plus align-middle"></i> Add aducation
      </button>
    </div>

    <div class="flex gap-6 mb-8">
      <div class="btn-circle-icon flex-shrink-0">
        <p>M</p>
      </div>

      <div>
        <div class="mb-4 flex gap-3 items-start">
          <div>
            <h4 class="heading-regular">Bachlor of CSE</h4>
            <p class="description-text text-primary">
              University of Science & Technology
            </p>
          </div>
          <p class="btn-sm-text">2017-2021</p>
          <button class="btn-icon"><i class="icon-edit"></i></button>
          <button class="btn-icon"><i class="icon-trash"></i></button>
        </div>

        <p class="description-sm-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus minima
          magni voluptatem rem. Eum animi minima officia maiores, quae illum
          officia autem
        </p>
      </div>
    </div>

    <div class="flex gap-6 mb-8">
      <div class="btn-circle-icon flex-shrink-0">
        <p>M</p>
      </div>

      <div>
        <div class="mb-4 flex gap-3 items-start">
          <div>
            <h4 class="heading-regular">Computer Technology</h4>
            <p class="description-text text-primary">
              Islami Bank Institute of Technology
            </p>
          </div>
          <p class="btn-sm-text">2017-2021</p>
          <button class="btn-icon"><i class="icon-edit"></i></button>
          <button class="btn-icon"><i class="icon-trash"></i></button>
        </div>

        <p class="description-sm-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus minima
          magni voluptatem rem. Eum animi minima officia maiores, quae illum
          officia autem
        </p>
      </div>
    </div>
  </div>

  <!-- Work & Experience -->
  <div class="mt-14">
    <div class="flex justify-between items-center mb-5 pb-4 border-b">
      <h2 class="heading-paragraph uppercase">Work & Experience</h2>
      <button class="btn-text">
        <i class="icon-plus align-middle"></i> Add work
      </button>
    </div>

    <div class="flex gap-6 mb-8">
      <div class="btn-circle-icon flex-shrink-0">
        <p>S</p>
      </div>

      <div>
        <div class="mb-4 flex gap-3 items-start">
          <div>
            <h4 class="heading-regular">Product Designer</h4>
            <p class="description-text text-primary">Spotify Inc</p>
          </div>
          <p class="btn-sm-text">2017-2021</p>
          <button class="btn-icon"><i class="icon-edit"></i></button>
          <button class="btn-icon"><i class="icon-trash"></i></button>
        </div>

        <p class="description-sm-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum
          tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </div>

    <div class="flex gap-6 mb-8">
      <div class="btn-circle-icon flex-shrink-0">
        <p>D</p>
      </div>

      <div>
        <div class="mb-4 flex gap-3 items-start">
          <div>
            <h4 class="heading-regular">Sr UX Engineer</h4>
            <p class="description-text text-primary">Dropbox Inc.</p>
          </div>
          <p class="btn-sm-text">2012 - 2014</p>
          <button class="btn-icon"><i class="icon-edit"></i></button>
          <button class="btn-icon"><i class="icon-trash"></i></button>
        </div>

        <p class="description-sm-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum
          tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </div>
  </div>

  <!-- Skills -->
  <div class="mt-14">
    <h2 class="heading-paragraph uppercase mb-5 pb-4 border-b">Skills</h2>

    <div class="mb-6">
      <input
        type="text"
        id="skill"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="skills "
        required
      />
    </div>
  </div>

  <button class="btn btn-primary px-16">Save</button>
</template>

<script setup></script>
