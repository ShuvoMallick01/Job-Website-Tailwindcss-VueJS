import mock from "./axios-mock";

// All API Call
import "./api/job-list";
import "./api/company-list";
import "./api/jobseeker-list";
import "./api/jobseeker-resume";
import "./api/authentication";

mock.onAny().passThrough();
