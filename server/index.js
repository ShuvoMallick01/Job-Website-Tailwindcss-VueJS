import mock from "./axios-mock";

// All API Call
import "./api/job-list";
import "./api/company-profile";
import "./api/jobseeker-list";
import "./api/jobseeker-login-data";
import "./api/employer-login-data";

mock.onAny().passThrough();
