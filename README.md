# Job Website Using Vuejs - Version 1.0

Live: https://job-website-vuejs.netlify.app/

## Project Overview

This GitHub repository hosts a Job Website built using Vue.js 3, the Composition API, Vue Router, Vue use, Pinia State Management, and Tailwind CSS Framework. The project aims to create a platform where employers can post job listings, and job seekers can apply, bookmark jobs, and manage their applications.

## Project Structure:

public/: Contains static assets and the HTML template file.
src/: Holds the main source code for the Vue.js application.
assets/: Includes images and other static resources.
components/: Contains Vue components used throughout the application.
sections/: Organizes components into sections related to different parts of the website (e.g., home, dashboard).
store/: Utilizes Pinia State Management for managing the application's state.
views/: Defines different views or pages of the application.
App.vue: The main Vue component that serves as the entry point for the application.
main.js: Initializes the Vue app and mounts it to the DOM.
This

## Project Features & Functionality

- Job List:
  Provides a list of jobs for job seekers to apply to.
  Employers can post, select, reject, and delete job seekers from the applicant pool.

- User Roles:
  Employer Role:

- Posts job listings.
  Manages job applications, selecting, rejecting, and deleting job seekers.

* Job Seeker Role:
* Applies for jobs.
* Bookmarks jobs.
  Views detailed job information.
  Filters the job list based on criteria.

- Dashboards:
  Different dashboards for employers and job seekers.
  Control over job applications, information updates, and job management.

- Login Facility:
  Utilizes Vue Pinia State Management and Vue Router.
  Supports dynamic login and registration for both roles.

- Database:
  Currently uses an array object list as a dashboard.
  Session data is saved in local storage.
  Plans to implement a mock server in the future.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
