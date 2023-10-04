/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
import { profiles, type Profile } from "@/data/profiles";
import { searchInArray } from "@/lib/searchInArray";
import { techSelectOptions, type TechSlug } from "@/lib/tech.data";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  search: z.string().min(2, {
    message: "Search field must be at least 2 characters.",
  }),
});

const searchFields: (keyof Profile)[] = ["name", "title"];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

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

  const handleOnChange = (event: TechSlug) => {
    setIsSearching(true);
    const properLabel = techSelectOptions.find((tech) => tech.slug === event);
    setSelected(properLabel?.label);
    const filteredDevs = profiles.filter((dev) => dev.techs?.includes(event));
    setFilteredProfiles(filteredDevs);
  };

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
        <Listbox value={selected} onChange={handleOnChange}>
          {({ open }) => (
            <>
              <div className="relative min-w-[200px]">
                <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
                  <span className="block truncate">
                    {selected ?? "Select a tech"}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {techSelectOptions.map((tech) => (
                      <Listbox.Option
                        key={tech.slug}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-primary/40 text-white"
                              : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-8 pr-4",
                          )
                        }
                        value={tech.slug}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate",
                              )}
                            >
                              {tech.label}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-primary",
                                  "absolute inset-y-0 left-0 flex items-center pl-1.5",
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
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
