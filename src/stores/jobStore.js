import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useJobsStore = defineStore("jobs", () => {
  // STATE
  const filterJobList = reactive({
    jobType: [],
    JobRole: [],
    remoteOnly: false,
    salaryRange: [],
    location: [],
  });

  let jobList = ref([
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
      jobApplyStatus: true,
      isFavorite: true,
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
  const handleJobFavorite = (id) => {
    let newJobList = jobList.value.map((job) =>
      job.id === id
        ? {
            ...job,
            isFavorite: !job.isFavorite,
          }
        : job
    );
    console.log(newJobList[3].isFavorite);
  };

  // RETURN
  return { filterJobList, jobList, handleJobFavorite, socialMediaList };
});
