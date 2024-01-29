import mock from "../axios-mock";

const jobseekersList = [
  {
    id: 1,
    jobseekerId: 4,
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
    jobseekerId: 5,
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
    jobseekerId: 6,
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
    id: 4,
    jobseekerId: 7,
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
    id: 5,
    jobseekerId: 8,
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
    id: 6,
    jobseekerId: 9,
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

// Get Jobseekers List
mock.onGet("/jobseekers-list").reply(() => {
  return [200, { success: true, data: jobseekersList }];
});

// Get Jobseeker
mock.onGet("/jobseeker").reply((config) => {
  const jobseekerId = config.params.id;

  const findJobseeker = jobseekersList.find(
    (seeker) => seeker.jobseekerId === jobseekerId
  );

  if (!jobseekerId) {
    throw new Error("Jobseeker ID Donesn't Exit");
  }
  return [200, { success: true, data: findJobseeker }];
});

// Update Jobseeker Profile
mock.onPost("/jobseeker-profile").reply((config) => {
  const jobseekerId = config.params.id;
  const updatedData = JSON.parse(config.data);

  const findJobseeker = jobseekersList.find(
    (seeker) => seeker.jobseekerId === jobseekerId
  );

  if (!findJobseeker) {
    console.log("Not Found Data");
    jobseekersList.push(updatedData);
  } else if (findJobseeker) {
    jobseekersList[jobseekerId - 1] = updatedData;
  }

  return [201, { success: true, data: updatedData }];
});
