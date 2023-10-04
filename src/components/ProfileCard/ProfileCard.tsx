/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { type Profile } from "@/data/profiles";
import { parseName } from "@/lib/parseName";
import { techData } from "@/lib/tech.data";
import {
  AvatarIcon,
  EnvelopeClosedIcon,
  FileTextIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Typography } from "../ui/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ProfileCard({
  name,
  title,
  avatarImgSrc,
  email,
  website,
  linkedin,
  github,
  resume,
  techs,
}: Profile) {
  return (
    <Card>
      <div className="flex max-h-[400px] min-h-[400px] min-w-[330px] max-w-[330px] flex-1 flex-col items-center justify-center gap-6 p-12">
        {avatarImgSrc ? (
          <Avatar>
            <AvatarImage src={avatarImgSrc} alt={name} />
            <AvatarFallback>{parseName(name)}</AvatarFallback>
          </Avatar>
        ) : (
          <AvatarIcon className="h-28 w-28" />
        )}
        <div className="flex flex-col items-center justify-center gap-1">
          <Typography size={"xl"} bold={"bold"}>
            {name}
          </Typography>
          <Typography type={"subtitle"} size={"sm"}>
            {title}
          </Typography>
        </div>
        <div className="flex flex-row items-center justify-evenly gap-2">
          {email && (
            <a href={`mailto:${email}`}>
              <EnvelopeClosedIcon className="h-6 w-6" />
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <GlobeIcon className="h-6 w-6" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInLogoIcon className="h-6 w-6" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon className="h-6 w-6" />
            </a>
          )}
          {resume && (
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <FileTextIcon className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
      {techs && (
        <div className="flex flex-row items-center justify-center divide-x-2 border-t-2 border-t-gray-200 ">
          {techs?.slice(0, 3).map((slug) => {
            const tech = techData.find((tech) => tech.slug === slug);
            return (
              <div
                key={tech?.label}
                className="flex w-1/3 items-center justify-center px-3 py-2"
              >
                <img src={tech?.imgUrl} alt={tech?.label} className="h-9 w-9" />
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
