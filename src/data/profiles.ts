export interface Profile {
  name: string;
  title: string | null;
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
    website: "https://forestp.dev",
    linkedin: "https://www.linkedin.com/in/forestpark/",
    github: "https://github.com/foresthpark",
    resume: "https://resume.forestp.dev",
  },
];
