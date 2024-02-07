import { g as getSkills, A as Assets } from "./skills.params.js";
var Platform = /* @__PURE__ */ ((Platform2) => {
  Platform2["GitHub"] = "github";
  Platform2["StackOverflow"] = "stackoverflow";
  Platform2["Twitter"] = "twitter";
  Platform2["Linkedin"] = "linkedin";
  Platform2["Email"] = "email";
  Platform2["Facebook"] = "facebook";
  Platform2["Youtube"] = "youtube";
  return Platform2;
})(Platform || {});
var ContractType = /* @__PURE__ */ ((ContractType2) => {
  ContractType2["FullTime"] = "Full-time";
  ContractType2["PartTime"] = "Part-time";
  ContractType2["SelfEmployed"] = "Self-employed";
  ContractType2["Freelance"] = "Freelance";
  ContractType2["Contract"] = "Contract";
  ContractType2["Internship"] = "Internship";
  return ContractType2;
})(ContractType || {});
const MY_EXPERIENCES = [
  {
    slug: "Angular developer",
    company: "Sunoida Solutions Pvt Ltd",
    description: "Sunoida Solutions, incorporated in 2011, is one of the fastest growing Banking BI & Analytics companies in the emerging markets.",
    contract: ContractType.Contract,
    type: "Software Development",
    location: "Chennai (Tamil naidu)",
    period: { from: new Date(2022, 5, 11), to: new Date(2023, 5, 11) },
    skills: getSkills("ts", "js", "angularjs"),
    name: "Full stack Developer",
    color: "red",
    links: [{ to: "https://sunoida.com/our-profile/", label: "Sunoida" }],
    logo: Assets.Unknown,
    shortDescription: ""
  },
  {
    slug: "software-freelance",
    company: "HoozoN",
    description: "Web app to list your job and match with other requirement",
    contract: ContractType.Freelance,
    type: "Software Development",
    location: "Noida",
    period: { from: new Date(2020, 5, 11), to: new Date(2023, 2, 5) },
    skills: getSkills("angularjs", "ts", "sass", "c#", "html", "js"),
    name: "Freelancer - Full stack Developer",
    color: "blue",
    links: [{ to: "https://hoozonline.com/", label: "Hoozon" }],
    logo: Assets.Unknown,
    shortDescription: ""
  },
  {
    slug: ".Net Developer",
    company: "Victorious Infotech Pvt.Ltd",
    description: "Developed and maintained MVC5 using C# and Angular 12, enablingseamless integrationwithfront-end applications",
    contract: ContractType.FullTime,
    type: "Software Development",
    location: "Pune",
    period: { from: new Date(2017, 0, 1), to: new Date(2018, 7, 9) },
    skills: getSkills("css", "html", "js", "c#", "sql"),
    name: "Full stack Developer",
    color: "green",
    links: [],
    logo: Assets.Unknown,
    shortDescription: ""
  },
  {
    slug: "Database Engineer",
    company: "STARSUN TECHNOLOGY PRIVATE LIMITED",
    description: "Developed and maintained MVC5 using C# and Angular 12, enablingseamless integrationwithfront-end applications",
    contract: ContractType.FullTime,
    type: "Software Development",
    location: "Noida",
    period: { from: new Date(2018, 8, 18), to: new Date(2022, 7, 22) },
    skills: getSkills("css", "html", "js", "c#", "sql"),
    name: "Full stack Developer",
    color: "blue",
    links: [],
    logo: Assets.Unknown,
    shortDescription: ""
  }
];
export {
  MY_EXPERIENCES as M,
  Platform as P
};
