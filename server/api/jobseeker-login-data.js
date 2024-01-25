import mock from "../axios-mock";

const jobseekerLoginData = [
  {
    id: 1,
    role: "jobseeker",
    name: "Shuvo Mallick",
    email: "jobseeker@gmail.com",
    password: "jobseeker",
  },
  {
    id: 2,
    role: "jobseeker",
    name: "Bit Skyber",
    email: "shuvo01@gmail.com",
    password: "bitskyber",
  },
];

mock.onGet("/jobseeker-login-data").reply(() => {
  return [200, { success: true, data: jobseekerLoginData }];
});
