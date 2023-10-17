import { createRouter, createWebHistory } from "vue-router";

// Pages
import Home from "../pages/Home.vue";
import JobDetails from "../pages/JobDetails.vue";
import Login from "../pages/Login.vue";
import Registration from "../pages/Registration.vue";
import JobApplyForm from "../pages/JobApplyForm.vue";
import NotFound from "../pages/NotFound.vue";
import Contact from "../pages/Contact.vue";

import { jobseekerRoutes } from "./jobseeker";
import { employerRoutes } from "./employer";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
      alias: "/home",
    },
    {
      path: "/job-details/:id",
      component: JobDetails,
      name: "jobDetails",
    },

    {
      path: "/contact",
      component: Contact,
      name: "contact",
    },
    {
      path: "/job-apply-form",
      component: JobApplyForm,
      name: "jobApplyForm",
    },
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/registration",
      component: Registration,
      name: "registration",
    },
    ...jobseekerRoutes,
    ...employerRoutes,

    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});
