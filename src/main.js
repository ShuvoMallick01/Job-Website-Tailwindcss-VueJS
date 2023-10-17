import "./assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/routes";
import { createPinia } from "pinia";

// Pages
import Home from "./pages/Home.vue";
import JobDetails from "./pages/JobDetails.vue";
import Login from "./pages/Login.vue";
import Registration from "./pages/Registration.vue";
import JobseekerProfile from "./pages/jobseeker/Profile.vue";
import EmployerProfile from "./pages/employer/Profile.vue";
import JobApplyForm from "./pages/JobApplyForm.vue";
import Layout from "./components/layout/Layout.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Contact from "./pages/Contact.vue";

const app = createApp(App);
const pinia = createPinia();

app
  .component("Home", Home)
  .component("JobDetails", JobDetails)
  .component("Login", Login)
  .component("Registration", Registration)
  .component("JobseekerProfile", JobseekerProfile)
  .component("EmployerProfile", EmployerProfile)
  .component("Layout", Layout)
  .component("Header", Header)
  .component("Footer", Footer)
  .component("JobApplyForm", JobApplyForm)
  .component("Contact", Contact);

app.use(router);
app.use(pinia);
app.mount("#app");
