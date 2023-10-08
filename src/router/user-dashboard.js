import UserProfile from "../pages/UserProfile.vue";
// User Page
import UserAppliedJobs from "../pages/userpropages/UserAppliedJobs.vue";
import UserProfileInfo from "../pages/userpropages/UserProfileInfo.vue";
import UserChangePassword from "../pages/userpropages/UserChangePassword.vue";
import UserCVManager from "../pages/userpropages/UserCVManager.vue";
import UserJobAlerts from "../pages/userpropages/UserJobAlerts.vue";
import UserResume from "../pages/userpropages/UserResume.vue";
import UserSavedJobs from "../pages/userpropages/UserSavedJobs.vue";

export const userRoutes = [
  {
    path: "/user-profile",
    component: UserProfile,
    name: "userProfile",
    children: [
      {
        path: "profile",
        component: UserProfileInfo,
        name: "userProfileInfo",
        alias: "/user-profile",
      },
      {
        path: "my-resume",
        component: UserResume,
        name: "userResume",
      },
      {
        path: "saved-jobs",
        component: UserSavedJobs,
        name: "userSavedJobs",
      },
      {
        path: "applied-jobs",
        component: UserAppliedJobs,
        name: "userAppliedJobs",
      },
      {
        path: "job-alerts",
        component: UserJobAlerts,
        name: "userJobAlerts",
      },
      {
        path: "cv-manager",
        component: UserCVManager,
        name: "userCvManager",
      },
      {
        path: "change-password",
        component: UserChangePassword,
        name: "userChangePassword",
      },
    ],
  },
];
