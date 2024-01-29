import mock from "../axios-mock";

const resumeList = [
  {
    jobseekerId: 1,
    cvVersion: "CV Version 1.0",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    education: [
      {
        id: 1,
        title: "Bachelor of Science in CSE",
        institute: "University of Science & Technology",
        description: "Lorem ipsum dolor, sit amet consectetur",
        duration: "2017-2021",
      },
      {
        id: 2,
        title: "Computer Technology",
        institute: "Islami Bank Institute of Technology",
        description: "Lorem ipsum dolor, sit amet consectetur",
        duration: "2012-2017",
      },
    ],

    workExperience: [
      {
        id: 1,
        title: "Product Designer",
        institute: "Spotify Inc",
        description: "Lorem ipsum dolor, sit amet consectetur",
        duration: "2017-2021",
      },
      {
        id: 2,
        title: "Vue.js Developer",
        institute: "Bit Skyber",
        description: "Lorem ipsum dolor, sit amet consectetur",
        duration: "2021-2023",
      },
    ],

    skills: ["vuejs", "javascript", "reactjs"],
  },

  {
    jobseekerId: 2,
    cvVersion: "CV Version 1.0",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    education: [
      {
        id: 1,
        title: "Bachelor of Science in CSE",
        institute: "University of Science & Technology",
        description: "Lorem ipsum dolor, sit amet consectetur",
        duration: "2017-2021",
      },
      {
        id: 2,
        title: "Computer Technology",
        institute: "Islami Bank Institute of Technology",
        description: "Lorem ipsum dolor, sit amet consectetur",
        duration: "2012-2017",
      },
    ],

    workExperience: [
      {
        id: 1,
        title: "Product Designer",
        institute: "Spotify Inc",
        description: "Lorem ipsum dolor, sit amet consectetur",
        duration: "2017-2021",
      },
      {
        id: 2,
        title: "Vue.js Developer",
        institute: "Bit Skyber",
        description: "Lorem ipsum dolor, sit amet consectetur",
        duration: "2021-2023",
      },
    ],

    skills: ["vuejs", "javascript", "reactjs"],
  },
];

mock.onGet("/jobseekers-resume").reply(() => {
  return [200, { success: true, data: resumeList }];
});

mock.onGet("/jobseeker-resume").reply((config) => {
  const jobseekerId = config.params.id;

  const findResume = resumeList.find(
    (resume) => resume.jobseekerId === jobseekerId
  );

  if (!jobseekerId) {
    throw new Error("Jobseeker ID Donesn't Exit");
  }
  return [200, { success: true, data: findResume }];
});

// Update Resume
mock.onPost("/jobseeker-resume").reply((config) => {
  const updatedData = JSON.parse(config.data);
  return [201, { success: true, data: updatedData }];
});
