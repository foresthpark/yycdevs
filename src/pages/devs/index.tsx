/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import TechSelect from "@/components/TechSelect/TechSelect";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { profiles, type Profile } from "@/data/profiles";
import { searchInArray } from "@/lib/searchInArray";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  search: z.string().min(2, {
    message: "Search field must be at least 2 characters.",
  }),
});

const searchFields: (keyof Profile)[] = ["name", "title"];

export default function DevsPage() {
  const [selected, setSelected] = useState<string>();
  const [isSearching, setIsSearching] = React.useState(false);
  const [filteredProfiles, setFilteredProfiles] = React.useState(profiles);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSearching(true);
    const filteredDevs = searchInArray(profiles, values.search, searchFields);
    setFilteredProfiles(filteredDevs);
    form.reset();
    return;
  }

  const onResetSearch = () => {
    setIsSearching(false);
    setFilteredProfiles(profiles);
    setSelected(undefined);
  };

  return (
    <div className="min-h-full w-full">
      <div className="flex flex-row items-start justify-between gap-2 p-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col items-start justify-evenly gap-2 sm:flex-row"
          >
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Search for a dev..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className={`w-full sm:w-36 ${
                isSearching ? "text-destructive" : ""
              }`}
              type={isSearching ? "button" : "submit"}
              variant={isSearching ? "border" : "default"}
              onClick={isSearching ? onResetSearch : undefined}
            >
              {isSearching ? "Reset" : "Search"}
            </Button>
          </form>
        </Form>
        <TechSelect
          selected={selected}
          setSelected={setSelected}
          setIsSearching={setIsSearching}
          setFilteredProfiles={setFilteredProfiles}
          profiles={profiles}
        />
      </div>
      <div className="flex flex-row flex-wrap items-center justify-evenly gap-6 p-6">
        {filteredProfiles.length === 0 && (
          <div className="flex w-full flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-bold">No results found.</h1>
          </div>
        )}
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.name} {...profile} />
        ))}
      </div>
    </div>
  );
}
