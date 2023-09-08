/* eslint-disable @typescript-eslint/no-misused-promises */
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type Profile, profiles } from "@/data/profiles";
import { searchInArray } from "@/lib/searchInArray";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  search: z.string().min(2, {
    message: "Search field must be at least 2 characters.",
  }),
});

const searchFields: (keyof Profile)[] = ["name", "title"];

export default function DevsPage() {
  profiles.sort(() => Math.random() - 0.5);
  const [filteredProfiles, setFilteredProfiles] = React.useState(profiles);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const filteredDevs = searchInArray(profiles, values.search, searchFields);
    setFilteredProfiles(filteredDevs);
    form.reset();
    return;
  }

  return (
    <div className="min-h-full w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-start justify-evenly gap-2 p-2 sm:flex-row"
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
          <Button className="w-full sm:w-36" type="submit">
            Search
          </Button>
        </form>
      </Form>
      <div className="flex flex-row flex-wrap items-center justify-evenly gap-6 p-6">
        {filteredProfiles.length === 0 && (
          <div className="flex w-full flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-bold">No results found.</h1>
            <Button
              onClick={() => setFilteredProfiles(profiles)}
              className="mt-2"
            >
              Reset
            </Button>
          </div>
        )}
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.name} {...profile} />
        ))}
      </div>
    </div>
  );
}
