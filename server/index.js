import mock from "./axios-mock";
import "./api/job-list";

mock.onAny().passThrough();
