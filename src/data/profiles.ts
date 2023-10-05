import { type TechSlug } from "@/lib/tech.data";

export interface Profile {
  name: string;
  title: string;
  avatarImgSrc?: string | null;
  email?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  resume?: string;
  techs?: TechSlug[]; // You can only add 3 techs
}

export const profiles: Profile[] = [
  {
    name: "SouthernFried Dev",
    title: "Fried Chicken Enthusiast",
    avatarImgSrc:
      "https://www.thecountrycook.net/wp-content/uploads/2021/02/thumbnail-Southern-Fried-Chicken-scaled.jpg",
    email: "foresthpark@gmail.com",
    website: "https://forestp.dev/",
    linkedin: "https://www.linkedin.com/in/forestpark/",
    github: "https://github.com/foresthpark",
    resume: "https://resume.forestp.dev",
    techs: ["github", "html", "typescript"],
  },
  {
    name: "Yves Dorfsman",
    title: "TypeScript React JavaScript SQL Python Rust Linux  DevOps Sysadmin",
    avatarImgSrc:
      "https://secure.gravatar.com/avatar/ff251bd0806aa3e700db933d599dadd4?s=300",
    email: "yves@zioup.com",
    website: "https://yves.zioup.com/",
    linkedin: "https://www.linkedin.com/in/yvesdorfsman",
    github: "https://github.com/dorfsmay",
    resume: "https://yves.zioup.com/work/resume",
    techs: ["react", "python", "rust" ],
  },
  {
    name: "Danielle Bastien",
    title: "Web Accessibility | Design Systems | Front-End Development",
    avatarImgSrc: "https://img.daniellemlbastien.com/dmlb-avatar.png",
    email: "info@daniellemlbastien.com",
    website: "https://daniellemlbastien.com/",
    linkedin: "https://www.linkedin.com/in/daniellemlbastien",
    github: "https://github.com/dmlb",
    resume: "https://daniellemlbastien.com/",
  },
  {
    name: "Derek Kim",
    title: "iOS | Flutter Developer",
    avatarImgSrc: "https://derek.kim/img/profile.jpg",
    email: "dk@derek.kim",
    website: "https://derek.kim",
    linkedin: "https://www.linkedin.com/in/derekhskim",
    github: "https://github.com/derekhskim",
    resume: "https://derek.kim/external/resume.pdf",
  },
  {
    name: "Ace Nasir",
    title: "Web | Wordpress Developer",
    avatarImgSrc: "http://acenasir.com/assets/img/profile.jpg",
    email: "ace.nasir@me.com",
    website: "http://acenasir.com",
    linkedin: "https://www.linkedin.com/in/ace-nasir-abb47249/",
    github: "https://github.com/acenasir/",
    resume: "http://acenasir.com",
  },
];
