import EmployerProfile from "../pages/employer/Profile.vue";
// Admin Pages
import EmployerManageApplicants from "../pages/employer/ManageApplicants.vue";
import EmployerChangePassword from "../pages/employer/ChangePassword.vue";
import EmployerManageJobs from "../pages/employer/ManageJobs.vue";
import EmployerMessages from "../pages/employer/Messages.vue";
import EmployerPostNewJobs from "../pages/employer/PostNewJobs.vue";
import EmployerProfileInfo from "../pages/employer/EmployerProfile.vue";
import EmployerResumeAlerts from "../pages/employer/ResumeAlerts.vue";
import EmployerShortlistedResumes from "../pages/employer/ShortlistedResumes.vue";
import CompanyProfile from "../pages/employer/CompanyProfile.vue";

export const employerRoutes = [
  {
    path: "/employer-profile",
    component: EmployerProfile,
    name: "employerProfile",
    meta: { requireAuth: true, isEmployer: true },
    children: [
      {
        path: "profile",
        component: EmployerProfileInfo,
        name: "employerProfileInfo",
        alias: "/employer-profile",
      },
      {
        path: "company-profile",
        component: CompanyProfile,
        name: "companyProfile",
      },
      {
        path: "post-new-job",
        component: EmployerPostNewJobs,
        name: "employerPostNewJobs",
      },
      {
        path: "manage-jobs",
        component: EmployerManageJobs,
        name: "employerManageJobs",
      },
      {
        path: "manage-applicants",
        component: EmployerManageApplicants,
        name: "employerManageApplicants",
      },
      {
        path: "short-listed-resumes",
        component: EmployerShortlistedResumes,
        name: "employerShortlistedResumes",
      },
      {
        path: "messages",
        component: EmployerMessages,
        name: "employerMessages",
      },
      {
        path: "resume-alert",
        component: EmployerResumeAlerts,
        name: "employerResumeAlerts",
      },
      {
        path: "change-password",
        component: EmployerChangePassword,
        name: "employerChangePassword",
      },
    ],
  },
];
