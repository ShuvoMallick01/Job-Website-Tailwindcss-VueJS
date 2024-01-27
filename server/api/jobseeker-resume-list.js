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
