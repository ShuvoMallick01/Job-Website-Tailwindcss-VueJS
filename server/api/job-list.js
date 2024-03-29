import mock from "../axios-mock";

const jobList = [
  {
    id: 1,
    companyName: "Meta Corporation",
    description:
      "The Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
    jobTitle: "Senior React Developer",
    jobType: "Full-Time",
    jobRole: "Programming",
    location: "Bangladesh",
    isRemote: true,
    createdAt: "3hr ago",
    salary: "50000",
    email: "company@gmail.com",
    website: "www.company.com",
    jobApplyStatus: true,
    isFavorite: true,
    applicantsId: [4, 5, 6],
    approvedApplicantsId: [4],
    rejectedApplicantsId: [5, 6],
    isActice: true,
    employerId: 1,
  },
  {
    id: 2,
    companyName: "Meta Corporation",
    jobTitle: "Web Developer",
    description:
      "The Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
    jobType: "Part-Time",
    jobRole: "Design",
    location: "United State",
    isRemote: false,
    createdAt: "3hr ago",
    salary: "40000",
    jobApplyStatus: false,
    isFavorite: true,
    email: "company@gmail.com",
    website: "www.company.com",
    applicantsId: [4, 5, 6, 7],
    approvedApplicantsId: [4, 5],
    rejectedApplicantsId: [6, 7],
    isActice: true,
    employerId: 1,
  },
  {
    id: 3,
    companyName: "Info Sys",
    jobTitle: "Senior Data Scientist",
    jobType: "Internship",
    description:
      "The Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
    jobRole: "Management",
    location: "Canada",
    isRemote: true,
    createdAt: "3hr ago",
    salary: "30000",
    jobApplyStatus: false,
    isFavorite: false,
    email: "company@gmail.com",
    website: "www.company.com",
    applicantsId: [5, 6, 7],
    approvedApplicantsId: [5],
    rejectedApplicantsId: [6, 7],
    isActice: true,
    employerId: 2,
  },
  {
    id: 4,
    companyName: "Google Incorporation",
    jobTitle: "Blockchain Developer",
    description:
      "The Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
    jobType: "Full Time",
    jobRole: "Contract",
    location: "Europe",
    isRemote: true,
    createdAt: "3hr ago",
    salary: "20000",
    jobApplyStatus: false,
    isFavorite: false,
    email: "company@gmail.com",
    website: "www.company.com",
    applicantsId: [4, 5, 6, 7],
    approvedApplicantsId: [4, 5],
    rejectedApplicantsId: [6, 7],
    isActice: true,
    employerId: 3,
  },
  {
    id: 5,
    companyName: "Microsoft Incorporation",
    jobTitle: "Senior System Engineer",
    description:
      "The Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
    jobType: "Co-founder",
    jobRole: "Customer Support",
    location: "India",
    isRemote: false,
    createdAt: "3hr ago",
    salary: "10000",
    jobApplyStatus: true,
    isFavorite: false,
    email: "company@gmail.com",
    website: "www.company.com",
    applicantsId: [4, 5, 6, 7],
    approvedApplicantsId: [4, 5],
    rejectedApplicantsId: [6, 7],
    isActice: true,
    employerId: 2,
  },
  {
    id: 6,
    companyName: "Meta Corporation",
    jobTitle: "Senior Software Engineer",
    description:
      "The Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
    jobType: "Contract",
    jobRole: "Programming",
    location: "India",
    isRemote: true,
    createdAt: "3hr ago",
    salary: "6000",
    jobApplyStatus: true,
    isFavorite: false,
    email: "company@gmail.com",
    website: "www.company.com",
    applicantsId: [5, 7],
    approvedApplicantsId: [5],
    rejectedApplicantsId: [7],
    isActice: true,
    employerId: 1,
  },
  {
    id: 7,
    companyName: "Google Incorporation",
    jobTitle: "Blockchain Developer",
    description:
      "The Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
    jobType: "Full Time",
    jobRole: "Contract",
    location: "Europe",
    isRemote: true,
    createdAt: "3hr ago",
    salary: "20000",
    jobApplyStatus: false,
    isFavorite: false,
    email: "company@gmail.com",
    website: "www.company.com",
    applicantsId: [5, 6, 7],
    approvedApplicantsId: [5],
    rejectedApplicantsId: [6, 7],
    isActice: true,
    employerId: 3,
  },
];

// Get Job List
mock.onGet("/job-list").reply(() => {
  return [200, { success: true, data: jobList }];
});

// Get Job List
mock.onGet("/single-job").reply((config) => {
  const jobId = config.params.id;
  const findJob = jobList.find((job) => job.id === +jobId);
  return [200, { success: true, data: findJob }];
});

// Add New Job
mock.onPost("/job-list").reply((config) => {
  const newJob = { ...JSON.parse(config.data), id: jobList.length + 1 };
  jobList.push(newJob);
  return [201, { success: true, data: newJob }];
});
