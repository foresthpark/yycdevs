import { type Profile } from "@/data/profiles";
import { type TechSlug, techSelectOptions } from "@/lib/tech.data";
import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface TechSelectProps {
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredProfiles: React.Dispatch<React.SetStateAction<Profile[]>>;
  profiles: Profile[];
}

export default function TechSelect({
  selected,
  setSelected,
  setIsSearching,
  setFilteredProfiles,
  profiles,
}: TechSelectProps) {
  const handleOnChange = (event: TechSlug) => {
    setIsSearching(true);
    const properLabel = techSelectOptions.find((tech) => tech.slug === event);
    setSelected(properLabel?.label);
    const filteredDevs = profiles.filter((dev) => dev.techs?.includes(event));
    setFilteredProfiles(filteredDevs);
  };

  return (
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
                        active ? "bg-primary/40 text-white" : "text-gray-900",
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
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
  );
}
