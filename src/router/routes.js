import { createRouter, createWebHistory } from "vue-router";

// Pages
import Home from "../pages/Home.vue";
import JobDetails from "../pages/JobDetails.vue";
import Login from "../pages/Login.vue";
import Registration from "../pages/Registration.vue";
import UserProfile from "../pages/UserProfile.vue";
import AdminProfile from "../pages/AdminProfile.vue";
import JobApplyForm from "../pages/JobApplyForm.vue";
import NotFound from "../pages/NotFound.vue";
// User Pages
import UserAppliedJobs from "../userpropages/UserAppliedJobs.vue";
import UserProfileInfo from "../userpropages/UserProfileInfo.vue";
import UserChangePassword from "../userpropages/UserChangePassword.vue";
import UserCVManager from "../userpropages/UserCVManager.vue";
import UserJobAlerts from "../userpropages/UserJobAlerts.vue";
import UserResume from "../userpropages/UserResume.vue";
import UserSavedJobs from "../userpropages/UserSavedJobs.vue";
// Admin Pages
import AdminAllApplicants from "../adminpages/AdminAllApplicants.vue";
import AdminChangePassword from "../adminpages/AdminChangePassword.vue";
import AdminManageJobs from "../adminpages/AdminManageJobs.vue";
import AdminMessages from "../adminpages/AdminMessages.vue";
import AdminPostNewJobs from "../adminpages/AdminPostNewJobs.vue";
import AdminProfileInfo from "../adminpages/AdminProfileInfo.vue";
import AdminResumeAlerts from "../adminpages/AdminResumeAlerts.vue";
import AdminShortlistedResumes from "../adminpages/AdminShortlistedResumes.vue";

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
          path: "profile",
          component: UserProfileInfo,
          name: "userprofileinfo",
          alias: "/userprofile",
        },
        {
          path: "myresume",
          component: UserResume,
          name: "userresume",
        },
        {
          path: "savedjobs",
          component: UserSavedJobs,
          name: "usersavedjobs",
        },
        {
          path: "appliedjobs",
          component: UserAppliedJobs,
          name: "userappliedjobs",
        },
        {
          path: "jobalerts",
          component: UserJobAlerts,
          name: "userjobalerts",
        },
        {
          path: "cvmanager",
          component: UserCVManager,
          name: "usercvmanager",
        },
        {
          path: "changepassword",
          component: UserChangePassword,
          name: "userchangepassword",
        },
      ],
    },
    {
      path: "/admin-profile",
      component: AdminProfile,
      name: "adminprofile",
      children: [
        {
          path: "profile",
          component: AdminProfileInfo,
          name: "adminprofileinfo",
          alias: "/admin-profile",
        },
        {
          path: "post-new-job",
          component: AdminPostNewJobs,
          name: "adminpostnewjobs",
        },
        {
          path: "manage-jobs",
          component: AdminManageJobs,
          name: "adminmanagejobs",
        },
        {
          path: "all-applicants",
          component: AdminAllApplicants,
          name: "adminallapplicants",
        },
        {
          path: "short-listed-resumes",
          component: AdminShortlistedResumes,
          name: "adminshortlistedresumes",
        },
        {
          path: "messages",
          component: AdminMessages,
          name: "adminmessages",
        },
        {
          path: "resume-alert",
          component: AdminResumeAlerts,
          name: "adminresumealerts",
        },
        {
          path: "change-password",
          component: AdminChangePassword,
          name: "adminchangepassword",
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});
