import { createRouter, createWebHistory } from "vue-router";

// Pages
import Home from "../pages/Home.vue";
import JobDetails from "../pages/JobDetails.vue";
import JobPost from "../pages/JobPost.vue";
import Login from "../pages/Login.vue";
import Registration from "../pages/Registration.vue";
import UserProfile from "../pages/UserProfile.vue";
import AdminProfile from "../pages/AdminProfile.vue";
import JobApplyForm from "../pages/jobapplyform.vue";
import NotFound from "../pages/NotFound.vue";
import UserAppliedJobs from "../pagesProfile/UserAppliedJobs.vue";
import UserProfileInfo from "../pagesProfile/UserProfileInfo.vue";

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
      path: "/jobdetails",
      component: JobDetails,
      name: "jobdetails",
    },
    {
      path: "/jobpost",
      component: JobPost,
      name: "jobpost",
    },
    {
      path: "/jobapplyform",
      component: JobApplyForm,
      name: "jobapplyform",
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
    {
      path: "/userprofile",
      component: UserProfile,
      name: "userprofile",
      children: [
        {
          path: "appliedjobs",
          component: UserAppliedJobs,
          name: "appliedjobs",
        },
        {
          path: "profile",
          component: UserProfileInfo,
          name: "userprofileinfo",
        },
      ],
    },
    {
      path: "/adminprofile",
      component: AdminProfile,
      name: "adminprofile",
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});
