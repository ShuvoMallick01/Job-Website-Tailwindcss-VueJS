import mock from "../axios-mock";

const companyProfileList = [
  {
    id: 1,
    employerId: 1,
    name: "Employer",
    profession: "Employeer",
    companyName: "Bit Skyber",
    companyEmail: "comapny@gmail.com",
    phone: 880123456789,
    image: "../../src/assets/images/user-profile-pic-1.jpg",
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
    name: "Employer",
    comapnyEmail: "comapny@gmail.com",
    profession: "Employeer",
    companyName: "Bit Skyber",
    image: "../../src/assets/images/user-profile-pic-1.jpg",
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
];

mock.onGet("/company-profiles").reply((config) => {
  return [200, { success: true, data: companyProfileList }];
});

mock.onGet("/company-profile").reply((config) => {
  const companyId = config.params.id;

  const findCompany = companyProfileList.find(
    (company) => company.employerId === companyId
  );

  if (!companyId) {
    throw new Error("Comapny Id Donesn't Exit");
  }

  return [200, { success: true, data: findCompany }];
});

mock.onPost("/company-profile").reply((config) => {
  const updatedData = SON.parse(config.data);
  return [201, { success: true, data: updatedData }];
});

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

mock.onPost("/employer-logindata").reply((config) => {
  const newEmployer = {
    ...JSON.parse(config.data),
    id: employerLoginData.length + 1,
  };

  employerLoginData.push(newEmployer);
  return [201, { success: true, data: newEmployer }];
});
