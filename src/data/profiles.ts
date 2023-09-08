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
    title: "𝗧ype𝗦cript, 𝗥eact, 𝗝ava𝗦cript, 𝗦𝗤𝗟, 𝗣ython, 𝗥ust, Linux, 𝑇𝘦𝑐𝘩𝑛𝘪𝑐𝘢𝑙 𝑆𝘶𝑝𝘱𝑜𝘳𝑡, 𝘋𝘦𝘷𝘖𝘱𝘴, 𝘚𝘺𝘴𝘢𝘥𝘮𝘪𝘯",
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
