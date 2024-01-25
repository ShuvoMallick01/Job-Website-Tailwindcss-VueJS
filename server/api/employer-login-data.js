import mock from "../axios-mock";

const employerLoginData = [
  {
    id: 1,
    role: "employer",
    name: "Employer 01",
    email: "employer01@gmail.com",
    password: "employer01",
  },
  {
    id: 2,
    role: "employer",
    name: "Employer 02",
    email: "employer02@gmail.com",
    password: "employer02",
  },
];

mock.onGet("/employer-login-data").reply(() => {
  return [200, { success: true, data: employerLoginData }];
});
