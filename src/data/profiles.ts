export interface Profile {
  name: string;
  title: string;
  avatarImgSrc?: string | null;
  email?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  resume?: string;
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
  },
  {
    name: "Danielle Bastien",
    title: "Web Accessibility | Design Systems | Front-End Development",
    avatarImgSrc:
      "https://img.daniellemlbastien.com/dmlb-avatar.png",
    email: "info@daniellemlbastien.com",
    website: "https://daniellemlbastien.com/",
    linkedin: "https://www.linkedin.com/in/daniellemlbastien",
    github: "https://github.com/dmlb",
    resume: "https://daniellemlbastien.com/",
  },
];
