import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { profiles } from "@/data/profiles";
import React from "react";

export default function DevsPage() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-start gap-6 p-6">
      {profiles.map((profile) => (
        <ProfileCard key={profile.name} {...profile} />
      ))}
    </div>
  );
}
