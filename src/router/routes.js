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
import { useAuthsStore } from "../stores/AuthStore";

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
      path: "/job-apply-form/:id",
      component: JobApplyForm,
      name: "jobApplyForm",
    },
    {
      path: "/login",
      component: Login,
      name: "login",
      meta: { guest: true },
    },
    {
      path: "/registration",
      component: Registration,
      name: "registration",
      meta: { guest: true },
    },
    ...jobseekerRoutes,
    ...employerRoutes,

    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

router.beforeEach((to, from) => {
  const { isAuthenticated, userState } = useAuthsStore();

  if (to.meta.requireAuth && !isAuthenticated) return "/login";
  else if (to.meta.guest && isAuthenticated && to.meta.isEmployer)
    return "/employer-profile";
  else if (to.meta.guest && isAuthenticated && to.meta.isJobseeker)
    return "/jobseeker-profile";
  else if (to.meta.guest && isAuthenticated) return "/";
});
