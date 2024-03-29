import mock from "../axios-mock";

const companyProfileList = [
  {
    id: 1,
    employerId: 1,
    companyName: "Bit Skyber",
    companyEmail: "comapny@gmail.com",
    phone: 880123456789,
    website: "www.bitskyber.com",
    estSince: 2010,
    teamSize: 20,
    aboutCompany:
      "LorenThe Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
    facebook: "www.facebook.com/bitskyber",
    linkedin: "www.linkedin.com/bitskyber",
    country: "Bangladesh",
    city: "Chittagong",
    completeAddress: "120/55, Oxyzen, SitalJarna",
  },
  {
    id: 2,
    employerId: 2,
    companyName: "Bit Skyber",
    comapnyEmail: "comapny@gmail.com",
    phone: "+880123456789",
    website: "www.bitskyber.com",
    estSince: 2010,
    teamSize: 20,
    aboutCompany:
      "LorenThe Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
    facebook: "www.facebook.com/bitskyber",
    linkedin: "www.linkedin.com/bitskyber",
    country: "Bangladesh",
    city: "Chittagong",
    completeAddress: "120/55, Oxyzen, SitalJarna",
  },
  {
    id: 3,
    employerId: 3,
    companyName: "Bit Skyber",
    companyEmail: "comapny@gmail.com",
    phone: 880123456789,
    website: "www.bitskyber.com",
    estSince: 2010,
    teamSize: 20,
    aboutCompany:
      "LorenThe Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
    facebook: "www.facebook.com/bitskyber",
    linkedin: "www.linkedin.com/bitskyber",
    country: "Bangladesh",
    city: "Chittagong",
    completeAddress: "120/55, Oxyzen, SitalJarna",
  },
];

// Get Company Profiles
mock.onGet("/company-profiles").reply((config) => {
  return [200, { success: true, data: companyProfileList }];
});

// Get Company Profile
mock.onGet("/company-profile").reply((config) => {
  const employerId = config.params.id;

  const findCompany = companyProfileList.find(
    (company) => company.employerId === employerId
  );

  if (!employerId) {
    throw new Error("Comapny Id Donesn't Exit");
  }

  return [200, { success: true, data: findCompany }];
});

// Company Profile Update
mock.onPost("/company-profile").reply((config) => {
  const updatedData = JSON.parse(config.data);
  return [201, { success: true, data: updatedData }];
});
