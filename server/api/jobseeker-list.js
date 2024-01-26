import mock from "../axios-mock";

const jobseekersList = [
  {
    id: 1,
    jobseekerId: 1,
    role: "jobseeker",
    name: "Shuvo Mallick",
    image: "../../src/assets/images/user-profile-pic-1.jpg",
    profession: "Web Developer",
    language: ["Bengali", "English"],
    age: 27,
    currentSalary: 2000,
    expectedSalary: 3000,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    phone: "0123456789",
    country: "Bangladesh",
    fullAddress: "Rangunia, Chittagong",
    favoriteJobId: [1, 3, 4],
    appliedJobId: [2, 5],
  },
  {
    id: 2,
    jobseekerId: 2,
    role: "jobseeker",
    name: "Nabed Khan",
    image: "../../src/assets/images/user-profile-pic-2.jpg",
    email: "shuvo@gmail.com",
    password: "jobseeker",
    profession: "Web Developer",
    language: ["Bengali", "English"],
    age: 27,
    currentSalary: 2000,
    expectedSalary: 3000,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    phone: "0123456789",
    country: "Bangladesh",
    fullAddress: "Rangunia, Chittagong",
    favoriteJobId: [1, 3, 4],
    appliedJobId: [2, 5],
  },
  {
    id: 3,
    jobseekerId: 3,
    role: "jobseeker",
    name: "Nabed Khan",
    image: "../../src/assets/images/user-profile-pic-2.jpg",
    profession: "Web Developer",
    language: ["Bengali", "English"],
    age: 27,
    currentSalary: 2000,
    expectedSalary: 3000,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    phone: "0123456789",
    country: "Bangladesh",
    fullAddress: "Rangunia, Chittagong",
    favoriteJobId: [1, 3, 4],
    appliedJobId: [2, 5],
  },
];

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

mock.onGet("/jobseekers-list").reply(() => {
  return [200, { success: true, data: jobseekersList }];
});

mock.onGet("/jobseeker-login-data").reply(() => {
  return [200, { success: true, data: jobseekerLoginData }];
});

mock.onPost("/jobseeker-logindata").reply((config) => {
  const newJobseeker = {
    ...JSON.parse(config.data),
    id: jobseekerLoginData.length + 1,
  };

  jobseekerLoginData.push(newJobseeker);
  return [201, { success: true, data: newJobseeker }];
});
