import "./assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/routes";
import { createPinia } from "pinia";

// Pages
import Home from "./pages/Home.vue";
import JobDetails from "./pages/JobDetails.vue";
import JobPost from "./pages/JobPost.vue";
import Login from "./pages/Login.vue";
import Registration from "./pages/Registration.vue";
import UserProfile from "./pages/UserProfile.vue";
import AdminProfile from "./pages/AdminProfile.vue";
import JobApplyForm from "./pages/JobApplyForm.vue";
import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);
const pinia = createPinia();

app
  .component("Home", Home)
  .component("JobDetails", JobDetails)
  .component("JobPost", JobPost)
  .component("Login", Login)
  .component("Registration", Registration)
  .component("UserProfile", UserProfile)
  .component("AdminProfile", AdminProfile)
  .component("Layout", Layout)
  .component("Header", Header)
  .component("Footer", Footer)
  .component("JobApplyForm", JobApplyForm);

app.use(router);
app.use(pinia);
app.mount("#app");
