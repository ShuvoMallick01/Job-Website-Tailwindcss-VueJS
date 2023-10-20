import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useJobsStore = defineStore("jobs", () => {
  // STATE
  let userId = ref(1);
  let filterJobList = reactive({
    jobType: [],
    jobRole: [],
    isRemote: false,
    salaryRange: [],
    location: [],
  });

  let jobList = reactive([
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
      salary: "2000",
      email: "company@gmail.com",
      website: "www.company.com",
      jobApplyStatus: true,
      isFavorite: true,
      applicantsId: [1, 2, 3],
      approvedApplicantsId: [1],
      rejectedApplicantsId: [1, 2],
      isActice: true,
      employerId: 1,
    },
    {
      id: 2,
      companyName: "Bit Skyber ltd.",
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
      applicantsId: [1, 3],
      approvedApplicantsId: [1],
      rejectedApplicantsId: [1, 2],
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
      salary: "1000",
      jobApplyStatus: false,
      isFavorite: false,
      email: "company@gmail.com",
      website: "www.company.com",
      applicantsId: [1, 3],
      approvedApplicantsId: [1],
      rejectedApplicantsId: [1, 2],
      isActice: true,
      employerId: 1,
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
      salary: "2000",
      jobApplyStatus: false,
      isFavorite: false,
      email: "company@gmail.com",
      website: "www.company.com",
      applicantsId: [1],
      approvedApplicantsId: [1, 2],
      rejectedApplicantsId: [3],
      isActice: true,
      employerId: 1,
    },
    {
      id: 4,
      companyName: "Microsoft Incorporation",
      jobTitle: "Senior System Engineer",
      description:
        "The Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
      jobType: "Co-founder",
      jobRole: "Customer Support",
      location: "India",
      isRemote: false,
      createdAt: "3hr ago",
      salary: "4000",
      jobApplyStatus: true,
      isFavorite: false,
      email: "company@gmail.com",
      website: "www.company.com",
      applicantsId: [1, 3, 5, 6],
      approvedApplicantsId: [3],
      rejectedApplicantsId: [1, 5, 6],
      isActice: true,
      employerId: 2,
    },
  ]);

  const socialMediaList = ref([
    "icon-facebook-1",
    "icon-twitter",
    "icon-youtube",
    "icon-linkedin",
  ]);

  // METHODS
  const handleJobFavorite = (jobId) => {
    let newJobList = jobList.map((job) =>
      job.id === jobId
        ? {
            ...job,
            isFavorite: !job.isFavorite,
          }
        : job
    );
    console.log(jobList[jobId - 1].isFavorite);
    return (jobList = newJobList);
  };

  const handleJobApplyByUser = (jobId) => {
    let updatedJobList = jobList.map((job) =>
      job.id === jobId
        ? {
            ...job,
            jobApplyStatus: !job.jobApplyStatus,
          }
        : job
    );
    jobList = updatedJobList;

    console.log(jobList[jobId - 1].jobApplyStatus);
  };

  const handleJobFilterState = (e, type, filterName) => {
    if (e.target.checked) {
      filterJobList[type].push(filterName);
    } else if (!e.target.checked) {
      const newFilter = filterJobList[type].filter(
        (item) => item !== filterName
      );
      filterJobList[type] = newFilter;
    }
    console.log(e.target.checked, type, filterName);
    console.log(filterJobList.jobType);
  };

  // RETURN
  return {
    filterJobList,
    jobList,
    handleJobFavorite,
    socialMediaList,
    handleJobApplyByUser,
    handleJobFilterState,
  };
});
