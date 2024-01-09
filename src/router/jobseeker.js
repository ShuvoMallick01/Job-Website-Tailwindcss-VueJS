import JobseekerProfile from "../pages/jobseeker/Profile.vue";
// User Page
import JobseekerAppliedJobs from "../pages/jobseeker/AppliedJobs.vue";
import JobseekerProfileInfo from "../pages/jobseeker/ProfileInfo.vue";
import JobseekerChangePassword from "../pages/jobseeker/ChangePassword.vue";
import JobseekerCVManager from "../pages/jobseeker/CVManager.vue";
import JobseekerJobAlerts from "../pages/jobseeker/JobAlerts.vue";
import JobseekerResume from "../pages/jobseeker/Resume.vue";
import JobseekerSavedJobs from "../pages/jobseeker/SavedJobs.vue";

export const jobseekerRoutes = [
  {
    path: "/jobseeker-profile",
    component: JobseekerProfile,
    name: "JobseekerProfile",
    meta: { requireAuth: true },
    children: [
      {
        path: "profile",
        component: JobseekerProfileInfo,
        name: "jobseekerProfileInfo",
        alias: "/jobseeker-profile",
      },
      {
        path: "my-resume",
        component: JobseekerResume,
        name: "jobseekerResume",
      },
      {
        path: "saved-jobs",
        component: JobseekerSavedJobs,
        name: "jobseekerSavedJobs",
      },
      {
        path: "applied-jobs",
        component: JobseekerAppliedJobs,
        name: "jobseekerAppliedJobs",
      },
      {
        path: "job-alerts",
        component: JobseekerJobAlerts,
        name: "jobseekerJobAlerts",
      },
      {
        path: "cv-manager",
        component: JobseekerCVManager,
        name: "jobseekerCVManager",
      },
      {
        path: "change-password",
        component: JobseekerChangePassword,
        name: "jobseekerChangePassword",
      },
    ],
  },
];
