import mock from "../axios-mock";

// let employerLoginData = [
//   {
//     id: 1,
//     role: "employer",
//     name: "Employer 01",
//     email: "employer01@gmail.com",
//     password: "employer01",
//   },
//   {
//     id: 2,
//     role: "employer",
//     name: "Employer 02",
//     email: "employer02@gmail.com",
//     password: "employer02",
//   },
// ];

// let jobseekerLoginData = [
//   {
//     id: 1,
//     role: "jobseeker",
//     name: "Shuvo Mallick",
//     email: "jobseeker@gmail.com",
//     password: "jobseeker",
//   },
//   {
//     id: 2,
//     role: "jobseeker",
//     name: "Bit Skyber",
//     email: "shuvo01@gmail.com",
//     password: "bitskyber",
//   },
// ];

let usersList = [
  {
    id: 1,
    role: "employer",
    name: "Employer 01",
    image: "../../src/assets/images/user-profile-pic-1.jpg",
    profession: "Manager",
    email: "employer01@gmail.com",
    password: "employer01",
  },
  {
    id: 2,
    role: "employer",
    name: "Employer 02",
    image: "../../src/assets/images/user-profile-pic-1.jpg",
    profession: "Manager",
    email: "employer02@gmail.com",
    password: "employer02",
  },
  {
    id: 3,
    role: "employer",
    name: "Employer 03",
    image: "../../src/assets/images/user-profile-pic-1.jpg",
    profession: "Manager",
    email: "employer03@gmail.com",
    password: "employer03",
  },
  {
    id: 4,
    role: "jobseeker",
    name: "Shuvo Mallick",
    image: "../../src/assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    email: "jobseeker@gmail.com",
    password: "jobseeker",
  },
  {
    id: 5,
    role: "jobseeker",
    name: "Jobseeker02",
    image: "../../src/assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    email: "jobseeker02@gmail.com",
    password: "jobseeker02",
  },
  {
    id: 6,
    role: "jobseeker",
    name: "Jobseeker03",
    image: "../../src/assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    email: "jobseeker03@gmail.com",
    password: "jobseeker03",
  },
  {
    id: 7,
    role: "jobseeker",
    name: "Jobseeker04",
    image: "../../src/assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    email: "jobseeker04@gmail.com",
    password: "jobseeker04",
  },
  {
    id: 8,
    role: "jobseeker",
    name: "Jobseeker05",
    image: "../../src/assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    email: "jobseeker05@gmail.com",
    password: "jobseeker05",
  },
  {
    id: 9,
    role: "jobseeker",
    name: "Jobseeker06",
    image: "../../src/assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    email: "jobseeker06@gmail.com",
    password: "jobseeker06",
  },
];

// Get All Users
mock.onGet("/users-data").reply(() => {
  return [200, { success: true, data: usersList }];
});

// Get User
mock.onGet("/user-data").reply((config) => {
  const userId = JSON.parse(config.params.id);
  const findUser = usersList.find((user) => user.id === userId);
  // console.log(findUser);
  return [200, { success: true, data: findUser }];
});

// User Login
mock.onGet("/user-login").reply((config) => {
  const payload = config.payload;
  const findUser = usersList.find(
    (user) =>
      user.role === payload.role &&
      user.email === payload.email &&
      user.password === payload.password
  );

  if (findUser) {
    console.log("Successfully Match Login Data");
  } else {
    throw new Error("Login Data Dones't Match");
  }
  return [200, { success: true, data: findUser }];
});

// User Registration
mock.onPost("/user-registration").reply((config) => {
  console.log(config.data);
  const newUser = {
    ...JSON.parse(config.data),
    id: usersList.length + 1,
    image: "../../src/assets/images/user-profile-pic-1.jpg",
    profession: "N/A",
  };

  const isUserExist = usersList.some((user) => user.email === newUser.email);

  if (!isUserExist) {
    usersList.push(newUser);
  } else {
    throw new Error("User is already registered.");
  }
  return [201, { success: true, data: newUser }];
});

// User Update
mock.onPost("/user-update").reply((config) => {
  const updatedData = JSON.parse(config.data);
  return [201, { success: true, data: updatedData }];
});

// User Password Change
mock.onPost("/user-password").reply((config) => {
  const userId = config.params.id;

  const payload = JSON.parse(config.data);
  const findUser = usersList.find(
    (user) => user.id === userId && user.password === payload.oldPassword
  );

  if (findUser) {
    usersList = usersList.map((item) =>
      item.id === userId ? { ...item, password: payload.newPassword } : item
    );
    console.log("Password Update Successfully");
  } else {
    throw new Error("Not Match Password");
  }

  return [201, { success: true, data: payload }];
});

// Delete Profile
mock.onPost("/employer-delete").reply((config) => {
  const employer = JSON.parse(config.data);
  employerLoginData = employerLoginData.filter(
    (item) => item.id !== employer.id
  );
  return [201, { success: true, data: employerLoginData }];
});

// JOB SEEKER

// LOGIN DATA
// mock.onGet("/jobseeker-login-data").reply(() => {
//   return [200, { success: true, data: jobseekerLoginData }];
// });

// mock.onPost("/jobseeker-logindata").reply((config) => {
//   const newJobseeker = {
//     ...JSON.parse(config.data),
//     id: jobseekerLoginData.length + 1,
//   };

//   jobseekerLoginData.push(newJobseeker);
//   return [201, { success: true, data: newJobseeker }];
// });

// Password Change
mock.onPost("/jobseeker-password").reply((config) => {
  const jobseekerId = config.params.id;
  const loginData = jobseekerLoginData.find((data) => data.id === jobseekerId);
  const payload = JSON.parse(config.data);
  console.log(payload);

  if (loginData.password === payload.oldPassword) {
    jobseekerLoginData = jobseekerLoginData.map((item) =>
      item.id === jobseekerId
        ? { ...item, password: payload.newPassword }
        : item
    );
    console.log("Password Update Successfully");
  } else {
    throw new Error("Not Match Password");
  }

  return [201, { success: true, data: jobseekerLoginData }];
});

// Delete Profile
mock.onPost("/user-delete").reply((config) => {
  const jobseekerData = JSON.parse(config.data);

  usersList = usersList.filter((item) => item.id !== jobseekerData.id);
  return [201, { success: true, data: "Successfully Deleted Profile" }];
});
