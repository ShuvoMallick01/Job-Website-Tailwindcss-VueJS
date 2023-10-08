import AdminProfile from "../pages/AdminProfile.vue";
// Admin Pages
import AdminAllApplicants from "../pages/adminpages/AdminAllApplicants.vue";
import AdminChangePassword from "../pages/adminpages/AdminChangePassword.vue";
import AdminManageJobs from "../pages/adminpages/AdminManageJobs.vue";
import AdminMessages from "../pages/adminpages/AdminMessages.vue";
import AdminPostNewJobs from "../pages/adminpages/AdminPostNewJobs.vue";
import AdminProfileInfo from "../pages/adminpages/AdminProfileInfo.vue";
import AdminResumeAlerts from "../pages/adminpages/AdminResumeAlerts.vue";
import AdminShortlistedResumes from "../pages/adminpages/AdminShortlistedResumes.vue";

export const adminRoutes = [
  {
    path: "/admin-profile",
    component: AdminProfile,
    name: "adminProfile",
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
        name: "adminPostNewJobs",
      },
      {
        path: "manage-jobs",
        component: AdminManageJobs,
        name: "adminManageJobs",
      },
      {
        path: "all-applicants",
        component: AdminAllApplicants,
        name: "adminAllapplicants",
      },
      {
        path: "short-listed-resumes",
        component: AdminShortlistedResumes,
        name: "adminShortlistedResumes",
      },
      {
        path: "messages",
        component: AdminMessages,
        name: "adminMessages",
      },
      {
        path: "resume-alert",
        component: AdminResumeAlerts,
        name: "adminResumeAlerts",
      },
      {
        path: "change-password",
        component: AdminChangePassword,
        name: "adminChangePassword",
      },
    ],
  },
];
