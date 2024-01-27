import mock from "./axios-mock";

// All API Call
import "./api/job-list";
import "./api/company-profile";
import "./api/jobseeker-list";
import "./api/jobseeker-resume-list";

mock.onAny().passThrough();
