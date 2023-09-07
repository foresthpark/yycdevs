import { Card } from "@/components/ui/card";
import { type Profile } from "@/data/profiles";
import { parseName } from "@/lib/parseName";
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
}: Profile) {
  return (
    <Card className="flex flex-col items-center justify-center gap-2 p-8">
      {avatarImgSrc ? (
        <Avatar>
          <AvatarImage src={avatarImgSrc} alt={name} />
          <AvatarFallback>{parseName(name)}</AvatarFallback>
        </Avatar>
      ) : (
        <AvatarIcon className="h-28 w-28" />
      )}
      <Typography size={"xl"} bold={"bold"}>
        {name}
      </Typography>
      <Typography type={"subtitle"} size={"sm"}>
        {title}
      </Typography>
      <div className="flex flex-row items-center justify-evenly gap-2 pt-4">
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
    </Card>
  );
}
