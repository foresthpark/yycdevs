import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { parseName } from "@/lib/parseName";
import { Typography } from "../ui/Typography";

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  avatarImgSrc: string;
}

export default function ProfileCard({
  name,
  title,
  description,
  avatarImgSrc,
}: ProfileCardProps) {
  return (
    <Card className="flex flex-col items-center justify-center gap-2 p-4">
      <Avatar>
        <AvatarImage src={avatarImgSrc} alt={name} />
        <AvatarFallback>{parseName(name)}</AvatarFallback>
      </Avatar>
      <Typography size={"xl"} bold={"bold"}>
        {name}
      </Typography>
      <Typography type={"subtitle"}>{name}</Typography>
    </Card>
  );
}
